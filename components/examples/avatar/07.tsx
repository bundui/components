import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDownIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="flex items-center rounded-full border p-1">
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
        <Avatar className="size-6">
          <AvatarImage src="https://bundui-images.netlify.app/avatars/06.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="size-6">
          <AvatarImage src="https://bundui-images.netlify.app/avatars/07.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar className="size-6">
          <AvatarImage src="https://bundui-images.netlify.app/avatars/10.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar className="size-6">
          <AvatarImage src="https://bundui-images.netlify.app/avatars/09.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
      <span className="px-3 text-sm whitespace-nowrap">More then 50+ happy users</span>
    </div>
  );
}
