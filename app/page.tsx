import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@/components/website/icons/github';
import { ChevronRight } from 'lucide-react';
import FloatingButtonExample from '@/components/examples/floating-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bundui',
  description:
    'Bundui, a collection of open-source, customizable motion components built with Framer Motion and Tailwind CSS. Perfect for enhancing your web projects with beautiful, smooth animations.'
};

function Button({
  children,
  variant = 'primary'
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const buttonVariants = {
    primary:
      'bg-zinc-50 border border-zinc-100 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900',
    secondary:
      'bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950'
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}>
      {children}
    </button>
  );
}

function CardExample({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative -mx-6 sm:mx-0">
      <div className="pointer-events-none absolute left-0 top-[-100px] z-[-1] h-full w-full bg-[radial-gradient(100%_100%_at_50%_50%,hsl(0deg_0%_100%/8%)_0,hsl(0deg_0%_100%/2%)_50%)] blur-2xl md:left-[-100px] md:h-[calc(100%+200px)] md:w-[calc(100%+200px)]" />
      <div className="relative w-full overflow-hidden rounded-xl bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_theme(colors.zinc.100),0px_2px_2px_0px_theme(colors.zinc.50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
        <div className="flex h-[350px] items-center justify-center">{children}</div>
      </div>
    </div>
  );
}

export default function Motion() {
  return (
    <>
      <div className="px-6 py-4 pb-20">
        <section className="flex h-full flex-col items-center justify-center pt-20">
          <div className="flex w-full max-w-lg lg:max-w-xl flex-col items-center justify-center text-center">
            <h1 className="relative mb-4 text-3xl lg:text-5xl font-semibold text-zinc-950 dark:text-zinc-50">
              Build beautiful animated components
            </h1>
            <p className="text-center text-zinc-600 dark:text-zinc-200">
              Beautifully designed motions components. Easy copy-paste. Customizable. Open Source.
              Built for engineers and designers.
            </p>
          </div>
          <div className="flex items-center space-x-4 py-6">
            <Link href="/docs/components/floating-button">
              <Button>
                Explore Components
                <ChevronRight className="ml-1.5 h-4 w-4 fill-white dark:fill-zinc-950" />
              </Button>
            </Link>
            <a
              href="https://github.com/bundui/components"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="secondary">
                <GitHubIcon className="mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950" />
                Star on GitHub
              </Button>
            </a>
          </div>
        </section>
        <section className="mx-auto max-w-3xl py-32">
          <CardExample>
            <FloatingButtonExample />
          </CardExample>
        </section>
      </div>
    </>
  );
}