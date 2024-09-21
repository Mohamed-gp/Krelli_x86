import express from "express";
import {
  allHomes,
  allUsers,
  deleteUser,
  usersCount,
  singleUser,
  homesCount,
  reviewsCount,
  allReviews,
  removeHome,
  deleteReview,
} from "../controllers/adminController.js";
import demoAdmin from "../middleware/demoAdmin.js";
const userRouter = express.Router();

userRouter.get("/users", allUsers);
userRouter.get("/users/count", usersCount);
userRouter.get("/users/:id", singleUser);
userRouter.delete("/users/:id", demoAdmin, deleteUser);
userRouter.get("/homes", allHomes);
userRouter.delete("/homes/:id", demoAdmin, removeHome);
userRouter.get("/homes/count", homesCount);
userRouter.get("/reviews/count", reviewsCount);
userRouter.get("/reviews", allReviews);
userRouter.delete("/homes/:id/review", demoAdmin, deleteReview);

export default userRouter;
