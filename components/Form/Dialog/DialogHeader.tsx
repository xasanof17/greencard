"use client";

import { Dialog } from "@headlessui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

type DialogHeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogHeader: FC<DialogHeaderProps> = ({ setIsOpen }) => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Farzandingiz haqida ma&apos;lumot kiritish
      </Dialog.Title>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center"
      >
        <AiOutlineClose className="text-[20px] text-black" />
      </button>
    </>
  );
};

export default DialogHeader;
