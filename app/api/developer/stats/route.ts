import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET() {
  const [{ count: students }, { count: attendance }, { count: payments }, { count: profiles }] =
    await Promise.all([
      supabaseAdmin
        .from("students")
        .select("*", { count: "exact", head: true }),

      supabaseAdmin
        .from("attendance")
        .select("*", { count: "exact", head: true }),

      supabaseAdmin
        .from("payments")
        .select("*", { count: "exact", head: true }),

      supabaseAdmin
        .from("profiles")
        .select("*", { count: "exact", head: true }),
    ]);

  return NextResponse.json({
    students: students ?? 0,
    parents: profiles ?? 0,
    attendanceToday: attendance ?? 0,
    paymentsToday: payments ?? 0,

    system: "Online",
    database: "Connected",
    stripe: "Ready",
    version: "1.0.0",
  });
}