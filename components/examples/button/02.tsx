import { Button } from "@/components/ui/button";
import { LoaderCircleIcon } from "lucide-react";

export default function Component() {
  return (
    <Button disabled>
      <LoaderCircleIcon className="animate-spin" size={16} aria-hidden="true" />
      Please wait..
    </Button>
  );
}
