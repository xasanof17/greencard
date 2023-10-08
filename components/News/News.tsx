"use client";
import { usePathname } from "next/navigation";
import NewsCards from "./NewsCards";
import clsx from "clsx";

type NewsProps = {
  title?: boolean;
};

const News = ({ title }: NewsProps) => {
  const pathname = usePathname();

  return (
    <section id="news" role="main" className="container flex flex-col">
      {title && <h2 className="title">News</h2>}
      <div className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3 xl:gap-10">
        <NewsCards />
      </div>
    </section>
  );
};

export default News;
