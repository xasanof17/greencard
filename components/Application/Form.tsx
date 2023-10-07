import { FC } from "react";
import Input from "./Input";

type FormProps = {
  title: string;
};

const Form: FC<FormProps> = ({ title }) => {
  return (
    <div className="my-3 flex flex-col">
      <div className="flex w-full items-center justify-start rounded-t-md border border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200 px-5 py-3">
        <h2 className="text-center text-lg font-medium uppercase text-primary">
          {title}
        </h2>
      </div>
      <div className="flex flex-col space-y-5 border p-4 sm:p-3 md:p-5">
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <Input label="Familiyangiz (Ingliz tilida)" />
          <Input label="Ismingiz (Ingliz tilida)" />
        </div>
        <div className="flex flex-col justify-start space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
          <Input label="Familiyangiz (Ingliz tilida)" />
          <Input label="Ismingiz (Ingliz tilida)" />
        </div>
      </div>
    </div>
  );
};

export default Form;
