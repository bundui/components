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
    name: "Base",
    children: [
      {
        name: "Button",
        href: "/docs/components/button",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Animated Gradient Text",
        href: "/docs/components/animated-gradient-text",
        isNew: false,
      },
      {
        name: "Count Animation",
        href: "/docs/components/count-animation",
        isNew: false,
      },
      {
        name: "Floating Button",
        href: "/docs/components/floating-button",
        isNew: false,
      },
      {
        name: "3D Tilt Effect",
        href: "/docs/components/3d-tilt-effect",
        isNew: true,
      },
      {
        name: "Magnetic Button",
        href: "/docs/components/magnetic-button",
        isNew: false,
      },
      {
        name: "Text Gradient Scroll",
        href: "/docs/components/text-gradient-scroll",
        isNew: false,
      },
      {
        name: "Scroll Progress Bar",
        href: "/docs/components/scroll-progress-bar",
        isNew: false,
      },
      {
        name: "Marquee Effect",
        href: "/docs/components/marquee-effect",
        isNew: false,
      },
    ],
  },
];
