import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Rise & Thrive Logo"
            width={60}
            height={60}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-cyan-600">
              Rise & Thrive
            </h1>

            <p className="text-sm text-gray-500">
              Community Connection
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-6 font-medium">
          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/programs">Programs</Link>

          <Link href="/contact">Contact</Link>

          <Link
            href="/parent"
            className="rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600"
          >
            Parent Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
