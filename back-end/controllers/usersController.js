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
	const id = req.params.id;
	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	});
	res.json(user);
};

export { usersCount,allUsers, singleUser };
