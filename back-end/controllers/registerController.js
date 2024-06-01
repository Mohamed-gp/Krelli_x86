import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import { verifySignUp} from "../utils/joi/authJoi.js"
config();
const prisma = new PrismaClient();

const HandelRegister = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const { error } = verifySignUp(req.body);
	if (error) {
	  // 400 bad request => problem with user info
	  return res.status(400).send(error.details[0].message);
	}

  const alreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (alreadyExists) {
    return res.status(400).send("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.TOKEN_SECRET,
    { expiresIn: "30d" }
  );

  res.cookie("authorization", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
  });

  // const token = jwt.sign({ userId: user.id , role: user.role }, process.env.TOKEN_SECRET, { expiresIn: "30d" });
  // res.cookie("authorization", token, { httpOnly: true , sameSite: 'None', secure: false });
  res.json(user).status(201);
};

export default HandelRegister;
