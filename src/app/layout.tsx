import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Italianno, Manrope } from "next/font/google";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

// Self-hosted at build time by next/font: no request to Google, no layout shift.
const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const script = Italianno({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Extensii de gene în Timișoara`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  formatDetection: { telephone: true, address: false, email: false },
  robots: { index: true, follow: true },
  // Google Search Console: add the verification code in Vercel as NEXT_PUBLIC_GSC_VERIFICATION.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#FCF3EA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <BookingDialog />
      </body>
    </html>
  );
}
