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
import CountAnimationExample from "@/components/examples/count-animation/base";
import MarqueeEffectExample from "@/components/examples/marquee-effect/base";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/core/animated-text";
import RippleEffectColored from "@/components/examples/ripple-effect/colored";
import TiltEffectExample from "@/components/examples/tilt-effect";

export const metadata: Metadata = {
  title: "Bundui - Tailwind CSS, React and Motion components for your project",
  description:
    "Perfect for enhancing your web projects with beautiful, fluid animations. A collection of open source, customizable motion components. Built with Tailwind CSS and Motion."
};

function CardExample({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border p-4 shadow-[0px_0px_0px_1px_var(--color-zinc-100),0px_2px_2px_0px_var(--color-zinc-50)] dark:border dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
      <div className="flex h-[300px] items-center justify-center lg:h-[400px]">{children}</div>
    </div>
  );
}

export default function Motion() {
  return (
    <>
      <Header />
      <div className="px-6 py-4 pb-20">
        <section className="flex h-full flex-col items-center justify-center pt-10 lg:pt-20">
          <div className="flex w-full max-w-lg flex-col items-center justify-center text-center lg:max-w-2xl">
            <h1 className="text-foreground relative mb-4 text-3xl font-semibold lg:text-4xl">
              Great components to create more beautiful interfaces
            </h1>
            <p className="text-muted-foreground text-center">
              Beautifully designed Tailwind CSS, React, shadcn/ui and Motion components. Easy
              copy-paste. Customizable. Open Source. TypeScript compatible.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 py-6 lg:flex-row">
            <Button asChild>
              <Link href="/components">
                Explore Components
                <ChevronRight />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/bundui/components"
                target="_blank"
                rel="noopener noreferrer">
                <GitHubIcon />
                Star on GitHub
              </Link>
            </Button>
          </div>
        </section>
        <section className="container mx-auto grid max-w-(--breakpoint-xl) gap-4 py-32 lg:grid-cols-2 lg:gap-10">
          <CardExample>
            <TiltEffectExample />
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
          <CardExample>
            <AnimatedText
              text="Welcome to the Future"
              className="text-primary text-3xl font-bold"
              animationType="letters"
              staggerDelay={0.08}
              duration={0.6}
            />
          </CardExample>
          <CardExample>
            <RippleEffectColored />
          </CardExample>
        </section>
      </div>
      <Footer />
    </>
  );
}
