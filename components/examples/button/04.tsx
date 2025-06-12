import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <Button variant="outline" className="relative">
      Notifications
      <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1 text-[10px]">
        20
      </Badge>
    </Button>
  );
}
