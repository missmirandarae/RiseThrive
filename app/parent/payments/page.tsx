import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ParentPaymentsPage() {
  const { data: student } = await supabase
    .from("students")
    .select("id, child_name, monthly_tuition")
    .limit(1)
    .single();

  const { data: payments } = await supabase
    .from("payments")
    .select("*")
    .eq("student_id", student?.id)
    .order("created_at", { ascending: false });

  const tuition = Number(student?.monthly_tuition ?? 250);

  const totalPaid =
    payments?.reduce(
      (sum: number, payment: any) => sum + Number(payment.amount),
      0
    ) ?? 0;

  const balance = Math.max(tuition - totalPaid, 0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-8 text-5xl font-bold text-blue-700">
          Payments
        </h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-green-600 p-6 text-white shadow">
            <p>Monthly Tuition</p>
            <h2 className="text-3xl font-bold">
              ${tuition.toFixed(2)}
            </h2>
          </div>

          <div className="rounded-xl bg-cyan-600 p-6 text-white shadow">
            <p>Total Paid</p>
            <h2 className="text-3xl font-bold">
              ${totalPaid.toFixed(2)}
            </h2>
          </div>

          <div className="rounded-xl bg-red-600 p-6 text-white shadow">
            <p>Balance Due</p>
            <h2 className="text-3xl font-bold">
              ${balance.toFixed(2)}
            </h2>
          </div>

        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Method</th>
                <th className="p-4 text-left">Notes</th>
              </tr>
            </thead>

            <tbody>
              {payments && payments.length > 0 ? (
                payments.map((payment: any) => (
                  <tr key={payment.id} className="border-b">
                    <td className="p-4">
                      {new Date(payment.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-4 font-semibold text-green-700">
                      ${Number(payment.amount).toFixed(2)}
                    </td>

                    <td className="p-4">
                      {payment.method}
                    </td>

                    <td className="p-4">
                      {payment.notes || "-"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No payment history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Link
          href="/parent"
          className="mt-8 inline-block rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
        >
          ← Parent Portal
        </Link>

      </div>
    </main>
  );
}