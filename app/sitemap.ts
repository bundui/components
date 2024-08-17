import { NAVIGATION } from '@/lib/routes';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = `${process.env.BASE_URL}`;

  const docNavigationItems: MetadataRoute.Sitemap = [];

  NAVIGATION.forEach(({ children }) => {
    children.forEach((item) => {
      docNavigationItems.push({
        url: `${process.env.BASE_URL}${item.href}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1
      });
    });
  });

  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    ...docNavigationItems
  ];
}
