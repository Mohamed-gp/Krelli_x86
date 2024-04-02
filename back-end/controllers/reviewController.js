import prisma from "../prisma/client.js";

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
    const { homeId } = req.params;
    const reviews = await prisma.review.findMany({
        where: {
            homeId: parseInt(homeId),
        },
        include: {
            user: true,
        },
    });
    res.json(reviews);
};
