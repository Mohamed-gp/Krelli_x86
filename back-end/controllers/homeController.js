import prisma from "../prisma/client.js";


const singleHome = async (req, res) => {
    const { id } = req.params;
    const home = await prisma.home.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            pictures: true,
        },
    });

    if (!home) {
        return res.status(404).send("Home not found");
    }

    res.json(home);
};

const searchHomes = async (req, res) => {

    const { wilaya, guests, checkIn, checkOut } = req.query;
    const homes = await prisma.home.findMany({
        where: {
            wilaya,
            guests: {
                gte: parseInt(guests),
            },
            reservations: {
                none: {
                    checkIn: {
                        lte: new Date(checkOut),
                    },
                    checkOut: {
                        gte: new Date(checkIn),
                    },
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
            pictures: true,
        },
    });
    if (!home) {
        return res.status(404).send("Home not found");
    }
    res.json(home.pictures);
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


export {  singleHome, allHomes,  homePictures , addReview , allReviews };