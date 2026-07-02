import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-72 bg-cyan-700 text-white shadow-xl">
        <div className="border-b border-cyan-600 p-6">
          <h1 className="text-3xl font-bold">Rise & Thrive</h1>
          <p className="text-cyan-100">Admin Center</p>
        </div>

        <nav className="flex flex-col p-4 space-y-2">
          <Link href="/admin" className="rounded-lg p-3 hover:bg-cyan-600">
            📊 Dashboard
          </Link>

          <Link href="/students" className="rounded-lg p-3 hover:bg-cyan-600">
            👨‍🎓 Students
          </Link>

          <Link href="/payments" className="rounded-lg p-3 hover:bg-cyan-600">
            💳 Payments
          </Link>

          <Link href="/attendance" className="rounded-lg p-3 hover:bg-cyan-600">
            ✅ Attendance
          </Link>

          <Link href="/reports" className="rounded-lg p-3 hover:bg-cyan-600">
            📈 Reports
          </Link>

          <Link href="/developer" className="rounded-lg p-3 hover:bg-cyan-600">
            🛠 Developer
          </Link>

          <Link href="/" className="rounded-lg p-3 hover:bg-cyan-600">
            🏠 Website
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}