"use client";
import { useTranslations } from "next-intl";
import { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  beginEntry?: boolean;
};

const Button: FC<ButtonProps> = ({
  type,
  className,
  children,
  onClick,
  beginEntry,
}) => {
  const t = useTranslations("Buttons");

  const variants = {
    primary: "bg-gradient-to-t from-blue-600 to-blue-800 ring-blue-500",
    beginEntry: "bg-green-500 ring-green-500 animate-bounce",
  };
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={clsx(
        "btn-primary group relative overflow-hidden text-white outline-none ring-offset-2 hover:ring-2 focus:ring-2",
        className,
        beginEntry ? variants.beginEntry : variants.primary,
      )}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
      <span className="relative">{children ? children : t("submit")}</span>
    </button>
  );
};

export default Button;
