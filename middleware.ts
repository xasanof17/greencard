import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ru", "uz"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  domains: [
    { defaultLocale: "en", domain: `${process.env.NEXT_PUBLIC_BASE_URL}` },
    { defaultLocale: "ru", domain: `${process.env.NEXT_PUBLIC_BASE_URL}/ru` },
    { defaultLocale: "uz", domain: `${process.env.NEXT_PUBLIC_BASE_URL}/uz` },
  ],
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
