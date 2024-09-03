import TextGradientScroll from "@/components/ui/text-gradient-scroll";
import { ArrowBigDown } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <div className="h-screen flex items-center justify-center text-xl">
          Scroll down <ArrowBigDown className="ms-2" />
        </div>

        <div className="mb-10">
          <TextGradientScroll text="The text gradient scroll component is designed to enhance user interaction by providing a visually dynamic effect as the user scrolls through the text. Unlike static text, this effect offers a more engaging visual experience with smooth color transitions that change as the text is scrolled. The animated gradient shifts add a modern and interactive touch to the user experience. This example was created using Tailwind CSS and Framer Motion." />
        </div>

        <div className="mb-10">
          <TextGradientScroll
            type="word"
            text="The text gradient scroll component is designed to enhance user interaction by providing a visually dynamic effect as the user scrolls through the text. Unlike static text, this effect offers a more engaging visual experience with smooth color transitions that change as the text is scrolled. The animated gradient shifts add a modern and interactive touch to the user experience. This example was created using Tailwind CSS and Framer Motion."
            className="text-green-500"
          />
        </div>

        <p className="mb-10">
          The text gradient scroll component is designed to enhance user
          interaction by providing a visually dynamic effect as the user scrolls
          through the text. Unlike static text, this effect offers a more
          engaging visual experience with smooth color transitions that change
          as the text is scrolled. The animated gradient shifts add a modern and
          interactive touch to the user experience. This example was created
          using Tailwind CSS and Framer Motion.
        </p>
      </div>
    </>
  );
}
