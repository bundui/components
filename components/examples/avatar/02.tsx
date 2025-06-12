import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://bundui-images.netlify.app/avatars/04.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="border-background absolute -end-0.5 -top-0.5 size-3 rounded-full border-2 bg-green-500">
          <span className="sr-only">Online</span>
        </div>
      </div>

      <div className="relative">
        <Avatar>
          <AvatarImage src="https://bundui-images.netlify.app/avatars/04.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-red-500">
          <span className="sr-only">Offline</span>
        </div>
      </div>
    </div>
  );
}
