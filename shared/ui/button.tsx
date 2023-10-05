"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ className, children }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/form")}
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
