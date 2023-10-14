import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/*",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
