"use client";
import {
  PersonalDataForm,
  Note,
  Timer,
  PicturePlacementForm,
  ResidenceAddressForm,
} from "@/components";
import { useTranslations } from "next-intl";

const Application = () => {
  const t = useTranslations("Application");
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-6 md:py-10"
    >
      <h1 className="title">{t("title")}</h1>
      <Timer />
      <Note />
      <form className="my-10">
        <PersonalDataForm title="Shaxsiy ma'lumotlar" />
        <PicturePlacementForm title="Rasm joylashtirish" />
        <ResidenceAddressForm title="Yashash manzili" />
      </form>
    </section>
  );
};

export default Application;
