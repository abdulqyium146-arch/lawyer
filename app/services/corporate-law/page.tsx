import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, CheckCircle2, TrendingUp, FileText } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Corporate Law Solicitors Manchester | Business Legal Services | NJB Legal",
  description:
    "Expert corporate law solicitors in Manchester. NJB Legal handles business formation, mergers & acquisitions, shareholder agreements and commercial contracts. Fixed-fee options. Free initial consultation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://anisrahmanchambers.co.uk/services/corporate-law" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Corporate Law Solicitors Manchester | Business Legal Services | NJB Legal",
    description:
      "Manchester corporate lawyers for business formation, M&A, shareholder agreements and commercial contracts. Fixed-fee and transparent pricing.",
    url: "https://anisrahmanchambers.co.uk/services/corporate-law",
  },
};

const faqs = [
  {
    question: "Do I need a solicitor to set up a limited company?",
    answer:
      "You can incorporate a company without a solicitor, but legal advice is strongly recommended if you have multiple shareholders, complex ownership structures, or significant assets to protect. A solicitor can draft a shareholders' agreement and articles of association that protect all parties from the outset.",
  },
  {
    question: "What does a shareholders' agreement cover?",
    answer:
      "A shareholders' agreement governs the relationship between company shareholders. It typically covers voting rights, dividend policy, share transfer restrictions, deadlock provisions, exit mechanisms and what happens if a shareholder dies or leaves the business. It sits alongside the company's articles of association.",
  },
  {
    question: "How long does a business acquisition take?",
    answer:
      "A straightforward asset purchase can complete in 4–8 weeks. Share purchases typically take 6–12 weeks due to the additional due diligence required. Complex transactions or those requiring regulatory approval take longer. We provide clear timelines and keep you updated at every stage.",
  },
  {
    question: "What is due diligence in a business acquisition?",
    answer:
      "Due diligence is the process of investigating a business before acquiring it. It covers financial records, contracts, employment matters, intellectual property, property leases and any disputes or liabilities. Our corporate team conducts thorough due diligence to identify risks before you commit to a purchase.",
  },
  {
    question: "Can you help with commercial contract disputes?",
    answer:
      "Yes. Our dispute resolution team handles commercial contract disputes including breach of contract claims, injunctions and damages. We always consider the commercial reality and aim to resolve disputes efficiently — through negotiation, mediation or, where necessary, litigation.",
  },
  {
    question: "Do you offer fixed fees for corporate work?",
    answer:
      "Yes. We offer fixed-fee options for many corporate matters including company formation, shareholder agreements and straightforward business sales. For more complex transactions, we provide detailed cost estimates so you always know what to expect. Transparency in legal fees is central to how we work.",
  },
];

const breadcrumb = [
  { name: "Services", href: "/services" },
  { name: "Corporate Law" },
];

const schemaItems = [
  { name: "Services", href: "/services" },
  { name: "Corporate Law", href: "/services/corporate-law" },
];

const steps = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "We discuss your business objectives and legal needs, providing a clear overview of costs and timelines before any commitment.",
  },
  {
    number: 2,
    title: "Strategy & Planning",
    description:
      "We design the right legal structure for your transaction or matter — whether that is a shareholders' agreement, M&A structure or contract framework.",
  },
  {
    number: 3,
    title: "Documentation & Negotiation",
    description:
      "We draft, review and negotiate all legal documents — protecting your position and ensuring commercial terms are properly reflected.",
  },
  {
    number: 4,
    title: "Completion & Compliance",
    description:
      "We manage completion and post-transaction compliance, including Companies House filings and HMRC notifications where required.",
  },
];

