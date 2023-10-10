"use client";
import { FC, useEffect, useState } from "react";
import { Select, SelectItem } from "@tremor/react";
import { Control, Controller } from "react-hook-form";

type YearSelectControllerProps = {
  name: string;
  control: Control<any>;
};

const YearSelectController: FC<YearSelectControllerProps> = ({
  name,
  control,
}) => {
  const currentYear = new Date().getFullYear();
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    const generatedYears = [];
    for (let year = currentYear; year >= 1940; year--) {
      generatedYears.push(year.toString());
    }
    setYears(generatedYears);
  }, [currentYear]);

  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            defaultValue={currentYear.toString()}
            placeholder={currentYear.toString()}
            className="!hover:border-blue-500 !focus:border-blue-500 !text-base !font-medium uppercase !text-black"
          >
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default YearSelectController;
