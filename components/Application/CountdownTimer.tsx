"use client";
import { FC, useEffect, useState } from "react";

interface CountdownTimerProps {
  expiryTimestamp: Date;
  onTimeUp: () => void;
  WarningComponent: FC;
}

interface TimeLeft {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (expiryTimestamp: Date): TimeLeft => {
  const currentTime = new Date().getTime();
  const timeDifference = expiryTimestamp.getTime() - currentTime;

  if (timeDifference <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return {
    total: timeDifference,
    days,
    hours,
    minutes,
    seconds,
  };
};

const CountdownTimer: FC<CountdownTimerProps> = ({
  expiryTimestamp,
  onTimeUp,
  WarningComponent,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const updatedTimeLeft = calculateTimeLeft(expiryTimestamp);
      setTimeLeft(updatedTimeLeft);

      if (updatedTimeLeft.total <= 0) {
        // Call the onTimeUp callback when the countdown reaches zero
        onTimeUp();
      }
    };

    // Update the timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [expiryTimestamp, onTimeUp]);

  const timeUnits = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 gap-3 sm:gap-7 lg:gap-2 xl:gap-4">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <p className="rounded-full bg-white p-1 text-2xl xl:text-3xl font-bold text-primary">
              {unit.value}
            </p>
            <span className="text-sm font-medium text-white">{unit.label}</span>
          </div>
        ))}
      </div>
      {timeLeft.days === 1 && <WarningComponent />}{" "}
      {/* Display the warning component */}
    </div>
  );
};

export default CountdownTimer;
