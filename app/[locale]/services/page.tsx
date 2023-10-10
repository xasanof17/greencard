"use client";
import { Service } from "@/components";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Banner");
  return (
    <>
      <Service />
    </>
  );
}
