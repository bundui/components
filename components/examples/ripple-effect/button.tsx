import { RippleEffect } from "@/components/core/ripple-effect";
import { Button } from "@/components/ui/button";

export default function RippleEffectButton() {
  return (
    <RippleEffect className="rounded-lg">
      <Button size="lg">Click me</Button>
    </RippleEffect>
  );
}
