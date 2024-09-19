import TextGradientScroll from "@/components/ui/text-gradient-scroll";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="h-screen flex items-center justify-center text-xl">
          Scroll down <ArrowDown className="w-4 h-4 ms-2" />
        </div>

        <div>
          <TextGradientScroll
            className="text-xl text-center justify-center text-green"
            text="The text gradient scroll component is designed to enhance user interaction by providing a visually dynamic effect as the user scrolls through the text. Unlike static text, this effect offers a more engaging visual experience with smooth color transitions that change as the text is scrolled. The animated gradient shifts add a modern and interactive touch to the user experience. This example was created using Tailwind CSS and Framer Motion."
          />
        </div>

        <div className="h-screen flex items-center justify-center text-xl">
          Scroll up <ArrowUp className="w-4 h-4 ms-2" />
        </div>
      </div>
    </>
  );
}
