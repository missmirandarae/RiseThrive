import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ParentAttendancePage() {
  const { data: student } = await supabase
    .from("students")
    .select("id, child_name")
    .limit(1)
    .single();

  const { data: attendance } = await supabase
    .from("attendance")
    .select("*")
    .eq("student_id", student?.id)
    .order("check_in", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-2 text-4xl font-bold text-green-700">
          Attendance
        </h1>

        <p className="mb-8 text-gray-600">
          {student?.child_name}'s attendance history
        </p>

        <div className="overflow-hidden rounded-xl border">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Check In</th>
                <th className="p-4 text-left">Check Out</th>
              </tr>
            </thead>

            <tbody>
              {attendance && attendance.length > 0 ? (
                attendance.map((record: any) => (
                  <tr key={record.id} className="border-b">
                    <td className="p-4">
                      {new Date(record.check_in).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {new Date(record.check_in).toLocaleTimeString()}
                    </td>

                    <td className="p-4">
                      {record.check_out
                        ? new Date(record.check_out).toLocaleTimeString()
                        : "Still Checked In"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-gray-500">
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <Link
          href="/parent"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
        >
          ← Parent Portal
        </Link>

      </div>
    </main>
  );
}