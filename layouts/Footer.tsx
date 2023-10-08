import { Logo } from "@/components";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-6 border-t py-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center space-x-3">
            <Logo />
          </Link>
        </div>
      </div>
      <p className="mt-4 border-t py-3 text-center text-base font-medium text-gray-600">
        &copy;
        <Link
          href="https://bit.ly/javohir"
          className="font-semibold text-blue-500"
          target="_blank"
        >
          JX Team
        </Link>{" "}
        {year}. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
