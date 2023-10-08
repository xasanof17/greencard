"use client";
import { Accordion, AccordionHeader, AccordionBody } from "@tremor/react";
import { FC } from "react";

type FaqAccordionProps = {
  title: string;
  text: string;
};

const FaqAccordion: FC<FaqAccordionProps> = ({ title, text }) => {
  return (
    <Accordion>
      <AccordionHeader className="!text-start text-base font-medium text-black md:text-lg">
        {title}
      </AccordionHeader>
      <AccordionBody className="text-sm font-medium !tracking-wide md:!text-base">
        {text}
      </AccordionBody>
    </Accordion>
  );
};

export default FaqAccordion;
