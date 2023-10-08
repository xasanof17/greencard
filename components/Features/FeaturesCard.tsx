import { ReactElement } from "react";
import { IconType } from "react-icons";
// import { useTranslations } from "next-intl";
// import { LuCalendarClock } from "react-icons/lu";
// import { IoEarthOutline } from "react-icons/io5";
// import { BiSolidMessageDetail } from "react-icons/bi";

type FeaturesData = {
  Icon: ReactElement<IconType, any>;
  title: string;
  text: string;
};

const FeaturesCard = ({Icon, title, text}: FeaturesData) => {
  // const t = useTranslations("Features");

  // const featuresData: FeaturesData[] = [
  //   {
  //     Icon: <LuCalendarClock className="h-8 w-8 text-red-500" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  //   {
  //     Icon: <IoEarthOutline className="h-8 w-8 text-blue-500" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  //   {
  //     Icon: <BiSolidMessageDetail className="h-8 w-8 text-yellow-300" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  //   {
  //     Icon: <LuCalendarClock className="h-8 w-8 text-green-500" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  //   {
  //     Icon: <IoEarthOutline className="h-8 w-8 text-violet-500" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  //   {
  //     Icon: <BiSolidMessageDetail className="h-8 w-8 text-teal-500" />,
  //     title: "some title here",
  //     text: "some description here",
  //   },
  // ];
  return (
    <>
      {/* {featuresData.map(({ Icon, text, title }, i) => ( */}
        <div
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
      {/* ))} */}
    </>
  );
};

export default FeaturesCard;
