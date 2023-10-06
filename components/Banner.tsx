import { Button } from "@/shared/ui";
import Image from "next/image";

type BannerProps = {
  className?: string;
};

const Banner = ({ className }: BannerProps) => {
  return (
    <section role="banner" className="py-10 xl:py-20">
      <div
        className={`${
          className ? className : ""
        } container relative grid min-h-[300px] grid-cols-2 overflow-hidden rounded-xl md:min-h-[500px]`}
      >
        <Image
          src="/assets/banner.jpg"
          alt="new york image"
          fill
          className="rounded-xl object-cover"
          priority
          sizes="(min-width: 320px) 100vw"
        />
        <div className="absolute left-0 top-0 flex h-full flex-col items-start justify-center backdrop-blur-sm lg:justify-start">
          <div className="px-3 py-10">
            <h1 className="leading-12 w-full text-xl font-bold tracking-wide text-white md:text-4xl lg:max-w-sm xl:text-white">
              Greencard DV-2025 Registration Period
            </h1>
            <p className="my-4 text-base text-white md:my-6 md:text-lg xl:text-xl xl:text-white">
              Greencards.uz sizni Amerika DV Lottery dasturida rasmiy ro&apos;
              yxatdan o&apos;tkazadi
            </p>
            <div className="inline-block">
              <Button>Anketani to&apos;ldirish</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
