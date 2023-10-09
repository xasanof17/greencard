"use client";
import { FC } from "react";
import { Control, Controller, useFormContext } from "react-hook-form";
import { Select, SelectItem } from "@tremor/react";

type FormMaritalStatusControllerProps = {
  title: string;
  control: Control<any>;
};

const FormMaritalStatusController: FC<FormMaritalStatusControllerProps> = ({
  title,
  control,
}) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="label">
        {title}
      </label>
      <Controller
        name=""
        control={control}
        render={({field}) => (
          <Select {...field}>
            <SelectItem value="">Oliy ma&apos;lumot</SelectItem>
            <SelectItem value="">Oliy ma&apos;lumot</SelectItem>
          </Select>
        )}
      />
    </div>
  );
};

export default FormMaritalStatusController;
