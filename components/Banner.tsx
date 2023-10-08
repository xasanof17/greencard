"use client";
import { Button } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import clsx from "clsx";
import Image from "next/image";

type BannerProps = {
  className?: string;
};

const Banner = ({ className }: BannerProps) => {
  const router = useRouter();
  const t = useTranslations("Banner");
  const locale = useLocale();

  const variants = {
    baseHeading:
      "leading-12 w-full text-xl font-bold tracking-wide text-white md:text-4xl xl:text-white",
    uz: locale == "uz" && "",
    en: locale == "uz" && "",
    ru: locale == "uz" && "",
  };

  return (
    <section role="banner" className="py-10 xl:py-20">
      <div
        className={`${
          className ? className : ""
        } container relative grid min-h-[250px] grid-cols-2 overflow-hidden rounded-xl sm:min-h-[300px] md:min-h-[400px]`}
      >
        <Image
          src="/assets/banner.jpg"
          alt="new york image"
          fill
          className="rounded-xl object-cover"
          priority
          sizes="(min-width: 320px) 100vw"
        />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-start justify-center backdrop-blur-sm">
          <div className="px-3 py-10">
            <h1
              className={clsx(
                variants.baseHeading,
                variants.uz,
                variants.en,
                variants.ru,
              )}
            >
              {t("title")}
            </h1>
            <p className="my-4 text-base text-white md:my-6 md:text-lg xl:text-xl xl:text-white">
              {t("text")}
            </p>
            <div className="inline-block">
              <Button onClick={() => router.replace("/form")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
