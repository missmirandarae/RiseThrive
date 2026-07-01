"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Login data:", data);
    console.log("Login error:", error);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");

    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={login}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-cyan-700">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border p-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-lg border p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </main>
  );
}