import { Button } from "@/shared/ui";
import { FC } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormBlockProps = {
  welcome?: boolean;
  title: string;
  text: string;
  className?: string;
  btnText?: string;
  beginEntry?: boolean;
  onClick?: () => void;
};

const FormBlock: FC<FormBlockProps> = ({
  welcome,
  title,
  text,
  className,
  btnText,
  beginEntry,
  onClick,
}) => {
  return (
    <div className={`flex flex-col ${className ? className : ""}`}>
      <FormHeader title={title} welcome={welcome} />
      <FormBody>
        <p className="mb-4 text-center text-base font-normal text-[#333]">
          {text}
        </p>
        {!welcome && (
          <div className="flex items-center justify-center">
            <Button onClick={onClick} beginEntry={beginEntry}>
              {btnText}
            </Button>
          </div>
        )}
      </FormBody>
    </div>
  );
};

export default FormBlock;
