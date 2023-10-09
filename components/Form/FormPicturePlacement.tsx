"use client";
import { FC } from "react";
import { Control, useFormContext } from "react-hook-form";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import Image from "next/image";

type FormPicturePlacementProps = {
  title: string;
};

const PicturePlacementForm: FC<FormPicturePlacementProps> = ({ title }) => {
  const { control } = useFormContext();
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
            <button className="mt-3">upload</button>
          </div>
          <div className="col-span-3 flex flex-col">
            <h3 className="text-lg font-medium text-blue-600 xl:text-xl">
              Fotosurat yuklashning qisqacha qoidalari:
            </h3>
            <p className="my-5 text-base font-medium text-red-500 lg:text-lg">
              DIQQAT: Uy sharoitida tushirilgan rasmlarni yuklamang. Rasm
              fotosalonda tushirilgan bo&apos;lishi kerak.
            </p>
            <p className="text-base font-medium text-[#333] lg:text-lg">
              Yuklanayotgan fotosurat maksimal hajmi <b>240 KB</b> dan
              oshmasligi.
              <br className="block" />
              Fotosurat kengligi kamida <b>600X600 piksel</b> yoki <b>5x5 sm</b>{" "}
              bo&apos;lishi lozim. <br />
              Fotosurat foni oq va ravshan bo&apos;lishi lozim.
              <br />
              Fotosuratni kerakli hajmda kesish va tayyorlash uchun mana bu
              yerga o&apos;ting.
            </p>
          </div>
        </div>
      </FormBody>
    </div>
  );
};

export default PicturePlacementForm;
