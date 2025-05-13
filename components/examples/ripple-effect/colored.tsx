import { RippleEffect } from "@/components/core/ripple-effect";

export function RippleEffectColored() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <RippleEffect className="block" color="var(--color-blue-400)">
          <div className="px-6 py-3 text-center bg-blue-200 text-blue-800">
            Blue
          </div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-green-400)">
          <div className="px-6 py-3 text-center bg-green-200 text-green-800">
            Green
          </div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-purple-400)">
          <div className="px-6 py-3 text-center bg-purple-200 text-purple-800">
            Purple
          </div>
        </RippleEffect>
      </div>
      <div>
        <RippleEffect className="block" color="var(--color-red-400)">
          <div className="px-6 py-3 text-center bg-red-200 text-red-800">
            Red
          </div>
        </RippleEffect>
      </div>
    </div>
  );
}
