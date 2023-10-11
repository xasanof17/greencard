"use client";
import { FC, useEffect, useState } from "react";
import {
  CountrySelectController,
  TextInputController,
} from "@/shared/controllers";
import { useFormContext } from "react-hook-form";
import { getCountries } from "@/functions";
import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import { useTranslations } from "next-intl";

type FormResidenceAddressProps = {
  title: string;
};

const FormResidenceAddress: FC<FormResidenceAddressProps> = ({ title }) => {
  const { control } = useFormContext();
  const t = useTranslations("ResidenceAddress");
  // const [countries, setCountries] = useState([]);

  const token =
    "d4eH0ylNoAqfeQ-v-eKtpNsyKQ0WqDVc3ysiBSsQdEUczpBpKId6l-I74WPwlFJxJd4";
  const token2 =
    "1I4tbmlVDAjTqTO1sVM2ws7uJioR-LXyXFtxXvnRtPvZRab50nvFYQuV_NIfaufM2Ko";

  // const countries = await getCountries();
  // console.log(countries);

  // useEffect(() => {
  //   async function () => {
  //  const countries = await getCountries();
  // }

  //   fetchData();
  // }, []);

  return (
    <div className="my-10 flex flex-col">
      <FormHeader title={title} />
      <FormBody className="space-y-4">
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <CountrySelectController
            label={t("Select.Country")}
            control={control}
          />
          <CountrySelectController
            label={t("Select.State")}
            control={control}
          />
          <CountrySelectController
            label={t("Select.District")}
            control={control}
          />
        </div>
        <div className="flex flex-col items-start space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <TextInputController
            name="residenceAddress.addressLine"
            label={t("Address.label")}
            control={control}
            placeholder={t("Address.placeholder")}
          />
          <TextInputController
            name="residenceAddress.phoneNumber"
            label={t("phoneNumber")}
            control={control}
            className="sm:max-w-xs"
            phonePattern
          />
        </div>
      </FormBody>
    </div>
  );
};

export default FormResidenceAddress;
