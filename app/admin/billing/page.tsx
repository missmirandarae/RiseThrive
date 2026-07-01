import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function BillingPage() {
  const { data: students = [], error } = await supabase
    .from("students")
    .select("*")
    .order("child_name");

  if (!students) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-cyan-700">
            Billing
          </h1>

          <Link
            href="/admin"
            className="rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">

          <table className="w-full">

            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="p-4 text-left">Student</th>
                <th className="p-4 text-left">Parent</th>
                <th className="p-4 text-center">Monthly Tuition</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody>

              {students.map((student: any) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {student.child_name}
                  </td>

                  <td className="p-4">
                    {student.parent_name}
                  </td>

                  <td className="p-4 text-center">
                    $
                    {Number(
                      student.monthly_tuition ?? 250
                    ).toFixed(2)}
                  </td>

                  <td className="p-4 text-center">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      Active
                    </span>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="p-8 text-center text-gray-500"
                  >
                    {error
                      ? error.message
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