import { Button } from "@/shared/ui";
import React, { FC } from "react";

type BlockProps = {
  welcome?: boolean;
  title: string;
  text: string;
  className?: string;
  btnText?: string;
  beginEntry?: boolean;
  onClick?: () => void;
};

const Block: FC<BlockProps> = ({
  welcome,
  title,
  text,
  className,
  btnText,
  beginEntry,
  onClick,
}) => {
  const variants = {
    welcome:
      "border-[#9ACFEA] rounded-md bg-gradient-to-b from-blue-100 to-blue-200",
    notWelcome:
      "border-slate-300 rounded-t-md bg-gradient-to-b from-slate-100 to-slate-200",
    base: "w-full px-5 py-2 md:py-3 border",
  };
  return (
    <div className={`flex flex-col ${className ? className : ""}`}>
      <div
        className={`${variants.base} ${
          welcome ? variants.welcome : variants.notWelcome
        }`}
      >
        <h2 className="text-center text-lg font-medium capitalize text-primary md:text-[22px]">
          {title}
        </h2>
      </div>
      <div
        className={`${
          !welcome
            ? "flex flex-col items-center justify-center border p-2 pb-7"
            : "px-2"
        }`}
      >
        <p className="my-4 text-center text-base font-normal text-[#333]">
          {text}
        </p>
        {!welcome && (
          <div className="flex items-center justify-center">
            <Button onClick={onClick} beginEntry={beginEntry}>
              {btnText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Block;
