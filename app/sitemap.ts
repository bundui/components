import type { MetadataRoute } from "next";

import { source } from "@/lib/source";

export const dynamic = "force-dynamic";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, process.env.BASE_URL).toString();

  return [
    {
      url: `${process.env.BASE_URL}`,
      changeFrequency: "monthly",
      priority: 1
    },
    ...(await Promise.all(
      source.getPages().map(async (page) => {
        return {
          url: url(page.url),
          changeFrequency: "weekly",
          priority: 0.5
        } as MetadataRoute.Sitemap[number];
      })
    ))
  ];
}
