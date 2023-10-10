"use client";
import { FC, useState } from "react";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import {
  MonthInputController,
  NumInputController,
  RadioInputController,
  TextInputController,
  YearInputController,
  CountrySelectController,
} from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormPersonalDataProps = {
  title: string;
};

const FormPersonalData: FC<FormPersonalDataProps> = ({ title }) => {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const { control } = useFormContext();
  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="flex flex-col space-y-5 border px-3 py-6 sm:p-3 md:px-5 md:py-10">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <TextInputController
            label="Familiyangiz (Ingliz tilida)"
            placeholder="Familiyangiz"
            control={control}
            className="sm:max-w-xs"
          />
          <TextInputController
            label="Ismingiz (Ingliz tilida)"
            placeholder="Ismingiz"
            control={control}
            className="sm:max-w-xs"
          />
        </div>
        <div className="flex flex-col space-x-0 space-y-4 sm:items-start lg:flex-row lg:space-x-4 lg:space-y-0">
          <div className="flex flex-col justify-start sm:flex-col">
            <label htmlFor="" className="label">
              Jinsingiz
            </label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              {/* <RadioInputController
                label="Man"
                value="man"
                control={control}
                checked={selectedGender === "man"}
                onChange={handleGenderChange}
                Icon={IoIosMan}
              />
              <RadioInputController
                label="Woman"
                value="woman"
                control={control}
                checked={selectedGender === "woman"}
                onChange={handleGenderChange}
                Icon={IoIosWoman}
              /> */}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Tug&apos;ilgan kuningiz
            </label>
            <div className="flex flex-1 flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
              <NumInputController
                className="sm:max-w-[50px]"
                control={control}
              />
              <MonthInputController control={control} />
              <YearInputController control={control} />
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
