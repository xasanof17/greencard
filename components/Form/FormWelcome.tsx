import { FC } from "react";
import FormBlock from "./FormBlock";

type FormWelcomeProps = {
  heading: string;
  title: string;
  text: string;
};

const FormWelcome: FC<FormWelcomeProps> = ({ heading, title, text }) => {
  return (
    <div className="flex flex-col">
      <h1 role="heading" className="title mb-3">
        {heading}
      </h1>
      <FormBlock welcome title={title} text={text} />
    </div>
  );
};

export default FormWelcome;
