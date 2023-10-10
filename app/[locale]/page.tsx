import { Banner, Faq, Features, News } from "@/components";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Banner");
  return (
    <>
      <Banner title={t("title")} text={t("text")} />
      <Features />
      <News title />
      <Faq />
    </>
  );
}
