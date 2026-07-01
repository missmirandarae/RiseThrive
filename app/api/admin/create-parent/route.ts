import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Invite the parent
    const { data, error } =
      await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
        data: {
          full_name: name,
          role: "parent",
        },
        redirectTo:
          "https://rise-thrive-zeta.vercel.app/parent/setup-password",
      });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    if (!data.user) {
      return NextResponse.json(
        { error: "User was not created." },
        { status: 500 }
      );
    }

    // Create profile
    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .upsert({
        id: data.user.id,
        email,
        full_name: name,
        role: "parent",
      });

    if (profileError) {
      console.error(profileError);

      return NextResponse.json(
        { error: profileError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Parent invited successfully.",
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}