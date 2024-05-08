import prisma from "../prisma/client.js";


const singleHome = async (req, res) => {
    const { id } = req.params;
    const home = await prisma.home.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            Pictures: true,
        },
    });

    if (!home) {
        return res.status(404).send("Home not found");
    }

    res.json(home);
};

const addReservation = async (req, res) => {
    
    const userId = req.user.userId;
    const homeId = req.params.id;

    let { checkIn, checkOut } = req.body;
    checkIn = new Date(checkIn);
    checkOut = new Date(checkOut);

    if (checkIn > checkOut) {
        return res.status(400).send("Check out date must be greater than check in date");
    }
    if (checkIn < new Date()) {
        return res.status(400).send("Check in date must be greater than today");
    }

    const home = await prisma.home.findUnique({
        where: {
            id: parseInt(homeId),
        },
    });

    if (!home) {
        return res.status(404).send("Home not found");
    }
    //check if the there is a reservation with the sattus accepted in the same date
    const hasReserved = await prisma.reservation.findFirst({
        where: {
            homeId : parseInt(homeId),
            status: "paid",
            startDate: {
                lte: checkOut,
            },
            endDate: {
                gte: checkIn,
            },
        },
    });
    if (hasReserved) {
        return res.status(400).send("This home is already reserved in this date");
    }
    const reservation = await prisma.reservation.create({
        data: {
            startDate: new Date(checkIn),
            endDate: new Date(checkOut),
            User :{
                connect : {
                    id : userId,
                }
            },
            Home : {
                connect : {
                    id : parseInt(homeId),
                }
            },
        },
    });
    res.json(reservation);
};

const createChat = async (req, res) => {
    const userId = req.user.userId;
    const homeId = req.params.id;
    const home = await prisma.home.findUnique({
        where: {
            id: parseInt(homeId),
        },
        include: {
            Pictures: {
                select: {
                    url: true,
                },
            },
        },
    });
    if (!home) {
        return res.status(404).send("Home not found");
    }
    const userIds = [userId, home.userId];

    const chat = await prisma.chat.create({
        data: {
            users: {
                connect: userIds.map((id) => ({ id }))
            },
            picture : home.Pictures[0].url,
        }
    });
    res.json(chat);
}

const searchHomes = async (req, res) => {

    const { wilaya, guests, checkIn, checkOut , category  } = req.query;
    const homes = await prisma.home.findMany({
        where: {
            wilaya : wilaya ? wilaya : undefined,
            guests: {
                gte: parseInt(guests) ? guests : undefined,
            },
            category: {
                equals: category ? category : undefined,
            },
            Reservations: {
                none: {
                    startDate: {
                        lte: new Date(checkOut) ? checkOut : undefined,
                    },
                    endDate: {
                        gte: new Date(checkIn) ? checkIn : undefined,
                    },
                },
            },
        },
        include: {
            Pictures: {
                select: {
                    url: true,
                },
            },
        },
    });

    res.json(homes);
};


const homePictures = async (req, res) => {
    const {id} = req.params;
    const home = await prisma.home.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            Pictures: true,
        },
    });
    if (!home) {
        return res.status(404).send("Home not found");
    }
    res.json(home.Pictures);
};


const addReview = async (req, res) => {
    const userId = req.user.userId;
    const homeId = req.params;
    const { rating, comment } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if(!user){
        return res.status(404).send("User not found");
    }
    const hasReserved = await prisma.reservation.findFirst({
        where: {
            userId,
            homeId: parseInt(homeId),
            status: "accepted",
        },
    });
    if (!hasReserved) {
        return res.status(400).send("You must reserve this home first");
    }
    const review = await prisma.review.create({
        data: {
            rating,
            comment,
            userId,
            homeId: parseInt(homeId),
        },
    });
    //calculate the average rating of the home
    const reviews = await prisma.review.findMany({
        where: {
            homeId: parseInt(homeId),
        },
    });
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    await prisma.home.update({
        where: {
            id: parseInt(homeId),
        },
        data: {
            rating: averageRating,
        },
    });
    
    res.json(review);

};

const allReviews = async (req, res) => {
    const { id } = req.params;
    const reviews = await prisma.review.findMany({
        where: {
            homeId: parseInt(id),
        },
    });

    res.json(reviews);
};


export {  singleHome, searchHomes ,addReservation,  homePictures , addReview , allReviews , createChat};