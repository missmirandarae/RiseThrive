import Stripe from "stripe";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  const body = await request.text();

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing signature." },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook verification failed:", err);

    return NextResponse.json(
      { error: "Invalid webhook." },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const studentId = session.metadata?.studentId;
    const amount = (session.amount_total ?? 0) / 100;

    const { error } = await supabaseAdmin
      .from("payments")
      .insert({
        student_id: studentId,
        amount,
        payment_date: new Date().toISOString(),
        method: "Stripe",
      });

    if (error) {
      console.error("Supabase insert error:", error);
    } else {
      console.log("✅ Payment saved to Supabase");
    }
  }

  return NextResponse.json({ received: true });
}