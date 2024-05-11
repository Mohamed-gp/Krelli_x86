import express, { Router } from "express";
import {editUserInfo, singleUser} from "../controllers/usersController.js"

const router = Router();



router.route("/:id").get(singleUser)
router.route("/:id").post(editUserInfo)

export default router;
