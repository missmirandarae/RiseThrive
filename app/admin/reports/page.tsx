import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ReportsPage() {
  const { count: studentCount } = await supabase
    .from("students")
    .select("*", { count: "exact", head: true });

  const { count: paymentCount } = await supabase
    .from("payments")
    .select("*", { count: "exact", head: true });

  const { data: payments } = await supabase
    .from("payments")
    .select("amount");

  const totalRevenue =
    payments?.reduce((sum, payment) => sum + Number(payment.amount), 0) ?? 0;

  const { count: checkedIn } = await supabase
    .from("attendance")
    .select("*", {
      count: "exact",
      head: true,
    })
    .is("check_out", null);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-5xl font-bold text-cyan-700">
            Reports
          </h1>

          <Link
            href="/admin"
            className="rounded-lg bg-cyan-600 px-5 py-3 text-white hover:bg-cyan-700"
          >
            ← Dashboard
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-500">
              Total Students
            </h2>

            <p className="mt-2 text-4xl font-bold text-cyan-600">
              {studentCount ?? 0}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-500">
              Payments Recorded
            </h2>

            <p className="mt-2 text-4xl font-bold text-green-600">
              {paymentCount ?? 0}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-500">
              Revenue
            </h2>

            <p className="mt-2 text-4xl font-bold text-blue-600">
              ${totalRevenue.toFixed(2)}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h2 className="text-gray-500">
              Currently Checked In
            </h2>

            <p className="mt-2 text-4xl font-bold text-purple-600">
              {checkedIn ?? 0}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}