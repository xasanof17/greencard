"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

type FormPicturePlacementProps = {
  title: string;
};

const PicturePlacementForm: FC<FormPicturePlacementProps> = ({ title }) => {
  const { control } = useFormContext();

  const t = useTranslations("PicturePlacement");
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <div className="flex grid-cols-4 flex-col-reverse gap-10 lg:grid">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="relative h-[230px] w-[250px] md:w-full xl:h-[270px] xl:w-[250px]">
              <Image
                src="https://greencards.uz/img/avatar.png"
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <button className="mt-3">{t("button")}</button>
          </div>
          <div className="col-span-3 flex flex-col">
            <h3 className="text-lg font-medium text-blue-600 xl:text-xl">
              {t("title")}
            </h3>
            <p className="my-5 text-base font-medium text-red-500 lg:text-lg">
              {t.rich("text2", {
                span: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <p className="text-base font-medium text-[#333] lg:text-lg">
              {t.rich("text3", {
                span: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <p className="text-base font-medium text-[#333] lg:text-lg">
              {t("text4")}
            </p>
            <p className="text-base font-medium text-[#333] lg:text-lg">
              {t.rich("text5", {
                link: (chunks) => (
                  <Link href="/" className="font-bold text-blue-500">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </div>
        </div>
      </FormBody>
    </div>
  );
};

export default PicturePlacementForm;
