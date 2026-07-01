import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const child_name = formData.get("child_name") as string;
    const age = Number(formData.get("age"));
    const parent_name = formData.get("parent_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const { error } = await supabaseServer
      .from("students")
      .insert([
        {
          child_name,
          age,
          parent_name,
          email,
          phone,
        },
      ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.redirect(
      new URL("/admin", request.url)
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}