"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Note, Timer } from "@/components";

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
