import express from "express";
import {allHomes,allUsers,deleteUser,usersCount,singleUser, homesCount, reviewsCount, allReviews, removeHome} from "../controllers/adminController.js"
const userRouter = express.Router();

userRouter.get("/users", allUsers);
userRouter.get("/users/count", usersCount);
userRouter.get("/user/:id", singleUser);
userRouter.get("/homes", allHomes);
userRouter.delete("/homes/:id",removeHome );
userRouter.get("/homes/count", homesCount);
userRouter.get("/reviews/count", reviewsCount);
userRouter.get("/reviews", allReviews);

export default userRouter;
