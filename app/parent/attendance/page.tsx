import Link from "next/link";

export default function ParentAttendancePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-green-700">
          Attendance
        </h1>

        <p>Attendance history will appear here.</p>

        <Link
          href="/parent"
          className="mt-8 inline-block rounded-lg bg-green-600 px-5 py-3 text-white"
        >
          ← Parent Portal
        </Link>
      </div>
    </main>
  );
}