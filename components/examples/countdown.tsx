"use client";

import { useEffect, useState } from "react";
import { Countdown } from "@/components/core/countdown";

export default function CountdownExample() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-0.5 text-xl font-semibold">
      <Countdown value={timeLeft.hours} padStart={true} />
      <span className="text-zinc-500">:</span>
      <Countdown value={timeLeft.minutes} padStart={true} />
      <span className="text-zinc-500">:</span>
      <Countdown value={timeLeft.seconds} padStart={true} />
    </div>
  );
}
