import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const routes: string[] = [
    "/",
    "/services",
    "/news",
    "/information",
    "/questions",
    "/contact",
    "/form",
    "/form/application"
  ];

  // Generate the sitemap data
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  return sitemap;
}
