import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
      <Avatar>
        <AvatarImage src="https://bundui-images.netlify.app/avatars/06.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://bundui-images.netlify.app/avatars/07.png" alt="@leerob" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://bundui-images.netlify.app/avatars/10.png" alt="@evilrabbit" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <Button size="icon" variant="outline" className="z-10 size-8 rounded-full text-xs!">
        +10
      </Button>
    </div>
  );
}
