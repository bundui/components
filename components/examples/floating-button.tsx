import {
  FloatingButton,
  FloatingButtonItem,
} from "@/components/core/floating-button";
import { cn } from "@/lib/utils";
import {
  DribbbleIcon,
  FacebookIcon,
  LinkedinIcon,
  PlusIcon,
} from "lucide-react";

export default function FloatingButtonExample() {
  const items = [
    {
      id: "facebook",
      icon: <FacebookIcon />,
      bgColor: "bg-[#1877f2]",
    },
    {
      id: "dribbble",
      icon: <DribbbleIcon />,
      bgColor: "bg-[#ea4c89]",
    },
    {
      id: "linkedin",
      icon: <LinkedinIcon />,
      bgColor: "bg-[#0a66c2]",
    },
  ];

  return (
    <FloatingButton
      triggerContent={
        <button className="flex items-center justify-center h-12 w-12 rounded-full bg-black dark:bg-slate-800 text-white/80 z-10">
          <PlusIcon />
        </button>
      }
    >
      {items.map((item) => (
        <FloatingButtonItem key={item.id}>
          <button
            className={cn(
              "h-12 w-12 rounded-full flex items-center justify-center text-white/80",
              item.bgColor,
            )}
          >
            {item.icon}
          </button>
        </FloatingButtonItem>
      ))}
    </FloatingButton>
  );
}
