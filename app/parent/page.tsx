import Link from "next/link";

export default function ParentPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-5xl font-bold text-cyan-700">
          Parent Portal
        </h1>

        <p className="mb-10 text-gray-600">
          Welcome! Manage your child's enrollment, attendance, and payments.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/parent/profile"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">👤</div>

            <h2 className="mt-4 text-2xl font-bold text-cyan-700">
              Child Profile
            </h2>

            <p className="mt-2 text-gray-600">
              View enrollment information and emergency contacts.
            </p>
          </Link>

          <Link
            href="/parent/attendance"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">✅</div>

            <h2 className="mt-4 text-2xl font-bold text-green-700">
              Attendance
            </h2>

            <p className="mt-2 text-gray-600">
              View check-in and check-out history.
            </p>
          </Link>

          <Link
            href="/parent/payments"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">💳</div>

            <h2 className="mt-4 text-2xl font-bold text-blue-700">
              Payments
            </h2>

            <p className="mt-2 text-gray-600">
              View tuition balance and payment history.
            </p>
          </Link>

          <Link
            href="/programs"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">🎨</div>

            <h2 className="mt-4 text-2xl font-bold text-purple-700">
              Programs
            </h2>

            <p className="mt-2 text-gray-600">
              Browse current daycare programs and activities.
            </p>
          </Link>

          <Link
            href="/contact"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">📞</div>

            <h2 className="mt-4 text-2xl font-bold text-orange-700">
              Contact Us
            </h2>

            <p className="mt-2 text-gray-600">
              Send us a message or find our contact information.
            </p>
          </Link>

          <Link
            href="/"
            className="rounded-xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">🏠</div>

            <h2 className="mt-4 text-2xl font-bold text-gray-700">
              Home
            </h2>

            <p className="mt-2 text-gray-600">
              Return to the Rise Thrive homepage.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}