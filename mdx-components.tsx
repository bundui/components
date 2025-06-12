import React from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import ComponentCodePreview from "@/components/website/component-code-preview";
import { CodeBlock } from "@/components/website/code-block";
import ComponentInstallation from "@/components/website/component-installation";
import CodeRenderer from "@/components/website/code-renderer";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { ExternalLink } from "@/components/website/external-link";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { createGenerator } from "fumadocs-typescript";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ComponentCodePreview: ({ ...props }: React.ComponentProps<typeof ComponentCodePreview>) => (
      <ComponentCodePreview {...props} />
    ),
    CodeBlock: ({ ...props }: React.ComponentProps<typeof CodeBlock>) => <CodeBlock {...props} />,
    CodeRenderer: ({ ...props }: React.ComponentProps<typeof CodeRenderer>) => (
      <CodeRenderer {...props} />
    ),
    DynamicCodeBlock: ({ ...props }: React.ComponentProps<typeof DynamicCodeBlock>) => (
      <DynamicCodeBlock {...props} />
    ),
    ComponentInstallation: ({ ...props }: React.ComponentProps<typeof ComponentInstallation>) => (
      <ComponentInstallation {...props} />
    ),
    ExternalLink: ({ ...props }: React.ComponentProps<typeof ExternalLink>) => (
      <ExternalLink {...props} />
    ),
    TypeTable: ({ ...props }: React.ComponentProps<typeof TypeTable>) => <TypeTable {...props} />,
    AutoTypeTable: (props) => <AutoTypeTable {...props} generator={generator} />,

    ...components
  };
}
