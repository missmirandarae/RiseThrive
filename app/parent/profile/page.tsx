import Link from "next/link";

export default function ParentProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-4xl font-bold text-cyan-700">
          Child Profile
        </h1>

        <p>This page will display:</p>

        <ul className="mt-4 list-disc pl-6">
          <li>Child Name</li>
          <li>Age</li>
          <li>Emergency Contacts</li>
          <li>Enrollment Information</li>
        </ul>

        <Link
          href="/parent"
          className="mt-8 inline-block rounded-lg bg-cyan-600 px-5 py-3 text-white"
        >
          ← Parent Portal
        </Link>
      </div>
    </main>
  );
}