import type { MetadataRoute } from "next";

const BASE_URL = "https://anisrahmanchambers.co.uk";

// Static dates — prevents unnecessary sitemap churn on every build
const DATES = {
  homepage:  "2026-03-01",
  services:  "2026-03-01",
  locations: "2026-03-01",
  blog:      "2026-03-01",
  static:    "2026-02-01",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/`,
      lastModified: DATES.homepage,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Services ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/services`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/commercial-property-solicitor-cheshire`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/commercial-lease-solicitor-cheshire`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/corporate-commercial-lawyer-north-west`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/agricultural-law-solicitor-uk`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/land-development-solicitor-cheshire`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/business-contracts-solicitor-cheshire`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Locations ─────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/locations`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-winsford`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/locations/solicitor-cheshire`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/locations/solicitor-north-west`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-northwich`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-chester`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-macclesfield`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-crewe`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-knutsford`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-wilmslow`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-nantwich`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-congleton`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-warrington`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/solicitor-manchester`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/locations/solicitor-liverpool`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/locations/solicitor-stockport`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/locations/solicitor-preston`,
      lastModified: DATES.locations,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // ── Blog ──────────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/blog`,
      lastModified: DATES.blog,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/break-clauses-commercial-leases`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/commercial-lease-guide`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/buying-commercial-property-cheshire`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/agricultural-tenancy-law-uk`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/business-acquisition-legal-checklist`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/shareholders-agreement-guide-uk`,
      lastModified: DATES.blog,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Core pages ────────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/case-results`,
      lastModified: DATES.static,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Legal / policy ────────────────────────────────────────────────────────
    {
      url: `${BASE_URL}/privacy`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: DATES.static,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // NOTE: orphaned pages (criminal-law, family-law, corporate-law, property-law,
    // child-custody-manchester, divorce-process, what-to-do-if-arrested) are
    // intentionally excluded — they carry robots: noindex.
  ];
}
