import { FC } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type PicturePlacementProps = {
  title: string;
};

const PicturePlacementForm: FC<PicturePlacementProps> = ({ title }) => {
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <div className="grid grid-cols-4 gap-10 space-y-5">salom</div>
      </FormBody>
    </div>
  );
};

export default PicturePlacementForm;
