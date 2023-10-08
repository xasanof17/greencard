"use client";
import { useTranslations } from "next-intl";
import { LuCalendarClock } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const t = useTranslations("Features");
  return (
    <section role="main" id="features" className="py-10 lg:py-20">
      <div className="container flex flex-col">
        <h2 role="heading" className="title mb-5 md:mb-9">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          <FeaturesCard
            Icon={<LuCalendarClock className="h-8 w-8 text-red-500" />}
            title={t("Card1.title")}
            text={t("Card1.text")}
          />
          <FeaturesCard
            Icon={<IoEarthOutline className="h-8 w-8 text-blue-500" />}
            title={t("Card2.title")}
            text={t("Card2.text")}
          />
          <FeaturesCard
            Icon={<BiSolidMessageDetail className="h-8 w-8 text-yellow-300" />}
            title={t("Card3.title")}
            text={t("Card3.text")}
          />
          <FeaturesCard
            Icon={<LuCalendarClock className="h-8 w-8 text-green-500" />}
            title={t("Card4.title")}
            text={t("Card4.text")}
          />
          <FeaturesCard
            Icon={<IoEarthOutline className="h-8 w-8 text-violet-500" />}
            title={t("Card5.title")}
            text={t("Card5.text")}
          />
          <FeaturesCard
            Icon={<BiSolidMessageDetail className="h-8 w-8 text-teal-300" />}
            title={t("Card6.title")}
            text={t("Card6.text")}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
