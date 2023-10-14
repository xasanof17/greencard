"use client";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { useTranslations } from "next-intl";
import ImageUploading, { ImageType } from "react-images-uploading";
import Image from "next/image";

const FormImageUpload = () => {
  const t = useTranslations("PicturePlacement");
  const [image, setImage] = useState<ImageType[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");
  const maxNumber = 1;

  const onChange = (
    image: ImageType[],
    addUpdateIndex: number[] | undefined,
  ) => {
    if (image.length > 0) {
      const url = image[0].data_url;
      setImageUrl(url);
    } else {
      setImageUrl(""); // Reset the URL when no image is selected
    }

    setImage(image);
  };
  return (
    <ImageUploading
      multiple
      value={image}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ onImageUpload, onImageUpdate, onImageRemove }) => (
        <>
          <div className="mb-3">
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={260}
                height={250}
                alt="Uploaded Image"
                className="object-contain"
              />
            ) : (
              <Image
                src="https://greencards.uz/img/avatar.png"
                alt=""
                width={260}
                height={250}
                className="object-contain"
              />
            )}
          </div>
          <button
            onClick={onImageUpload}
            className="flex w-full items-center justify-center space-x-3 bg-blue-600 px-3 py-2 text-white"
          >
            <MdCloudUpload className="text-xl" />
            {!imageUrl ? <p>{t("button")}</p> : <p>update image</p>}
          </button>
        </>
      )}
    </ImageUploading>
  );
};

export default FormImageUpload;
