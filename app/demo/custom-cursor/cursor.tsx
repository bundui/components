"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const CursorContext = createContext({});

const defaultCursorVariant = {
  opacity: 1,
  height: 10,
  width: 10,
  fontSize: "16px",
  backgroundColor: "red",
  transition: {
    type: "spring",
    mass: 0.6,
  },
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};

function CursorProvider({ children }) {
  const [cursorContent, setCursorContent] = useState();
  const [cursorVariant, setCursorVariant] = useState(defaultCursorVariant);

  return (
    <CursorContext.Provider
      value={{
        cursorContent,
        setCursorContent,
        cursorVariant,
        setCursorVariant,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within an CursorProvider");
  }
  return context;
}

const CursorItem = ({ children, variant, cursorContent }) => {
  const { setCursorVariant, setCursorContent } = useCursor();

  return (
    <div
      className="inline-block"
      onMouseEnter={() => {
        setCursorVariant(variant);
        setCursorContent(cursorContent);
      }}
      onMouseOut={() => {
        setCursorVariant(defaultCursorVariant);
        setCursorContent(null);
      }}
    >
      {children}
    </div>
  );
};

function CursorInner({ children, className }) {
  const { cursorVariant, cursorContent } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorXSpring = useSpring(mouseX);
  const cursorYSpring = useSpring(mouseY);

  useEffect(() => {
    console.log(mouseX);
  }, [mouseX]);

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <div
      className={cn("h-screen w-full", className)}
      onMouseMove={handleMouseMove}
    >
      {cursorContent ? (
        <motion.div
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          variants={cursorVariant}
          className={cn(
            "fixed z-50 flex flex-row items-center justify-center top-0 start-0  pointer-events-none text-base",
            {
              "size-10 rounded-full text-white text-center":
                !cursorContent ||
                (cursorContent && typeof cursorContent === "string"),
            }
          )}
          animate={cursorVariant}
          transition={spring}
        >
          {cursorContent}
        </motion.div>
      ) : null}
      {children}
    </div>
  );
}

function Cursor({ children, className }) {
  return (
    <CursorProvider>
      <CursorInner className={className}>{children}</CursorInner>
    </CursorProvider>
  );
}

export { Cursor, CursorItem };
