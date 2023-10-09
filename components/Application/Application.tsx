"use client";
import {
  PersonalDataForm,
  Note,
  Timer,
  PicturePlacementForm,
  ResidenceAddressForm,
} from "@/components";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

const Application = () => {
  const t = useTranslations("Application");
  const methods = useForm({
    defaultValues: {
      firstName: "",
      countryName: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-6 md:py-10"
    >
      <h1 className="title">{t("title")}</h1>
      <Timer />
      <Note />
      <FormProvider {...methods}>
        <form className="my-10" onSubmit={methods.handleSubmit(onSubmit)}>
          <PersonalDataForm title="Shaxsiy ma'lumotlar" />
          <PicturePlacementForm title="Rasm joylashtirish" />
          <ResidenceAddressForm title="Yashash manzili" />
        </form>
      </FormProvider>
    </section>
  );
};

export default Application;
