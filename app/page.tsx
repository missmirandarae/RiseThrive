import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
        <h1 className="mb-4 text-5xl font-bold text-cyan-700">
          Rise & Thrive Community Connection
        </h1>

        <p className="mb-8 text-gray-600">
          Welcome to the Rise & Thrive Management System
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/admin"
            className="rounded-xl bg-cyan-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-700"
          >
            Admin Dashboard
          </Link>

          <Link
            href="/parent"
            className="rounded-xl bg-green-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
          >
            Parent Portal
          </Link>
        </div>
      </div>
    </main>
  );
}