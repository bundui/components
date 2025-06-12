"use client";

import TextMorphAnimation from "@/components/core/text-morph-animation";

const GooeyFilter = () => {
  return (
    <svg aria-hidden="true">
      <defs>
        <filter id="goo-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

export default function TextMorphExample() {
  return (
    <>
      <div>
        <GooeyFilter />
        <div className="relative filter-[url(#goo-effect)]">
          <div className="size-10 rounded-full bg-black filter-[url(#goo-effect)]"></div>
          <div className="size-10 rounded-full bg-black filter-[url(#goo-effect)]"></div>
        </div>
      </div>
      <TextMorphAnimation
        texts={["Bundui", "beautifully", "designed ", "components", "and", "blocks"]}
      />
    </>
  );
}
