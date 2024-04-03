import prisma from "../prisma/client.js";

const addReservation = async (req, res) => {
    const userId = req.user.userId;
    const homeId = req.params.id;
    const { checkIn, checkOut } = req.body;
    const home = await prisma.home.findUnique({
        where: {
            id: parent(homeId),
        },
    });
    if (!home) {
        return res.status(404).send("Home not found");
    }
    //check if the there is a reservation with the sattus accepted in the same date
    const hasReserved = await prisma.reservation.findFirst({
        where: {
            homeId,
            status: "accepted",
            checkIn: {
                lte: new Date(checkOut),
            },
            checkOut: {
                gte: new Date(checkIn),
            },
        },
    });
    if (hasReserved) {
        return res.status(400).send("This home is already reserved in this date");
    }
    const reservation = await prisma.reservation.create({
        data: {
            checkIn: new Date(checkIn),
            checkOut: new Date(checkOut),
            userId,
            homeId,
        },
    });
    res.json(reservation);
}

const deleteReservation = async (req, res) => {
    const userId = req.user.userId;
    const {id} = req.params;
    const reservation = await prisma.reservation.findUnique({
        where: {
            id: parseInt(id),
        },
    });
    if (!reservation) {
        return res.status(404).send("Reservation not found");
    }
    if (reservation.userId !== userId && req.user.role !== "admin") {
        return res.status(403).send("You are not authorized to delete this reservation");
    }
    const host = await prisma.home.findUnique({
        where: {
            id: reservation.homeId,
        },
        select: {
            userId: true,
        },
    });
    if (host.userId !== userId && req.user.role !== "admin") {
        return res.status(403).send("You are not authorized to delete this reservation");
    }
    await prisma.reservation.delete({
        where: {
            id: parseInt(id),
        },
    });
    res.json("Reservation deleted successfully");
};

const allReservation = async (req, res) => {
    const userId = req.user.userId;
    const reservations = await prisma.reservation.findMany({
        where: {
            userId,
        },
        include: {
            home: true,
        },
    });
    res.json(reservations);
};



export { addReservation, deleteReservation, allReservation };
