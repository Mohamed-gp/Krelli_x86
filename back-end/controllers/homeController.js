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

const allHomes = async (req, res) => {
   // to be implemented 
    
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