"use client";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";
import clsx from "clsx";

type BottomFixedProps = {
  notShow?: boolean;
};

const BottomFixed = ({ notShow }: BottomFixedProps) => {
  const router = useRouter();
  return (
    <div className={clsx("fixed bottom-4 right-4", notShow ? "hidden" : "")}>
      <Button onClick={() => router.push("/form")} className="animate-bounce" />
    </div>
  );
};

export default BottomFixed;
