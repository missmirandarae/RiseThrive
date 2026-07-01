import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function AttendancePage() {
  const { data: attendance, error } = await supabase
    .from("attendance")
    .select(
      `
      *,
      students (
        child_name,
        parent_name
      )
    `
    )
    .order("check_in", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-cyan-700">
            Attendance History
          </h1>

          <Link
            href="/admin"
            className="rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-700"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="mb-6 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-gray-500">Total Attendance Records</h2>
          <p className="mt-2 text-4xl font-bold text-cyan-600">
            {attendance?.length ?? 0}
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <table className="w-full">
            <thead className="bg-cyan-600 text-white">
              <tr>
                <th className="p-4 text-left">Child</th>
                <th className="p-4 text-left">Parent</th>
                <th className="p-4 text-left">Check In</th>
                <th className="p-4 text-left">Check Out</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {attendance && attendance.length > 0 ? (
                attendance.map((record: any) => (
                  <tr
                    key={record.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {record.students?.child_name}
                    </td>

                    <td className="p-4">
                      {record.students?.parent_name}
                    </td>

                    <td className="p-4">
                      {new Date(record.check_in).toLocaleString()}
                    </td>

                    <td className="p-4">
                      {record.check_out
                        ? new Date(record.check_out).toLocaleString()
                        : "-"}
                    </td>

                    <td className="p-4 text-center">
                      {record.check_out ? (
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                          Checked Out
                        </span>
                      ) : (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                          Checked In
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-gray-500"
                  >
                    {error
                      ? "Unable to load attendance records."
                      : "No attendance records found."}
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