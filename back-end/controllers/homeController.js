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

    const { checkIn, checkOut } = req.body;
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
            status: "accepted",
            startDate: {
                lte: new Date(checkOut),
            },
            endDate: {
                gte: new Date(checkIn),
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


export {  singleHome, searchHomes ,addReservation,  homePictures , addReview , allReviews };