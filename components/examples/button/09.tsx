import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Component() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div>Delete</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
