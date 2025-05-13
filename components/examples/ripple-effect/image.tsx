import { RippleEffect } from "@/components/core/ripple-effect";

export function RippleEffectImage() {
  return (
    <RippleEffect>
      <img
        className="w-full max-w-[280px] h-full"
        src="https://bundui-images.netlify.app/products/06.jpeg"
        alt="bundui wave effect image"
      />
    </RippleEffect>
  );
}
