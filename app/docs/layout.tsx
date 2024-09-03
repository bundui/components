"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/website/scroll-area";
import { usePathname, useRouter } from "next/navigation";
import { NAVIGATION } from "@/app/docs/routes";
import Header from "@/components/website/header";
import Footer from "@/components/website/footer";

function NavigationDesktop() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-12 hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 md:block lg:pt-12">
      <ScrollArea>
        <nav>
          <ul role="list" className="h-full">
            {NAVIGATION.map((item, index) => {
              return (
                <li className="mb-6" key={`${item.name}-${index}`}>
                  <div className="text-sm/6 font-medium text-zinc-950 dark:text-white">
                    {item.name}
                  </div>
                  <ul
                    role="list"
                    className="mt-4 space-y-3.5 border-l border-zinc-200 dark:border-zinc-800"
                  >
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;

                      return (
                        <li key={child.href}>
                          <Link
                            className={cn(
                              "relative inline-flex items-center space-x-1 pl-4 text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                              isActive &&
                                "text-zinc-950 before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:text-white dark:before:bg-white"
                            )}
                            href={child.href}
                          >
                            <span>{child.name}</span>
                            {child?.isNew && (
                              <span className="whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold border border-emerald-300">
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea>
    </aside>
  );
}

function NavigationMobile() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedHref, setSelectedHref] = React.useState(pathname);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    setSelectedHref(href);
    router.push(href);
  };

  return (
    <div className="block w-full pt-8 md:hidden">
      <select
        className="block w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
        value={selectedHref}
        onChange={handleChange}
      >
        {NAVIGATION.map((item) => {
          return (
            <optgroup label={item.name} key={item.name}>
              {item.children.map((child) => (
                <option key={child.href} value={child.href}>
                  {child.name}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
}

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="px-6 lg:px-8">
        <div className="mx-auto md:max-w-7xl">
          <div className="mx-auto flex w-full flex-col items-start md:flex-row md:space-x-12">
            <NavigationDesktop />
            <NavigationMobile />
            <main className="prose prose-zinc min-w-0 max-w-full flex-1 pb-16 pt-8 dark:prose-invert prose-h1:text-2xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:max-w-2xl lg:pt-12">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
