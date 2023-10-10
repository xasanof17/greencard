"use client";

import { useTranslations } from "next-intl";

const Service = () => {
  const t = useTranslations("Application");
  return (
    <section id="service_page" role="main" className="my-10">
      <div className="container flex flex-col space-y-16">
        <ul className="ml-3 flex list-disc flex-col space-y-3 text-base font-medium text-[#333]">
          <li>DV 2024 Green Card dasturiga ro'yxatga olish.</li>
          <li>Green Card g'oliblarga DS-260 formalarini to'ldirish DV 2023</li>
          <li>G'oliblarni barcha hujjatlarini suhbatgacha tayyorlab berish.</li>
          <li>
            Green Card g'oliblarini (TIC Tashkent International Clinic) Toshkent
            Xalqaro Klinikasiga hujjatlar tayyorlab berish hamda navbatga
            qo'yish.
          </li>
          <li>Hujjatlarni ingliz tiliga tarjima qilish.</li>
          <li>
            Suhbat kunini boshqa davlatdan Toshkentdagi AQSH elchixonasiga olish
            hamda suhbat kuniga yozish va suhbat kunlarini kuzatib borish.
          </li>
          <li>Konsultatsiya bepul.</li>
        </ul>

        <ol className="ml-3 flex list-decimal flex-col space-y-3 text-base font-medium">
          <h3>Kerakli hujjatlar ro'yxati:</h3>
          <li>
            Xalqaro yoki Yashil (qizil, загран biometik yashil) pasport nusxasi.
          </li>
          <li>Tug'ilgan haqida guvohnomalardan nusxa.</li>
          <li>Diplom va attestatdan nusxa.</li>
          <li>
            Green Card uchun rasm 600x600 pixelda yoki 5x5 smda elektron nusxada
            fleshkada original hajmda.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Service;
