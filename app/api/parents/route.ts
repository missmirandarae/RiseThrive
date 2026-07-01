import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const student_id = formData.get("student_id") as string;
    const parent_name = formData.get("parent_name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!student_id || !parent_name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create the parent's login
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        role: "parent",
        parent_name,
      },
    });

    if (error || !data.user) {
      return NextResponse.json(
        { error: error?.message ?? "Unable to create user." },
        { status: 500 }
      );
    }

    // Link the parent to the selected student
    const { error: updateError } = await supabaseAdmin
      .from("students")
      .update({
        parent_user_id: data.user.id,
      })
      .eq("id", student_id);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.redirect(new URL("/admin", request.url));

  } catch (err) {
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}