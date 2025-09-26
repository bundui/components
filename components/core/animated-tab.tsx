"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type AnimatedTab = {
  name: string;
  content: React.ReactNode | string;
};

export function AnimatedTab({ tabs }: { tabs: AnimatedTab[] }) {
  const [selected, setSelected] = useState(0);
  const duration = 0.3;

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {/* Tab Buttons */}
      <div className="relative mb-4 flex">
        {tabs.map(({ name }, i) => (
          <motion.div
            key={i}
            className="relative cursor-pointer px-4 py-1"
            transition={{ duration }}
            onClick={() => handleSelect(i)}>
            <span className="relative z-10">{name}</span>

            {i === selected && (
              <motion.div
                className="bg-muted absolute top-0 left-0 h-full w-full rounded-xl"
                layoutId="selected"
                transition={{ duration }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative h-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="bg-muted absolute inset-0 rounded-xl p-4 text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}>
            {tabs[selected].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
