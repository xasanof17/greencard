"use client";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import { GrAddCircle } from "react-icons/gr";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import clsx from "clsx";

type AddChildInputControllerProps = {
  title: string;
  control: Control<any>;
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const AddChildInputController: FC<AddChildInputControllerProps> = ({
  title,
  control,
  className,
  ...props
}) => {
  const variants = {
    baseInput:
      "w-full rounded-md bg-slate-200 border-2 placeholder:font-normal px-3 text-base font-medium uppercase outline-none sm:py-1 hover:ring-1 focus:ring-1",
    button: "flex items-center justify-center group outline-slate-600",
    buttonIcon:
      "text-slate-500 hover:cursor-pointer group-hover:text-blue-500 group-focus:text-blue-500",
  };

  const addedChild = false;

  return (
    <div className="flex w-full flex-col sm:max-w-md">
      <label htmlFor="" className="label">
        {title}
      </label>
      <Controller
        name=""
        control={control}
        render={({ field }) => (
          <div className={clsx("flex items-center", variants.baseInput)}>
            <input
              {...field}
              type="text"
              className="h-full w-full bg-transparent py-2 outline-none placeholder:font-medium placeholder:uppercase placeholder:text-primary sm:py-[5px]"
              placeholder={addedChild ? "Xasanov Javohir" : `Farzand qo'shish`}
              disabled
              {...props}
            />
            {addedChild ? (
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  className={variants.button}
                  onClick={() =>
                    console.log("clicked edit button to re-open modal")
                  }
                >
                  <TbEdit fontSize={23} className={variants.buttonIcon} />
                </button>
                <button
                  type="button"
                  className={variants.button}
                  onClick={() =>
                    console.log("clicked clear button to clear childData")
                  }
                >
                  <IoMdCloseCircleOutline
                    fontSize={23}
                    className={variants.buttonIcon}
                  />
                </button>
              </div>
            ) : (
              <button type="button" className={variants.button}>
                <GrAddCircle fontSize={23} className={variants.buttonIcon} />
              </button>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default AddChildInputController;
