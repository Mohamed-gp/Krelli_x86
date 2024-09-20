import prisma from "../prisma/client.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import { verifyUpdateUser } from "../utils/joi/authJoi.js";
import { verifyUpdatePassword } from "../utils/joi/authJoi.js";

const usersCount = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  const usersCount = await prisma.user.count();
  res.json({ data: usersCount, message: "users count fetched successfully" });
};

const singleUser = async (req, res) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      Home: {
        include: {
          Pictures: {
            select: {
              url: true,
            },
          },
        },
      },
    },
  });
  res.json({ data: user, message: null });
};
const updateProfile = async (req, res) => {
  let { username } = req.body;

  if (username == "") {
    username = undefined;
  }
  const { error } = verifyUpdateUser(req.body);
  if (error) {
    return res
      .status(400)
      .json({ data: null, message: error.details[0].message });
  }
  const pictures = req.files.map((file) => {
    return file.path;
  });
  const uploadedPictures = await Promise.all(
    pictures.map((picture) => cloudinary.uploader.upload(picture))
  );
  const pictureUrls = uploadedPictures.map((picture) => picture.url);
  const pictureUrl = pictureUrls[0];

  const updatedUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      username,
      profileImage: pictureUrl,
    },
    include: {
      Home: true,
      Favorite: true,
    },
  });

  updatedUser.password = "";
  res.json({ message: "Updated successfully", data: updatedUser });
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return res
      .status(400)
      .json({ data: null, message: "All Fields Are Required" });
  }
  if (confirmNewPassword != newPassword) {
    return res.status(400).json({
      message: "confirmNewPassword and newPassword must be have the same value",
      data: null,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: req.user.userId,
    },
    include: {
      Home: true,
      Favorite: true,
    },
  });
  const validPassword = bcrypt.compare(currentPassword, user?.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const { error } = verifyUpdatePassword({ password: newPassword });
  if (error) {
    return res
      .status(400)
      .json({ data: null, message: error.details[0].message });
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      password: await bcrypt.hash(newPassword, 10),
    },
    include: {
      Home: true,
      Favorite: true,
    },
  });

  updatedUser.password = "";
  res.json({ message: "updated Succefuly", data: updatedUser });
};

const deleteUser = async (req, res) => {
  const oldUser = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
    include: {
      Home: true,
      Favorite: true,
    },
  });
  if (!oldUser) {
    return res.status(404).json({ message: "user Not Found", data: null });
  }
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json({ message: "deleted Succefuly", data: null });
};

const getWishlist = async (req, res) => {
  const userId = req.user.userId;
  const wishlist = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    include: {
      Home: {
        include: {
          Pictures: {
            select: {
              url: true,
            },
          },
        },
      },
    },
  });

  return res.json({ data: wishlist, message: null });
};
const toggleWishlist = async (req, res) => {
  const userId = req.user.userId;
  const homeId = parseInt(req.params.id); // Ensure homeId is an integer

  const existingFavorite = await prisma.favorite.findFirst({
    where: {
      userId: userId,
      homeId: homeId,
    },
    include: {
      Home: {
        include: {
          Pictures: {
            select: {
              url: true,
            },
          },
        },
      },
    },
  });

  if (existingFavorite) {
    await prisma.favorite.delete({
      where: {
        id: existingFavorite.id,
      },
    });
  } else {
    await prisma.favorite.create({
      data: {
        homeId: homeId,
        userId: userId,
      },
    });
  }

  const wishlist = await prisma.favorite.findMany({
    where: {
      userId: userId,
    },
    include: {
      Home: {
        include: {
          Pictures: {
            select: {
              url: true,
            },
          },
        },
      },
    },
  });

  return res.json({ data: wishlist, message: "wishlist toggled successfuly" });
};

/**
 *
 * @METHOD POST
 * @ROUTE /api/auth/addHome
 * @DESC create account and add home
 * @ACCESS Public
 */
const getUserProperties = async (req, res) => {
  const userId = req.params.id;
  const homes = await prisma.home.findMany({
    where: {
      userId,
    },
    include: {
      Pictures: {
        select: {
          url: true,
        },
      },
    },
  });

  return res.json({ data: homes, message: "Homes fetched successfully" });
};

export {
  usersCount,
  singleUser,
  updateProfile,
  changePassword,
  deleteUser,
  toggleWishlist,
  getWishlist,
  getUserProperties,
};
