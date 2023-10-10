"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import {
  AddChildInputController,
  MaritalStatusController,
} from "@/shared/controllers";
import { Button } from "@/shared/ui";
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
      <FormBody className="space-y-7 sm:space-y-4">
        <MaritalStatusController title={title} control={control} />
        <AddChildInputController
          title="21 yoshga to'lmagan farzandlar haqida ma'lumot kiriting"
          control={control}
        />
        <div className="block sm:inline-block">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </FormBody>
    </div>
  );
};

export default FormMaritalStatus;
