"use client";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { IconType } from "react-icons";

type RadioInputControllerProps = {
  label: string;
  name: string;
  value: string;
  Icon: IconType;
  control: Control<any>;
};

const RadioInputController: FC<RadioInputControllerProps> = ({
  label,
  name,
  value,
  Icon,
  control,
}) => {
  return (
    <div className="flex items-center space-x-2 border px-2 py-1 checked:border-blue-500 checked:ring-1 checked:ring-blue-500 hover:border-blue-500 hover:ring-1 focus:border-blue-500 focus:ring-1 sm:px-5">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="radio"
            id={`radio-${name}-${value}`}
            value={value}
            className="h-4 w-4 text-primary"
          />
        )}
      />
      <div className="flex items-center">
        <Icon className="h-6 w-6" />
        <label htmlFor={`radio-${name}-${value}`} className="text-primary">
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioInputController;
