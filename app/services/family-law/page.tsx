import type { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle2, Scale, Users } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Family Law Solicitors Manchester | Divorce & Child Custody | NJB Legal",
  description:
    "Compassionate family law solicitors in Manchester. NJB Legal handles divorce, child custody, financial settlements, domestic abuse protection and prenuptial agreements. Legal aid available. Free initial consultation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://anisrahmanchambers.co.uk/services/family-law" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Family Law Solicitors Manchester | Divorce & Child Custody | NJB Legal",
    description:
      "Expert family law solicitors in Manchester. Divorce, child arrangements, financial orders and domestic abuse protection across Cheshire and the North West.",
    url: "https://anisrahmanchambers.co.uk/services/family-law",
  },
};

const faqs = [
  {
    question: "How long does a divorce take in England and Wales?",
    answer:
      "Since the introduction of no-fault divorce in 2022, the minimum timeframe is 26 weeks (6 months) from the application date. Complex cases involving contested finances or child arrangements may take longer. We will give you a realistic timeline at your free initial consultation.",
  },
  {
    question: "How is child custody decided in England?",
    answer:
      "English family courts focus on the best interests of the child. Both parents are encouraged to reach a child arrangements agreement, often through mediation. If agreement cannot be reached, the court will make a Child Arrangements Order specifying where the child lives and the time spent with each parent.",
  },
  {
    question: "What is a clean break order?",
    answer:
      "A clean break order is a court order that ends all financial claims between spouses after divorce. Without one, your ex-partner could make financial claims against you years later, even after remarriage. We strongly advise all divorcing clients to obtain a clean break order to protect their financial future.",
  },
  {
    question: "Can I get legal aid for family law matters?",
    answer:
      "Legal aid is available in family cases involving domestic abuse, forced marriage or child abduction. For other family matters, legal aid is means-tested and may not be available. We offer competitive fee arrangements and fixed-fee options for many family law services. Contact us to discuss your options.",
  },
  {
    question: "What is a prenuptial agreement and is it enforceable?",
    answer:
      "A prenuptial agreement sets out how assets will be divided if the marriage breaks down. While not automatically binding in England and Wales, courts give significant weight to prenups that were entered into freely with full financial disclosure and independent legal advice. We draft robust prenuptial agreements that courts are likely to uphold.",
  },
  {
    question: "What can I do if I'm experiencing domestic abuse?",
    answer:
      "If you are in immediate danger, call 999. For legal protection, we can apply urgently for a Non-Molestation Order or Occupation Order — often within 24 hours without the abuser being present. Legal aid is available for domestic abuse victims. Our solicitors will handle your case with complete sensitivity and confidentiality.",
  },
];

const breadcrumb = [
  { name: "Services", href: "/services" },
  { name: "Family Law" },
];

const schemaItems = [
  { name: "Services", href: "/services" },
  { name: "Family Law", href: "/services/family-law" },
];

const steps = [
  {
    number: 1,
    title: "Free Initial Consultation",
    description:
      "We listen without judgement and explain your rights and options in clear, compassionate language. No obligation.",
  },
  {
    number: 2,
    title: "Understand Your Options",
    description:
      "We explain all routes — mediation, collaborative law, or court proceedings — and advise on the best approach for your situation.",
  },
  {
    number: 3,
    title: "Negotiate or Litigate",
    description:
      "We negotiate on your behalf to reach a fair settlement. If necessary, we represent you confidently in the family court.",
  },
  {
    number: 4,
    title: "Resolution & Settlement",
    description:
      "We secure court orders to protect your settlement, whether a financial consent order, child arrangements order or divorce decree.",
  },
];

export default function FamilyLawPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={faqs} id="family-law-faq" />

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
              Family Law Solicitors in Manchester — Compassionate, Expert Advice
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4 mb-8">
              Family law matters are deeply personal. Our solicitors combine legal expertise with genuine compassion —
              helping you navigate divorce, child arrangements and financial settlements with clarity and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Free Consultation
              </Link>
              <a
                href="tel:07587723897"
                className="inline-flex items-center gap-2 font-outfit font-semibold text-gold border border-gold/40 hover:border-gold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Heart size={16} />
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
              "Legal Aid Available",
              "Child-Focused Approach",
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
            <h2 className="font-cormorant font-bold text-ink text-xl mb-2">What Does Family Law Cover?</h2>
            <p className="font-outfit text-slate text-sm leading-relaxed">
              Family law governs the legal relationships between individuals within a family. It covers divorce and
              separation, financial arrangements on relationship breakdown, child custody and contact arrangements,
              domestic abuse protection, adoption, cohabitation disputes and pre-nuptial or post-nuptial agreements.
              Our Manchester family law team handles all of these areas with sensitivity and expertise.
            </p>
          </div>

          {/* Services grid */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Family Law Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon="💍" name="Divorce & Separation" description="Expert guidance through no-fault divorce proceedings. We handle paperwork, timelines and negotiations to protect your interests." href="/services/family-law" />
              <ServiceCard icon="👶" name="Child Custody & Contact" description="Child arrangements orders, residence disputes and contact schedules — always with the child's best interests at the centre." href="/services/family-law" />
              <ServiceCard icon="💰" name="Financial Settlements" description="Fair division of assets, pensions, property and maintenance. We negotiate hard to protect your financial future after separation." href="/services/family-law" />
              <ServiceCard icon="🛡️" name="Domestic Abuse Protection" description="Emergency Non-Molestation and Occupation Orders. Legal aid available. We act fast to keep you and your children safe." href="/services/family-law" />
              <ServiceCard icon="📋" name="Prenuptial Agreements" description="Protect your assets before marriage. We draft robust prenuptial agreements that courts will give significant weight to." href="/services/family-law" />
              <ServiceCard icon="🏠" name="Cohabitation Agreements" description="For unmarried couples — a cohabitation agreement protects both parties' rights over property, finances and children." href="/services/family-law" />
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
              Why Choose NJB Legal for Family Law?
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Heart size={16} className="text-gold" />, title: "Compassionate Approach", body: "We understand the emotional difficulty of family matters. Our solicitors are trained to provide legal advice with empathy and discretion." },
                { icon: <Scale size={16} className="text-gold" />, title: "Legal Aid Available", body: "We accept legal aid for eligible family cases including domestic abuse. We will advise you on whether you qualify at your first consultation." },
                { icon: <Users size={16} className="text-gold" />, title: "Child-Focused Mediation", body: "We encourage mediation and collaborative law where appropriate — reducing conflict and legal costs while protecting children from unnecessary stress." },
                { icon: <CheckCircle2 size={16} className="text-gold" />, title: "Cheshire Based", body: "Our family law team is Based in Winsford, Cheshire city centre — convenient for clients across Cheshire and the North West, Salford, Stockport and beyond." },
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
              Family Law FAQs
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Related services */}
          <section className="mb-16 pt-12 border-t border-mist">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Other Legal Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <ServiceCard icon="⚖️" name="Criminal Defence" description="24/7 emergency criminal defence across Cheshire and the North West. Police station duty solicitor available." href="/services/criminal-law" />
              <ServiceCard icon="🏢" name="Corporate Law" description="Business formation, mergers, shareholder agreements and commercial contracts for Manchester businesses." href="/services/corporate-law" />
              <ServiceCard icon="🏠" name="Property Law" description="Residential and commercial conveyancing, lease negotiations and property disputes in Cheshire and the North West." href="/services/property-law" />
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}


