"use client";
import { FC } from "react";
import {
  MonthInputController,
  NumInputController,
  TextInputController,
  YearInputController,
  CountrySelectController,
} from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import GenderRadios from "./GenderRadios";

type FormPersonalDataProps = {
  title: string;
};

const FormPersonalData: FC<FormPersonalDataProps> = ({ title }) => {
  const { control } = useFormContext<FormDataType>();

  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="flex flex-col space-y-5 border px-3 py-6 sm:p-3 md:px-5 md:py-10">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <TextInputController
            name="lastName"
            control={control}
            label="Familiyangiz (Ingliz tilida)"
            placeholder="Familiyangiz"
            className="sm:max-w-xs"
          />
          <TextInputController
            name="firstName"
            control={control}
            label="Ismingiz (Ingliz tilida)"
            placeholder="Ismingiz"
            className="sm:max-w-xs"
          />
        </div>
        <div className="flex flex-col space-x-0 space-y-4 sm:items-start lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex flex-col justify-start sm:flex-col">
            <label htmlFor="" className="label">
              Jinsingiz
            </label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              <GenderRadios />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Tug&apos;ilgan kuningiz
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
              PASPORT MA&apos;LUMOTLARINGIZ (SERIYA RAQAMI VA AMAL QILISH
              MUDDATI)
            </label>
            <div className="flex flex-col space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 md:flex-row md:items-center">
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
