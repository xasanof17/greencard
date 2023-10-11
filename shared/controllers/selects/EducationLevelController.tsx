"use client";
import { Select, SelectItem } from "@tremor/react";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

type EducationLevelControllerProps = {
  title: string;
  name: string;
  control: Control<any>;
};

const EducationLevelController: FC<EducationLevelControllerProps> = ({
  title,
  name,
  control,
}) => {
  const t = useTranslations("EducationLevel.Selects");

  const selects = [
    { label: t("school9"), value: t("school9") },
    { label: t("school11"), value: t("school11") },
    { label: t("lyceum"), value: t("lyceum") },
    { label: t("college"), value: t("college") },
    { label: t("inCompleteHigher"), value: t("inCompleteHigher") },
    { label: t("higherEducation"), value: t("higherEducation") },
    { label: t("master"), value: t("master") },
    { label: t("postgraduate "), value: t("postgraduate ") },
    { label: t("doctoral"), value: t("doctoral") },
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

export default EducationLevelController;
