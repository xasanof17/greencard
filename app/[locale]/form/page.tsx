import { Form, Welcome, Block, Policy } from "@/components";

export default function FormPage() {
  return (
    <section id="formpage" role="main" className="container py-10">
      <Welcome />
      <p className="mb-4 text-center text-base font-bold text-black">
        After reading the instructions, click the &quot;Begin Entry&quot; button
        below to enter the DV Program.
      </p>
      <Block
        title="Entry Instructions"
        text="Please read the DV-2025 Entry Instructions carefully. Entrants may be disqualified for not completing the entry form correctly or by submitting more than one entry. Use the link below to view the instructions."
        btnText="DV-2025 Instructions"
        className="my-5"
      />
      <Block
        title="Photo Instructions"
        text="Before beginning the entry process, verify that your picture and pictures for any dependents fully comply with DV entry photo requirements
        included in the DV-2025 instructions.  Your case will be disqualified if you submit a non-compliant photo.  For examples of acceptable photos,
        click the button below."
        className="my-5"
        btnText="Photo Examples"
      />
      <Block
        title="Entry Form"
        text="The entry form is prepared in two parts, one for the primary Entrant and one for derivatives (if any). Each part must be completed correctly and
        completely before going to the next part. After all parts are completed, the entry will be submitted to the DV-2025 Processing Center. Click the
        link below to begin the entry process."
        btnText="Begin Entry"
        beginEntry
        className="my-5"
      />
      <Block
        title="DV Entrant Status Check"
        text="DV-2025 Entrants may enter their confirmation information through
        the link below starting at noon (EDT) on May 4, 2024. The DV-
        2025 registration period opens on October 4, 2023, and closes on
        November 7, 2023. DV-2025 Entrants should keep their
        confirmation number until at least September 30, 2025."
        btnText="Check Status"
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
