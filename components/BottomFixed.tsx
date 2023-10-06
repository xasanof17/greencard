"use client";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";

const BottomFixed = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-4 right-4">
      <Button onClick={() => router.push("/form")} className="animate-bounce">
        Anketani to&apos;ldirish
      </Button>
    </div>
  );
};

export default BottomFixed;
