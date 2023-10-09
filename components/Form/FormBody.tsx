import { FC, ReactNode } from "react";
import clsx from "clsx";

type FormBody = {
  children: ReactNode;
  className?: string;
};

const FormBody: FC<FormBody> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,

        "rounded-b-lg border px-3 py-6 sm:p-3 md:px-5 md:py-5",
      )}
    >
      {children}
    </div>
  );
};

export default FormBody;
