import { MarqueeEffect } from "@/components/core/marquee-effect";

export default function MarqueeEffectExample() {
  return (
    <div className="w-full">
      <MarqueeEffect gap={24}>
        <img
          src="https://bundui-images.netlify.app/products/01.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/02.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/03.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/04.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/05.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/06.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
        <img
          src="https://bundui-images.netlify.app/products/07.jpeg"
          alt="..."
          className="w-32 aspect-square rounded-md"
        />
      </MarqueeEffect>
    </div>
  );
}
