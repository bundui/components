import { Button } from "@/components/ui/button";
import GeometricBackground from "@/components/core/backgrounds/geometric";

export default function GeometricBackgroundExample() {
  return (
    <GeometricBackground className="aspect-16/9 flex items-center justify-center">
      <div className="text-center space-y-4 lg:space-y-6 z-10">
        <div className="text-2xl lg:text-4xl text-white/80">
          Bundui Components
        </div>
        <Button>Discover Excellence</Button>
      </div>
    </GeometricBackground>
  );
}
