type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NAVIGATION: NavigationGroup[] = [
  {
    name: "Getting started",
    children: [
      {
        name: "Introduction",
        href: "/docs/introduction",
      },
      {
        name: "Install Next.js",
        href: "/docs/install-nextjs",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Floating Button",
        href: "/docs/components/floating-button",
        isNew: false,
      },
      {
        name: "Magnetic Button",
        href: "/docs/components/magnetic-button",
        isNew: false,
      },
      {
        name: "Animated Gradient Text",
        href: "/docs/components/animated-gradient-text",
        isNew: true,
      },
      {
        name: "Text Gradient Scroll",
        href: "/docs/components/text-gradient-scroll",
        isNew: true,
      },
      {
        name: "Marquee Animation",
        href: "/docs/components/marquee-animation",
        isNew: true,
      },
      {
        name: "Count Animation",
        href: "/docs/components/count-animation",
        isNew: true,
      },
    ],
  },
];
