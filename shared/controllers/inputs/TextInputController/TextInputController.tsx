"use client";
import { clsx } from "clsx";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

type TextInputControllerProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInputController: FC<TextInputControllerProps> = ({
  label,
  ...props
}) => {
  const errors = false;

  const variants = {
    baseInput:
      "w-full rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    complate: "hover:border-blue-500  focus:border-blue-500 text-primary",
    error:
      "border-red-500 hover:border-red-500  focus:border-red-500 text-red-500",
  };
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="label">
        {label}
      </label>
      <input
        type="text"
        className={clsx(
          variants.baseInput,
          errors ? variants.error : variants.complate,
        )}
        {...props}
      />
    </div>
  );
};

export default TextInputController;