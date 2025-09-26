import React from "react";
import { cn } from "@/lib/utils";

export type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientBorder({ children, className }: Props) {
  return (
    <div
      className={cn(
        "animate-border overflow-hidden rounded-xl border border-transparent [background:linear-gradient(45deg,transparent,transparent_50%,transparent)_padding-box,conic-gradient(from_var(--border-angle),transparent_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.700)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box]",
        className
      )}>
      {children}
    </div>
  );
}
