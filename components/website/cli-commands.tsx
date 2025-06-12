"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { useParams } from "next/navigation";

export default function CliCommands() {
  const { slug } = useParams();

  const commands = [
    {
      name: "npm",
      value: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${slug}.json`
    },
    {
      name: "pnpm",
      value: `pnpm dlx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${slug}.json`
    },
    {
      name: "yarn",
      value: `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL} }/r/${slug}.json`
    },
    {
      name: "bun",
      value: `bun x --bun shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${slug}`
    }
  ];

  return (
    <TabsComponents.Tabs items={commands.map((command) => command.name)}>
      {commands.map((command, index) => (
        <TabsComponents.Tab key={command.name} value={command.name}>
          <DynamicCodeBlock code={command.value} lang="tsx" />
        </TabsComponents.Tab>
      ))}
    </TabsComponents.Tabs>
  );
}
