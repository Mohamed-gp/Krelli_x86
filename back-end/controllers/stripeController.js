import Stripe from "stripe";
import prisma from "../prisma/client.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Switch based on the event type
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        const reservationId = session.metadata.reservationId;

        await prisma.reservation.update({
          where: {
            id: reservationId,
          },
          data: {
            status: "paid",
          },
        });

        break;
      case "payment_intent.payment_failed":
        const paymentFailed = event.data.object;
        console.log(paymentFailed);
        break;

      case "checkout.session.expired":
        const sessionExpired = event.data.object;
        console.log(sessionExpired);
        // Handle the expired payment.
        break;
      default:
        console.log("Unknown event type");
    }

    res.sendStatus(200);
  } catch (err) {
    console.error(`⚠️  Webhook signature verification failed.`, err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

export default webhook;
