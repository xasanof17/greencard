"use client";
import { useTranslations } from "next-intl";
import { ErrorProps } from "next/error";
import { FC } from "react";

interface Props extends ErrorProps {
  error: string;
  statusCode: number;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset, statusCode }) => {
  const t = useTranslations("Error");

  return (
    <div className="container flex min-h-[500px] items-center justify-center">
      <h1 className="title">
        {t("title")} {statusCode}
      </h1>
      <button onClick={reset} className="btn-primary">
        {t("retry")}
      </button>
    </div>
  );
};
export default Error;
