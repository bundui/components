import { WaveEffect } from "@/components/ui/wave-effect";

export function WaveEffectButton() {
  return (
    <>
      <WaveEffect className="rounded-lg">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-hidden">
          Bundui Components
        </button>
      </WaveEffect>
    </>
  );
}
