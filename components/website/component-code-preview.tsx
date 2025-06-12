import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { CodeBlock } from "@/components/website/code-block";
import { LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ComponentCodePreview = {
  name: string;
  contentClassName?: string;
  iframe: boolean;
};

export default function ComponentCodePreview({
  name,
  contentClassName,
  iframe = false
}: ComponentCodePreview) {
  const Comp = !iframe ? dynamic(() => import(`@/components/examples/${name}.tsx`)) : null;

  return (
    <Tabs items={["Preview", "Code"]} className="*:border-b">
      <Tab value="Preview" className="overflow-hidden rounded-tl-none rounded-tr-none p-0">
        <div className="not-prose relative z-0 flex items-center justify-between">
          {iframe ? (
            <iframe className="h-[400px] w-full" src={`/demo/${name}`} />
          ) : (
            <Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  <LoaderIcon className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }>
              <div
                className={cn(
                  "flex min-h-0 w-full items-center justify-center overflow-hidden px-8 py-24 lg:px-32",
                  contentClassName
                )}>
                {Comp && <Comp />}
              </div>
            </Suspense>
          )}
        </div>
      </Tab>
      <Tab value="Code" className="rounded-tl-none rounded-tr-none">
        <CodeBlock filePath={`components/examples/${name}.tsx`} />
      </Tab>
    </Tabs>
  );
}
