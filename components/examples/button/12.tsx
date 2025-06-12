"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Component() {
  return (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem className="flex-1 px-4" value="left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem className="flex-1 px-4" value="center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem className="flex-1 px-4" value="right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
