import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Button variant="outline" className="rounded-full p-0! pe-3!">
      <Avatar>
        <AvatarImage src="https://bundui-images.netlify.app/avatars/07.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span>Toby Belhome</span>
    </Button>
  );
}
