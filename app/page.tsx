import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Rise & Thrive"
              width={70}
              height={70}
              priority
            />

            <div>
              <h1 className="text-4xl font-bold text-cyan-700">
                Rise & Thrive
              </h1>

              <p className="text-gray-600">
                Community Connection
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-8 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/contact">Contact</Link>

            <Link
              href="/enroll"
              className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-600 via-green-500 to-orange-500 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-6 text-6xl font-bold">
            Welcome to Rise & Thrive
          </h2>

          <p className="mx-auto mb-14 max-w-3xl text-2xl">
            Empowering Youth • Strengthening Families • Building Community
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Parent Card */}
            <div className="rounded-3xl bg-white p-10 text-gray-800 shadow-2xl">
              <div className="mb-6 text-7xl">👨‍👩‍👧</div>

              <h3 className="mb-4 text-3xl font-bold text-orange-600">
                Parents
              </h3>

              <p className="mb-8 text-lg text-gray-600">
                Access your child's profile, attendance records,
                payments, and program information.
              </p>

              <Link
  href="/login?role=parent"
  className="inline-block rounded-xl bg-orange-500 px-8 py-4 text-xl font-bold text-white hover:bg-orange-600"
>
  Parent Login
</Link>
            </div>

            {/* Admin Card */}
            <div className="rounded-3xl bg-white p-10 text-gray-800 shadow-2xl">
              <div className="mb-6 text-7xl">👩‍💼</div>

              <h3 className="mb-4 text-3xl font-bold text-cyan-700">
                Staff & Admin
              </h3>

              <p className="mb-8 text-lg text-gray-600">
                Manage students, attendance, enrollment,
                billing, reports, and parent accounts.
              </p>

              <Link
  href="/login?role=admin"
  className="inline-block rounded-xl bg-cyan-700 px-8 py-4 text-xl font-bold text-white hover:bg-cyan-800"
>
  Admin Login
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-cyan-50 p-10 shadow">
            <h3 className="mb-5 text-4xl font-bold text-cyan-700">
              Our Mission
            </h3>

            <p className="text-xl text-gray-700">
              To inspire confidence, promote lifelong learning, and
              provide opportunities that help children and families
              reach their full potential.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 p-10 shadow">
            <h3 className="mb-5 text-4xl font-bold text-orange-600">
              Our Vision
            </h3>

            <p className="text-xl text-gray-700">
              A thriving community where every child is supported,
              encouraged, and equipped with the skills to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-white">
        <p className="text-xl font-bold">
          Rise & Thrive Community Connection
        </p>

        <p className="mt-3">
          2848 Elm St. • Lima, OH 45805
        </p>

        <p>(419) 236-7697</p>

        <p>mcclellan-deshanna82@icloud.com</p>

        <p className="mt-4 text-gray-400">
          © {new Date().getFullYear()} Rise & Thrive Community Connection
        </p>
      </footer>
    </main>
  );
}