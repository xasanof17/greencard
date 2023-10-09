"use client";
import { FC } from "react";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { Control, Controller } from "react-hook-form";

type YearSelectControllerProps = {
  control: Control<any>;
};

const YearSelectController: FC<YearSelectControllerProps> = ({ control }) => {
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
            <SearchSelectItem value="uzbekistan">2000</SearchSelectItem>
            <SearchSelectItem value="uzbekistan">2001</SearchSelectItem>
          </SearchSelect>
        )}
      />
    </div>
  );
};

export default YearSelectController;
