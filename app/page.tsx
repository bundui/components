import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import GitHubIcon from "@/components/website/icons/github";
import FloatingButtonExample from "@/components/examples/floating-button";
import MagneticButtonExample from "@/components/examples/magnetic-button";
import Header from "@/components/website/header";
import Footer from "@/components/website/footer";
import AnimatedGradientTextExample from "@/components/examples/animated-gradient-text";
import MarqueeEffectExample from "@/components/examples/marquee-effect";
import CountAnimationExample from "@/components/examples/count-animation/base";
import ThreeDTiltEffectExample from "@/components/examples/3d-tilt-effect";

export const metadata: Metadata = {
  title: "Bundui - Tailwind CSS and Motion components for your project",
  description:
    "Perfect for enhancing your web projects with beautiful, fluid animations. A collection of open source, customizable motion components. Built with Tailwind CSS and Motion.",
};

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const buttonVariants = {
    primary:
      "bg-zinc-50 border border-zinc-200 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-900",
    secondary:
      "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:hover:bg-zinc-300 dark:text-zinc-950",
  };

  return (
    <button
      className={`inline-flex items-center rounded-md px-2.5 py-1.5 text-sm ${buttonVariants[variant]}`}
    >
      {children}
    </button>
  );
}

function CardExample({ children }: { children: React.ReactNode }) {
  return (
    <div className="border relative w-full rounded-lg bg-zinc-50 p-4 shadow-[0px_0px_0px_1px_var(--color-zinc-100),0px_2px_2px_0px_var(--color-zinc-50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
      <div className="flex h-[400px] items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default function Motion() {
  return (
    <>
      <Header />
      <div className="px-6 py-4 pb-20">
        <section className="flex h-full flex-col items-center justify-center pt-20">
          <div className="flex w-full max-w-lg lg:max-w-xl flex-col items-center justify-center text-center">
            <h1 className="relative mb-4 text-3xl lg:text-5xl font-semibold text-foreground">
              Build beautiful animated components
            </h1>
            <p className="text-center text-muted-foreground">
              Beautifully designed motions components. Easy copy-paste.
              Customizable. Open Source. Built for engineers and designers.
            </p>
          </div>
          <div className="flex items-center space-x-4 py-6">
            <Link href="/docs/components/animated-gradient-text">
              <Button>
                Explore Components
                <ChevronRight className="ml-1.5 h-4 w-4 fill-white dark:fill-zinc-950" />
              </Button>
            </Link>
            <a
              href="https://github.com/bundui/components"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">
                <GitHubIcon className="mr-1.5 h-4 w-4 fill-white dark:fill-zinc-950" />
                Star on GitHub
              </Button>
            </a>
          </div>
        </section>
        <section className="container grid grid-cols-2 mx-auto max-w-(--breakpoint-xl) py-32 gap-4 lg:gap-10">
          <CardExample>
            <ThreeDTiltEffectExample />
          </CardExample>
          <CardExample>
            <CountAnimationExample />
          </CardExample>
          <CardExample>
            <FloatingButtonExample />
          </CardExample>
          <CardExample>
            <MagneticButtonExample />
          </CardExample>
          <CardExample>
            <AnimatedGradientTextExample />
          </CardExample>
          <CardExample>
            <MarqueeEffectExample />
          </CardExample>
        </section>
      </div>
      <Footer />
    </>
  );
}
