import { FC } from "react";
import FormHeader from "./FormHeader";

type ResidenceAddressFormProps = {
  title: string;
};

const ResidenceAddressForm: FC<ResidenceAddressFormProps> = ({ title }) => {
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
    </div>
  );
};

export default ResidenceAddressForm;
