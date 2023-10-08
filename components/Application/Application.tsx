import { Form, Note, Timer } from "@/components";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";

const Application = () => {
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-6 md:py-10"
    >
      <Link href="/form" className="mb-7 flex items-center space-x-2 md:mb-5">
        <BiLeftArrowAlt fontSize={20} /> <span>Back to Form</span>
      </Link>
      <h1 className="title">Welcome to Application page</h1>
      <Timer />
      <Note />
      <form className="my-10">
        <Form title="Shaxsiy ma'lumotlar" />
      </form>
    </section>
  );
};

export default Application;
