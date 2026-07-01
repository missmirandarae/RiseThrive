"use client";

import { useState } from "react";

export default function ParentPaymentsPage() {
  const [amount, setAmount] = useState(300);
  const [loading, setLoading] = useState(false);

  async function checkout() {
    setLoading(true);

    const res = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    alert("Unable to start checkout.");
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <div className="rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-cyan-700">
          Tuition Payment
        </h1>

        <p className="mb-6 text-gray-600">
          Enter the amount you'd like to pay.
        </p>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mb-6 w-full rounded-lg border p-4 text-2xl"
          min={1}
        />

        <button
          onClick={checkout}
          disabled={loading}
          className="w-full rounded-xl bg-green-600 py-4 text-xl font-bold text-white hover:bg-green-700"
        >
          {loading ? "Redirecting..." : "💳 Pay with Stripe"}
        </button>
      </div>
    </main>
  );
}