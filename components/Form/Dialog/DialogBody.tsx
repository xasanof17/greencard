"use client";
import { TextInputController } from "@/shared/controllers";
import { Dialog } from "@headlessui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { DialogHeader } from ".";

type DialogBodyProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DialogBody: FC<DialogBodyProps> = ({ setIsOpen }) => {
  const { control } = useFormContext();
  const variants = {
    sides: "flex flex-col space-y-4",
  };
  return (
    <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
      <DialogHeader setIsOpen={setIsOpen} />
      <div className="my-4 grid grid-cols-2 gap-10">
        <div className={variants.sides}>
          <TextInputController name="lastName" label="Familiya" control={control} />
        </div>
        <div className={variants.sides}>
          <TextInputController name="firstName" label="Ism" control={control} />
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Got it, thanks!
        </button>
      </div>
    </Dialog.Panel>
  );
};

export default DialogBody;
