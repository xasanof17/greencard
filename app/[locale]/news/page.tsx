import { Banner, News } from "@/components";

export default function NewsPage() {
  return (
    <>
      <Banner
        title="News page"
        className="my-0"
        height="h-[150px] sm:min-h-[200px]"
      />
      <News />
    </>
  );
}
