import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const { amount } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: "Rise & Thrive Tuition",
            },

            unit_amount: amount * 100,
          },

          quantity: 1,
        },
      ],

      success_url:
        "https://rise-thrive-zeta.vercel.app/parent/payment-success",

      cancel_url:
        "https://rise-thrive-zeta.vercel.app/parent/payments",
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    );
  }
}