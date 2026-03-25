import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StickyNav from "@/app/components/layout/StickyNav";
import Footer from "@/app/components/layout/Footer";
import MobileCTABar from "@/app/components/layout/MobileCTABar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://njblegal.co.uk"),
  title: {
    default: "NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
    template: "%s | NJB Legal",
  },
  description:
    "NJB Legal — commercial property, corporate & commercial and agricultural law solicitors serving Cheshire, the North West and nationwide. Call 07587 723897.",
  keywords: [
    "commercial property solicitor Cheshire",
    "business law solicitor Cheshire",
    "corporate solicitor North West",
    "agricultural law solicitor UK",
    "commercial lease solicitor Cheshire",
    "NJB Legal",
    "NJB Legal Winsford",
  ],
  authors: [{ name: "NJB Legal", url: "https://njblegal.co.uk/about" }],
  creator: "NJB Legal",
  publisher: "NJB Legal Limited",
  formatDetection: { telephone: true, email: true },
  icons: {
    icon: [
      // SVG first — scales perfectly, dark background, gold NJB initials
      { url: "/favicon.svg", type: "image/svg+xml" },
      // PNG fallbacks for older browsers
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      // iOS home screen — dark bg with NJB LEGAL
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      // Safari pinned tab — solid gold colour
      { rel: "mask-icon", url: "/favicon.svg", color: "#C9A84C" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njblegal.co.uk",
    siteName: "NJB Legal",
    title: "NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
    description:
      "NJB Legal — commercial property, corporate & commercial and agricultural law solicitors. Serving Cheshire, the North West and nationwide. SRA regulated via Nexa Law.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "NJB Legal — Commercial Property & Business Law Solicitors in Cheshire",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
    description:
      "Commercial property, corporate & commercial and agricultural law solicitors. Cheshire, North West & nationwide.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": "https://njblegal.co.uk/#organization",
      name: "NJB Legal",
      legalName: "NJB Legal Limited",
      url: "https://njblegal.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://njblegal.co.uk/android-chrome-512x512.png",
        width: 300,
        height: 200,
      },
      description:
        "NJB Legal is a trading name of NJB Legal Limited — specialist commercial property, corporate, commercial and agricultural law solicitors serving clients throughout Cheshire, the North West and nationwide.",
      telephone: "+447587723897",
      email: "info@njblegal.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7 Charter Court",
        addressLocality: "Winsford",
        addressRegion: "Cheshire",
        postalCode: "CW7 2FY",
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 53.1869,
        longitude: -2.5241,
      },
      hasMap: "https://maps.google.com/?q=7+Charter+Court+Winsford+Cheshire+CW7+2FY",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:30",
        },
      ],
      priceRange: "££",
      currenciesAccepted: "GBP",
      areaServed: [
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Salford" },
        { "@type": "City", name: "Stockport" },
        { "@type": "City", name: "Bolton" },
        { "@type": "City", name: "Bury" },
        { "@type": "City", name: "Rochdale" },
        { "@type": "City", name: "Oldham" },
        { "@type": "City", name: "Wigan" },
        { "@type": "AdministrativeArea", name: "Greater Manchester" },
        { "@type": "AdministrativeArea", name: "North West England" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Property Law" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Commercial Law" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agricultural Law" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Leases" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "87",
      },
      sameAs: [
        "https://www.linkedin.com/company/njb-legal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://njblegal.co.uk/#website",
      url: "https://njblegal.co.uk",
      name: "NJB Legal",
      description: "Commercial Property & Business Law Solicitors in Cheshire — serving clients across the North West and nationwide.",
      publisher: { "@id": "https://njblegal.co.uk/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://njblegal.co.uk/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-outfit antialiased">
        <StickyNav />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
