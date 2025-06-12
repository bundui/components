import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Button variant="ghost" className="rounded-full p-0! pe-3!">
      <Avatar>
        <AvatarImage src="https://bundui-images.netlify.app/avatars/01.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ChevronDownIcon />
    </Button>
  );
}
