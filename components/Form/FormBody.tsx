import { FC, ReactNode } from "react";

type FormBody = {
  children: ReactNode;
};

const FormBody: FC<FormBody> = ({ children }) => {
  return (
    <div className="rounded-b-lg border px-3 py-6 sm:p-3 md:px-5 md:py-5">
      {children}
    </div>
  );
};

export default FormBody;
