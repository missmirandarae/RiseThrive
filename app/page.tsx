"use client";

import Link from "next/link";
import { supabase } from "@/utils/supabase";
import AdminTable from "@/components/AdminTable";

export default async function AdminPage() {
  // Fetch students
  const { data: students, error: studentsError } = await supabase
    .from("students")
    .select("*");

  // Fetch attendance
  const { data: attendance, error: attendanceError } = await supabase
    .from("attendance")
    .select("*");

  // Fetch payments
  const { data: payments, error: paymentsError } = await supabase
    .from("payments")
    .select("*");

  const checkedInCount =
    attendance?.filter((a: any) => !a.check_out).length ?? 0;
  const totalRevenue =
    payments?.reduce((sum: number, p: any) => sum + (p.amount || 0), 0) ?? 0;

  const error =
    studentsError?.message ||
    attendanceError?.message ||
    paymentsError?.message ||
    null;

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
          <div className="text-lg font-semibold">Total Students</div>
          <div className="text-2xl">{students?.length ?? 0}</div>
        </div>
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
          <div className="text-lg font-semibold">Checked In</div>
          <div className="text-2xl">{checkedInCount}</div>
        </div>
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
          <div className="text-lg font-semibold">Total Revenue</div>
          <div className="text-2xl">${totalRevenue}</div>
        </div>
        <div className="bg-white rounded shadow p-4 flex flex-col items-center">
          <div className="text-lg font-semibold">Attendance Records</div>
          <div className="text-2xl">{attendance?.length ?? 0}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link
          href="/admin/students"
          className="bg-blue-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-blue-600 transition"
        >
          <span className="text-xl font-bold">Students</span>
          <span>Manage student info</span>
        </Link>
        <Link
          href="/admin/payments"
          className="bg-green-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-green-600 transition"
        >
          <span className="text-xl font-bold">Payments</span>
          <span>View & record payments</span>
        </Link>
        <Link
          href="/admin/billing"
          className="bg-yellow-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-yellow-600 transition"
        >
          <span className="text-xl font-bold">Billing</span>
          <span>Manage billing</span>
        </Link>
        <Link
          href="/admin/reports"
          className="bg-purple-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-purple-600 transition"
        >
          <span className="text-xl font-bold">Reports</span>
          <span>Attendance & payment reports</span>
        </Link>
        <Link
          href="/parent"
          className="bg-pink-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-pink-600 transition"
        >
          <span className="text-xl font-bold">Parent Portal</span>
          <span>View as parent</span>
        </Link>
        <Link
          href="/admin/enroll"
          className="bg-indigo-500 text-white rounded shadow p-6 flex flex-col items-center hover:bg-indigo-600 transition"
        >
          <span className="text-xl font-bold">Enroll Student</span>
          <span>Add new student</span>
        </Link>
      </div>
      {error && (
        <div className="mb-4 text-red-600 bg-red-100 rounded p-2">{error}</div>
      )}
      <AdminTable students={students ?? []} attendance={attendance ?? []} />
    </div>
  );
}