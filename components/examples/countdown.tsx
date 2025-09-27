"use client";

import { useEffect, useState } from "react";
import { Countdown } from "@/components/core/countdown";

export default function CountdownExample() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-0.5 text-xl font-semibold">
      <Countdown value={hours} padStart={true} />
      <span className="text-zinc-500">:</span>
      <Countdown value={minutes} padStart={true} />
      <span className="text-zinc-500">:</span>
      <Countdown value={seconds} padStart={true} />
    </div>
  );
}
