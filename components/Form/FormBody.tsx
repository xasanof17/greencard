import { FC, ReactNode } from "react";
import clsx from "clsx";

type FormBodyProps = {
  children: ReactNode;
  className?: string;
};

const FormBody: FC<FormBodyProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,

        "rounded-b-lg border px-3 py-6 sm:p-3 md:px-5 md:py-10",
      )}
    >
      {children}
    </div>
  );
};

export default FormBody;
