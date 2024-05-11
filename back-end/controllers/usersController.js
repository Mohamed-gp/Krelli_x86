import prisma from "../prisma/client.js";

const usersCount = async (req, res) => {
	if (req.user.role !== "admin") {
		return res.sendStatus(403);
	}
	const usersCount = await prisma.user.count();
	res.json(usersCount);
};

const allUsers = async (req, res) => {
	if (req.user.role !== "admin") {
		return res.sendStatus(403);
	}
	const users = await prisma.user.findMany();
	res.json(users);
};

const singleUser = async (req, res) => {
	console.log(req.body)
	const id = req.params.id;
	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	});
	res.json(user);
};
const editUserInfo = async (req, res) => {
	console.log(req.body,"this is body")
	// const {firstName,lastName,email} = req.body
	// const file = req.file
	// console.log("firstName",firstName)
	// console.log("lastName",lastName)
	// console.log("email",email)
	// console.log("file",file)
	// console.log()
	// const id = req.params.id;
	// const user = await prisma.user.findUnique({
	// 	where: {
	// 		id,
	// 	},
		
	// });
	// if (!user) {
	// 	return res.status(400).json({message : "user not found"})
	// }
	// if () {
		
	// }
	res.json({message : "test"});
};

export { usersCount,allUsers, singleUser,editUserInfo };
