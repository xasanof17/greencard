import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/layouts";
import { Inter } from "next/font/google";
import meta from "@/meta";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  abstract: meta.description,
  alternates: {
    canonical: new URL(`${BASE_URL}`),
    languages: {
      en: `${BASE_URL}/en`,
      uz: `${BASE_URL}/uz`,
      ru: `${BASE_URL}/ru`,
    },
  },
  metadataBase: new URL(`${BASE_URL}`),
  applicationName: "Greencard",
  assets: `${BASE_URL}/assets`,
  authors: {
    name: "Xasanov Javohir",
    url: "https://bit.ly/javohir",
  },
  category: "Greencard - DV2025 Period",
  creator: "JX Team",
  colorScheme: "light",
  generator: "Next.js",
  icons: {
    shortcut: `${BASE_URL}/favicon.ico`,
    icon: `${BASE_URL}/favicon.ico`,
    apple: `${BASE_URL}/favicon.ico`,
  },
  manifest: new URL(`${BASE_URL}/manifest.webmanifest`),
  publisher: "Vercel",
  referrer: "origin",
  themeColor: "#fff",
  keywords: [
    "Greencard",
    "Greencard Uzbekistan",
    "Greencard - DV2025",
    "Go usa",
    "Apply greencard",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    countryName: "Uzbekistan",
    emails: meta.emails,
    faxNumbers: meta.faxNumbers,
    url: `${BASE_URL}`,
    siteName: "Greencard - DV2025",
    phoneNumbers: meta.faxNumbers,
    images: [
      {
        url: `${BASE_URL}/opengraph-image.jpg`,
        width: 1920,
        height: 1080,
      },
      {
        url: `${BASE_URL}/twitter-image.jpg`,
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
