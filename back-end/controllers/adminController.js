import prisma from "../prisma/client.js";

const allHomes = async (req, res) => {
  if (req.user.role === "admin") {
    const homes = await prisma.home.findMany({
      include: {
        Pictures: true,
      },
    });
    return res.status(200).json({ data: homes, message: null });
  }
};
const homesCount = async (req, res) => {
  if (req.user.role != "admin") {
    return res.sendStatus(403);
  }
  const homesCount = await prisma.home.count();

  return res.status(200).json({ data: homesCount, message: null });
};
const usersCount = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  const usersCount = await prisma.user.count();
  res.status(200).json({ data: usersCount, message: null });
};
const allUsers = async (req, res) => {
  if (req.user.role === "admin") {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        profileImage: true,
        email: true,
        role: true,
        password: false,
      },
    });
    return res.status(200).json({ data: users, message: null });
  }
};

const singleUser = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to view this", data: null });
  }
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found", data: null });
  }
  res.status(200).json({ data: user, message: null });
};

const deleteUser = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this", data: null });
  }
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    return res.status(404).json({ message: "User not found", data: null });
  }
  await prisma.user.delete({
    where: {
      id,
    },
  });
  res.status(200).json({ message: "User deleted successfully", data: null });
};
const reviewsCount = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this", data: null });
  }
  const reviewsCount = await prisma.review.count();
  return res.status(200).json({ data: reviewsCount, message: null });
};
const allReviews = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this", data: null });
  }
  const reviews = await prisma.review.findMany({
    include: {
      Home: true,
      User: true,
    },
  });

  res.status(200).json({ data: reviews, message: null });
};

const removeHome = async (req, res) => {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "You are not authorized to delete this", data: null });
  }
  let { id } = req.params;
  id = parseInt(id);
  const home = await prisma.home.findUnique({
    where: {
      id,
    },
  });
  if (!home) {
    return res.status(404).json({ message: "Home not found", data: null });
  }
  await prisma.home.delete({
    where: {
      id,
    },
  });
  res.status(200).json({ data: null, message: "Home deleted successfully" });
};

const deleteReview = async (req, res) => {
  const review = await prisma.review.delete({
    where: {
      id: req.params.id,
    },
  });
  if (!review) {
    return res
      .status(404)
      .json({ message: "Review Does Not Exist", data: null });
  }
  return res.status(200).json({ message: "Deleted Successfully", data: null });
};
export {
  allHomes,
  allUsers,
  singleUser,
  deleteUser,
  usersCount,
  deleteReview,
  homesCount,
  reviewsCount,
  allReviews,
  removeHome,
};
