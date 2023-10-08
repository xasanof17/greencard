"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Note, Timer } from "@/components";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const Application = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-10"
    >
      <Link href="/form" className="mb-5 flex items-center space-x-2">
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
