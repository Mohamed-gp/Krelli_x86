import prisma from "../prisma/client.js";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { verifyAddProperty } from "../utils/joi/addProperty.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const myHomesReservations = async (req, res) => {
  const userId = req.user.userId;
  const homes = await prisma.home.findMany({
    where: {
      userId,
    },
    include: {
      Reservations: true,
    },
  });
  if (!homes) {
    return res
      .status(404)
      .json({ message: "You do not have any reservations yet", data: null });
  }
  res.json(homes);
};



const singleHomeReservation = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  const home = await prisma.home.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!home) {
    return res.status(404).json({ data: null, message: "Home not found" });
  }
  if (home.userId !== userId) {
    return res.status(403).json({
      message: "You are not authorized to view this reservations",
      data: null,
    });
  }
  const reservations = await prisma.reservation.findMany({
    where: {
      homeId: parseInt(id),
    },
    include: {
      user: true,
    },
  });
  res.json(reservations);
};

const cleanUploads = async () => {
  const files = await fs.promises.readdir("uploads");
  if (files.length < 10) {
    return;
  }

  files.forEach(async (file) => {
    await fs.promises.unlink(path.join("uploads", file));
  });
};

const addHome = async (req, res) => {
  cleanUploads(); //checks if the uploads folder has more than 5 files and delete them

  const {
    title,
    longitude,
    latitude,
    price,
    bathrooms,
    bedrooms,
    guests,
    category,
  } = req.body;
  const { error } = verifyAddProperty(req.body);
  if (error) {
    // 400 bad request => problem with user info
    return res
      .status(400)
      .json({ message: error.details[0].message, data: null });
  }
  const userId = req.user.userId;
  console.log(userId)

  if (
    !title ||
    !longitude ||
    !latitude ||
    !price ||
    !bathrooms ||
    !bedrooms ||
    !guests ||
    !req.files ||
    !category
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required", data: null });
  }
  const pictures = req.files.map((file) => {
    return file.path;
  });
  const uploadedPictures = await Promise.all(
    pictures.map((picture) => cloudinary.uploader.upload(picture))
  );
  const pictureUrls = uploadedPictures.map((picture) => picture.url);
  console.log(userId, "this is ussfasfjkajfkdjkfjkajfkdjakfjer id");
  const home = await prisma.home.create({
    data: {
      title,
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
      price: parseFloat(price),
      bathrooms: parseInt(bathrooms),
      bedrooms: parseInt(bedrooms),
      guests: parseInt(guests),
      category,
      User: {
        connect: {
          id: userId,
        },
      },
      description: req.body.description ? req.body.description : "",
      Pictures: {
        create: pictureUrls.map((url) => ({
          url,
        })),
      },
    },
  });

  res.json({ data: home, message: "Home added successfully" });
};

const acceptReservation = async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  const reservation = await prisma.reservation.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      home: true,
    },
  });
  if (!reservation) {
    return res
      .status(404)
      .json({ message: "Reservation not found", data: null });
  }
  const host = await prisma.home.findUnique({
    where: {
      id: reservation.homeId,
    },
    select: {
      userId: true,
    },
  });
  if (host.userId !== userId) {
    return res.status(403).json({
      message: "You are not authorized to accept this reservation",
      data: null,
    });
  }
  await prisma.reservation.update({
    where: {
      id: parseInt(id),
    },
    data: {
      status: "accepted",
    },
  });
  res.json("Reservation accepted successfully");
};

export {
  addHome,
  myHomesReservations,
  singleHomeReservation,
  acceptReservation,
};
