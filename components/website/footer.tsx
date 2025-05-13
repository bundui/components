"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="relative top-0 z-10 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full items-center justify-between max-w-screen-2xl">
        <div className="relative flex items-center">
          <Logo />
          <span className="ms-3 text-xs">@ {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-2">
          <Link className="text-sm" href="/docs/components/floating-button">
            Components
          </Link>
          <Link
            className="text-sm"
            href="https://github.com/bundui/components"
            target="_blank"
            rel="noopener"
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}
