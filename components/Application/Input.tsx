import { FC } from "react";

type InputProps = {
  label: string;
};

const Input: FC<InputProps> = ({ label }) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="mb-1 ml-1 text-xs font-medium uppercase">
        {label}
      </label>
      <input
        type="text"
        placeholder="Familiya"
        className="w-full rounded-md border-2 px-2 py-1 text-base font-medium uppercase outline-none hover:ring-1 focus:border-blue-500 focus:ring-1"
      />
    </div>
  );
};

export default Input;
