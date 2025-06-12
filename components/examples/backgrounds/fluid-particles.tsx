import { Button } from "@/components/ui/button";
import FluidParticlesBackground from "@/components/core/backgrounds/fluid-particles";

export default function WaveyBackgroundExample() {
  return (
    <FluidParticlesBackground className="flex aspect-16/9 items-center justify-center">
      <div className="z-10 space-y-4 text-center lg:space-y-6">
        <h4 className="text-2xl font-semibold text-black/80 lg:text-3xl dark:text-white/80">
          Bundui Components
        </h4>
        <Button>Discover Excellence</Button>
      </div>
    </FluidParticlesBackground>
  );
}