export default function CorporateLawPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={faqs} id="corporate-law-faq" />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumb} />
        </div>

        {/* Hero */}
        <header className="bg-ink pt-14 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              NJB Legal — Manchester &amp; Cheshire and the North West
            </p>
            <h1
              className="font-cormorant font-bold italic text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
            >
              Corporate Law Solicitors in Manchester — Expert Business Legal Advice
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4 mb-8">
              From start-up formation to multi-million pound acquisitions, NJB Legal provides commercially
              focused legal advice to businesses of all sizes across Manchester and the North West.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Free Consultation
              </Link>
              <a
                href="tel:07587723897"
                className="inline-flex items-center gap-2 font-outfit font-semibold text-gold border border-gold/40 hover:border-gold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Briefcase size={16} />
                07587 723897
              </a>
            </div>
          </div>
        </header>

        {/* Stats bar */}
        <div className="bg-gold py-5 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              "Free Initial Consultation",
              "Fixed-Fee Options",
              "All Business Sizes",
              "SRA Regulated",
            ].map((s) => (
              <div key={s} className="flex items-center justify-center gap-2 text-ink font-outfit font-semibold text-sm">
                <CheckCircle2 size={16} />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Definition */}
          <div className="border-l-4 border-gold bg-cream rounded-r-xl px-6 py-5 mb-16 max-w-3xl">
            <h2 className="font-cormorant font-bold text-ink text-xl mb-2">What Does Corporate Law Cover?</h2>
            <p className="font-outfit text-slate text-sm leading-relaxed">
              Corporate law encompasses the legal rules and practices that govern the formation, operation and dissolution
              of businesses. It covers company incorporation, mergers and acquisitions, shareholder agreements, commercial
              contracts, employment law compliance, business dispute resolution and regulatory compliance. Our Manchester
              corporate team advises SMEs, owner-managed businesses and larger corporations across all sectors.
            </p>
          </div>

          {/* Services grid */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Corporate Law Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon="🏗️" name="Business Formation & Structuring" description="Company incorporation, partnership agreements, LLP formation and group restructuring for new and growing businesses." href="/services/corporate-law" />
              <ServiceCard icon="🤝" name="Mergers & Acquisitions" description="Full legal support for business sales, acquisitions and mergers — from heads of terms through to completion." href="/services/corporate-law" />
              <ServiceCard icon="📜" name="Shareholder Agreements" description="Protect all shareholders with a robust agreement covering voting rights, share transfers, dividends and exit provisions." href="/services/corporate-law" />
              <ServiceCard icon="📄" name="Commercial Contracts" description="Drafting and reviewing supply agreements, service contracts, distribution agreements and terms of business." href="/services/corporate-law" />
              <ServiceCard icon="👥" name="Employment Law" description="Employment contracts, restrictive covenants, TUPE obligations and settlement agreements for employers and employees." href="/services/corporate-law" />
              <ServiceCard icon="⚔️" name="Business Dispute Resolution" description="Commercial litigation, contract disputes, shareholder conflicts and injunctions — resolved efficiently and effectively." href="/services/corporate-law" />
            </div>
          </section>

          {/* Process */}
          <section className="mb-16 bg-cream rounded-2xl px-8 py-12">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              How We Work
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                    <span className="font-cormorant font-bold text-gold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-outfit font-semibold text-ink text-base mb-2">{step.title}</h3>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Apex */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Why Choose NJB Legal for Corporate Law?
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <FileText size={16} className="text-gold" />, title: "Fixed-Fee Transparency", body: "We offer fixed fees for most corporate matters so you always know what you are paying. No unexpected invoices, no hourly billing surprises." },
                { icon: <TrendingUp size={16} className="text-gold" />, title: "Manchester Business Expertise", body: "We understand the Manchester business landscape. Our corporate team has advised hundreds of North West businesses across all sectors." },
                { icon: <Briefcase size={16} className="text-gold" />, title: "Commercial Focus", body: "We give practical, commercially-minded advice — not just legal theory. Our goal is always to help your business achieve its objectives." },
                { icon: <CheckCircle2 size={16} className="text-gold" />, title: "18+ Years Experience", body: "With over 18 years of corporate law expertise, we have the knowledge and network to handle transactions of any complexity." },
              ].map((p) => (
                <div key={p.title} className="bg-white border border-mist rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="font-outfit font-semibold text-ink text-base">{p.title}</h3>
                  </div>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Corporate Law FAQs
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Related */}
          <section className="mb-16 pt-12 border-t border-mist">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Other Legal Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <ServiceCard icon="⚖️" name="Criminal Defence" description="24/7 emergency criminal defence across Cheshire and the North West. Police station duty solicitor available." href="/services/criminal-law" />
              <ServiceCard icon="👨‍👩‍👧" name="Family Law" description="Divorce, child custody, financial settlements and domestic abuse protection in Manchester." href="/services/family-law" />
              <ServiceCard icon="🏠" name="Property Law" description="Residential and commercial conveyancing, lease negotiations and property disputes." href="/services/property-law" />
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}


