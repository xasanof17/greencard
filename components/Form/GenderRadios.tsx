"use client";
import { FC } from "react";
import { RadioInputController } from "@/shared/controllers";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";

const GenderRadios: FC = () => {
  const { control } = useFormContext();
  const t = useTranslations("PersonalData.gender");
  return (
    <>
      <RadioInputController
        label={t("man")}
        name="gender"
        value="man"
        control={control}
        Icon={IoIosMan}
      />
      <RadioInputController
        label={t("woman")}
        name="gender"
        value="woman"
        control={control}
        Icon={IoIosWoman}
      />
    </>
  );
};

export default GenderRadios;
