import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import EditStudentForm from "@/components/EditStudentForm";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditStudentPage({ params }: PageProps) {
  const { id } = await params;

  const { data: student, error } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !student) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-cyan-700">
          Edit Student
        </h1>

        <EditStudentForm student={student} />
      </div>
    </main>
  );
}