import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Empowering Youth.
          </h1>

          <h2 className="mb-8 text-5xl font-light">
            Strengthening Families.
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-xl">
            Rise & Thrive Community Connection provides academic enrichment,
            leadership development, mentoring, life skills, wellness
            programming, and community engagement for youth and families.
          </p>

          <div className="flex justify-center gap-5">
            <button className="rounded-lg bg-white px-8 py-4 font-bold text-cyan-700">
              Enroll Now
            </button>

            <button className="rounded-lg bg-orange-500 px-8 py-4 font-bold text-white">
              Parent Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
}