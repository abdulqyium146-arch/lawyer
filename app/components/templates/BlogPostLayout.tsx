import Link from "next/link";
import { Clock, Calendar, User } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import CTABanner from "@/app/components/ui/CTABanner";
import BlogCard from "@/app/components/ui/BlogCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import ArticleSchema from "@/app/components/schema/ArticleSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";
import type { FAQ } from "@/app/components/ui/FAQAccordion";

interface BlogPostLayoutProps {
  title: string;
  datePublished: string;
  dateDisplay: string;
  readTime: string;
  category: string;
  breadcrumbTitle: string;
  url: string;
  description: string;
  faqs?: FAQ[];
  children: React.ReactNode;
}

const RELATED_POSTS = [
  {
    title: "Break Clauses in Commercial Leases: A Complete Guide (2026)",
    excerpt:
      "Understand your rights to exit a commercial lease early. NJB Legal explains how break clauses work, notice requirements, and the conditions you must meet to exercise them correctly.",
    href: "/blog/break-clauses-commercial-leases",
    date: "15 March 2026",
    readTime: "8 min read",
    category: "Commercial Leases",
  },
  {
    title: "Commercial Lease Agreement Guide for UK Business Owners (2026)",
    excerpt:
      "Before signing a commercial lease you need to understand rent review clauses, dilapidations obligations, break clauses and security of tenure under the Landlord and Tenant Act 1954.",
    href: "/blog/commercial-lease-guide-2026",
    date: "10 March 2026",
    readTime: "10 min read",
    category: "Commercial Leases",
  },
  {
    title: "Legal Checklist When Buying a Business in the UK (2026)",
    excerpt:
      "A complete legal checklist for buying a business in England and Wales — covering due diligence, asset vs share purchase, TUPE obligations and shareholder agreements.",
    href: "/blog/business-acquisition-legal-checklist",
    date: "20 February 2026",
    readTime: "11 min read",
    category: "Corporate Law",
  },
];

