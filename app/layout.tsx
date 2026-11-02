import type { Metadata, Viewport } from "next";

import { SiteFooter, SiteHeader } from "@/app/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.messymamasnw.com"),
  title: {
    default: "Messy Mamas NW | Household support in Bellingham, WA",
    template: "%s | Messy Mamas NW",
  },
  description:
    "Messy Mamas NW provides practical, judgment-free household support for Bellingham, Ferndale, and nearby Whatcom County communities.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Messy Mamas NW",
    description:
      "Practical household support and laundry, decluttering, and donation coordination for real homes in Whatcom County.",
    url: "https://www.messymamasnw.com",
    siteName: "Messy Mamas NW",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f3eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#f8f3eb] font-sans text-stone-900 antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
