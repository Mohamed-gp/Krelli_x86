import express from "express";
import multer from "multer";
import {
  googleSignInController,
  loginController,
  registerAndAddHomeController,
  registerController,
  logoutController,
} from "../controllers/authController.js";

const storage = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/addHome", storage.array("files"), registerAndAddHomeController);
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/google", googleSignInController);

router.get("/logout", logoutController);

export default router;
