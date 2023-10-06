import { Form, Welcome, Block } from "@/components";

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
      />
      <Form />
    </section>
  );
}
