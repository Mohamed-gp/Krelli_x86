import jwt from "jsonwebtoken";
import "dotenv/config";

export const jwtVerify = (req, res, next) => {
  const token = req.cookies["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Access denied", data: null });
  }
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token", data: null });
  }
};

export const jwtVerifyUser = (req, res, next) => {
  if (req.user.userId != req.params.id) {
    return res.status(400).json({ message: "Access denied", data: null });
  }
  next();
};
export const jwtVerifyAdminAndUser = (req, res, next) => {
  // console.log(req.user.userId)
  console.log(req.user.role == "admin" || req.params.id == req.user.userId);
  if (req.user.role == "admin" || req.params.id == req.user.userId) {
    next(); // you must return the next or do else statement
  } else {
    return res.status(400).json({
      data: null,
      message: "Access denied,only Admin and User Himself",
    });
  }
};
export const jwtVerifyAdmin = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(400).json({ message: "Access denied", data: null });
  }
  next();
};
