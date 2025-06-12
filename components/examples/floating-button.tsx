import { cn } from "@/lib/utils";
import {
  DribbbleIcon,
  FacebookIcon,
  LinkedinIcon,
  PlusIcon,
} from "lucide-react";

import {
  FloatingButton,
  FloatingButtonItem,
} from "@/components/core/floating-button";
import {Button} from "@/components/ui/button";

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
        <Button size="icon" className="size-12 rounded-full">
          <PlusIcon className="size-5" />
        </Button>
      }
    >
      {items.map((item) => (
        <FloatingButtonItem key={item.id}>
          <Button size="icon" className={cn("size-12 rounded-full", item.bgColor)}>
            {item.icon}
          </Button>
        </FloatingButtonItem>
      ))}
    </FloatingButton>
  );
}
