import express from 'express';
import {  singleHome , homePictures , allHomes , addReview , allReviews } from '../controllers/homeController.js';

const router = express.Router();


router.get("/", allHomes);
router.get("/:id", singleHome);
router.get("/:id/pictures", homePictures);
router.get("/:id/review", allReviews);
router.post("/:id/review", addReview);


export default router;

