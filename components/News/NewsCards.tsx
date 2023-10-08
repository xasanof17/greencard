import Image from "next/image";

const NewsCards = () => {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex select-none flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-[#0000000a] transition-all duration-150 hover:shadow-xl"
        >
          <div className="relative h-[220px] w-full lg:h-[170px] xl:h-[200px]">
            <Image
              src="/opengraph-image.jpg"
              alt="news image"
              fill
              sizes="100vw"
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="flex flex-col p-3 lg:p-5">
            <span className="mb-3 text-sm font-medium text-gray-400">
              01.10.2023
            </span>
            <h3 className="text-base font-medium uppercase text-black">
              1-OKTABR — USTOZ VA MURABBIYLAR KUNI MUBORAK BO&apos;LSIN!
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsCards;
