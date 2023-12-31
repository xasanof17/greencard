"use client";
import { FormWelcome, FormBlock, FormPolicy, BottomFixed } from "@/components";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const t = useTranslations("Form");
  const router = useRouter();
  return (
    <section id="formpage" role="main" className="container py-10">
      <FormWelcome
        heading={t("heading")}
        title={t("Welcome.title")}
        text={t("Welcome.text")}
      />
      <p className="my-4 text-center text-base font-bold text-black">
        {t("text")}
      </p>
      <FormBlock
        title={t("Entry.title")}
        text={t("Entry.text")}
        btnText={t("Entry.button")}
        className="my-5"
        onClick={() => router.push("/")}
      />
      <FormBlock
        title={t("Photo.title")}
        text={t("Photo.text")}
        btnText={t("Photo.button")}
        className="my-5"
        onClick={() => router.push("https://tsg.phototool.state.gov/photo")}
      />
      <FormBlock
        title={t("Begin.title")}
        text={t("Begin.text")}
        btnText={t("Begin.button")}
        className="my-5"
        beginEntry
        onClick={() => router.push("/form/application")}
      />
      <FormBlock
        title={t("StatusCheck.title")}
        text={t("StatusCheck.text")}
        btnText={t("StatusCheck.button")}
        className="my-5"
        onClick={() => router.push("/")}
      />
      <div className="mt-16 border-y-2 py-5">
        <FormPolicy
          title="PAPERWORK REDUCTION ACT"
          text="Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for
searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not
have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or
recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov."
        />
        <FormPolicy
          title="CONFIDENTIALITY STATEMENT"
          text="Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for
searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not
have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or
recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov."
        />
        <FormPolicy
          title="Privary policy"
          text="Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for
searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not
have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or
recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov."
        />
      </div>
    </section>
  );
}
