"use client";
import { Dispatch, FC, SetStateAction } from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn-primary group relative overflow-hidden outline-none ring-blue-500 ring-offset-2 hover:ring-2 focus:ring-2 ${
        className && className
      }`}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
