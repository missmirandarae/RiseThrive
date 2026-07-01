import Layout from "../../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-cyan-700 mb-8">
          About Rise & Thrive
        </h1>

        <p className="text-lg leading-8 text-gray-700">
          Rise & Thrive Community Connection is dedicated to empowering
          youth, strengthening families, and building a healthier community.
          We provide a safe, welcoming environment where children can learn,
          grow, and develop through educational enrichment, leadership
          development, mentoring, wellness, and creative activities.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-cyan-50 p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-cyan-700 mb-4">
              Our Mission
            </h2>

            <p>
              To inspire confidence, promote lifelong learning, and provide
              opportunities that help children and families reach their full
              potential.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              Our Vision
            </h2>

            <p>
              A thriving community where every child is supported,
              encouraged, and equipped with the skills to succeed.
            </p>
          </div>

        </div>

      </section>
    </Layout>
  );
}