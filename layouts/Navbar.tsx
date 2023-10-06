"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Button } from "@/shared/ui";
import { NavigationLink } from "@/components";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  const t = useTranslations("links");
  const links = [
    {
      href: "/",
      title: t("home"),
    },
    {
      href: "/services",
      title: t("services"),
    },
    {
      href: "/news",
      title: t("news"),
    },
    {
      href: "/information",
      title: t("information"),
    },
    {
      href: "/questions",
      title: t("questions"),
    },
    {
      href: "/contact",
      title: t("contact"),
    },
  ];
  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-white shadow-md">
      <nav className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 outline-primary"
        >
          <div className="relative h-10 w-10 lg:h-14 lg:w-14">
            <Image
              src="/assets/department_state.png"
              alt="logo"
              fill
              sizes="(min-width: 320px) 100vw"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-medium leading-5 sm:text-base">
              U.S. Department of State
            </h3>
            <p className="text-xs font-normal leading-4 sm:text-sm">
              Bureau of Consular Affairs
            </p>
          </div>
        </Link>
        <ul className="hidden items-center space-x-2 lg:flex">
          {links.map(({ href, title }, i) => (
            <li key={i}>
              <NavigationLink href={href}>{title}</NavigationLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-3 lg:space-x-0">
          <Button
            onClick={() => router.push("/form")}
            className="hidden sm:block"
          />
          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className={` block lg:hidden`}
          >
            {!toggleMenu ? (
              <GrMenu className="h-6 w-6" />
            ) : (
              <MdClose className="h-6 w-6" />
            )}
          </button>
        </div>
        {toggleMenu && (
          <div className="fixed left-0 top-16 flex min-h-screen w-screen flex-col items-center justify-start bg-white py-10 lg:hidden">
            <ul className="flex flex-col items-center justify-center space-y-3 lg:hidden">
              {links.map(({ href, title }, i) => (
                <li key={i}>
                  <NavigationLink
                    onClick={() => setToggleMenu((prev) => !prev)}
                    href={href}
                  >
                    {title}
                  </NavigationLink>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => {
                setToggleMenu((prev) => !prev);
                router.push("/form");
              }}
              className="mt-5 block sm:hidden"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
