import prisma from "../prisma/client.js";

import nodemailer from "nodemailer";
const subscribeToNewsletter = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({
        message: "you must login with this email first with our app",
        data: null,
      });
    }

    console.log(user.isSubscribe);
    if (user.isSubscribe) {
      return res
        .status(404)
        .json({ message: "you already subscribed", data: null });
    }
    await prisma.user.update({ where: { email }, data: { isSubscribe: true } });

    const transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS_KEY,
      },
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // sender address
      to: email, // list of receivers
      subject: "Krelli Subscription ✔", // Subject line
      text: "you successfully subscribed we gonna email with the latest news of our app", // plain text body
      html: "<b>thanks for joining us</b>", // html body
    });

    return res
      .status(200)
      .json({ data: null, message: "successfully subscribed" });
  } catch (error) {
    next(error);
  }
};

export { subscribeToNewsletter };
