import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
};

export default function AnimatedGradientText({ text, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex animate-text-gradient bg-linear-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-transparent bg-clip-text",
        className,
      )}
    >
      {text}
    </span>
  );
}
