import { FC } from "react";
import { RadioInputController } from "@/shared/controllers";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { useFormContext } from "react-hook-form";

const GenderRadios: FC = () => {
  const { control } = useFormContext();

  return (
    <>
      <RadioInputController
        label="Man"
        name="gender"
        value="man"
        control={control}
        Icon={IoIosMan}
      />
      <RadioInputController
        label="Woman"
        name="gender"
        value="woman"
        control={control}
        Icon={IoIosWoman}
      />
    </>
  );
};

export default GenderRadios;
