"use client";
import { AccordionList } from "@tremor/react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <section id="faq" role="main" className="container flex flex-col py-10">
      <h2 className="title mb-5">Ko&apos;p beriladigan savollarga javoblar</h2>
      <AccordionList>
        <FaqAccordion
          title="Qanday qilib Green Card dasturida to’g’ri va xatolarsiz anketa to’ldirish mumkin?"
          text="DV rasmiy saytida ro’yxatdan o’tish faqatgina kuz faslida bo’lsa, bizning saytimiz orqali siz yilning istalgan paytida anketa to’ldirib qo’yishingiz mumkin."
        />
        <FaqAccordion
          title="Green Card dasturida ishtirok etish uchun Xalqato (Загран) pasport muhimmi?"
          text="Muhim emas, agar sizda hozirda biometrik pasport bo'lsa siz bizning saytimiz orqali anketa to'ldirib ishtirok etishingiz mumkin."
        />
        <FaqAccordion
          title="Green Card dasturida ishtirok etish pullikmi?"
          text="Ha, saytimiz orqali anketa to'ldirish narxlari: bo'ydoqlar yoki yakka anketa uchun 90 000 so'm, Oilali anketa uchun 120 00 so'mni tashkil etadi."
        />
      </AccordionList>
    </section>
  );
};

export default Faq;
