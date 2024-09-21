import prisma from "../prisma/client.js";

const deleteReservation = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!reservation) {
    return res
      .status(404)
      .json({ message: "Reservation not found", data: null });
  }
  if (reservation.userId !== userId && req.user.role !== "admin") {
    return res.status(403).json({
      message: "You are not authorized to delete this reservation",
      data: null,
    });
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
    return res
      .status(403)
      .json({
        message: "You are not authorized to delete this reservation",
        data: null,
      });
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
      Home: true,
    },
  });
  res.json(reservations);
};

export { deleteReservation, allReservation };
