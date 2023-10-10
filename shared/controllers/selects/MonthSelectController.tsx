"use client";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";

type MonthSelectControllerProps = {
  name: string;
  control: Control<any>;
};

const MonthSelectController: FC<MonthSelectControllerProps> = ({
  name,
  control,
}) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SearchSelect
            {...field}
            value={"value"}
            defaultValue="Uzbekistan"
            className="!hover:border-blue-500 !focus:border-blue-500 !text-base !font-medium uppercase !text-black"
          >
            <SearchSelectItem value="uzbekistan">January</SearchSelectItem>
            <SearchSelectItem value="uzbekistan">February</SearchSelectItem>
          </SearchSelect>
        )}
      />
    </div>
  );
};

export default MonthSelectController;
