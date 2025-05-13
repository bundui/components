import { Three3DTiltEffect } from "@/components/core/3d-tilt-effect";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ThreeDTiltEffectExample() {
  return (
    <Three3DTiltEffect>
      <Card className="pt-0 overflow-hidden md:w-[280px]">
        <Image
          src="https://bundui-images.netlify.app/products/04.jpeg"
          alt=""
          width={200}
          height={200}
          className="w-full aspect-square object-cover transition-all duration-200 ease-linear size-full"
          unoptimized
        />
        <CardContent>
          <div className="text-xl">Red Hat</div>
          <div className="text-sm text-muted-foreground">Best Sellers</div>
        </CardContent>
      </Card>
    </Three3DTiltEffect>
  );
}
