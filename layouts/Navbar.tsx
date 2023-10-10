"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Button } from "@/shared/ui";
import { Logo, NavigationLink, SwitcherLanguage } from "@/components";
import { useTranslations, useLocale } from "next-intl";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Links");

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
    <header className="sticky top-0 inset-x-0 z-50 w-full max-w-full bg-white shadow-md">
      <nav className="container flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center justify-center space-x-2 outline-primary"
        >
          <Logo />
        </Link>
        <ul
          className={`hidden items-center lg:flex ${
            locale == "ru" ? "space-x-2 xl:space-x-0" : "space-x-2"
          }`}
        >
          {links.map(({ href, title }, i) => (
            <li key={i}>
              <NavigationLink href={href}>{title}</NavigationLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-3 lg:space-x-2">
          <SwitcherLanguage locale={locale} className="hidden sm:block" />
          <Button
            onClick={() => router.push("/form")}
            className="hidden xl:block"
          />
          <button
            onClick={() => setToggleMenu((prev) => !prev)}
            className="block lg:hidden"
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
            <ul className="flex flex-col items-center justify-center space-y-5 lg:hidden">
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
            <SwitcherLanguage
              locale={locale}
              className="my-3 block sm:hidden"
            />
            <Button
              onClick={() => {
                setToggleMenu((prev) => !prev);
                router.push("/form");
              }}
              className="block sm:hidden"
            />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
