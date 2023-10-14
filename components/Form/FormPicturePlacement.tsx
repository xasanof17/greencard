"use client";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import FormHeader from "./FormHeader";
import Image from "next/image";
import Link from "next/link";
import FormBody from "./FormBody";
import ImageUploading, { ImageType } from "react-images-uploading";

type FormPicturePlacementProps = {
  title: string;
};

const PicturePlacementForm: FC<FormPicturePlacementProps> = ({ title }) => {
  const { control } = useFormContext();

  const t = useTranslations("PicturePlacement");
  const [image, setImage] = useState([]);
  const maxNumber = 1;

  const onChange = (image: ImageType, addUpdateIndex: number[] | undefined) => {
    // data for submit
    console.log(image, addUpdateIndex);
    setImage(image as never[]);
  };
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <div className="flex grid-cols-4 flex-col-reverse gap-10 lg:grid">
          <ImageUploading
            multiple
            value={image}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div
                // key={i}
                className="col-span-1 flex flex-col items-center justify-center"
              >
                <div className="relative h-[230px] w-[250px] md:w-full xl:h-[270px] xl:w-[250px]">
                  <Image
                    // src={`${image.dataURL}`}
                    src={
                      // imageList.length == 0
                        // ? (imageList[0].dataURL?.toString() as string)
                        "https://greencards.uz/img/avatar.png"
                    }
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
                <button onClick={onImageUpload} className="mt-3">
                  {t("button")}
                </button>
              </div>
            )}
          </ImageUploading>

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
