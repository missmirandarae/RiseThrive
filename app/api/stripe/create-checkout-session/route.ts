import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  try {
    const { amount, studentId } = await request.json();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card"],

      metadata: {
        studentId,
      },

      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount * 100,
            product_data: {
              name: "Rise & Thrive Tuition",
            },
          },
        },
      ],

     success_url: "https://rise-thrive-zeta.vercel.app/parent/payment-success",

cancel_url: "https://rise-thrive-zeta.vercel.app/parent/payments",

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