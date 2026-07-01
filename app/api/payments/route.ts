import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const student_id = formData.get("student_id") as string;
    const amount = Number(formData.get("amount"));
    const method = formData.get("method") as string;
    const notes = formData.get("notes") as string;

    if (!student_id || !amount) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

   const { data, error } = await supabaseAdmin
  .from("payments")
  .insert({
    student_id,
    amount,
    payment_date: new Date().toISOString(),
    method,
    notes,
  })
  .select();

console.log("Inserted payment:", data);
console.log("Supabase error:", error);
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.redirect(new URL("/admin/payments", request.url));

  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}