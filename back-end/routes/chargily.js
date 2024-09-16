import express from "express";
import webhook from "../controllers/cahrgilyController.js";

const ChargilyRouter = express.Router();

ChargilyRouter.post("/webhook", webhook);

ChargilyRouter.get("/success", (req, res) => {
  res.json({ data: null, message: "payment completed successfully" });
});
ChargilyRouter.get("/failed", (req, res) => {
  res.json({ data: null, message: "payment has failure" });
});

export default ChargilyRouter;
