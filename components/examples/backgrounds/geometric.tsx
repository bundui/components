import { Button } from "@/components/ui/button";
import GeometricBackground from "@/components/core/backgrounds/geometric";

export default function GeometricBackgroundExample() {
  return (
    <GeometricBackground className="flex aspect-16/9 items-center justify-center">
      <div className="z-10 space-y-4 text-center lg:space-y-6">
        <h4 className="text-2xl font-semibold text-white/80 lg:text-3xl">Bundui Components</h4>
        <Button variant="secondary">Discover Excellence</Button>
      </div>
    </GeometricBackground>
  );
}
