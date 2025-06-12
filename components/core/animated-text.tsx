"use client";

import { motion } from "motion/react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: "letters" | "words";
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  initialY?: number;
  initialOpacity?: number;
  animateY?: number;
  animateOpacity?: number;
}

export default function AnimatedText({
  text,
  className = "text-4xl font-bold",
  animationType = "letters",
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.05,
  initialY = 10,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1
}: AnimatedTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: initialY,
      opacity: initialOpacity
    },
    visible: {
      y: animateY,
      opacity: animateOpacity,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  const renderLetters = () => {
    return text.split("").map((char, index) => (
      <motion.span
        key={`letter-${index}`}
        variants={itemVariants}
        className="inline-block"
        style={{ whiteSpace: char === " " ? "pre" : "normal" }}>
        {char}
      </motion.span>
    ));
  };

  const renderWords = () => {
    return text.split(" ").map((word, index) => (
      <motion.span key={`word-${index}`} variants={itemVariants} className="mr-2 inline-block">
        {word}
      </motion.span>
    ));
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      {animationType === "letters" ? renderLetters() : renderWords()}
    </motion.div>
  );
}
