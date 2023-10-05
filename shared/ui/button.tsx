import { FC } from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      type="button"
      className={`btn-primary group relative overflow-hidden ${
        className && className
      }`}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40" />
      <span className="relative">{children}</span>
    </button>
  );
};

export default Button;
