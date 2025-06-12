import { RippleEffect } from "@/components/core/ripple-effect";

export default function RippleEffectColored() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <RippleEffect className="block" color="var(--color-blue-400)">
          <div className="w-36 bg-blue-200 p-2 text-center text-blue-800">Blue</div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-green-400)">
          <div className="w-36 bg-green-200 p-2 text-center text-green-800">Green</div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-purple-400)">
          <div className="w-36 bg-purple-200 p-2 text-center text-purple-800">Purple</div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-red-400)">
          <div className="w-36 bg-red-200 p-2 text-center text-red-800">Red</div>
        </RippleEffect>
      </div>
    </div>
  );
}
