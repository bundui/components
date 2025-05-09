import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/website/theme-provider";
import { GeistMono } from "geist/font/mono";
import GoogleAnalyticsInit from "@/lib/ga";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "Bundui - Tailwind CSS and Framer Motion component collection.",
    description:
      "A collection of beautifully designed animated components, elements, sections that you can copy and paste into your applications. Built with Tailwind CSS and Framer Motion.",
    url: process.env.BASE_URL,
    images: ["/open-graph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}
      >
        <ThemeProvider attribute="class">
          <div className="isolate min-h-screen">{children}</div>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" ? <GoogleAnalyticsInit /> : null}
      </body>
    </html>
  );
}
