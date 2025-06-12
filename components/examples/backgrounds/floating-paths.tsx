import { FloatingPathsBackground } from "@/components/core/backgrounds/floating-paths";
import { Button } from "@/components/ui/button";

export default function FloatingPathsBackgroundExample() {
  return (
    <FloatingPathsBackground className="flex aspect-16/9 items-center justify-center" position={-1}>
      <div className="z-10 space-y-4 text-center lg:space-y-6">
        <h4 className="text-2xl font-semibold text-black/80 lg:text-3xl dark:text-white/80">
          Bundui Components
        </h4>
        <Button>Discover Excellence</Button>
      </div>
    </FloatingPathsBackground>
  );
}
