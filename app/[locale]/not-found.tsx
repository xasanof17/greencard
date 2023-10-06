"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  return (
    <div className="container flex min-h-[500px] flex-col items-center justify-center">
      <h1 className="title mb-3">404! {t("title")}</h1>
      <button onClick={() => router.push("/")} className="btn-primary capitalize">
        {t("back")}
      </button>
    </div>
  );
}
