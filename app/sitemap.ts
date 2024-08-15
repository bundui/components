import { MetadataRoute } from 'next';
/* import { NAVIGATION } from './docs/layout'; */

export default function sitemap(): MetadataRoute.Sitemap {
  const url = `${process.env.BASE_URL}`;

  const docNavigationItems: MetadataRoute.Sitemap = [];
  /* 
  NAVIGATION.forEach(({ children }) => {
    children.forEach((item) => {
      docNavigationItems.push({
        url: `${process.env.BASE_URL}/${item.href}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1
      });
    });
  }); */

  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ];
}
