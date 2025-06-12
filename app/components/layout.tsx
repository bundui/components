import React from "react";
import { source } from "@/lib/source";
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/app/layout.config";

export default function ComponentLayout({ children }: { children: React.ReactNode }) {
  const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: source.pageTree,
    githubUrl: "https://github.com/bundui/components",
    links: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
          </svg>
        ),
        url: "https://x.com/bunduidotio",
        text: "X",
        type: "icon"
      }
    ]
  };

  return <DocsLayout {...docsOptions}>{children}</DocsLayout>;
}
