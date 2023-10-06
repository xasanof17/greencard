"use client";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { ChangeEvent, FC } from "react";

type Props = {
  locale: "en" | "ru" | "uz";
};

const SwitcherLanguage: FC<Props> = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };
  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="uz">Uzbek</option>
    </select>
  );
};

export default SwitcherLanguage;
