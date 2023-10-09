"use client";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import clsx from "clsx";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";

type MonthSelectControllerProps = {
  control: Control<any>;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const MonthSelectController: FC<MonthSelectControllerProps> = ({
  control,
  ...props
}) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <Controller
        name=""
        control={control}
        render={(fields) => (
          <SearchSelect
            {...fields}
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

export default MonthSelectController;
