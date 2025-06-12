"use client";

import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ExternalLink = ({ href, text }: { href: string; text: string }) => {
  return (
    <Button
      size="sm"
      variant="outline"
      rel="noopener noreferrer"
      className="h-8 no-underline"
      asChild>
      <Link href={href} target="_blank">
        {text}
        <ExternalLinkIcon className="size-3" />
      </Link>
    </Button>
  );
};
