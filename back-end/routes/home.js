import express from "express";
import {
  singleHome,
  homePictures,
  searchHomes,
  addReview,
  allReviews,
  addReservation,
  createChat,
  deleteReview,
} from "../controllers/homeController.js";
import { jwtVerify, jwtVerifyUser } from "../middleware/jwtVerify.js";



const router = express.Router();

router.route("/").get(searchHomes);

router.post("/:id/chat",jwtVerify, createChat);
// router.post("/:id/reserve",jwtVerify,jwtVerifyUser, addReservation);
// need to fix because id in the route is for house id not user id
router.post("/:id/reserve",jwtVerify, addReservation);
router.get("/:id/pictures", homePictures);
router.get("/:id/reviews", allReviews);
router.post("/:id/review", jwtVerify,addReview);
router.delete("/:id/review", jwtVerify,deleteReview);
router.get("/:id", singleHome);

export default router;
