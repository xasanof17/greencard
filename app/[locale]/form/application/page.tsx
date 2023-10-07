"use client";
import { Timer } from "@/components";

export default function ApplicationPage() {
  return (
    <section
      id="application"
      role="main"
      className="container flex flex-col py-10"
    >
      <h1 className="title">Welcome to Application page</h1>
      <Timer />
    </section>
  );
}
