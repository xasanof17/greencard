import { FC, InputHTMLAttributes, DetailedHTMLProps } from "react";

type InputProps = {
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex w-full flex-col sm:max-w-xs">
      <label htmlFor="" className="label">
        {label}
      </label>
      <input
        type="text"
        placeholder="Familiya"
        className="w-full rounded-md border-2 px-2 py-[6px] text-base font-medium uppercase outline-none hover:ring-1 focus:border-blue-500 focus:ring-1 sm:py-1"
        {...props}
      />
    </div>
  );
};

export default Input;
