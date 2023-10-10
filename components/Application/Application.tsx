"use client";
import {
  Note,
  Timer,
  FormPersonalData,
  FormPicturePlacement,
  FormResidenceAddress,
  FormMaritalStatus,
} from "@/components";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import FormEducationLevel from "../Form/FormEducationLevel";

const Application = () => {
  const t = useTranslations("Application");
  const methods = useForm<FormDataType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: {
        man: false,
        woman: false,
      },
      dateOfBirth: {
        day: "",
        month: "",
        year: "",
      },
      placeOfBirth: {
        stateName: "Uzbekistan",
        regionName: "Tashkent",
        districtName: "Chilanzar",
      },
      dataOfPassport: {
        series: "",
        givenDate: {
          day: "",
          month: "",
          year: "",
        },
      },
      img: "",
      residenceAddress: {
        stateName: "Uzbekistan",
        regionName: "Tashkent",
        districtName: "Chilanzar",
        addressLine: "",
        phoneNumber: "",
      },
      educationLevel: {
        level: "Oliy ma'lumot",
      },
      maritalStatus: {
        status: "Uylangan",
        children: [
          {
            firstName: "",
            lastName: "",
            gender: {
              man: false,
              woman: false,
            },
            img: "",
            dateOfBirth: {
              day: 1,
              month: "",
              year: 2001,
            },
            placeOfBirth: {
              stateName: "Uzbekistan",
              regionName: "Tashkent",
              districtName: "Chilanzar",
            },
          },
        ],
      },
    },
  });
  const onSubmit = (data: FormDataType) => {
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
          <FormPersonalData title="Shaxsiy ma'lumotlar" />
          <FormPicturePlacement title="Rasm joylashtirish" />
          <FormResidenceAddress title="Yashash manzili" />
          <FormEducationLevel title="O'quv ma'lumotingiz" />
          <FormMaritalStatus title="Oilaviy sharoitingiz" />
        </form>
      </FormProvider>
    </section>
  );
};

export default Application;
