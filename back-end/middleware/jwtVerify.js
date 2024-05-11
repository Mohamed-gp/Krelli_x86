import jwt from "jsonwebtoken";
import "dotenv/config";

export const jwtVerify = (req, res, next) => {
  const token = req.cookies["authorization"];
  if (!token) {
    return res.status(401).send("Access denied");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

export const jwtVerifyUser = (req, res, next) => {
  if (req.user.userId != req.params.id) {
    return res.status(400).send("Access denied");
  }
  next();
};
export const jwtVerifyAdminAndUser = (req, res, next) => {
  console.log();
  // console.log(req.user.userId)
  console.log(req.user.role == "admin" || req.params.id == req.user.userId);
  if (req.user.role == "admin" || req.params.id == req.user.userId) {
    next(); // you must return the next or do else statement
  } else {
    return res.status(400).send("Access denied,only Admin and User Himself");
  }
};
export const jwtVerifyAdmin = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(400).send("Access denied");
  }
  next();
};
