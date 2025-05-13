import { FloatingPathsBackground } from "@/components/core/backgrounds/floating-paths";
import { Button } from "@/components/ui/button";

export default function FloatingPathsBackgroundExample() {
  return (
    <FloatingPathsBackground
      className="aspect-16/9 flex items-center justify-center"
      position={-1}
    >
      <div className="text-center space-y-4 lg:space-y-6 z-10">
        <div className="text-2xl lg:text-4xl text-black/80 dark:text-white/80">
          Bundui Components
        </div>
        <Button>Discover Excellence</Button>
      </div>
    </FloatingPathsBackground>
  );
}
