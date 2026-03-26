import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Users, Building2, Home as HomeIcon,
  ArrowRight, Scale, Award, Clock, ThumbsUp,
  Phone, Mail, MapPin, Star,
} from "lucide-react";
import CTABanner from "@/app/components/ui/CTABanner";
import BlogCard from "@/app/components/ui/BlogCard";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Commercial Property & Business Law Solicitors in Cheshire | NJB Legal",
  description:
    "NJB Legal — commercial property, corporate & commercial and agricultural law solicitors in Winsford, Cheshire. Senior-level advice. SRA regulated via Nexa Law. Call 07587 723897.",
  alternates: { canonical: "https://anisrahmanchambers.co.uk" },
  openGraph: {
    title: "Commercial Property & Business Law Solicitors in Cheshire | NJB Legal",
    description:
      "Expert commercial property, corporate & commercial and agricultural law solicitors in Cheshire. Serving clients across the North West and nationwide. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk",
    locale: "en_GB",
    type: "website",
  },
};

const practiceAreas = [
  {
    icon: Building2,
    name: "Commercial Property",
    href: "/services/commercial-property-solicitor-cheshire",
    description:
      "Buying, selling or leasing commercial property in Cheshire and beyond. We handle everything from freehold acquisitions to complex multi-site portfolios.",
  },
  {
    icon: Scale,
    name: "Corporate & Commercial",
    href: "/services/corporate-commercial-lawyer-north-west",
    description:
      "Business acquisitions, shareholder agreements, due diligence and commercial contracts. Practical, business-focused legal support for growing companies.",
  },
  {
    icon: HomeIcon,
    name: "Agricultural Law",
    href: "/services/agricultural-law-solicitor-uk",
    description:
      "Farmland purchases, agricultural tenancies, diversification projects and rural property matters across Cheshire and the North West.",
  },
  {
    icon: Users,
    name: "Commercial Leases",
    href: "/services/commercial-lease-solicitor-cheshire",
    description:
      "Negotiating and drafting commercial leases for landlords and tenants. Clear advice on break clauses, rent reviews and repairing obligations.",
  },
];

const stats = [
  { value: "500+",   label: "Matters Completed" },
  { value: "4.9★",   label: "Google Rating" },
  { value: "Senior", label: "Level Expertise" },
  { value: "98%",    label: "Client Satisfaction" },
];

const usps = [
  {
    icon: Award,
    title: "SRA Regulated",
    body: "NJB Legal is authorised and regulated through Nexa Law (SRA No. 633024). You get the full protection of working with a properly regulated firm.",
  },
  {
    icon: Clock,
    title: "Responsive and Accessible",
    body: "We respond quickly and keep you updated throughout. Direct access to your solicitor — not just a call centre or junior assistant.",
  },
  {
    icon: ThumbsUp,
    title: "Commercially Focused",
    body: "Our advice is driven by what makes business sense, not just what the law says. We understand that legal decisions have commercial consequences.",
  },
  {
    icon: Scale,
    title: "Free Initial Chat",
    body: "Not sure if we can help? Call or email us and we will have an honest conversation about your situation — no charge, no obligation.",
  },
];

const testimonials = [
  {
    quote:
      "NJB Legal handled our commercial property purchase brilliantly. They found a title issue that would have caused us serious problems, sorted it quickly and got the deal over the line on time.",
    author: "Michael R.",
    location: "Cheshire",
    service: "Commercial Property",
    rating: 5,
  },
  {
    quote:
      "The advice on our business acquisition was sharp and practical. They flagged a supplier contract issue, helped us negotiate a price reduction and completed everything without drama.",
    author: "Karen B.",
    location: "North West",
    service: "Corporate & Commercial",
    rating: 5,
  },
  {
    quote:
      "Bought farmland through NJB Legal and they were excellent throughout. They clearly know agricultural law inside out and made a complex transaction feel very straightforward.",
    author: "Tom W.",
    location: "Cheshire",
    service: "Agricultural Law",
    rating: 5,
  },
];

