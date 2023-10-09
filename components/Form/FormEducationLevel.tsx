"use client";
import { FC } from "react";
import { EducationLevelController } from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormEducationLevelProps = {
  title: string;
};

const FormEducationLevel: FC<FormEducationLevelProps> = ({ title }) => {
  const { control } = useFormContext();
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <EducationLevelController title={title} control={control} />
      </FormBody>
    </div>
  );
};

export default FormEducationLevel;
