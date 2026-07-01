import Layout from "../../components/Layout";

const programs = [
  "Academic Enrichment",
  "Leadership Development",
  "Mental Wellness",
  "Life Skills",
  "Creative Arts",
  "Community Engagement",
  "Mentorship",
  "Recreation",
];

export default function ProgramsPage() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-center mb-14">
          Our Programs
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program}
              className="rounded-xl bg-white p-6 shadow-lg border"
            >
              <h2 className="text-xl font-bold text-cyan-700">
                {program}
              </h2>
            </div>
          ))}
        </div>

      </section>
    </Layout>
  );
}