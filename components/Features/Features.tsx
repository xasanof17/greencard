import { useTranslations } from "next-intl";
import FeaturesCard from "./FeaturesCards";

const Features = () => {
  const t = useTranslations("Features");
  return (
    <section role="main" id="features" className="py-10 lg:py-20">
      <div className="container flex flex-col">
        <h2 role="heading" className="title mb-5 md:mb-9">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-5">
          <FeaturesCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
