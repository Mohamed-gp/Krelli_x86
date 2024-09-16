import prisma from "../prisma/client.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifySignUp } from "../utils/joi/authJoi.js";
import { verifyAddProperty } from "../utils/joi/addProperty.js";

/**
 *
 * @METHOD POST
 * @ROUTE /api/auth/login
 * @DESC login with credentials
 * @ACCESS Public
 */
const loginController = async (req, res) => {
  const { email, password } = req.body;

  // const { error } = verifyLogin(req.body);
  // if (error) {
  //   // 400 bad request => problem with user info
  //   return res.status(400).json({data : null ,message : error.details[0].message});
  // }
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  if (!user) {
    return res
      .status(400)
      .json({ message: "No user found with this email", data: null });
  }
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ data: null, message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  res
    .cookie("authorization", token, {
      httpOnly: true,
      sameSite: "None",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({ data: user, message: "login successfully" });
};

/**
 *
 * @METHOD POST
 * @ROUTE /api/auth/register
 * @DESC create new acccount
 * @ACCESS Public
 */
const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const { error } = verifySignUp(req.body);
  if (error) {
    // 400 bad request => problem with user info
    return res
      .status(400)
      .json({ data: null, message: error.details[0].message });
  }

  const alreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExists) {
    return res.status(400).json({ data: null, message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  res
    .cookie("authorization", token, {
      httpOnly: true,
      sameSite: "None",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({ data: user, message: "user created successfully" })
    .status(201);
};

/**
 *
 * @METHOD POST
 * @ROUTE /api/auth/google
 * @DESC Google Sign In
 * @ACCESS Public
 */
const googleSignInController = async (req, res, next) => {
  const { username, email, photoUrl } = req.body;
  try {
    let user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );
      user.password = "";
      return res
        .cookie("authorization", token, {
          httpOnly: true,
          sameSite: "None",
          secure: process.env.NODE_ENV === "development" ? false : true,
        })
        .json({ data: user, message: "login successfully" })
        .status(200);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      user = await prisma.user.create({
        email: email,
        photoUrl,
        username,
        password: await bcrypt.hash(generatedPassword, 10),
        provider: "google",
      });
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );
      user.password = "";
      return res
        .cookie("authorization", token, {
          httpOnly: true,
          sameSite: "None",
          secure: process.env.NODE_ENV === "development" ? false : true,
        })
        .json({ data: user, message: "user created successfully" })
        .status(201);
    }
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @METHOD POST
 * @ROUTE /api/auth/addHome
 * @DESC create account and add home
 * @ACCESS Public
 */
const registerAndAddHomeController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ data: null, message: "All fields are required" });
  }

  const { error } = verifySignUp(req.body);
  if (error) {
    // 400 bad request => problem with user info
    return res
      .status(400)
      .json({ data: null, message: error.details[0].message });
  }
  const alreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExists) {
    return res.status(400).json({ data: null, message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  user.password = null;

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

  const userId = user.id;

  if (
    !title ||
    !longitude ||
    !latitude ||
    !price ||
    !bathrooms ||
    !bedrooms ||
    !guests ||
    !category ||
    !req.files
  ) {
    return res
      .status(400)
      .json({ data: null, message: "All fields are required" });
  }
  const { error: err } = verifyAddProperty(req.body);
  if (err) {
    // 400 bad request => problem with user info
    return res
      .status(400)
      .json({ data: null, message: err.details[0].message });
  }

  const pictures = req.files.map((file) => {
    return file.path;
  });
  const uploadedPictures = await Promise.all(
    pictures.map((picture) => cloudinary.uploader.upload(picture))
  );
  const pictureUrls = uploadedPictures.map((picture) => picture.url);
  const home = await prisma.home.create({
    data: {
      title,
      category,
      longitude: parseFloat(longitude),
      latitude: parseFloat(latitude),
      price: parseFloat(price),
      bathrooms: parseInt(bathrooms),
      bedrooms: parseInt(bedrooms),
      guests: parseInt(guests),
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
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  res
    .cookie("authorization", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "development" ? false : true,
    })
    .json({
      data: { user, home },
      message: null,
    });
};

export {
  googleSignInController,
  registerAndAddHomeController,
  loginController,
  registerController,
};
