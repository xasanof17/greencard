import { Banner, Service } from "@/components";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("Banner");
  return (
    <>
      <Banner
        title="Service page"
        className="my-0"
        height="h-[150px] sm:min-h-[200px]"
      />
      <Service />
    </>
  );
}
