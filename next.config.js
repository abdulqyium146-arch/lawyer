/** @type {import('next').NextConfig} */

const DOMAIN = "https://anisrahmanchambers.co.uk";

const securityHeaders = [
  // Stop browsers sniffing MIME types
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevent clickjacking
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Force HTTPS for 2 years, include subdomains, submit to preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Referrer sent only to same origin, full URL on same-origin requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Enable DNS prefetching for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Lock down browser feature access
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  // Content Security Policy — allows Next.js inline scripts + Google Maps + Fonts
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'self' https://www.google.com https://maps.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  // Never expose the Next.js version to attackers
  poweredByHeader: false,

  // Gzip/Brotli compression
  compress: true,

  // ETags for proper HTTP caching
  generateEtags: true,

  // No trailing slashes — canonical form is /page not /page/
  trailingSlash: false,

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anisrahmanchambers.co.uk",
      },
    ],
  },

  // HTTP headers
  async headers() {
    return [
      // Security headers on every response
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Long-lived cache for fingerprinted Next.js static chunks
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // 1-year cache for images in /public
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // 1-year cache for webp/png/svg/ico in public root
      {
        source: "/(.*\\.(?:webp|png|svg|ico|jpg|jpeg|gif|woff2|woff))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Sitemap & robots — short TTL so crawlers pick up changes quickly
      {
        source: "/(sitemap\\.xml|robots\\.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // Redirects: www → non-www (canonical domain)
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.anisrahmanchambers.co.uk" }],
        destination: `${DOMAIN}/:path*`,
        permanent: true, // 301
      },
      // Blog URL clean-ups — old stale slugs → clean canonical slugs (301)
      {
        source: "/blog/commercial-lease-guide-2026",
        destination: "/blog/commercial-lease-guide",
        permanent: true,
      },
      {
        source: "/blog/agricultural-tenancy-guide-uk-2026",
        destination: "/blog/agricultural-tenancy-law-uk",
        permanent: true,
      },
      {
        source: "/blog/how-to-buy-commercial-property-cheshire",
        destination: "/blog/buying-commercial-property-cheshire",
        permanent: true,
      },
      // Legacy service slug safety nets
      {
        source: "/services/criminal-law",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/family-law",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/corporate-law",
        destination: "/services/corporate-commercial-lawyer-north-west",
        permanent: true,
      },
      {
        source: "/services/property-law",
        destination: "/services/commercial-property-solicitor-cheshire",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
