"use client";
import { Select, SelectItem } from "@tremor/react";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

type MonthSelectControllerProps = {
  name: string;
  control: Control<any>;
};

const MonthSelectController: FC<MonthSelectControllerProps> = ({
  name,
  control,
}) => {
  // const months = [
  //   { value: "January", label: "January" },
  //   { value: "February", label: "February" },
  //   { value: "March", label: "March" },
  //   { value: "April", label: "April" },
  //   { value: "May", label: "May" },
  //   { value: "June", label: "June" },
  //   { value: "July", label: "July" },
  //   { value: "August", label: "August" },
  //   { value: "September", label: "September" },
  //   { value: "October", label: "October" },
  //   { value: "November", label: "November" },
  //   { value: "December", label: "December" },
  // ];
  const generateMonths = () => {
    return new Array(12).fill(0).map((_, index) => {
      const date = new Date(0, index);
      return date.toLocaleString("en-US", { month: "long" });
    });
  };

  const months = generateMonths();
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            placeholder={months[0]}
            className="!hover:border-blue-500 !focus:border-blue-500 !text-base !font-medium !text-black"
          >
            {months.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default MonthSelectController;
