"use client";
import {
  Note,
  Timer,
  FormPersonalData,
  FormPicturePlacement,
  FormResidenceAddress,
  FormFamilySituation,
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
        stateName: "",
        regionName: "",
        districtName: "",
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
        stateName: "",
        regionName: "",
        districtName: "",
        addressLine: "",
        phoneNumber: "",
      },
      educationLevel: {
        level: "",
      },
      maritalStatus: {
        status: "",
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
              day: "",
              month: "",
              year: "",
            },
            placeOfBirth: {
              stateName: "",
              regionName: "",
              districtName: "",
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
      {/* <Note /> */}
      <FormProvider {...methods}>
        <form className="my-10" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormPersonalData title={t("PersonalData.title")} />
          <FormPicturePlacement title={t("PicturePlacement.title")} />
          <FormResidenceAddress title={t("ResidenceAddress.title")} />
          <FormEducationLevel title={t("EducationLevel.title")} />
          <FormFamilySituation title={t("FamilySituation.title")} />
        </form>
      </FormProvider>
    </section>
  );
};

export default Application;
