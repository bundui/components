"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SlidingNumber } from "@/components/core/sliding-number";

export default function SlidingNumberBasic() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 100) return;

    const interval = setInterval(() => {
      setValue(value + 1);
    }, 10);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      initial={{ y: 0, fontSize: `${24}px` }}
      animate={{ y: 0, fontSize: `${24}px` }}
      transition={{
        ease: [1, 0, 0.35, 0.95],
        duration: 1.5,
        delay: 0.3
      }}>
      <div className="inline-flex items-center">
        <SlidingNumber value={value} />%
      </div>
    </motion.div>
  );
}
