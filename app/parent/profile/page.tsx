import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function ParentProfilePage() {
  const { data: student, error } = await supabase
    .from("students")
    .select("*")
    .limit(1)
    .single();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-4xl font-bold text-cyan-700">
          Child Profile
        </h1>

        {error || !student ? (
          <p className="text-red-600">
            Unable to load student information.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-gray-500">Child Name</p>
              <h2 className="text-2xl font-semibold">
                {student.child_name}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Age</p>
              <h2 className="text-2xl font-semibold">
                {student.age}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Parent</p>
              <h2 className="text-xl">
                {student.parent_name}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Email</p>
              <h2 className="text-xl">
                {student.email}
              </h2>
            </div>

            <div>
              <p className="text-gray-500">Phone</p>
              <h2 className="text-xl">
                {student.phone}
              </h2>
            </div>

          </div>
        )}

        <Link
          href="/parent"
          className="mt-10 inline-block rounded-lg bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-700"
        >
          ← Back to Parent Portal
        </Link>

      </div>
    </main>
  );
}