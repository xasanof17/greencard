"use client";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import clsx from "clsx";

type AddChildInputControllerProps = {
  title: string;
  control: Control<any>;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const AddChildInputController: FC<AddChildInputControllerProps> = ({
  title,
  control,
  ...props
}) => {
  const errors = false;

  const variants = {
    baseInput:
      "w-full rounded-md border-2 placeholder:font-normal px-2 py-[6px] text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    complate: "hover:border-blue-500  focus:border-blue-500 text-black",
    error:
      "border-red-500 hover:border-red-500  focus:border-red-500 text-red-500",
  };
  return (
    <div className="sm:max-w-sm">
      <label htmlFor="" className="label">
        {title}
      </label>
      <Controller
        name=""
        control={control}
        render={({field}) => (
          <input
            {...field}
            type="text"
            className={clsx(
              variants.baseInput,
              errors ? variants.error : variants.complate,
            )}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default AddChildInputController;
