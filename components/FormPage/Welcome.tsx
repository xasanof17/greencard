import Block from "./Block";

const Welcome = () => {
  return (
    <div className="flex flex-col">
      <h1 role="heading" className="title mb-3">
        Electronic Diversity Visa Program
      </h1>
      <Block
        welcome
        title="Welcome"
        text="Our State Department Web site for the 2025 Diversity Visa Program
          (DV-2025) is now open. The entry submission period for DV-2025 is from
          12:00PM EDT (GMT -4) on October 4, 2023 to 12:00PM EST (GMT -5) on
          November 7, 2023. The entry form will only be available for submission
          during this period and this period only. Entries will NOT be accepted
          through the U.S. Postal Service."
      />
    </div>
  );
};

export default Welcome;
