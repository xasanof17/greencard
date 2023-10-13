"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, FC, Fragment, SetStateAction } from "react";
import { DialogBody } from ".";

type FormDialogForChildDataProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const FormDialogForChildData: FC<FormDialogForChildDataProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Transition appear show={isOpen} as="div">
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setIsOpen((prev) => !prev)}
      >
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogBody setIsOpen={setIsOpen} />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormDialogForChildData;
