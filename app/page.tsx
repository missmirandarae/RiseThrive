import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-600 via-green-500 to-orange-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-6xl font-bold">
              Rise & Thrive
              <br />
              Community Connection
            </h1>

            <p className="mb-8 text-2xl">
              Empowering Youth • Strengthening Families • Building Community
            </p>

            <p className="mb-10 text-lg">
              We provide quality youth development programs, academic
              enrichment, mentoring, leadership development, wellness
              education, and family support in a safe and welcoming
              environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/enroll"
                className="rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 hover:bg-gray-100"
              >
                Enroll Today
              </Link>

              <Link
                href="/parent"
                className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600"
              >
                Parent Portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Programs
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Academic Enrichment",
            "Leadership Development",
            "Creative Arts",
            "Life Skills",
            "STEM Activities",
            "Health & Wellness",
            "Mentorship",
            "Community Service",
          ].map((program) => (
            <div
              key={program}
              className="rounded-xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-cyan-700">
                {program}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Families Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl font-bold text-cyan-700">
                Safe Environment
              </h3>

              <p>
                Every child deserves a safe, supportive place to learn and
                grow.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl font-bold text-cyan-700">
                Caring Staff
              </h3>

              <p>
                Our experienced team is dedicated to helping every child
                succeed.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow">
              <h3 className="mb-4 text-2xl font-bold text-cyan-700">
                Family Focused
              </h3>

              <p>
                We partner with parents to build brighter futures for every
                child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cyan-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-5xl font-bold">
            Ready to Join Rise & Thrive?
          </h2>

          <p className="mb-8 text-xl">
            Complete your child's enrollment online in just a few minutes.
          </p>

          <Link
            href="/enroll"
            className="rounded-xl bg-white px-10 py-4 font-bold text-cyan-700 hover:bg-gray-100"
          >
            Start Enrollment
          </Link>
        </div>
      </section>
    </Layout>
  );
}