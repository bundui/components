"use client";

import Link from "next/link";
import Logo from "@/components/website/logo";

export default function Footer() {
  return (
    <footer className="relative top-0 z-10 px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <div className="relative flex items-center">
          <Logo />
          <span className="ms-3 text-xs">@ {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-2">
          <Link className="text-sm" href="/components">
            Components
          </Link>
          <Link
            className="text-sm"
            href="https://github.com/bundui/components"
            target="_blank"
            rel="noopener">
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}
