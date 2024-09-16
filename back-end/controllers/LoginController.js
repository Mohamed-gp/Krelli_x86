import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prisma/client.js";
import {verifyLogin} from "../utils/joi/authJoi.js"

const handelLogin = async (req, res ) => {

	const email = req.body.email;
	const password = req.body.password;

	// const { error } = verifyLogin(req.body);
	// if (error) {
	//   // 400 bad request => problem with user info
	//   return res.status(400).send(error.details[0].message);
	// }
	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});
	if (!user) {
		return res.status(400).send("No user found with this email");
	}
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		return res.status(400).send("Invalid credentials");
	}

	const token = jwt.sign(
		{ userId: user.id, role: user.role },
		process.env.TOKEN_SECRET,
		{ expiresIn: "30d" },
	);
	
	res.cookie("authorization", token, { httpOnly: true , sameSite: 'None', secure: true });
	res.json(user);
};

export default handelLogin;
