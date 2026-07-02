"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const role = searchParams.get("role") ?? "parent";

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

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

const adminEmails = [
  "mcclellandeshanna82@icloud.com",
  "raeyeager05@icloud.com",
];

if (adminEmails.includes(data.user.email ?? "")) {
  router.replace("/admin");
} else {
  router.replace("/parent");
}
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-cyan-600 via-green-500 to-orange-500 p-6">
      <form
        onSubmit={login}
        className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl"
      >
        <div className="mb-8 text-center">
          <div className="mb-4 text-6xl">
            {role === "admin" ? "👩‍💼" : "👨‍👩‍👧"}
          </div>

          <h1 className="text-4xl font-bold text-cyan-700">
            {role === "admin" ? "Admin Login" : "Parent Login"}
          </h1>

          <p className="mt-2 text-gray-500">
            Sign in to continue
          </p>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="mb-4 w-full rounded-xl border p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-xl border p-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className={`w-full rounded-xl py-4 text-lg font-bold text-white ${
            role === "admin"
              ? "bg-cyan-700 hover:bg-cyan-800"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="text-cyan-700 hover:underline"
          >
            ← Back to Home
          </button>
        </div>
      </form>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}