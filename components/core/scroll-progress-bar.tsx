"use client";

import React from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollProgressBarType {
  type?: "circle" | "bar";
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  color?: string;
  strokeSize?: number;
  showPercentage?: boolean;
}

export default function ScrollProgressBar({
  type = "circle",
  position = "bottom-right",
  color = "var(--primary)",
  strokeSize = 2,
  showPercentage = false,
}: ScrollProgressBarType) {
  const { scrollYProgress } = useScroll();

  const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [percentage, setPercentage] = React.useState(0);

  useMotionValueEvent(scrollPercentage, "change", (latest) => {
    setPercentage(Math.round(latest));
  });

  if (type === "bar") {
    return (
      <div
        className="fixed start-0 end-0 top-0 pointer-events-none"
        style={{ height: `${strokeSize + 2}px` }}
      >
        <span
          className="bg-primary h-full w-full block"
          style={{
            backgroundColor: color,
            width: `${percentage}%`,
          }}
        ></span>
      </div>
    );
  }

  return (
    <div
      className={cn("fixed flex items-center justify-center", {
        "top-0 end-0": position === "top-right",
        "bottom-0 end-0": position === "bottom-right",
        "top-0 start-0": position === "top-left",
        "bottom-0 start-0": position === "bottom-left",
      })}
    >
      {percentage > 0 && (
        <>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              strokeWidth={strokeSize}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              stroke={color}
              fill="none"
              strokeDashoffset="0"
              strokeWidth={strokeSize}
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          {showPercentage && (
            <span className="text-sm absolute ml-2">{percentage}%</span>
          )}
        </>
      )}
    </div>
  );
}
