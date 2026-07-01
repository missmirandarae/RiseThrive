import Link from "next/link";

export default function NewStudentPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-cyan-700">
            Enroll Student
          </h1>

          <Link
            href="/admin"
            className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
          >
            Back
          </Link>
        </div>

        <form action="/api/students" method="POST" className="space-y-6">

          <div>
            <label className="mb-2 block font-semibold">
              Child's Name
            </label>

            <input
              name="child_name"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Age
            </label>

            <input
              type="number"
              name="age"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Parent Name
            </label>

            <input
              name="parent_name"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              Phone
            </label>

            <input
              name="phone"
              required
              className="w-full rounded-lg border p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-600 py-3 text-lg font-semibold text-white hover:bg-cyan-700"
          >
            Enroll Student
          </button>

        </form>

      </div>
    </main>
  );
}