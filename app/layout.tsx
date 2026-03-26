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
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://anisrahmanchambers.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: "NJB Legal", url: `${SITE_URL}/about` }],
  creator: "NJB Legal",
  publisher: "NJB Legal Limited",
  formatDetection: { telephone: true, email: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#C9A84C" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "NJB Legal",
    title: "NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
    description:
      "NJB Legal — commercial property, corporate & commercial and agricultural law solicitors. Serving Cheshire, the North West and nationwide. SRA regulated via Nexa Law.",
    images: [
      {
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "NJB Legal — Commercial Property & Business Law Solicitors in Cheshire",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NJBLegal",
    title: "NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
    description:
      "Commercial property, corporate & commercial and agricultural law solicitors. Cheshire, North West & nationwide.",
    images: [`${SITE_URL}/android-chrome-512x512.png`],
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
  category: "legal services",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "NJB Legal",
      legalName: "NJB Legal Limited",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/android-chrome-512x512.png`,
        contentUrl: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        caption: "NJB Legal",
      },
      image: `${SITE_URL}/android-chrome-512x512.png`,
      description:
        "NJB Legal is a trading name of NJB Legal Limited — specialist commercial property, corporate, commercial and agricultural law solicitors serving clients throughout Cheshire, the North West and nationwide.",
      telephone: "+447587723897",
      email: "info@anisrahmanchambers.co.uk",
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
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: [
        { "@type": "City", name: "Winsford" },
        { "@type": "City", name: "Northwich" },
        { "@type": "City", name: "Chester" },
        { "@type": "City", name: "Macclesfield" },
        { "@type": "City", name: "Crewe" },
        { "@type": "City", name: "Knutsford" },
        { "@type": "City", name: "Wilmslow" },
        { "@type": "City", name: "Nantwich" },
        { "@type": "City", name: "Warrington" },
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Liverpool" },
        { "@type": "AdministrativeArea", name: "Cheshire" },
        { "@type": "AdministrativeArea", name: "North West England" },
        { "@type": "Country", name: "England and Wales" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Legal Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Property Law",
              url: `${SITE_URL}/services/commercial-property-solicitor-cheshire`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate & Commercial Law",
              url: `${SITE_URL}/services/corporate-commercial-lawyer-north-west`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Agricultural Law",
              url: `${SITE_URL}/services/agricultural-law-solicitor-uk`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Leases",
              url: `${SITE_URL}/services/commercial-lease-solicitor-cheshire`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Contracts",
              url: `${SITE_URL}/services/business-contracts-solicitor-cheshire`,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Land & Development Law",
              url: `${SITE_URL}/services/land-development-solicitor-cheshire`,
            },
          },
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
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "NJB Legal",
      description:
        "Commercial Property & Business Law Solicitors in Cheshire — serving clients across the North West and nationwide.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
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
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Google Maps embeds */}
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
        {/* Structured data — global organisation + website entities */}
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
