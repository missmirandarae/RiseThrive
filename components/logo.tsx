import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/admin" className="flex items-center gap-4">
      <Image
        src="/logo.png"
        alt="Rise & Thrive Community Connect"
        width={70}
        height={70}
        priority
      />

      <div>
        <h1 className="text-3xl font-bold text-cyan-700">
          Rise & Thrive
        </h1>

        <p className="text-gray-500">
          Community Connect
        </p>
      </div>
    </Link>
  );
}