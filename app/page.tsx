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

            <Link href="/about">
              About
            </Link>

            <Link href="/programs">
              Programs
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link
              href="/enroll"
              className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Enroll Now
            </Link>

            <Link
              href="/parent"
              className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Parent Portal
            </Link>

            <Link
              href="/admin"
              className="rounded-lg bg-cyan-700 px-5 py-3 font-semibold text-white transition hover:bg-cyan-800"
            >
              Admin
            </Link>

          </nav>

        </div>
      </header>

      {/* Hero */}

      <section className="bg-white">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <h2 className="mb-8 text-6xl font-bold text-cyan-700">
            About Rise & Thrive
          </h2>

          <p className="max-w-5xl text-2xl leading-relaxed text-gray-700">
            Rise & Thrive Community Connection is dedicated to empowering
            youth, strengthening families, and building a healthier
            community. We provide a safe, welcoming environment where
            children can learn, grow, and develop through educational
            enrichment, leadership development, mentoring, wellness,
            and creative activities.
          </p>

        </div>

      </section>

      {/* Cards */}

      <section className="pb-20">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-cyan-50 p-10 shadow">

            <h3 className="mb-5 text-5xl font-bold text-cyan-700">
              Our Mission
            </h3>

            <p className="text-xl leading-relaxed text-gray-700">
              To inspire confidence, promote lifelong learning, and
              provide opportunities that help children and families
              reach their full potential.
            </p>

          </div>

          <div className="rounded-2xl border bg-orange-50 p-10 shadow">

            <h3 className="mb-5 text-5xl font-bold text-orange-600">
              Our Vision
            </h3>

            <p className="text-xl leading-relaxed text-gray-700">
              A thriving community where every child is supported,
              encouraged, and equipped with the skills to succeed.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}