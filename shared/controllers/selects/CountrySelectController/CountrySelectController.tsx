"use client";
import clsx from "clsx";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { SearchSelect, SearchSelectItem, SelectItem } from "@tremor/react";

type CountrySelectControllerProps = {
  label: string;
} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const CountrySelectController: FC<CountrySelectControllerProps> = ({
  label,
  ...props
}) => {
  const errors = false;

  const variants = {
    baseSelect:
      "w-full rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    complate: "hover:border-blue-500  focus:border-blue-500 text-black",
    error:
      "border-red-500 hover:border-red-500  focus:border-red-500 text-red-500",
  };
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="label">
        {label}
      </label>
      <SearchSelect
        value={"value"}
        defaultValue="Uzbekistan"
        className="!hover:border-blue-500 !focus:border-blue-500 !text-base !font-medium uppercase !text-black"
      >
        <SearchSelectItem value="uzbekistan">uzbekistan</SearchSelectItem>
        <SearchSelectItem value="uzbekistan">america</SearchSelectItem>
      </SearchSelect>
      {/* <select
        className={clsx(
          variants.baseSelect,
          errors ? variants.error : variants.complate,
        )}
        {...props}
      >
        <option value="">Uzbekistan</option>
      </select> */}
    </div>
  );
};

export default CountrySelectController;