export default function BlogPostLayout({
  title,
  datePublished,
  dateDisplay,
  readTime,
  category,
  breadcrumbTitle,
  url,
  description,
  faqs,
  children,
}: BlogPostLayoutProps) {
  const breadcrumbItems = [
    { name: "Blog", href: "/blog" },
    { name: breadcrumbTitle },
  ];

  const schemaItems = [
    { name: "Blog", href: "/blog" },
    { name: breadcrumbTitle, href: url },
  ];

  return (
    <>
      {/* Structured data */}
      <ArticleSchema
        headline={title}
        description={description}
        datePublished={datePublished}
        url={url}
      />
      <BreadcrumbSchema items={schemaItems} />
      {faqs && faqs.length > 0 && (
        <FAQSchema
          faqs={faqs}
          id={url.replace(/\//g, "-").replace(/^-/, "")}
        />
      )}

      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>

        {/* Article header */}
        <header className="bg-cream border-b border-mist">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-outfit font-semibold uppercase tracking-wider mb-6">
              {category}
            </span>

            {/* Title */}
            <h1
              className="font-cormorant font-bold italic text-ink leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 1.15 }}
            >
              {title}
            </h1>

            {/* Gold rule */}
            <span className="gold-rule" aria-hidden="true" />

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-5 mt-4 text-sm font-outfit text-slate">
              <span className="flex items-center gap-1.5">
                <User size={14} className="text-gold" aria-hidden="true" />
                <span>NJB Legal</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-gold" aria-hidden="true" />
                <time dateTime={datePublished}>{dateDisplay}</time>
              </span>
              <span className="flex items-center gap-1.5 bg-ink text-cream px-3 py-1 rounded-full text-xs font-semibold">
                <Clock size={12} aria-hidden="true" />
                {readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16">
            {/* Primary column */}
            <article className="max-w-3xl">
              <div
                className="
                  prose-custom
                  font-outfit text-slate text-[0.9375rem] leading-relaxed
                  [&_p]:mb-5
                  [&_h2]:font-cormorant [&_h2]:font-bold [&_h2]:text-ink [&_h2]:text-[clamp(1.5rem,3vw,2.2rem)] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-tight
                  [&_h3]:font-cormorant [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-5
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-5
                  [&_li]:text-slate [&_li]:leading-relaxed
                  [&_strong]:font-semibold [&_strong]:text-ink
                  [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-ink [&_a]:transition-colors
                  [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:bg-cream [&_blockquote]:rounded-r-lg [&_blockquote]:px-5 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-slate
                  [&_nav]:my-8
                "
              >
                {children}
              </div>

              {/* Author bio */}
              <aside
                aria-label="About the author"
                className="mt-16 bg-cream border border-mist rounded-xl p-6 flex gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-ink border-2 border-gold flex items-center justify-center shrink-0">
                  <span className="font-cormorant font-bold text-gold text-2xl">A</span>
                </div>
                <div>
                  <p className="text-xs font-outfit font-semibold text-gold uppercase tracking-widest mb-1">
                    About the Author
                  </p>
                  <p className="font-cormorant font-semibold text-ink text-xl mb-1">
                    NJB Legal
                  </p>
                  <p className="font-outfit text-slate text-sm leading-relaxed mb-3">
                    NJB Legal is a specialist law firm based in Winsford, Cheshire, providing expert commercial property, corporate & commercial and agricultural law advice across the North West and nationwide. SRA regulated via Nexa Law.
                  </p>
                  <address className="not-italic font-outfit text-xs text-slate/70 space-y-0.5">
                    <p>NJB Legal — 7 Charter Court, Winsford, Cheshire, CW7 2FY</p>
                    <p>
                      <a href="tel:07587723897" className="text-gold hover:underline">
                        07587 723897
                      </a>
                      {" · "}
                      <a href="mailto:info@njblegal.co.uk" className="text-gold hover:underline">
                        info@njblegal.co.uk
                      </a>
                    </p>
                  </address>
                </div>
              </aside>

              {/* In-article CTA */}
              <div className="mt-10 bg-ink rounded-xl px-6 py-8 text-center">
                <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-2">
                  Need Legal Advice?
                </p>
                <p className="font-cormorant font-semibold text-white text-2xl mb-3">
                  Need advice on this topic? Contact NJB Legal
                </p>
                <p className="font-outfit text-white/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  Speak with one of our Cheshire solicitors for clear, practical advice
                  tailored to your situation. Free initial consultation available.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request a Consultation
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Sidebar" className="mt-12 lg:mt-0">
              <div className="sticky top-8 space-y-6">
                {/* Contact card */}
                <div className="bg-ink rounded-lg p-6 text-white">
                  <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                    Speak to a Solicitor
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center shrink-0">
                      <span className="font-cormorant font-bold text-gold text-lg">N</span>
                    </div>
                    <p className="font-cormorant font-semibold text-xl text-white">
                      NJB Legal
                    </p>
                  </div>
                  <p className="font-outfit text-white/70 text-xs leading-relaxed mb-5">
                    Specialist solicitors in Winsford, Cheshire for commercial property, corporate
                    & commercial and agricultural law across the North West and nationwide.
                  </p>
                  <address className="not-italic space-y-2 mb-5">
                    <p className="font-outfit text-white/80 text-xs">
                      7 Charter Court, Winsford,
                      <br />
                      Cheshire CW7 2FY
                    </p>
                    <a
                      href="tel:07587723897"
                      className="block font-outfit text-gold text-sm font-semibold hover:underline"
                    >
                      07587 723897
                    </a>
                    <a
                      href="mailto:info@njblegal.co.uk"
                      className="block font-outfit text-gold text-sm font-semibold hover:underline"
                    >
                      info@njblegal.co.uk
                    </a>
                  </address>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Request a Consultation
                  </Link>
                </div>

                {/* Regulatory note */}
                <div className="bg-cream border border-mist rounded-lg p-5">
                  <p className="font-outfit text-xs text-slate/70 leading-relaxed">
                    NJB Legal is authorised and regulated by the Solicitors Regulation
                    Authority (SRA No. 633024 (Nexa Law)). Serving Cheshire, the North West and nationwide.
                  </p>
                </div>

                {/* Services links */}
                <div>
                  <h3 className="font-cormorant font-semibold text-ink text-xl mb-4">
                    Our Services
                  </h3>
                  <nav aria-label="Services navigation">
                    <ul className="space-y-2">
                      {[
                        { name: "Commercial Property", href: "/services/commercial-property-solicitor-cheshire" },
                        { name: "Corporate & Commercial", href: "/services/corporate-commercial-lawyer-north-west" },
                        { name: "Agricultural Law", href: "/services/agricultural-law-solicitor-uk" },
                        { name: "Commercial Leases", href: "/services/commercial-lease-solicitor-cheshire" },
                        { name: "All Services", href: "/services" },
                      ].map((svc) => (
                        <li key={svc.href}>
                          <Link
                            href={svc.href}
                            className="font-outfit text-sm text-slate hover:text-gold transition-colors flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                            {svc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          <section aria-labelledby="related-posts-heading" className="mt-20 pt-12 border-t border-mist">
            <h2
              id="related-posts-heading"
              className="font-cormorant font-bold text-ink mb-2"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
            >
              Related Legal Guides
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RELATED_POSTS.map((post) => (
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
        </main>

        {/* CTA Banner */}
        <CTABanner />
      </div>
    </>
  );
}
