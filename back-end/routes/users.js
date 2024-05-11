import express, { Router } from "express";
import {singleUser, updateProfile,changePassword, deleteUser} from "../controllers/usersController.js"
import multer from "multer"
import {jwtVerify, jwtVerifyAdminAndUser, jwtVerifyUser} from "../middleware/jwtVerify.js"

const router = Router();

const storage = multer({ dest: "uploads/" });


router.route("/password/:id").post(jwtVerify,jwtVerifyUser,changePassword)
router.route("/:id").get(singleUser).post(jwtVerify,jwtVerifyUser,storage.array("file"),updateProfile)
router.route("/:id").delete(jwtVerify,jwtVerifyAdminAndUser,deleteUser)

export default router;
