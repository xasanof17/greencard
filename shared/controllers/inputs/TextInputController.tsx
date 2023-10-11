"use client";
import clsx from "clsx";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import {
  Control,
  Controller,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

type TextInputControllerProps = {
  label?: string;
  name: string;
  control: Control<any>;
  className?: string;
  phonePattern?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInputController: FC<TextInputControllerProps> = ({
  label,
  name,
  control,
  className,
  phonePattern,
  ...props
}) => {
  const variants = {
    baseInput:
      "w-full rounded-md focus:bg-slate-100 border-2 placeholder:font-normal px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-2 hover:ring-1 focus:ring-1",
    complete: "hover:border-blue-500 focus:border-blue-500 text-black",
    error:
      "border-red-500 hover:border-red-500 focus:border-red-500 text-red-500",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (phonePattern) {
      /^\d{10}$/.test(inputValue);
    } else {
      inputValue.toUpperCase();
    }
  };

  return (
    <div className={clsx(className, "flex w-full flex-col")}>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <input
            {...field}
            type="text"
            id={name}
            name={name}
            className={clsx(
              variants.baseInput,
              fieldState.error || fieldState.invalid
                ? variants.error
                : variants.complete,
            )}
            {...props}
            onChange={(e) => handleChange(e)}
          />
        )}
      />
    </div>
  );
};

export default TextInputController;
