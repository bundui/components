import Link from "next/link";
import Button from "@/components/ui/button";

export default function LinkButtonExample() {
  return (
    <>
      <Button asChild>
        <Link href="#">Link Button</Link>
      </Button>
    </>
  );
}
