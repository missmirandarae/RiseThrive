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

export default function EditStudentForm({
  student,
}: {
  student: Student;
}) {
  const router = useRouter();

  const [form, setForm] = useState(student);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === "age"
          ? Number(e.target.value)
          : e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const res = await fetch(`/api/students/${student.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Student updated!");
      router.push("/admin");
      router.refresh();
    } else {
      alert("Update failed.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="child_name"
        value={form.child_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        placeholder="Child Name"
      />

      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        placeholder="Age"
      />

      <input
        name="parent_name"
        value={form.parent_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        placeholder="Parent Name"
      />

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        placeholder="Email"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
        placeholder="Phone"
      />

      <button
        type="submit"
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg"
      >
        Save Changes
      </button>
    </form>
  );
}