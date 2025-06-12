import { BellIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <Button size="icon" variant="outline" className="relative rounded-full">
      <BellIcon />
      <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1 text-[10px]">
        20
      </Badge>
    </Button>
  );
}
