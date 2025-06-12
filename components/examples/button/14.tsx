"use client";

import { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Component() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      data-loading={isLoading || undefined}
      className="group relative">
      <span className="group-data-loading:text-transparent">Click me</span>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoaderCircleIcon className="animate-spin" size={16} aria-hidden="true" />
        </div>
      )}
    </Button>
  );
}
