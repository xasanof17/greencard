import { Button } from "@/shared/ui";
import Image from "next/image";

const Banner = () => {
  return (
    <section role="banner" className="py-10 xl:py-20">
      <div className="container relative grid min-h-[300px] md:min-h-[500px] grid-cols-2 ">
        <Image src="/assets/banner.jpg" alt="" fill className="object-cover"/>
        <div className="absolute left-0 top-0 flex h-full flex-col items-start justify-center lg:justify-start px-3 py-10 backdrop-blur-md sm:backdrop-blur-sm md:backdrop-blur-[8px]">
          <h1 className="leading-12 w-full lg:max-w-sm text-xl md:text-4xl font-bold tracking-wide text-white lg:text-primary xl:text-white">
            Greencard DV-2025 Registration Period
          </h1>
          <p className="my-4 md:my-6 text-base md:text-lg xl:text-xl text-white lg:text-primary xl:text-white">
            Greencards.uz sizni Amerika DV Lottery dasturida rasmiy ro{"\u2019"}
            yxatdan o{"\u2019"}tkazadi
          </p>
          <div className="inline-block">
            <Button>Anketani to{"\u2019"}ldirish</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
