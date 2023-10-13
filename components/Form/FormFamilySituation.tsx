"use client";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  AddChildInputController,
  MaritalStatusController,
} from "@/shared/controllers";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui";
import { FormDialogForChildData } from "./Dialog";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormFamilySituationProps = {
  title: string;
};

const FormFamilySituation: FC<FormFamilySituationProps> = ({ title }) => {
  const { control } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("FamilySituation");

  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="space-y-7 sm:space-y-4">
        <MaritalStatusController
          name="maritalStatus.status"
          title={title}
          control={control}
        />
        <AddChildInputController
          name="children"
          title={t("AddChild.label")}
          control={control}
          setIsOpen={setIsOpen}
        />
        <div className="block sm:inline-block">
          <Button type="submit" className="w-full">
            {t("button")}
          </Button>
        </div>
        {isOpen && (
          <FormDialogForChildData isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </FormBody>
    </div>
  );
};

export default FormFamilySituation;
