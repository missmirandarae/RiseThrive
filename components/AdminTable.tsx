"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Student = {
  id: string;
  child_name: string;
  age: number;
  parent_name: string;
  email: string;
  phone: string;
};

type Attendance = {
  id: string;
  student_id: string;
  check_in: string;
  check_out: string | null;
};

export default function AdminTable({
  students,
  attendance,
}: {
  students: Student[];
  attendance: Attendance[];
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) => {
    const term = search.toLowerCase();
    return (
      student.child_name.toLowerCase().includes(term) ||
      student.parent_name.toLowerCase().includes(term) ||
      student.email.toLowerCase().includes(term)
    );
  });

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-cyan-700">Student Management</h2>
          <p className="text-gray-500">Loaded {filteredStudents.length} student(s)</p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 rounded-xl border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:outline-none"
        />

      <ul className="space-y-3">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id} className="rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{student.child_name}</h3>
                  <p className="text-gray-600">Parent: {student.parent_name}</p>
                  <p className="text-gray-500">{student.email}</p>
                  <p className="text-gray-500">{student.phone}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="rounded-xl border border-dashed p-8 text-center text-gray-500">No matching students found.</div>
        )}
      </ul>
    </div>
  );
}