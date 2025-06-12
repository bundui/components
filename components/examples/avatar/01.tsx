import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  return (
    <Avatar>
      <AvatarImage src="https://bundui-images.netlify.app/avatars/01.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
