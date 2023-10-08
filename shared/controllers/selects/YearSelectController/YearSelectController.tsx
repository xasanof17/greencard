"use client";
import clsx from "clsx";
import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";

type YearSelectControllerProps = {} & DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

const YearSelectController: FC<YearSelectControllerProps> = ({ ...props }) => {
  const errors = false;

  const variants = {
    baseInput:
      "w-full rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    complate: "hover:border-blue-500  focus:border-blue-500 text-black",
    error:
      "border-red-500 hover:border-red-500  focus:border-red-500 text-red-500",
  };
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <select
        className={clsx(
          variants.baseInput,
          errors ? variants.error : variants.complate,
        )}
        {...props}
      >
        <option value="">2007</option>
      </select>
    </div>
  );
};

export default YearSelectController;