const caseResults = [
  {
    outcome: "£38K Saved on Lease",
    area: "Commercial Property",
    detail:
      "Negotiated rent reduction and removal of a full repairing obligation on a commercial lease renewal, saving the tenant £38,000 over the lease term.",
  },
  {
    outcome: "£1.8M Deal Completed",
    area: "Corporate & Commercial",
    detail:
      "Management buyout of a Cheshire logistics business. We ran full due diligence, flagged a supplier contract risk and renegotiated the purchase price accordingly.",
  },
  {
    outcome: "Dispute Resolved",
    area: "Agricultural Law",
    detail:
      "Farm tenancy dispute between landlord and long-standing tenant over dilapidations. Resolved without tribunal — saving both parties significant cost and time.",
  },
];

const faqItems = [
  {
    question: "What does NJB Legal specialise in?",
    answer:
      "We focus on three main areas: commercial property, corporate & commercial law, and agricultural law. That means we help businesses and investors with property transactions, company deals and contracts, and we support farmers and rural landowners with all the legal aspects of their land and businesses.",
  },
  {
    question: "Do I need a solicitor to buy commercial property?",
    answer:
      "You are not legally required to use a solicitor, but it would be very risky not to. Commercial property transactions involve title checks, searches, contract negotiations, and often planning and environmental considerations. A mistake can be very expensive. We make sure everything is checked properly before you commit to anything.",
  },
  {
    question: "How long does a commercial property purchase take?",
    answer:
      "Most straightforward commercial property purchases complete in 8 to 12 weeks. More complex deals — involving planning conditions, multiple titles or development issues — can take longer. We keep things moving and always keep you updated so there are no surprises.",
  },
  {
    question: "How do I get in touch with NJB Legal?",
    answer:
      "Just call us on 07587 723897, email info@anisrahmanchambers.co.uk or use the enquiry form on our contact page. We aim to respond the same day or the next working day. We are based in Winsford, Cheshire but work with clients across the North West and nationwide.",
  },
];

const recentPosts = [
  {
    title: "How to Buy Commercial Property in Cheshire: A Practical Guide",
    excerpt:
      "Thinking about buying commercial property in Cheshire? This guide walks you through the key steps, what to watch out for and how a solicitor can protect your investment.",
    href: "/blog/buying-commercial-property-cheshire",
    date: "20 March 2026",
    readTime: "8 min read",
    category: "Commercial Property",
  },
  {
    title: "Commercial Lease Guide 2026: What Every Tenant and Landlord Should Know",
    excerpt:
      "Commercial leases can be complicated. This plain-English guide covers the key clauses, common traps and what you should always negotiate before signing.",
    href: "/blog/commercial-lease-guide",
    date: "10 March 2026",
    readTime: "9 min read",
    category: "Commercial Property",
  },
  {
    title: "The Complete UK Guide to Shareholders' Agreements (2026)",
    excerpt:
      "If you have more than one owner in your business, a shareholders' agreement could save you from a very expensive dispute. Here is what it should cover and why it matters.",
    href: "/blog/shareholders-agreement-guide-uk",
    date: "1 March 2026",
    readTime: "8 min read",
    category: "Corporate Law",
  },
];

const serviceAreas = [
  "Winsford", "Cheshire", "Chester", "Crewe", "Northwich", "Nantwich",
  "Knutsford", "Macclesfield", "Wilmslow", "Warrington",
  "Manchester", "Liverpool", "North West England", "Nationwide",
];

