"use client";
import React, { FC, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "next/image";

// Warning component to display the warning message
const CountdownWarning: FC = () => {
  return (
    <div className="mb-3 bg-yellow-200 p-2 text-center text-yellow-800">
      Time is running out, hurry up!
    </div>
  );
};

// Hurry up component to display the "Time's up, hurry up!" message
const CountdownHurryUp: FC = () => {
  return (
    <div className="bg-red-200 p-2 text-center text-red-800">
      Time&apos;s up, hurry up!
    </div>
  );
};

const Timer: FC = () => {
  const [isTimeUp, setTimeUp] = useState<boolean>(false);

  // Set the initialExpiryTimestamp to November 7, 2023, at 12:00 PM (EST)
  const expiryTimestamp = new Date("2023-11-07T12:00:00-05:00");

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  return (
    <div className="my-5 flex grid-cols-5 flex-col space-y-4 rounded-2xl bg-primary/70 px-4 py-4 sm:my-10 lg:grid lg:space-y-0 lg:px-2 lg:py-3 xl:px-10 xl:py-10">
      <div className="col-span-3 flex flex-col items-center space-x-3 space-y-2 sm:flex-row sm:space-y-0 lg:space-x-2 xl:space-x-3">
        <div className="relative h-12 w-12 lg:h-10 lg:w-10 xl:h-14 xl:w-14">
          <Image
            src="/assets/department_state.png"
            alt=""
            fill
            sizes="(min-width: 280px) 100vw"
          />
        </div>
        <div className="flex flex-col space-y-2 sm:space-y-0">
          <h2 className="text-center text-lg font-bold text-white sm:text-start xl:text-xl">
            2024-yil uchun Green Card lotereyasi anketa to&apos;ldirish shakli
          </h2>
          <p className="text-center text-base font-medium text-white sm:text-start xl:text-lg">
            Diqqat! Anketani faqat lotin alifbosida to&apos;ldiring!
          </p>
        </div>
      </div>
      <div className="col-span-2">
        {isTimeUp ? (
          <CountdownHurryUp /> // Display "Time's up, hurry up!" component
        ) : (
          <CountdownTimer
            expiryTimestamp={expiryTimestamp}
            onTimeUp={handleTimeUp}
            WarningComponent={CountdownWarning} // Pass the warning component
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
