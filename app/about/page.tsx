import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-cyan-700">Rise & Thrive</h1>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/">Home</Link>
            <a href="#programs">Programs</a>
            <a href="#contact">Contact</a>
            <Link href="/parent" className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">Parent Portal</Link>
            <Link href="/admin" className="rounded-lg bg-cyan-700 px-4 py-2 text-white hover:bg-cyan-800">Admin</Link>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-r from-cyan-500 via-green-500 to-orange-500 py-24 text-white text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-5xl font-bold">Rise & Thrive Community Connection</h2>
          <p className="text-xl">Empowering Youth • Strengthening Families • Building Community</p>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-4xl font-bold">Our Programs</h2>
      </section>

      <section id="contact" className="bg-white py-16 text-center">
        <h2 className="mb-6 text-4xl font-bold">Contact Us</h2>
        <p>2848 Elm St.<br/>Lima, OH 45805</p>
        <p className="mt-4">(419) 236-7697</p>
        <p>risethrive26@gmail.com</p>
      </section>
    </main>
  );
}