const contactUsps = [
  { icon: Award, title: "Commercial Focus", body: "Advice that makes business sense" },
  { icon: ThumbsUp, title: "Responsive Service", body: "Direct access to your solicitor" },
  { icon: Scale, title: "SRA Regulated", body: "Regulated via Nexa Law, SRA No. 633024" },
];

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[]} />
      <FAQSchema faqs={faqItems} id="homepage-faq" />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-36 px-4 overflow-hidden"
        aria-label="NJB Legal — Commercial Property & Business Law Solicitors in Cheshire"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/njb-legal-property-hero.webp')" }}
          aria-hidden="true"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-outfit font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <Shield size={12} aria-hidden="true" />
            SRA Regulated · Cheshire · North West · Nationwide
          </div>

          <h1 className="font-cormorant font-bold text-white leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl">
            Commercial Property &amp;{" "}
            <span className="text-gold italic">Business Law</span>{" "}
            Solicitors in Cheshire
          </h1>

          <span className="gold-rule mx-auto block mb-6" aria-hidden="true" />

          <p className="font-outfit text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Senior-level, commercially focused legal support for owners, investors and landowners
            across commercial property, corporate and commercial matters and agricultural land —
            serving clients throughout Cheshire, the North West and nationwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8">
            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-4 text-center"
            >
              Enquire Now
            </Link>
            <a
              href="tel:+447587723897"
              className="btn-ghost-white text-base px-8 py-4 flex items-center justify-center gap-2"
              aria-label="Call NJB Legal on 07587 723897"
            >
              <Phone size={17} aria-hidden="true" />
              07587 723897
            </a>
          </div>

          {/* Trust signals row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/60 text-sm font-outfit">
            <span>✓ Commercial Property</span>
            <span>✓ Corporate &amp; Commercial</span>
            <span>✓ Agricultural Law</span>
            <span>✓ Senior-Level Expertise</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────── */}
      <section className="bg-gold py-8 px-4" aria-label="NJB Legal key figures">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-cormorant font-bold text-ink text-3xl md:text-4xl">{s.value}</p>
              <p className="font-outfit text-ink/80 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRACTICE AREAS ────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4" aria-label="Legal practice areas">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h2-style mb-3">Our Practice Areas</h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-slate max-w-xl mx-auto text-sm sm:text-base">
              Specialist legal services for businesses, investors and landowners across Cheshire and the North West.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group bg-white border border-mist rounded-xl p-6 hover:shadow-card-hover hover:border-gold/40 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-cormorant font-semibold text-ink text-xl mb-3 group-hover:text-gold transition-colors">
                    {area.name}
                  </h3>
                  <p className="font-outfit text-sm text-slate leading-relaxed flex-1 mb-4">
                    {area.description}
                  </p>
                  <span className="font-outfit text-gold text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT BLURB ───────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-4" aria-label="About NJB Legal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2-style mb-3">Specialist Legal Advice for You</h2>
          <span className="gold-rule mx-auto block mb-6" aria-hidden="true" />
          <p className="font-outfit text-slate text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We give you direct access to a senior solicitor who understands your business. No unnecessary jargon, no passing you around junior staff — just clear, focused advice from someone who knows their area inside out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about" className="btn-secondary">
              About Us
            </Link>
            <Link href="/case-results" className="btn-ghost-white bg-ink text-white border-ink hover:bg-ink/90 px-6 py-3 rounded font-outfit text-sm font-semibold transition-colors">
              View Case Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4" aria-label="Client testimonials">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h2-style mb-3">What Our Clients Say</h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm sm:text-base">
              Genuine reviews from clients across Cheshire, the North West and beyond.
            </p>
          </div>

          {/* Horizontal scroll on mobile, 3-col on desktop */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="bg-cream border border-mist rounded-xl p-6 flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-start"
              >
                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
                  ))}
                </div>
                <blockquote>
                  <p className="font-outfit text-sm text-slate leading-relaxed italic mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-ink rounded-full flex items-center justify-center shrink-0" aria-hidden="true">
                    <span className="font-cormorant font-bold text-gold text-sm">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-outfit font-semibold text-ink text-sm">{t.author}</p>
                    <p className="font-outfit text-xs text-slate">{t.service} · {t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE RESULTS ──────────────────────────────────── */}
      <section className="bg-ink grain-overlay py-16 md:py-24 px-4" aria-label="Recent case results">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cormorant font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-3">
              Proven Results for Our Clients
            </h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-white/70 max-w-xl mx-auto text-sm sm:text-base">
              Results speak louder than promises. A selection of outcomes we have achieved.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {caseResults.map((r) => (
              <div key={r.outcome} className="bg-white/5 border border-gold/20 rounded-xl p-6 md:p-7">
                <span className="inline-block text-xs font-outfit font-semibold text-gold uppercase tracking-wider mb-3">
                  {r.area}
                </span>
                <p className="font-cormorant font-bold text-white text-2xl mb-3">{r.outcome}</p>
                <p className="font-outfit text-white/65 text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/case-results" className="btn-ghost-white">
              View All Case Results
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-4" aria-label="Why choose NJB Legal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h2-style mb-3">Why Choose NJB Legal?</h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-slate max-w-xl mx-auto text-sm sm:text-base">
              Senior-level expertise, commercially grounded advice, and a genuine commitment to getting the right result for every client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {usps.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="bg-white rounded-xl border border-mist p-6">
                  <div className="w-11 h-11 bg-ink rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-cormorant font-semibold text-ink text-lg mb-2">{u.title}</h3>
                  <p className="font-outfit text-sm text-slate leading-relaxed">{u.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TALK TO US ────────────────────────────────────── */}
      <section className="bg-ink py-16 md:py-24 px-4" aria-label="Contact NJB Legal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-cormorant font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-3">
              Talk to Us
            </h2>
            <span className="gold-rule mx-auto block mb-5" aria-hidden="true" />
            <p className="font-outfit text-white/70 max-w-xl mx-auto text-sm sm:text-base">
              We are always open to talk about your situation, your business and how we can help.
              Get in touch — no obligation, no jargon.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a
              href="tel:+447587723897"
              className="flex flex-col items-center gap-3 bg-white/5 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone size={20} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-outfit text-white/60 text-xs uppercase tracking-wide mb-1">Call Us</p>
                <p className="font-cormorant font-semibold text-white text-xl">07587 723897</p>
                <p className="font-outfit text-white/50 text-xs mt-1">Mon – Fri, 9am – 5:30pm</p>
              </div>
            </a>

            <a
              href="mailto:info@anisrahmanchambers.co.uk"
              className="flex flex-col items-center gap-3 bg-white/5 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail size={20} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-outfit text-white/60 text-xs uppercase tracking-wide mb-1">Email Us</p>
                <p className="font-cormorant font-semibold text-white text-xl">info@anisrahmanchambers.co.uk</p>
                <p className="font-outfit text-white/50 text-xs mt-1">Response within 2 hours</p>
              </div>
            </a>

            <Link
              href="/contact"
              className="flex flex-col items-center gap-3 bg-white/5 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors text-center group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <MapPin size={20} className="text-gold" aria-hidden="true" />
              </div>
              <div>
                <p className="font-outfit text-white/60 text-xs uppercase tracking-wide mb-1">Visit Us</p>
                <p className="font-cormorant font-semibold text-white text-xl">7 Charter Court</p>
                <p className="font-outfit text-white/50 text-xs mt-1">Winsford, Cheshire CW7 2FY</p>
              </div>
            </Link>
          </div>

          {/* 3 USPs strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-10">
            {contactUsps.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-cormorant font-semibold text-white text-lg leading-tight">{u.title}</p>
                    <p className="font-outfit text-white/60 text-sm">{u.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 px-4" aria-label="Frequently asked legal questions">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h2-style mb-3">Frequently Asked Questions</h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm sm:text-base">
              Common questions about commercial property, corporate and agricultural law — answered clearly.
            </p>
          </div>
          <FAQAccordion faqs={faqItems} />
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24 px-4" aria-label="Latest legal guides">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="h2-style mb-3">Legal Guides &amp; Insights</h2>
            <span className="gold-rule mx-auto block mb-4" aria-hidden="true" />
            <p className="font-outfit text-slate max-w-xl mx-auto text-sm sm:text-base">
              Free, plain-English guides on commercial property, corporate and agricultural law from the NJB Legal team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.href} {...post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-secondary">
              View All Guides
            </Link>
          </div>
        </div>
      </section>

      {/* ── GEO SEO — SERVICE AREAS ───────────────────────── */}
      <section className="bg-white py-10 px-4 border-t border-mist" aria-label="Areas NJB Legal serves">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-outfit text-xs text-slate/70 uppercase tracking-wide mb-4">
            Serving clients across Cheshire, the North West &amp; Nationwide
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-block bg-cream border border-mist text-slate text-xs font-outfit px-3 py-1.5 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <CTABanner
        heading="Ready to Talk to a Solicitor?"
        subheading="Get in touch for a free initial chat about your situation. No obligation, no jargon — just straight, honest advice from an experienced solicitor."
      />
    </>
  );
}
