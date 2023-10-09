"use client";
import { FC } from "react";
import {
  CountrySelectController,
  TextInputController,
} from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormResidenceAddressProps = {
  title: string;
};

const FormResidenceAddress: FC<FormResidenceAddressProps> = ({ title }) => {
  const { control } = useFormContext();
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="space-y-4">
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <CountrySelectController label="Davlatingiz" control={control} />
          <CountrySelectController label="Viloyatingiz" control={control} />
          <CountrySelectController label="Tumaningiz" control={control} />
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <TextInputController
            label="Manzilingiz"
            control={control}
            placeholder="Namozgoh mahalla, Archazor ko’chasi, 39-uy"
          />
          <TextInputController
            label="Telfon Raqam"
            control={control}
            className="sm:max-w-xs"
          />
        </div>
      </FormBody>
    </div>
  );
};

export default FormResidenceAddress;
