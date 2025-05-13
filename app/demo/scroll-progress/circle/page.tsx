import ScrollProgressBar from "@/components/core/scroll-progress-bar";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function Page() {
  return (
    <>
      <ScrollProgressBar showPercentage />
      <div className="max-w-md mx-auto">
        <div className="h-screen flex items-center justify-center text-xl">
          Scroll down <ArrowDown className="w-4 h-4 ms-2" />
        </div>

        <div className="h-screen flex items-center justify-center text-xl">
          Scroll down <ArrowDown className="w-4 h-4 ms-2" />
        </div>

        <div className="h-screen flex items-center justify-center text-xl">
          Scroll down <ArrowDown className="w-4 h-4 ms-2" />
        </div>

        <div className="h-screen flex items-center justify-center text-xl">
          Scroll up <ArrowUp className="w-4 h-4 ms-2" />
        </div>
      </div>
    </>
  );
}
