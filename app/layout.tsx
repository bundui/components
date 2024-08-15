import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import Header from '@/components/website/header';
import Footer from '@/components/website/footer';

const inter = Inter({ subsets: ['latin'] });
/* 
export const metadata: Metadata = {
  title: 'Bundui',
  description:
    'Bundui, a collection of open-source, customizable motion components built with Framer Motion and Tailwind CSS. Perfect for enhancing your web projects with beautiful, smooth animations.'
}; */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}>
        <ThemeProvider attribute="class">
          <Header />
          <div className="isolate min-h-screen">{children}</div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
