import Link from "next/link";
import { supabase } from "@/lib/supabase";
import AdminTable from "@/components/AdminTable";
import Logo from "@/components/logo";

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

        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-8 shadow-xl md:flex-row">
          <Logo />
          <div className="text-right">
            <h1 className="text-5xl font-bold text-cyan-700">Admin Dashboard</h1>
            <p className="mt-2 text-gray-500">Welcome to Rise & Thrive Community Connect</p>
          </div>
        </div>

        {/* Dashboard Cards */}

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-cyan-600 p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase opacity-80">
              Students
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {students.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-green-600 p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase opacity-80">
              Checked In
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {checkedInCount}
            </h2>
          </div>

          <div className="rounded-2xl bg-purple-600 p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
            <p className="text-sm uppercase opacity-80">
              Payments
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {payments.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-orange-600 p-6 text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
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
            className="rounded-2xl bg-cyan-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="rounded-2xl bg-green-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="rounded-2xl bg-blue-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="rounded-2xl bg-purple-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="rounded-2xl bg-orange-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
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
            className="rounded-2xl bg-pink-600 p-6 text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold">
              ➕ Enroll Student
            </h2>

            <p className="mt-2 opacity-90">
              Register a new student
            </p>
          </Link>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-cyan-700">Student Management</h2>
          <AdminTable
            students={students}
            attendance={attendance}
          />
        </div>

      </div>
    </main>
  );
}