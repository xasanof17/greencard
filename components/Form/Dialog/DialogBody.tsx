"use client";
import {
  CountrySelectController,
  MonthInputController,
  NumInputController,
  TextInputController,
  YearInputController,
} from "@/shared/controllers";
import { Dialog } from "@headlessui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { DialogHeader } from ".";
import { Button } from "@/shared/ui";
import GenderRadios from "../GenderRadios";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

type DialogBodyProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogBody: FC<DialogBodyProps> = ({ setIsOpen }) => {
  const { control } = useFormContext();
  const locale = useLocale();
  const t = useTranslations("PersonalData");
  const variants = {
    sides: "flex flex-col space-y-4",
  };
  return (
    <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-2xl transition-all md:min-w-[500px] md:p-6 lg:min-w-[900px]">
      <DialogHeader setIsOpen={setIsOpen} />
      <div className="my-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
        <div className={variants.sides}>
          <TextInputController
            name="lastName"
            label={
              locale == "en" || locale == "ru"
                ? t("surname.label").slice(4)
                : t("surname.label")
            }
            placeholder={t("surname.placeholder")}
            control={control}
          />
          <div className="flex flex-col justify-start sm:flex-col">
            <label className="label">{t("gender.title")}</label>
            <div className="grid w-full grid-cols-2 items-center space-x-4 sm:max-w-xs">
              <GenderRadios />
            </div>
          </div>
          <div className="flex w-[250px] flex-col items-start">
            <label className="label">Image</label>
            <div className="relative mb-3 h-[250px] w-full">
              <Image
                src="/opengraph-image.jpg"
                fill
                alt="img"
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <Button className="w-full">upload</Button>
          </div>
        </div>
        <div className={variants.sides}>
          <TextInputController
            name="firstName"
            label={
              locale == "en" || locale == "ru"
                ? t("name.label").slice(4)
                : t("name.label")
            }
            placeholder={t("name.placeholder")}
            control={control}
          />
          <div className="flex flex-col">
            <label htmlFor="birthday.label" className="label">
              {locale == "en" || locale == "ru"
                ? t("birhday.label").slice(4)
                : t("birhday.label")}
            </label>
            <div className="flex flex-1 flex-col space-y-3 sm:items-start lg:flex-row lg:space-x-2 lg:space-y-0">
              <NumInputController
                name="dateOfBirth.day"
                className="sm:max-w-[40px]"
                control={control}
                placeholder="24"
              />
              <MonthInputController
                name="dateOfBirth.month"
                control={control}
              />
              <YearInputController name="dateOfBirth.year" control={control} />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start space-y-4">
            <CountrySelectController
              label={
                locale == "en" || locale == "ru"
                  ? t("placeOfBirth.country").slice(4)
                  : t("placeOfBirth.country")
              }
              control={control}
            />
            <CountrySelectController
              label={
                locale == "en" || locale == "ru"
                  ? t("placeOfBirth.state").slice(4)
                  : t("placeOfBirth.state")
              }
              control={control}
            />
            <CountrySelectController
              label={
                locale == "en" || locale == "ru"
                  ? t("placeOfBirth.district").slice(4)
                  : t("placeOfBirth.district")
              }
              control={control}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-3">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Close
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Save
        </button>
      </div>
    </Dialog.Panel>
  );
};

export default DialogBody;
