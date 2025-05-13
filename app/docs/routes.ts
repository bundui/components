type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
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
      },
      {
        name: "Count Animation",
        href: "/docs/components/count-animation",
      },
      {
        name: "Floating Button",
        href: "/docs/components/floating-button",
      },
      {
        name: "3D Tilt Effect",
        href: "/docs/components/3d-tilt-effect",
        isUpdated: true,
      },
      {
        name: "Magnetic Button",
        href: "/docs/components/magnetic-button",
      },
      {
        name: "Text Gradient Scroll",
        href: "/docs/components/text-gradient-scroll",
      },
      {
        name: "Scroll Progress Bar",
        href: "/docs/components/scroll-progress-bar",
      },
      {
        name: "Marquee Effect",
        href: "/docs/components/marquee-effect",
      },
      {
        name: "Ripple Effect",
        href: "/docs/components/ripple-effect",
        isUpdated: true,
      },
    ],
  },
  {
    name: "Backgrounds",
    children: [
      {
        name: "Fireworks Background",
        href: "/docs/components/fireworks-background",
        isNew: true,
      },
      {
        name: "Floating Paths",
        href: "/docs/components/floating-paths-background",
        isNew: true,
      },
      {
        name: "Stars",
        href: "/docs/components/stars-background",
        isNew: true,
      },
      {
        name: "Snowfall",
        href: "/docs/components/background-snowfall-animation",
        isNew: true,
      },
      {
        name: "Meteor",
        href: "/docs/components/background-meteor-shower-animation",
        isNew: true,
      },
      {
        name: "Wavy Background",
        href: "/docs/components/wavy-background",
        isNew: true,
      },
      {
        name: "Geometric Background",
        href: "/docs/components/geometric-background",
        isNew: true,
      },
      {
        name: "Fluid Particles Background",
        href: "/docs/components/fluid-particles-background",
        isNew: true,
      },
    ],
  },
];
