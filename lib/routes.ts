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
    name: 'Getting started',
    children: [
      {
        name: 'Introduction',
        href: '/docs/introduction'
      },
      {
        name: 'Install Next.js',
        href: '/docs/install-nextjs'
      }
    ]
  },
  {
    name: 'Components',
    children: [
      {
        name: 'Floating Button',
        href: '/docs/components/floating-button'
      }
    ]
  }
];
