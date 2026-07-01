import Link from "next/link";

export default function ParentPaymentsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-blue-700">
          Payments
        </h1>

        <p>Payment history and balance will appear here.</p>

        <Link
          href="/parent"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          ← Parent Portal
        </Link>
      </div>
    </main>
  );
}