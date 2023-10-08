import Block from "./FormBlock";

type Props = {
  heading: string;
  title: string;
  text: string;
};

const Welcome = ({ heading, title, text }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 role="heading" className="title mb-3">
        {heading}
      </h1>
      <Block welcome title={title} text={text} />
    </div>
  );
};

export default Welcome;
