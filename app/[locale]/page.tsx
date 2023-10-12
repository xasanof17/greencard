import { Application, Banner, Faq, Features, News } from "@/components";
// import { redirect } from "next/navigation";

export default function Home() {
  // return redirect("/form/application");
  return <Application />;
  return (
    <>
      <Banner />
      <Features />
      <News title />
      <Faq />
    </>
  );
}
