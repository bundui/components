import { cn } from "@/lib/utils";

export type AnimatedGradientTextProps = {
  text: string;
  className?: string;
};

export default function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "animate-text-gradient inline-flex bg-linear-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}>
      {text}
    </span>
  );
}
