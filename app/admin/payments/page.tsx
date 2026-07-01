import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function PaymentsPage() {
  const { data: students, error } = await supabase
    .from("students")
    .select("id, child_name, parent_name, email, monthly_tuition")
    .order("child_name");

  const { data: payments } = await supabase
    .from("payments")
    .select("student_id, amount");
console.log("Payments:", payments);
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-cyan-700">
            Payments
          </h1>

          <div className="flex gap-3">
            <Link
              href="/admin/payments/new"
              className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              + Record Payment
            </Link>

            <Link
              href="/admin"
              className="rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
            >
              ← Dashboard
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full">
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="p-4 text-left">Child</th>
                <th className="p-4 text-left">Parent</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-center">Monthly Tuition</th>
                <th className="p-4 text-center">Paid</th>
                <th className="p-4 text-center">Balance</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {students && students.length > 0 ? (
                students.map((student: any) => {
                  const tuition = Number(student.monthly_tuition ?? 250);

                  const totalPaid =
                    payments
                      ?.filter((payment: any) => payment.student_id === student.id)
                      .reduce(
                        (sum: number, payment: any) =>
                          sum + Number(payment.amount),
                        0
                      ) ?? 0;

                  const balance = Math.max(tuition - totalPaid, 0);

                  return (
                    <tr
                      key={student.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4 font-medium">
                        {student.child_name}
                      </td>

                      <td className="p-4">
                        {student.parent_name}
                      </td>

                      <td className="p-4">
                        {student.email}
                      </td>

                      <td className="p-4 text-center">
                        ${tuition.toFixed(2)}
                      </td>

                      <td className="p-4 text-center text-green-700 font-semibold">
                        ${totalPaid.toFixed(2)}
                      </td>

                      <td className="p-4 text-center text-red-600 font-semibold">
                        ${balance.toFixed(2)}
                      </td>

                      <td className="p-4 text-center">
                        {balance === 0 ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                            Paid
                          </span>
                        ) : totalPaid > 0 ? (
                          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                            Partial
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                            Unpaid
                          </span>
                        )}
                      </td>

                      <td className="p-4 text-center">
                        <Link
                          href={`/admin/payments/new?student=${student.id}`}
                          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
                        >
                          Record Payment
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="p-8 text-center text-gray-500"
                  >
                    {error
                      ? "Unable to load students."
                      : "No students found."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}