"use client";

import { useState } from "react";

export default function ParentPaymentsPage() {
  const [amount, setAmount] = useState(300);
  const [loading, setLoading] = useState(false);

  // Temporary student for testing
  const studentId = "f8a41147-cc82-4a25-90fa-5e20f12a8d11";

  async function checkout() {
    setLoading(true);

    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          studentId,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      alert(data.error ?? "Unable to start checkout.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

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
          className="w-full rounded-xl bg-green-600 py-4 text-xl font-bold text-white hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "💳 Pay with Stripe"}
        </button>
      </div>
    </main>
  );
}