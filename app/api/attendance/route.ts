import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";import { supabaseAdmin } from "@/lib/supabase-admin";
export async function POST(request: Request) {
  const body = await request.json();

  // Check In
  if (body.action === "checkin") {
    const { error } = await supabase.from("attendance").insert({
      student_id: body.student_id,
      check_in: new Date().toISOString(),
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  }

  // Check Out
  if (body.action === "checkout") {
    const { error } = await supabase
      .from("attendance")
      .update({
        check_out: new Date().toISOString(),
      })
      .eq("student_id", body.student_id)
      .is("check_out", null);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { error: "Invalid action" },
    { status: 400 }
  );
}