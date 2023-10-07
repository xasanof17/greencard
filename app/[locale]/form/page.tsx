import { Form, Welcome, Block, Policy } from "@/components";
import { useTranslations } from "next-intl";

export default function FormPage() {
  const t = useTranslations("Form");
  return (
    <section id="formpage" role="main" className="container py-10">
      <Welcome
        heading={t("heading")}
        title={t("Welcome.title")}
        text={t("Welcome.text")}
      />
      <p className="mb-4 text-center text-base font-bold text-black">
        {t("text")}
      </p>
      <Block
        title={t("Entry.title")}
        text={t("Entry.text")}
        btnText={t("Entry.button")}
        className="my-5"
      />
      <Block
        title={t("Photo.title")}
        text={t("Photo.text")}
        btnText={t("Photo.button")}
        className="my-5"
      />
      <Block
        title={t("Begin.title")}
        text={t("Begin.text")}
        btnText={t("Begin.button")}
        className="my-5"
        beginEntry
      />
      <Block
        title={t("StatusCheck.title")}
        text={t("StatusCheck.text")}
        btnText={t("StatusCheck.button")}
        className="my-5"
      />
      <div className="mt-16 border-y-2 py-5">
        <Policy
          title="PAPERWORK REDUCTION ACT"
          text="Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for
searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not
have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or
recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov."
        />
        <Policy
          title="CONFIDENTIALITY STATEMENT"
          text="Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for
searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not
have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or
recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov."
        />
        <Policy
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
