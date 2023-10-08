"use client";
import { Button } from "@/shared/ui";
import { useRouter } from "next/navigation";

const Opportunity = () => {
  const router = useRouter();

  return (
    <section id="opportunity" role="main" className="bg-blue-700 py-10">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="title mb-5 w-full max-w-lg text-center text-white">
          Don&apos;t miss the opportunity! Fill out an application for a Green
          Card on the website right now.
        </h2>
        <Button onClick={() => router.replace("/form", { scroll: true })} />
      </div>
    </section>
  );
};

export default Opportunity;
