import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-indigo-600 text-white">TB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-teal-600 text-white">LR</AvatarFallback>
      </Avatar>
    </div>
  );
}
