import { json, LoaderFunction } from "@remix-run/node";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export const loader: LoaderFunction = async ({ request }) => {
  const body = await request.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000, // Amount in cents, e.g., $50.00
    currency: "usd",
    payment_method: body.payment_method,
    confirmation_method: "manual",
  });

  return json({ clientSecret: paymentIntent.client_secret });
};
