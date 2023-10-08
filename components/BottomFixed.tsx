"use client";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

type BottomFixedProps = {
  notShow?: boolean;
};

const BottomFixed = ({ notShow }: BottomFixedProps) => {
  const router = useRouter();
  return (
    <div className={clsx("fixed bottom-4 right-4", notShow ? "hidden" : "")}>
      <Link
        href="tel:+99900198505"
        className="flex animate-bounce items-center justify-center rounded-full bg-gradient-to-t from-blue-600 to-blue-800 p-3 pl-3 ring-blue-500"
      >
        <FaPhoneAlt className="text-2xl text-white" />
      </Link>
    </div>
  );
};

export default BottomFixed;
