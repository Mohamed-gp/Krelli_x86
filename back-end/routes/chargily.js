import express from "express";
import webhook from "../controllers/chargilyController.js";

const chargilyRouter = express.Router();

chargilyRouter.post("/webhook", webhook);

chargilyRouter.get("/success", (req, res) => {
  res.json({ data: null, message: "payment completed successfully" });
});
chargilyRouter.get("/failed", (req, res) => {
  res.json({ data: null, message: "payment has failure" });
});

export default chargilyRouter;
