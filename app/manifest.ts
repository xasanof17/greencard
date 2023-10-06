import { MetadataRoute } from "next";
import meta from "@/meta";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.title,
    short_name: "Greencard - DV2025",
    description: meta.description,
    start_url: "/",
    display: "browser",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16",
        type: "image/ico",
      },
    ],
  };
}
