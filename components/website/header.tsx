"use client";

import GitHubIcon from "./icons/github";
import XIcon from "./icons/x";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";
export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/50 px-6 py-5 dark:border-white/10 dark:bg-zinc-950/50 backdrop-blur-xl lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full items-center justify-between max-w-screen-2xl">
        <Logo isBadge />
        <nav className="flex items-center gap-2">
          <a
            href="https://twitter.com/bunduidotio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <XIcon className="h-4 w-4 fill-zinc-950 dark:fill-white" />
          </a>
          <a
            href="https://github.com/bundui/components"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <GitHubIcon className="h-4 w-4 fill-zinc-950 dark:fill-white" />
          </a>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
