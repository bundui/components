import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";

export default function Component() {
  return (
    <Button variant="destructive">
      <Trash2Icon />
      Remove
    </Button>
  );
}
