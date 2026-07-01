"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SetupPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function createPassword(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password created successfully!");

    router.replace("/parent");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-orange-500 to-cyan-600 p-6">
      <form
        onSubmit={createPassword}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl"
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-cyan-700">
          Create Your Password
        </h1>

        <p className="mb-6 text-center text-gray-600">
          Welcome to Rise & Thrive! Create a password to activate your parent account.
        </p>

        <input
          type="password"
          placeholder="New Password"
          className="mb-6 w-full rounded-xl border p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <button
          disabled={loading}
          className="w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white hover:bg-orange-600"
        >
          {loading ? "Saving..." : "Create Password"}
        </button>
      </form>
    </main>
  );
}