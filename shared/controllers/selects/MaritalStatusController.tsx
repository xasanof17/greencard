"use client";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";
import { Select, SelectItem } from "@tremor/react";
import { useTranslations } from "next-intl";

type FormMaritalStatusControllerProps = {
  title: string;
  name: string;
  control: Control<any>;
};

const FormMaritalStatusController: FC<FormMaritalStatusControllerProps> = ({
  title,
  name,
  control,
}) => {
  const t = useTranslations("FamilySituation.Selects");

  const selects = [
    {
      label: t("married"),
      value: t("married"),
    },
    {
      label: t("unmarried"),
      value: t("unmarried"),
    },
    {
      label: t("divorcedOrGoingTo"),
      value: t("divorcedOrGoingTo"),
    },
    {
      label: t("widowOrSingle"),
      value: t("widowOrSingle"),
    },
  ];

  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor={name} className="label">
        {title}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} placeholder={selects[0].value}>
            {selects.map((item, i) => (
              <SelectItem key={i} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default FormMaritalStatusController;
