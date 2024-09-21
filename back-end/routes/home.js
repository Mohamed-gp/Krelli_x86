import express from "express";
import {
  singleHome,
  homePictures,
  searchHomes,
  addReview,
  allReviews,
  addReservationWithChargily,
  addReservationWithStripe,
  createChat,
  deleteReview,
} from "../controllers/homeController.js";
import {
  jwtVerify,
  jwtVerifyAdminAndUser,
  jwtVerifyUser,
} from "../middleware/jwtVerify.js";
import demoAdmin from "../middleware/demoAdmin.js";

const router = express.Router();

router.route("/").get(searchHomes);

router.post("/:id/chat", jwtVerify, createChat);
// router.post("/:id/reserve",jwtVerify,jwtVerifyUser, addReservation);
// need to fix because id in the route is for house id not user id
router.post("/:id/reserve/chargily", jwtVerify, addReservationWithChargily);
router.post("/:id/reserve/stripe", jwtVerify, addReservationWithStripe);
router.get("/:id/pictures", homePictures);
router.get("/:id/reviews", allReviews);
router.post("/:id/review", jwtVerify, addReview);
router.delete(
  "/:id/review",
  jwtVerify,
  jwtVerifyAdminAndUser,
  demoAdmin,
  deleteReview
);
router.get("/:id", singleHome);

export default router;
