import { WaveEffect } from "@/components/ui/wave-effect";

export function WaveEffectColored() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <WaveEffect className="block" color="bg-blue-600">
          <div className="px-6 py-3 text-center bg-blue-200 text-blue-800">
            Blue
          </div>
        </WaveEffect>
      </div>
      <div>
        <WaveEffect className="block" color="bg-green-600">
          <div className="px-6 py-3 text-center bg-green-200 text-green-800">
            Green
          </div>
        </WaveEffect>
      </div>
      <div>
        <WaveEffect className="block" color="bg-purple-600">
          <div className="px-6 py-3 text-center bg-purple-200 text-purple-800">
            Purple
          </div>
        </WaveEffect>
      </div>
      <div>
        <WaveEffect className="block" color="bg-red-600">
          <div className="px-6 py-3 text-center bg-red-200 text-red-800">
            Red
          </div>
        </WaveEffect>
      </div>
    </div>
  );
}
