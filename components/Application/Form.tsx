"use client";
import { FC, useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import {
  MonthInputController,
  NumInputController,
  YearInputController,
} from "@/shared/controllers";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = ({ title }) => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };
  return (
    <div className="my-3 flex flex-col">
      <div className="flex w-full items-center justify-start rounded-t-md border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200 px-5 py-2 md:py-3">
        <h2 className="text-center text-lg font-medium capitalize text-primary md:uppercase">
          {title}
        </h2>
      </div>
      <div className="flex flex-col space-y-5 border px-3 py-6 sm:p-3 md:px-5 md:py-5">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <Input label="Familiyangiz (Ingliz tilida)" />
          <Input label="Ismingiz (Ingliz tilida)" />
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="flex flex-col justify-start sm:flex-col">
            <label htmlFor="" className="label">
              Jinsingiz
            </label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              <Radio
                label="Man"
                value="man"
                checked={selectedGender === "man"}
                onChange={handleGenderChange}
                Icon={IoIosMan}
              />
              <Radio
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
      </div>
    </div>
  );
};

export default Form;
