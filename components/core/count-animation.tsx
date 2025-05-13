"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent,
} from "motion/react";

type Props = {
  number: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

export default function CountAnimation({
  number,
  className,
  prefix,
  suffix,
}: Props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const animation = animate(count, number, { duration: 2 });
    return animation.stop;
  }, [count, number]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setCurrent(latest);
  });

  return (
    <span className={cn(className)}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
}
