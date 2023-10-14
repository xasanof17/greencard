"use client";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import FormHeader from "./FormHeader";
import Link from "next/link";
import FormBody from "./FormBody";
import FormImageUpload from "./FormImageUpload";

type FormPicturePlacementProps = {
  title: string;
};

const PicturePlacementForm: FC<FormPicturePlacementProps> = ({ title }) => {
  const { control } = useFormContext();

  const t = useTranslations("PicturePlacement");

  // const onChange = (image: ImageType, addUpdateIndex: number[] | undefined) => {
  //   if (image.length > 0) {
  //     const url = image[0].data_url;
  //     setImageUrl(url);
  //   } else {
  //     setImageUrl(""); // Reset the URL when no image is selected
  //   }

  //   console.log(image, addUpdateIndex);
  //   setImage(image as never[]);
  // };

  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <div className="flex grid-cols-4 flex-col-reverse gap-10 lg:grid">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <FormImageUpload />
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
