"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "📊 Dashboard" },

  { href: "/admin/students", label: "👨‍🎓 Students" },
  { href: "/admin/students/new", label: "➕ Enroll Student" },

  { href: "/admin/parents", label: "👨‍👩‍👧 Parent Accounts" },
  { href: "/admin/parents/new", label: "📧 Invite Parent" },

  { href: "/admin/payments", label: "💰 Payments" },
  { href: "/admin/billing", label: "🧾 Billing" },

  { href: "/admin/attendance", label: "✅ Attendance" },

  { href: "/admin/reports", label: "📈 Reports" },

  { href: "/admin/staff", label: "👩‍💼 Staff" },
  { href: "/admin/staff/new", label: "➕ Invite Staff" },

  { href: "/admin/settings", label: "⚙️ Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-cyan-700 text-white min-h-screen p-6">
      <h1 className="mb-10 text-3xl font-bold">
        Rise & Thrive
      </h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block rounded-lg px-4 py-3 transition ${
              pathname === link.href
                ? "bg-white text-cyan-700"
                : "hover:bg-cyan-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}