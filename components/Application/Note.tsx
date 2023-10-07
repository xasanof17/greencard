"use client";
import { ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

const Note = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <Callout
        className="my-3"
        title="Payment"
        icon={ExclamationIcon}
        color="rose"
      >
        Diqqat! Sayt orqali Green Card anketasini to`ldirish pulli. Oilaviy
        anketa 120 000 so`m, yakka bo`ydoq 90 000 so`m. To'lov anketa
        to'ldirilgandan keyin Click & Payme orqali amalga oshirilishi shart.
        To`lovni amalga oshirilmagan anketalar ro'yxatdan o'tkazilmaydi.
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
        <p className="text-base font-medium">
          Men lotereyada ishtirok etish{" "}
          <Link href="/" className="inline-block text-blue-500">
            shartlariga
          </Link>{" "}
          roziman.{" "}
        </p>
      </div>
    </>
  );
};

export default Note;
