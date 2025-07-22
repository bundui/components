"use client";

import { SlidingNumber } from "@/components/core/sliding-number";
import { useEffect, useState } from "react";

export default function Clock() {
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
    <div className="flex items-center gap-0.5 text-xl">
      <SlidingNumber value={hours} padStart={true} />
      <span>:</span>
      <SlidingNumber value={minutes} padStart={true} />
      <span>:</span>
      <SlidingNumber value={seconds} padStart={true} />
    </div>
  );
}
