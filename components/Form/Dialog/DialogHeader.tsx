"use client";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

type DialogHeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogHeader: FC<DialogHeaderProps> = ({ setIsOpen }) => {
  const t = useTranslations("PersonalData");
  return (
    <div className="flex items-center justify-between space-x-3">
      <Dialog.Title
        as="h3"
        className="text-base font-medium leading-6 text-gray-900 md:text-lg"
      >
        Farzandingiz haqida ma&apos;lumot kiritish
      </Dialog.Title>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center rounded-full bg-slate-200 p-2"
      >
        <AiOutlineClose className="text-base text-black md:text-[20px]" />
      </button>
    </div>
  );
};

export default DialogHeader;
