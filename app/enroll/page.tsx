"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EnrollPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const { error } = await supabase.from("students").insert([
      {
        child_name: form.get("child_name"),
        age: Number(form.get("age")),
        parent_name: form.get("parent_name"),
        email: form.get("email"),
        phone: form.get("phone"),
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Enrollment submitted!");
      e.currentTarget.reset();
    }
  }

  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-8">Student Enrollment</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="child_name"
          placeholder="Child's Name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="parent_name"
          placeholder="Parent Name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          className="w-full border p-3 rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-cyan-600 text-white px-6 py-3 rounded w-full hover:bg-cyan-700"
        >
          {loading ? "Submitting..." : "Submit Enrollment"}
        </button>
      </form>
    </main>
  );
}