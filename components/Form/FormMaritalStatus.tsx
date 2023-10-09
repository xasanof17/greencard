"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import {
  AddChildInputController,
  MaritalStatusController,
} from "@/shared/controllers";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormMaritalStatusProps = {
  title: string;
};

const FormMaritalStatus: FC<FormMaritalStatusProps> = ({ title }) => {
  const { control } = useFormContext();
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <MaritalStatusController title={title} control={control} />
        <AddChildInputController title="Farzand qo'shish" control={control}/>
      </FormBody>
    </div>
  );
};

export default FormMaritalStatus;
