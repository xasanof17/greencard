"use client";
import { ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Note = () => {
  const [enabled, setEnabled] = useState(false);
  const t = useTranslations("Application.Note");
  return (
    <>
      <Callout
        className="my-3"
        title="Payment"
        icon={ExclamationIcon}
        color="rose"
      >
        {t("warningText")}
      </Callout>
      <div className="mt-4 flex items-center space-x-2">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <p className="text-sm font-medium sm:text-base">
          {t.rich("title", {
            Link: (chunks) => (
              <Link href="/" className="inline-block text-blue-500">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </div>
    </>
  );
};

export default Note;
