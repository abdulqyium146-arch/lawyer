import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import BlogCard from "@/app/components/ui/BlogCard";
import CTABanner from "@/app/components/ui/CTABanner";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Legal Guides & Insights | Commercial Property, Corporate & Agricultural Law | NJB Legal",
  description:
    "Free, plain-English legal guides from NJB Legal in Winsford, Cheshire. Covering commercial property, corporate & commercial law and agricultural law across the North West and UK.",
  alternates: { canonical: "https://njblegal.co.uk/blog" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Legal Guides & Insights | NJB Legal Cheshire",
    description:
      "Free legal guides from NJB Legal — commercial property, corporate & commercial and agricultural law for businesses, investors and landowners in Cheshire and the North West.",
    url: "https://njblegal.co.uk/blog",
  },
};

const schemaItems = [{ name: "Blog", href: "/blog" }];

const posts = [
  {
    title: "How to Buy Commercial Property in Cheshire: A Practical Guide (2026)",
    excerpt:
      "Thinking about buying commercial property in Cheshire or the North West? This guide walks you through the key steps, what to watch out for, and how a solicitor can protect your investment.",
    href: "/blog/how-to-buy-commercial-property-cheshire",
    date: "20 March 2026",
    readTime: "8 min read",
    category: "Commercial Property",
  },
  {
    title: "Break Clauses in Commercial Leases: A Complete Guide (2026)",
    excerpt:
      "Want to exit your commercial lease early? NJB Legal explains how break clauses work, what notice you need to give, and the conditions you must meet to exercise them correctly.",
    href: "/blog/break-clauses-commercial-leases",
    date: "15 March 2026",
    readTime: "8 min read",
    category: "Commercial Property",
  },
  {
    title: "Commercial Lease Guide for UK Business Owners (2026)",
    excerpt:
      "Before you sign a commercial lease, make sure you understand rent reviews, dilapidations, break clauses and your security of tenure rights under the Landlord and Tenant Act 1954.",
    href: "/blog/commercial-lease-guide-2026",
    date: "10 March 2026",
    readTime: "10 min read",
    category: "Commercial Property",
  },
  {
    title: "Legal Checklist When Buying a Business in the UK (2026)",
    excerpt:
      "A complete legal checklist for buying a business in England and Wales — covering due diligence, asset vs share purchase, TUPE obligations and what to look out for in the sale agreement.",
    href: "/blog/business-acquisition-legal-checklist",
    date: "20 February 2026",
    readTime: "11 min read",
    category: "Corporate & Commercial",
  },
  {
    title: "The Complete UK Guide to Shareholders' Agreements (2026)",
    excerpt:
      "If you have more than one owner in your business, a shareholders' agreement could save you from a very expensive dispute. Here is what it should cover and why it matters.",
    href: "/blog/shareholders-agreement-guide-uk",
    date: "5 February 2026",
    readTime: "9 min read",
    category: "Corporate & Commercial",
  },
  {
    title: "Agricultural Tenancy Guide UK (2026)",
    excerpt:
      "A plain-English guide to AHA and FBT tenancy agreements, succession rights, rent reviews and dispute resolution for agricultural landowners and tenants in England and Wales.",
    href: "/blog/agricultural-tenancy-guide-uk-2026",
    date: "10 January 2026",
    readTime: "10 min read",
    category: "Agricultural Law",
  },
];

const categories = [
  "All",
  "Commercial Property",
  "Corporate & Commercial",
  "Agricultural Law",
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Blog" }]} />
        </div>

        {/* Hero */}
        <header className="bg-ink pt-14 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              NJB Legal — Winsford, Cheshire
            </p>
            <h1
              className="font-cormorant font-bold italic text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
            >
              Legal Guides &amp; Insights
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4">
              Free, plain-English guides on commercial property, corporate and agricultural law from the NJB Legal team. Written to help you understand the issues that matter to your business or land.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full font-outfit text-xs font-semibold cursor-default transition-colors ${
                  cat === "All"
                    ? "bg-ink text-white"
                    : "bg-cream text-slate border border-mist hover:border-gold/50"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Blog grid */}
          <section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {posts.map((post) => (
                <BlogCard
                  key={post.href}
                  title={post.title}
                  excerpt={post.excerpt}
                  href={post.href}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                />
              ))}
            </div>
          </section>

          {/* Subscribe CTA */}
          <div className="bg-ink rounded-2xl px-8 py-10 text-center mb-16">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Need Legal Advice?
            </p>
            <h2 className="font-cormorant font-bold text-white text-2xl sm:text-3xl mb-3">
              Speak to a Cheshire Solicitor
            </h2>
            <p className="font-outfit text-white/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Our legal guides are a starting point — for advice on your specific situation, contact NJB Legal
              for a free initial consultation.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Free Consultation
            </Link>
          </div>
        </main>

        <CTABanner />
      </div>
    </>
  );
}
