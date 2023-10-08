import { useTranslations } from "next-intl";

type Feature = {
  icon: string;
  title: string;
  text: string;
};

export const FeaturesData = async () => {
  const t = useTranslations("Layout");
  return [
    {
      icon: "",
      title: t("title"),
      text: t("description"),
    },
  ];
};

console.log(FeaturesData());


const features: Feature[] = [
  {
    icon: "",
    title: "Yil davomida ro'yxatga olish",
    text: "DV rasmiy saytida ro'yxatdan o'tish faqatgina kuz faslida bo'lsa, bizning saytimiz orqali siz yilning istalgan paytida anketa to'ldirib qo'yishingiz mumkin.",
  },
  {
    icon: "",
    title: "Yil davomida ro'yxatga olish",
    text: "DV rasmiy saytida ro'yxatdan o'tish faqatgina kuz faslida bo'lsa, bizning saytimiz orqali siz yilning istalgan paytida anketa to'ldirib qo'yishingiz mumkin.",
  },
  {
    icon: "",
    title: "Yil davomida ro'yxatga olish",
    text: "DV rasmiy saytida ro'yxatdan o'tish faqatgina kuz faslida bo'lsa, bizning saytimiz orqali siz yilning istalgan paytida anketa to'ldirib qo'yishingiz mumkin.",
  },
];
export default features;
