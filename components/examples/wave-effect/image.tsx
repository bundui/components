import { WaveEffect } from "@/components/ui/wave-effect";

export function WaveEffectImage() {
  return (
    <>
      <WaveEffect className="h-full">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </WaveEffect>
    </>
  );
}
