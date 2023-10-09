"use client";
import React, { FC } from "react";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";

type FormEducationLevelProps = {
  title: string;
};

const FormEducationLevel: FC<FormEducationLevelProps> = ({ title }) => {
  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody>
        <p>educationLevel</p>
      </FormBody>
    </div>
  );
};

export default FormEducationLevel;
