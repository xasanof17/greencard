"use client";
import { Form, Note, Timer } from "@/components";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Application = () => {
  const t = useTranslations("Application");
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-6 md:py-10"
    >
      <Link
        href="/form"
        className="mb-7 flex items-center space-x-2 text-sm md:mb-5"
      >
        <BiLeftArrowAlt fontSize={20} /> <span>{t("Back.title")}</span>
      </Link>
      <h1 className="title">{t("title")}</h1>
      <Timer />
      <Note />
      <form className="my-10">
        <Form title="Shaxsiy ma'lumotlar" />
      </form>
    </section>
  );
};

export default Application;
