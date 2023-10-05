import { Button } from "@/shared/ui";
import Image from "next/image";

const Banner = () => {
  return (
    <section role="banner" className="py-10 xl:py-20">
      <div className="container relative grid min-h-[300px] grid-cols-2 overflow-hidden rounded-xl md:min-h-[500px] ">
        <Image
          src="/assets/banner.jpg"
          alt=""
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute left-0 top-0 flex h-full flex-col items-start justify-center px-3 py-10 backdrop-blur-md sm:backdrop-blur-sm md:backdrop-blur-[8px] lg:justify-start">
          <h1 className="leading-12 w-full text-xl font-bold tracking-wide text-white md:text-4xl lg:max-w-sm lg:text-primary xl:text-white">
            Greencard DV-2025 Registration Period
          </h1>
          <p className="my-4 text-base text-white md:my-6 md:text-lg lg:text-primary xl:text-xl xl:text-white">
            Greencards.uz sizni Amerika DV Lottery dasturida rasmiy ro&apos;
            yxatdan o&apos;tkazadi
          </p>
          <div className="inline-block">
            <Button>Anketani to&apos;ldirish</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
