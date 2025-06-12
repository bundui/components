import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Component() {
  return (
    <TooltipProvider>
      <div className="*:data-[slot=tooltip-trigger]:ring-background flex -space-x-2 *:data-[slot=tooltip-trigger]:ring-2 *:data-[slot=tooltip-trigger]:hover:z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar className="size-14">
              <AvatarImage src="https://bundui-images.netlify.app/avatars/06.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>@tobybelhome</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar className="size-14">
              <AvatarImage src="https://bundui-images.netlify.app/avatars/07.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>@bunduidotio</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Avatar className="size-14">
              <AvatarImage src="https://bundui-images.netlify.app/avatars/10.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </TooltipTrigger>
          <TooltipContent>
            <p>@shadcn</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
