import prisma from "../prisma/client.js";

const subscribeToNewsletter = async (req, res) => {
  // const { email } = req.body;
  // if (!email) {
  //   return res.status(400).send("Email is required");
  // }
  // let user = await prisma.user.findUnique({
  //   where: {
  //     email: email,
  //   },
  // });
  // if (user?.isRegistered) {
  //   return res.status(400).send("Email already registered");
  // }
  // user = await prisma.user.update({
  //   where: {
  //     email: email,
  //   },
  //   data: {
  //     isRegistered: true,
  //   },
  // });

  return res
    .status(200)
    .json({
      data: null,
      message:
        "Email registered successfully you will receive a newsletter soon!",
    });
};

export { subscribeToNewsletter };
