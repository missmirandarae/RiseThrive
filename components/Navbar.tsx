import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-cyan-500 via-green-500 to-orange-400 shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/logo.png"
            alt="Rise & Thrive Logo"
            width={65}
            height={65}
            priority
            className="rounded-full bg-white p-1 shadow-lg"
          />

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              Rise & Thrive
            </h1>

            <p className="text-sm text-white/90">
              Community Connection
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-6">

          <Link
            href="/"
            className="font-semibold text-white transition hover:text-yellow-200"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="font-semibold text-white transition hover:text-yellow-200"
          >
            About
          </Link>

          <Link
            href="/programs"
            className="font-semibold text-white transition hover:text-yellow-200"
          >
            Programs
          </Link>

          <Link
            href="/contact"
            className="font-semibold text-white transition hover:text-yellow-200"
          >
            Contact
          </Link>

          <Link
            href="/parent"
            className="rounded-full bg-white px-6 py-3 font-semibold text-green-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:text-black"
          >
            Parent Portal
          </Link>

        </nav>

      </div>
    </header>
  );
}