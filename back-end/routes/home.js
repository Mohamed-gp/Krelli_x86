import express from 'express';
import {  singleHome , homePictures , searchHomes , addReview , allReviews, addReservation } from '../controllers/homeController.js';

const router = express.Router();


router.get("/", searchHomes);
router.post("/:id/reserve", addReservation);
router.get("/:id/pictures", homePictures);
router.get("/:id/reviews", allReviews);
router.post("/:id/review", addReview);
router.get("/:id", singleHome);


export default router;

