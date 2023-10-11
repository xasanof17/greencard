"use client";
import { FC } from "react";
import {
  MonthInputController,
  NumInputController,
  TextInputController,
  YearInputController,
} from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import GenderRadios from "./GenderRadios";
import { useTranslations } from "next-intl";

type FormPersonalDataProps = {
  title: string;
};

const FormPersonalData: FC<FormPersonalDataProps> = ({ title }) => {
  const { control } = useFormContext<FormDataType>();

  const t = useTranslations("PersonalData");

  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="flex flex-col space-y-5 border px-3 py-6 sm:p-3 md:px-5 md:py-10">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <TextInputController
            name="lastName"
            control={control}
            label={t("surname.label")}
            placeholder={t("surname.placeholder")}
            className="sm:max-w-xs"
          />
          <TextInputController
            name="firstName"
            control={control}
            label={t("name.label")}
            placeholder={t("name.placeholder")}
            className="sm:max-w-xs"
          />
        </div>
        <div className="flex flex-col space-x-0 space-y-4 sm:items-start lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex flex-col justify-start sm:flex-col">
            <label htmlFor="gender" className="label">
              {t("gender.title")}
            </label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              <GenderRadios />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthday.label" className="label">
              {t("birhday.label")}
            </label>
            <div className="flex flex-1 flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
              <NumInputController
                name="dateOfBirth.day"
                className="sm:max-w-[40px]"
                control={control}
                placeholder="24"
              />
              <MonthInputController
                name="dateOfBirth.month"
                control={control}
              />
              <YearInputController name="dateOfBirth.year" control={control} />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col">
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              {t("dataOfPassport.label")}
            </label>
            <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
              <TextInputController
                name="dataOfPassport.series"
                control={control}
                placeholder="AA1234567 yoki FA1234567"
              />
              <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
                <NumInputController
                  name="dataOfPassport.givenDate.day"
                  className="min-w-[40px]"
                  control={control}
                  placeholder="24"
                />
                <MonthInputController
                  name="dataOfPassport.givenDate.month"
                  control={control}
                />
                <YearInputController
                  name="dataOfPassport.givenDate.year"
                  control={control}
                />
              </div>
            </div>
          </div>
        </div>
      </FormBody>
    </div>
  );
};

export default FormPersonalData;
