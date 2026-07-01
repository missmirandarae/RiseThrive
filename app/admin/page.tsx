import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AdminTable from "@/components/AdminTable";

export default async function AdminPage() {
  const { data: studentsData, error } = await supabase
    .from("students")
    .select("*")
    .order("created_at", { ascending: false });

  const students = studentsData ?? [];

  const { data: attendanceData } = await supabase
    .from("attendance")
    .select("*")
    .is("check_out", null);

  const attendance = attendanceData ?? [];

  const { data: paymentsData } = await supabase
    .from("payments")
    .select("amount");

  const payments = paymentsData ?? [];

  const checkedInCount = attendance.length;

  const totalRevenue = payments.reduce(
    (sum: number, payment: any) => sum + Number(payment.amount),
    0
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-8 text-5xl font-bold text-cyan-700">
          Admin Dashboard
        </h1>

        {/* Dashboard Cards */}

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-cyan-600 p-6 text-white shadow-lg">
            <p className="text-sm uppercase opacity-80">
              Students
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {students.length}
            </h2>
          </div>

          <div className="rounded-xl bg-green-600 p-6 text-white shadow-lg">
            <p className="text-sm uppercase opacity-80">
              Checked In
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {checkedInCount}
            </h2>
          </div>

          <div className="rounded-xl bg-purple-600 p-6 text-white shadow-lg">
            <p className="text-sm uppercase opacity-80">
              Payments
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {payments.length}
            </h2>
          </div>

          <div className="rounded-xl bg-orange-600 p-6 text-white shadow-lg">
            <p className="text-sm uppercase opacity-80">
              Revenue
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              ${totalRevenue.toFixed(2)}
            </h2>
          </div>

        </div>

        {/* Navigation */}

        <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/admin"
            className="rounded-xl bg-cyan-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              👨‍👩‍👧 Students
            </h2>

            <p className="mt-2 opacity-90">
              Manage students and attendance
            </p>
          </Link>

          <Link
            href="/admin/payments"
            className="rounded-xl bg-green-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              💳 Payments
            </h2>

            <p className="mt-2 opacity-90">
              Record tuition payments
            </p>
          </Link>

          <Link
            href="/admin/billing"
            className="rounded-xl bg-blue-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              🧾 Billing
            </h2>

            <p className="mt-2 opacity-90">
              Monthly tuition and balances
            </p>
          </Link>

          <Link
            href="/admin/reports"
            className="rounded-xl bg-purple-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              📊 Reports
            </h2>

            <p className="mt-2 opacity-90">
              Revenue and attendance reports
            </p>
          </Link>

          <Link
            href="/parent"
            className="rounded-xl bg-orange-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              👨‍👩‍👧 Parent Portal
            </h2>

            <p className="mt-2 opacity-90">
              Preview the parent experience
            </p>
          </Link>

          <Link
            href="/admin/students/new"
            className="rounded-xl bg-pink-600 p-6 text-white shadow-lg transition hover:scale-105"
          >
            <h2 className="text-2xl font-bold">
              ➕ Enroll Student
            </h2>

            <p className="mt-2 opacity-90">
              Register a new student
            </p>
          </Link>

        </div>

        <AdminTable
          students={students}
          attendance={attendance}
        />

      </div>
    </main>
  );
}