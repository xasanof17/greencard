"use client";
import clsx from "clsx";
import { FC, InputHTMLAttributes, useRef } from "react";
import { Control, Controller } from "react-hook-form";

type NumInputControllerProps = {
  className?: string;
  name: string;
  control: Control<any>;
} & InputHTMLAttributes<HTMLInputElement>;

const NumInputController: FC<NumInputControllerProps> = ({
  className,
  control,
  name,
  ...props
}) => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => (
        <input
          {...field}
          id={name}
          type="text"
          className={clsx(
            "numInput w-full appearance-none rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none hover:ring-1 focus:ring-1 sm:py-1",
            className,
            fieldState.error || fieldState.invalid
              ? "border-red-500 text-red-500 hover:border-red-500 focus:border-red-500"
              : "text-black hover:border-blue-500 focus:border-blue-500",
          )}
          min={1}
          max={31}
          maxLength={2} // Limit input to two digits
          inputMode="numeric" // Enforce numeric keyboard on mobile devices
          {...props}
          ref={(e) => {
            field.ref(e); // Set the field's reference
            inputRef.current = e; // Assign the input reference to the ref
          }}
        />
      )}
    />
  );
};

export default NumInputController;
