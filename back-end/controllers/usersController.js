import prisma from "../prisma/client.js";
import { v2 as cloudinary } from "cloudinary";
import bcrypt from "bcrypt";

const usersCount = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  const usersCount = await prisma.user.count();
  res.json(usersCount);
};

const singleUser = async (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  res.json(user);
};
const updateProfile = async (req, res) => {
  let { firstName, lastName } = req.body;
  if (firstName == "") {
    firstName = undefined;
  }
  if (lastName == "") {
    lastName = undefined;
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
      firstName,
      lastName,
      profileImage: pictureUrl,
    },
  });

  updatedUser.password = "";
  res.json({ message: "Updated successfully", data: updatedUser });
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  if (!currentPassword || !newPassword || !confirmNewPassword) {
    return res.status(400).json({ message: "All Fields Are Required" });
  }
  if (confirmNewPassword != newPassword) {
    return res.status(400).json({
      message: "confirmNewPassword and newPassword must be have the same value",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: req.user.userId,
    },
  });
  console.log("test");
  console.log(user.password);
  console.log(currentPassword);
  const validPassword = await bcrypt.compare(currentPassword, user?.password);
  console.log(validPassword);
  if (!validPassword) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      password: await bcrypt.hash(newPassword, 10),
    },
  });

  updatedUser.password = "";
  res.json({ message: "updated Succefuly", data: updatedUser });
};

const deleteUser = async (req, res) => {
  const oldUser = await prisma.user.findUnique({
    where : {
      id : req.params.id
    }
  })
  if (!oldUser) {
    return res.status(404).json({ message: "user Not Found" });
    
  }
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).json({ message: "deleted Succefuly" });

  // // 2- get all posts from db
  // const posts = await Post.find({ user: user._id });

  // // 3- get the public ids from the posts
  // // video number 20
  // const publicIds = posts?.map((post) => post?.image?.publicId);
  // // 4- delete all postsimage from couldinary that belong to this user
  // if (publicIds.length > 0) {
  //   await cloudinaryRemoveManyImages(publicIds);
  // }
  // // 5- delete the profile picture from cloudinary
  // if (user.profilePhoto.publicIds != null) {
  //   await cloudinaryRemoveImage(user?.profilePhoto?.publicId);
  // }
  // // 6- delete user posts & comments
  // await Comment.deleteMany({ user: user._id });
  // await Post.deleteMany({ user: user._id });
  // // 7- delete the user himself
  // await User.findByIdAndDelete(req.user.id);
  // 8- send a response to the client
  // res.status(200).json({ message: "user deleted succefuly" });
};

export { usersCount, singleUser, updateProfile, changePassword,deleteUser };
