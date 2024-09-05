import MarqueeEffect from "@/components/ui/marquee-effect";

export default function MarqueeEffectDoubleExample() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeEffect
        direction="left"
        baseVelocity={-3}
        className="bg-green-500 text-white py-2"
      >
        Bundui Components
      </MarqueeEffect>
      <MarqueeEffect
        direction="right"
        baseVelocity={-3}
        className="bg-purple-500 text-white py-2"
      >
        Bundui Components
      </MarqueeEffect>
    </div>
  );
}
