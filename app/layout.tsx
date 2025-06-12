import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/website/theme-provider";
import { GeistMono } from "geist/font/mono";
import GoogleAnalyticsInit from "@/lib/ga";
import { RootProvider } from "fumadocs-ui/provider";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  openGraph: {
    title: "Bundui - Tailwind CSS, React, shadcn/ui and Motion components",
    description:
      "Beautifully designed Tailwind CSS, React, shadcn/ui and Motion components. Easy copy-paste. Customizable. Open Source. TypeScript compatible.",
    images: ["/open-graph-image.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} ${GeistMono.variable} bg-background`}>
        <ThemeProvider attribute="class">
          <div className="isolate min-h-screen">
            <RootProvider>{children}</RootProvider>
          </div>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
