"use client";
import { FC, useState } from "react";
import Input from "../Application/Input";
import Radio from "../Application/Radio";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import {
  MonthInputController,
  NumInputController,
  RadioInputController,
  TextInputController,
  YearInputController,
} from "@/shared/controllers";
import CountrySelectController from "@/shared/controllers/selects/CountrySelectController/CountrySelectController";
import FormHeader from "./FormHeader";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = ({ title }) => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <div className="flex flex-col space-y-5 border px-3 py-6 sm:p-3 md:px-5 md:py-5">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <TextInputController
            label="Familiyangiz (Ingliz tilida)"
            placeholder="Familiyangiz"
          />
          <TextInputController
            label="Ismingiz (Ingliz tilida)"
            placeholder="Ismingiz"
          />
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="flex flex-col justify-start sm:flex-col">
            <label htmlFor="" className="label">
              Jinsingiz
            </label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              <RadioInputController
                label="Man"
                value="man"
                checked={selectedGender === "man"}
                onChange={handleGenderChange}
                Icon={IoIosMan}
              />
              <RadioInputController
                label="Woman"
                value="woman"
                checked={selectedGender === "woman"}
                onChange={handleGenderChange}
                Icon={IoIosWoman}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Tug&apos;ilgan kuningiz
            </label>
            <div className="flex items-center space-x-2">
              <NumInputController className="w-10" />
              <MonthInputController />
              <YearInputController />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <CountrySelectController label="Davlatingiz" />
          <CountrySelectController label="Viloyatingiz" />
          <CountrySelectController label="Tumaningiz" />
        </div>
      </div>
    </div>
  );
};

export default Form;
