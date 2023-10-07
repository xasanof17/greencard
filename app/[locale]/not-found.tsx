"use client";
import { Button } from "@/shared/ui";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  return (
    <div className="container flex min-h-[500px] flex-col items-center justify-center">
      <h1 role="heading" className="title mb-3">
        404! {t("title")}
      </h1>
      <Button
        onClick={() => router.push("/")}
        className="btn-primary capitalize"
      >
        {t("back")}
      </Button>
    </div>
  );
}
