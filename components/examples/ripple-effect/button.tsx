import { RippleEffect } from "@/components/core/ripple-effect";

export function RippleEffectButton() {
  return (
    <RippleEffect className="rounded-lg">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg focus:outline-hidden">
        Bundui Components
      </button>
    </RippleEffect>
  );
}
