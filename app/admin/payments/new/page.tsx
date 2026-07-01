import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function NewPaymentPage() {
  const { data: students } = await supabase
    .from("students")
    .select("id, child_name, parent_name")
    .order("child_name");

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-cyan-700">
            Record Payment
          </h1>

          <Link
            href="/admin/payments"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Back
          </Link>
        </div>

        <form action="/api/payments" method="POST" className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold">
              Student
            </label>

            <select
              name="student_id"
              required
              className="w-full rounded-lg border p-3"
            >
              <option value="">Select Student</option>

              {students?.map((student) => (
                <option
                  key={student.id}
                  value={student.id}
                >
                  {student.child_name} ({student.parent_name})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Amount
            </label>

            <input
              name="amount"
              type="number"
              step="0.01"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Payment Method
            </label>

            <select
              name="method"
              className="w-full rounded-lg border p-3"
            >
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Check</option>
              <option>Zelle</option>
              <option>Venmo</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Notes
            </label>

            <textarea
              name="notes"
              rows={4}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 text-lg font-semibold text-white hover:bg-green-700"
          >
            Save Payment
          </button>

        </form>
      </div>
    </main>
  );
}