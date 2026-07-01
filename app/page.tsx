export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Rise & Thrive Community Connection
          </h1>

          <p className="text-xl mb-8">
            Empowering Youth • Strengthening Families • Building Community
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Enroll Now
            </button>

            <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
              Parent Portal
            </button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Academic Enrichment",
            "Leadership Development",
            "Mental Wellness",
            "Creative Arts",
            "Life Skills",
            "Mentorship",
          ].map((program) => (
            <div
              key={program}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold">{program}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

          <p className="text-lg">
            📍 2848 Elm St.
            <br />
            Lima, OH 45805
          </p>

          <p className="mt-4">
            📞 (419) 236-7697
          </p>

          <p>
            ✉️ risethrive26@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © {new Date().getFullYear()} Rise & Thrive Community Connection
      </footer>
    </main>
  );
}