import MarqueeAnimation from "@/components/ui/marquee-animation";

export default function MarqueeAnimationDoubleExample() {
  return (
    <div className="flex flex-col gap-4">
      <MarqueeAnimation
        direction="left"
        baseVelocity={-3}
        className="bg-green-500 text-white py-2"
      >
        Bundui Components
      </MarqueeAnimation>
      <MarqueeAnimation
        direction="right"
        baseVelocity={-3}
        className="bg-purple-500 text-white py-2"
      >
        Bundui Components
      </MarqueeAnimation>
    </div>
  );
}
