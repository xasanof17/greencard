"use client";
import { FC } from "react";
import { RadioInputController } from "@/shared/controllers";
import { IoIosMan, IoIosWoman } from "react-icons/io";
import { useFormContext } from "react-hook-form";

type GenderRadiosProps = {};

const GenderRadios: FC<GenderRadiosProps> = () => {
  const { control } = useFormContext();
  return (
    <>
      <RadioInputController
        label="Man"
        // value="man"
        control={control}
        // checked={selectedGender === "man"}
        // onChange={handleGenderChange}
        Icon={IoIosMan}
      />
      <RadioInputController
        label="Woman"
        // value="woman"
        control={control}
        // checked={selectedGender === "woman"}
        // onChange={handleGenderChange}
        Icon={IoIosWoman}
      />
    </>
  );
};

export default GenderRadios;
