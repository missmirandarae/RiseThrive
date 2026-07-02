"use client";

import { useEffect, useState } from "react";

export default function DeveloperPage() {
  const [stats, setStats] = useState({
    students: 0,
    parents: 0,
    attendanceToday: 0,
    paymentsToday: 0,
    system: "",
    database: "",
    stripe: "",
    version: "",
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/developer/stats");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-700 p-10 text-white shadow-xl">
        <h1 className="text-5xl font-bold">🛠 Developer Dashboard</h1>
        <p className="mt-2 text-xl text-cyan-100">
          Rise & Thrive Community Connection
        </p>
      </section>

      <div className="mx-auto max-w-7xl p-8">
        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-cyan-600 p-8 text-white shadow-xl">
            <p className="text-lg">Students</p>
            <h2 className="mt-2 text-5xl font-bold">{stats.students}</h2>
          </div>

          <div className="rounded-2xl bg-green-600 p-8 text-white shadow-xl">
            <p className="text-lg">Parents</p>
            <h2 className="mt-2 text-5xl font-bold">{stats.parents}</h2>
          </div>

          <div className="rounded-2xl bg-purple-600 p-8 text-white shadow-xl">
            <p className="text-lg">Attendance</p>
            <h2 className="mt-2 text-5xl font-bold">
              {stats.attendanceToday}
            </h2>
          </div>

          <div className="rounded-2xl bg-orange-500 p-8 text-white shadow-xl">
            <p className="text-lg">Payments</p>
            <h2 className="mt-2 text-5xl font-bold">
              {stats.paymentsToday}
            </h2>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-3xl font-bold text-cyan-700">
            System Status
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-green-50 p-5">
              <h3 className="font-bold text-green-700">
                🟢 System
              </h3>

              <p>{stats.system}</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <h3 className="font-bold text-blue-700">
                🗄 Database
              </h3>

              <p>{stats.database}</p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <h3 className="font-bold text-purple-700">
                💳 Stripe
              </h3>

              <p>{stats.stripe}</p>
            </div>

            <div className="rounded-xl bg-orange-50 p-5">
              <h3 className="font-bold text-orange-700">
                🚀 Version
              </h3>

              <p>{stats.version}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="mb-6 text-3xl font-bold text-cyan-700">
            Quick Actions
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href="/admin"
              className="rounded-2xl bg-cyan-700 p-8 text-center text-2xl font-bold text-white shadow hover:bg-cyan-800"
            >
              📊 Admin Dashboard
            </a>

            <a
              href="/students"
              className="rounded-2xl bg-green-600 p-8 text-center text-2xl font-bold text-white shadow hover:bg-green-700"
            >
              👨‍🎓 Students
            </a>

            <a
              href="/payments"
              className="rounded-2xl bg-orange-500 p-8 text-center text-2xl font-bold text-white shadow hover:bg-orange-600"
            >
              💳 Payments
            </a>

            <a
              href="/attendance"
              className="rounded-2xl bg-purple-600 p-8 text-center text-2xl font-bold text-white shadow hover:bg-purple-700"
            >
              ✅ Attendance
            </a>

            <a
              href="/parent"
              className="rounded-2xl bg-pink-600 p-8 text-center text-2xl font-bold text-white shadow hover:bg-pink-700"
            >
              👨‍👩‍👧 Parent Portal
            </a>

            <a
              href="/"
              className="rounded-2xl bg-slate-700 p-8 text-center text-2xl font-bold text-white shadow hover:bg-slate-800"
            >
              🏠 Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}