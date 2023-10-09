"use client";
import { Select, SelectItem } from "@tremor/react";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

type EducationLevelControllerProps = {
  title: string;
  control: Control<any>;
};

const EducationLevelController: FC<EducationLevelControllerProps> = ({
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

export default EducationLevelController;
