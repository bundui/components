"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TextMorphAnimationProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

const TextMorphAnimation: React.FC<TextMorphAnimationProps> = ({
  texts,
  morphTime = 2.5,
  cooldownTime = 0.25,
  className
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);
  const animationRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(performance.now());

  useEffect(() => {
    const animate = (currentTime: number) => {
      const dt = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      setCooldown((prevCooldown) => {
        const newCooldown = prevCooldown - dt;

        if (newCooldown <= 0) {
          setMorph((prevMorph) => {
            const newMorph = prevMorph + dt;

            if (newMorph >= morphTime) {
              setTextIndex((prev) => (prev + 1) % texts.length);
              return 0;
            }

            return newMorph;
          });

          return newCooldown;
        } else {
          setMorph(0);
          return newCooldown;
        }
      });

      if (morph >= morphTime) {
        setCooldown(cooldownTime);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [texts.length, morphTime, cooldownTime, morph]);

  const getMorphStyles = (isSecondText: boolean) => {
    if (cooldown > 0) {
      return {
        filter: "",
        opacity: isSecondText ? 0 : 1
      };
    }

    let fraction = Math.min(morph / morphTime, 1);

    if (!isSecondText) {
      fraction = 1 - fraction;
    }

    const blur = Math.max(0, Math.min(6 / fraction - 6, 100));
    const opacity = Math.pow(fraction, 0.4);

    return {
      filter: `blur(${blur}px)`,
      opacity: opacity
    };
  };

  return (
    <div className={cn("relative flex h-20 w-full items-center justify-center", className)}>
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute flex h-full w-full items-center justify-center"
        style={{
          filter: "url(#threshold) blur(0.6px)"
        }}>
        <span
          className="font-raleway text-foreground absolute w-full text-center text-6xl font-black select-none md:text-6xl"
          style={getMorphStyles(false)}>
          {texts[textIndex]}
        </span>

        <span
          className="font-raleway text-foreground absolute w-full text-center text-6xl font-black select-none md:text-6xl"
          style={getMorphStyles(true)}>
          {texts[(textIndex + 1) % texts.length]}
        </span>
      </div>
    </div>
  );
};

export default TextMorphAnimation;
