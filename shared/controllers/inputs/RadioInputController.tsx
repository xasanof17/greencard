"use client";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { IconType } from "react-icons";

type RadioInputControllerProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  Icon: IconType;
  control: Control<any>;
};

const RadioInputController: FC<RadioInputControllerProps> = ({
  label,
  value,
  checked,
  onChange,
  Icon,
  control,
}) => {
  const handleChange = () => {
    if (!checked) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-2 border px-2 py-1 checked:border-blue-500 checked:ring-1 checked:ring-blue-500 hover:border-blue-500 hover:ring-1 focus:border-blue-500 focus:ring-1 sm:px-5">
      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="radio"
            id={`radio-${value}`}
            name="gender"
            value={value}
            checked={checked}
            onChange={handleChange}
            className="h-4 w-4 text-primary"
          />
        )}
      />
      <div className="flex items-center">
        <Icon className="h-6 w-6" />
        <label htmlFor={`radio-${value}`} className="text-primary">
          {label}
        </label>
      </div>
    </div>
  );
};

export default RadioInputController;
