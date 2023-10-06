"use client";
import clsx from "clsx";
import { Select, SelectItem } from "@tremor/react";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { FC } from "react";

type Props = {
  locale: string;
  className?: string;
};

const SwitcherLanguage: FC<Props> = ({ locale, className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === locale;
  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
  };

  return (
    <Select
      value={locale}
      defaultValue="en"
      onValueChange={(value) => handleChange(value)}
      className={`w-auto ${className ? className : ""}`}
    >
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="ru">Русский</SelectItem>
      <SelectItem value="uz">Uzbek</SelectItem>
    </Select>
  );
};

export default SwitcherLanguage;
