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
            name="firstName"
            control={control}
            label="Familiyangiz (Ingliz tilida)"
            placeholder="Familiyangiz"
            className="sm:max-w-xs"
          />
          <TextInputController
            name="lastName"
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
                name=""
                className="sm:max-w-[50px]"
                control={control}
              />
              <MonthInputController name="" control={control} />
              <YearInputController name="" control={control} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <CountrySelectController label="Davlatingiz" control={control} />
          <CountrySelectController label="Viloyatingiz" control={control} />
          <CountrySelectController label="Tumaningiz" control={control} />
        </div>
      </FormBody>
    </div>
  );
};

export default FormPersonalData;
