"use client";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  AddChildInputController,
  MaritalStatusController,
} from "@/shared/controllers";
import { Button } from "@/shared/ui";
import { FormDialogForChildData } from "./Dialog";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormFamilySituationProps = {
  title: string;
};

const FormFamilySituation: FC<FormFamilySituationProps> = ({ title }) => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(true);

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
            Send
          </Button>
        </div>
        {/* {isOpen && ( */}
        {/* <FormDialogForChildData isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        {/* )} */}
      </FormBody>
    </div>
  );
};

export default FormFamilySituation;
