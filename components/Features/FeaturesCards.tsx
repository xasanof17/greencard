import { useTranslations } from "next-intl";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";

type FeaturesData = {
  Icon: ReactElement<IconType, any>;
  title: string;
  text: string;
};

const FeaturesCards = () => {
  const t = useTranslations("Features");

  const featuresData: FeaturesData[] = [
    {
      Icon: <LuCalendarClock className="h-8 w-8 text-red-500" />,
      title: t("Card1.title"),
      text: t("Card1.text"),
    },
    {
      Icon: <IoEarthOutline className="h-8 w-8 text-blue-500" />,
      title: t("Card2.title"),
      text: t("Card2.text"),
    },
    {
      Icon: <BiSolidMessageDetail className="h-8 w-8 text-yellow-300" />,
      title: t("Card3.title"),
      text: t("Card3.text"),
    },
    {
      Icon: <LuCalendarClock className="h-8 w-8 text-green-500" />,
      title: t("Card4.title"),
      text: t("Card4.text"),
    },
    {
      Icon: <IoEarthOutline className="h-8 w-8 text-violet-500" />,
      title: t("Card5.title"),
      text: t("Card5.text"),
    },
    {
      Icon: <BiSolidMessageDetail className="h-8 w-8 text-teal-500" />,
      title: t("Card6.title"),
      text: t("Card6.text"),
    },
  ];
  return (
    <>
      {featuresData.map(({ Icon, text, title }, i) => (
        <div
          key={i}
          className="rounded-lg border bg-white p-3 shadow-md transition-all duration-200 ease-in hover:shadow-sm lg:p-5"
        >
          {Icon}
          <h3
            role="heading"
            className="my-3 text-base font-bold text-black lg:text-lg"
          >
            {title}
          </h3>
          <p className="text-sm font-medium text-black">{text}</p>
        </div>
      ))}
    </>
  );
};

export default FeaturesCards;
