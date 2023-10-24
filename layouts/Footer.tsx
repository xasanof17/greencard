import Link from "next/link";
import { Logo } from "@/components";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();
  const socials = [
    {
      title: "Telegram",
      Icon: FaTelegramPlane,
      href: "https://t.me/xxvlw",
    },
    {
      title: "Instagram",
      Icon: FaInstagram,
      href: "https://instagram.com",
    },
  ];
  return (
    <footer className="mt-6 border-t pt-6">
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center space-x-3">
            <Logo />
          </Link>
        </div>
        <ul className="flex flex-col lg:items-center">
          {socials.map(({ title, Icon, href }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="flex items-center space-x-2 text-lg text-gray-600 hover:text-blue-500"
              >
                <Icon className="text-[20px]" />
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col lg:items-center">
          <li>
            <Link
              href="tel:+998900198505"
              className="flex items-center space-x-2 text-lg text-gray-600 hover:text-blue-500"
            >
              <MdPhone className="text-[20px]" />
              <span>+998900198505</span>
            </Link>
          </li>
          <li>
            <Link
              href="tel:+998900198505"
              className="flex items-center space-x-2 text-lg text-gray-600 hover:text-blue-500"
            >
              <MdPhone className="text-[20px]" />
              <span>+998900198505</span>
            </Link>
          </li>
        </ul>
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
