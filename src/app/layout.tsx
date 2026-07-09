import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { InspectionWizard } from "@/components/forms/InspectionWizard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyActions } from "@/components/layout/MobileStickyActions";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/structured-data/JsonLd";
import { TrackingProvider } from "@/components/tracking/TrackingProvider";
import { siteConfig, absoluteUrl } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: siteConfig.assets.faviconSvg, type: "image/svg+xml" },
      { url: "/brand/icons/favicon.ico" }
    ],
    apple: [{ url: siteConfig.assets.appleTouchIcon }]
  },
  alternates: { canonical: absoluteUrl("/") }
};

export const viewport: Viewport = {
  themeColor: "#073E32",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a className="skipLink" href="#main">Naar inhoud</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <TrackingProvider />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <InspectionWizard />
        <MobileStickyActions />
        <CookieConsent />
      </body>
    </html>
  );
}
