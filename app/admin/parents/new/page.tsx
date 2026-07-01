"use client";

import { useState } from "react";

export default function InviteParentPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function inviteParent(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/admin/create-parent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (!res.ok) {
      alert(data.error);
      return;
    }

    alert("Invitation sent!");

    setName("");
    setEmail("");
  }

  return (
    <main className="max-w-xl">
      <h1 className="mb-8 text-4xl font-bold text-cyan-700">
        Invite Parent
      </h1>

      <form
        onSubmit={inviteParent}
        className="space-y-5 rounded-xl bg-white p-8 shadow"
      >
        <input
          className="w-full rounded-lg border p-4"
          placeholder="Parent Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full rounded-lg border p-4"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full rounded-lg bg-cyan-700 py-4 text-lg font-semibold text-white hover:bg-cyan-800"
        >
          {loading ? "Sending..." : "Send Invitation"}
        </button>
      </form>
    </main>
  );
}