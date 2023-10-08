"use client";
import clsx from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

type NumInputControllerProps = {
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const NumInputController: FC<NumInputControllerProps> = ({
  className,
  ...props
}) => {
  const errors = false;

  const variants = {
    baseInput:
      "appearance-none w-full rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    complate: "hover:border-blue-500  focus:border-blue-500 text-black",
    error:
      "border-red-500 hover:border-red-500  focus:border-red-500 text-red-500",
  };
  return (
    <input
      type="number"
      className={clsx(
        className ? className : "",
        variants.baseInput,
        errors ? variants.error : variants.complate,
      )}
      {...props}
    />
  );
};

export default NumInputController;
