import { Inter } from "next/font/google";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Footer, Navbar } from "@/layouts";
import { Metadata } from "next";
import { BottomFixed, Opportunity } from "@/components";
import { getMessages } from "@/functions";
import meta from "@/meta";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

type LayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  return ["en", "ru", "uz"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return {
    title: t("Layout.title"),
    description: t("Layout.description"),
    abstract: t("Layout.description"),
    alternates: {
      canonical: new URL(`${BASE_URL}`),
      languages: {
        en: `${BASE_URL}/`,
        ru: `${BASE_URL}/ru`,
        uz: `${BASE_URL}/uz`,
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
    verification: {
      google: "1234567890",
      yandex: "1234567890",
      me: "1234567890",
    },
    icons: {
      shortcut: `/favicon.ico`,
      icon: `/favicon.ico`,
      apple: `/favicon.ico`,
    },
    manifest: new URL(`${BASE_URL}/manifest.webmanifest`),
    publisher: "Vercel",
    referrer: "origin",
    themeColor: "#fff",
    keywords: meta.keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      type: "website",
      title: t("Layout.title"),
      description: t("Layout.description"),
      countryName: "Uzbekistan",
      emails: meta.emails,
      faxNumbers: meta.faxNumbers,
      url: `${BASE_URL}`,
      siteName: "Greencard - DV2025",
      phoneNumbers: meta.faxNumbers,
      images: [
        {
          url: `/opengraph-image.jpg`,
          width: 1920,
          height: 1080,
          type: "image/jpeg",
          alt: "DV2025 - Greencard period",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={clsx(inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Opportunity />
          <BottomFixed />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
