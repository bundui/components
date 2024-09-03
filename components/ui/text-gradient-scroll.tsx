"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TextGradientScrollType = {
  text: string;
  type?: string;
  className?: string;
};

type LetterType = {
  children: React.ReactNode | string;
  progress: MotionValue<number>;
  range: number[];
};

type WordType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

type CharType = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

export default function TextGradientScroll({
  text,
  type,
  className,
}: TextGradientScrollType) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "start 0.25"],
  });

  const words = text.split(" ");
  return (
    <p
      ref={container}
      className={cn(className)}
      style={{
        margin: 0,
        display: "flex",
        lineHeight: 1,
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return type === "word" ? (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        ) : (
          <Letter key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Letter>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: WordType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span
      style={{
        position: "relative",
        marginRight: 12,
        marginTop: 12,
      }}
    >
      <span style={{ position: "absolute", opacity: 0.1 }}>{children}</span>
      <motion.span style={{ transition: "all .5s", opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

const Letter = ({ children, progress, range }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span
        style={{
          position: "relative",
          marginRight: 12,
          marginTop: 12,
        }}
      >
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
};

const Char = ({ children, progress, range }: CharType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span
        style={{
          position: "absolute",
          opacity: 0.1,
        }}
      >
        {children}
      </span>
      <motion.span
        style={{
          transition: "all .5s",
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
