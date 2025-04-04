"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveEffectProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  duration?: number;
}

export function WaveEffect({
  children,
  color,
  className,
  duration = 0.6,
}: WaveEffectProps) {
  const [keyValue, setKeyValue] = useState<number>(0);
  const [ripple, setRipple] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showRipple, setShowRipple] = useState<boolean>(false);
  const [mouseUp, setMouseUp] = useState<boolean>(false);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  useEffect(() => {
    if (!mouseUp && animationComplete) {
      setShowRipple(false);
      setAnimationComplete(false);
    }
  }, [mouseUp, animationComplete]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.width / 2;

    setKeyValue((prev) => prev + 1);
    setRipple({ x, y });
    setMouseUp(true);
    setShowRipple(true);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleMouseUp = () => {
    setMouseUp(false);
  };

  return (
    <div
      className={cn("inline-flex relative overflow-hidden", className)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
      {showRipple && (
        <motion.span
          key={keyValue}
          className={cn(
            "absolute aspect-square bg-black bg-opacity-55 rounded-full pointer-events-none start-0 top-0",
            color
          )}
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 3.5 }}
          transition={{ duration, ease: "easeOut" }}
          onAnimationComplete={handleAnimationComplete}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: "100%",
          }}
        />
      )}
    </div>
  );
}
