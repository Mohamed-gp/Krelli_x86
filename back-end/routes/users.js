import express, { Router } from "express";
import {singleUser} from "../controllers/usersController.js"

const router = Router();



router.route("/:id").get(singleUser)

export default router;
