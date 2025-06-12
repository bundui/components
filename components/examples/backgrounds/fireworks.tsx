import { Button } from "@/components/ui/button";
import FireworksBackground from "@/components/core/backgrounds/fireworks";

export default function FireworksBackgroundExample() {
  return (
    <FireworksBackground className="flex aspect-16/9 items-center justify-center">
      <div className="z-10 space-y-4 text-center lg:space-y-6">
        <h4 className="text-2xl font-semibold text-white/80 lg:text-3xl">Bundui Components</h4>
        <Button className="bg-white! text-black">Discover Excellence</Button>
      </div>
    </FireworksBackground>
  );
}
