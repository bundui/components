import { Button } from "@/components/ui/button";
import FireworksBackground from "@/components/core/backgrounds/fireworks";

export default function FireworksBackgroundExample() {
  return (
    <FireworksBackground className="aspect-16/9 flex items-center justify-center">
      <div className="text-center space-y-4 lg:space-y-6 z-10">
        <div className="text-2xl lg:text-4xl text-white/80">
          Bundui Components
        </div>
        <Button className="text-black bg-white!">Discover Excellence</Button>
      </div>
    </FireworksBackground>
  );
}
