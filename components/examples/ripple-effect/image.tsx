import Image from "next/image";

import { RippleEffect } from "@/components/core/ripple-effect";

export default function RippleEffectImage() {
  return (
    <div className="flex gap-4">
      <RippleEffect color="var(--color-black)">
        <figure className="relative aspect-square w-40">
          <Image
            src="https://bundui-images.netlify.app/products/06.jpeg"
            fill
            alt="ripple effect image"
          />
        </figure>
      </RippleEffect>
      <RippleEffect color="var(--color-purple-600)">
        <figure className="relative aspect-square w-40">
          <Image
            src="https://bundui-images.netlify.app/products/07.jpeg"
            fill
            alt="ripple effect image"
          />
        </figure>
      </RippleEffect>
    </div>
  );
}
