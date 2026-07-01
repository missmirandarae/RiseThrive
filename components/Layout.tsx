import { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl font-bold mb-3">
            Rise & Thrive Community Connection
          </h2>

          <p>
            2848 Elm St.
          </p>

          <p>
            Lima, Ohio 45805
          </p>

          <p>
            (419) 236-7697
          </p>

          <p>
            risethrive26@gmail.com
          </p>

          <p className="mt-6 text-gray-400">
            © {new Date().getFullYear()} Rise & Thrive Community Connection
          </p>

        </div>
      </footer>
    </>
  );
}