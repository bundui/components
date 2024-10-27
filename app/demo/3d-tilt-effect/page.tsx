import { Three3DTiltEffect } from "@/components/ui/3d-tilt-effect";
import Image from "next/image";

export default function ThreeDTiltEffectExample() {
  return (
    <>
      <div className="lg:h-screen flex items-center justify-center py-4">
        <Three3DTiltEffect>
          <div className="bg-white rounded-xl overflow-hidden border group/hoverimg shadow-lg">
            <div className="h-full overflow-hidden">
              <Image
                src="https://cosmic.shadcnuikit.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1573497019940-1c28c88b4f3e%3Fq%3D80%26w%3D1587%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=384&q=75"
                alt=""
                width={300}
                height={300}
                className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100"
              />
            </div>
            <div className="flex flex-col py-6 px-6">
              <div className="text-xl">Zoe Garcia</div>
              <span className="text-muted-foreground">Backend Developer</span>
            </div>
          </div>
        </Three3DTiltEffect>
      </div>
    </>
  );
}
