"use client";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { SearchSelect, SearchSelectItem, SelectItem } from "@tremor/react";
import { Control, Controller } from "react-hook-form";

type CountrySelectControllerProps = {
  label: string;
  name?: string;
  control: Control<any>;
};

const CountrySelectController: FC<CountrySelectControllerProps> = ({
  label,
  name,
  control,
}) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="label">
        {label}
      </label>
      <Controller
        name={""}
        control={control}
        render={({ field }) => (
          <SearchSelect
            {...field}
            value={"value"}
            defaultValue="Uzbekistan"
            className="!hover:border-blue-500 !focus:border-blue-500 !text-base !font-medium uppercase !text-black"
          >
            <SearchSelectItem value="uzbekistan">uzbekistan</SearchSelectItem>
            <SearchSelectItem value="uzbekistan">america</SearchSelectItem>
          </SearchSelect>
        )}
      />
    </div>
  );
};

export default CountrySelectController;
