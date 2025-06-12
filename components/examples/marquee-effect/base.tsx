import { MarqueeEffect } from "@/components/core/marquee-effect";

const images = Array.from({ length: 7 }, (_, i) =>
    `https://bundui-images.netlify.app/products/0${i + 1}.jpeg`
);

export default function MarqueeEffectExample() {
  return (
      <div className="grow">
        <MarqueeEffect gap={24}>
          {images.map((src, i) => (
              <img
                  key={i}
                  src={src}
                  alt={`Product ${i + 1}`}
                  className="w-32 aspect-square rounded-md"
              />
          ))}
        </MarqueeEffect>
      </div>
  );
}
