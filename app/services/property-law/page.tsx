import type { Metadata } from "next";
import Link from "next/link";
import { Home, CheckCircle2, MapPin, FileText } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Property Law Solicitors Manchester | Conveyancing & Commercial Property | NJB Legal",
  description:
    "Expert property law solicitors in Manchester. NJB Legal handles residential conveyancing, commercial property, lease negotiations, property disputes and landlord & tenant matters. Fixed-fee conveyancing. Free initial consultation.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://anisrahmanchambers.co.uk/services/property-law" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Property Law Solicitors Manchester | Conveyancing & Commercial Property | NJB Legal",
    description:
      "Fixed-fee conveyancing and commercial property law in Manchester. Residential purchases, commercial leases, property disputes and landlord & tenant advice.",
    url: "https://anisrahmanchambers.co.uk/services/property-law",
  },
};

const faqs = [
  {
    question: "What does conveyancing involve?",
    answer:
      "Conveyancing is the legal process of transferring ownership of property. It involves carrying out searches, reviewing the title, raising and answering enquiries, exchanging contracts and completing the transaction. Our conveyancing solicitors handle every step, keeping you informed throughout.",
  },
  {
    question: "How long does conveyancing take in England?",
    answer:
      "The average conveyancing transaction in England takes 8–12 weeks from instruction to completion. The time varies depending on the chain length, mortgage requirements, search results and the responsiveness of all parties. We aim to move as quickly as possible without compromising on thoroughness.",
  },
  {
    question: "Do I need a solicitor to buy or sell a property?",
    answer:
      "Legally, you are not required to use a solicitor for conveyancing in England — but practically, mortgage lenders require it, and the risks of proceeding without qualified legal representation are very significant. Our fixed-fee conveyancing service makes professional legal protection affordable.",
  },
  {
    question: "What is stamp duty and how much will I pay?",
    answer:
      "Stamp Duty Land Tax (SDLT) is paid on property purchases in England. Rates vary depending on the purchase price and whether you are a first-time buyer, moving home or purchasing an additional property. We will calculate your SDLT liability as part of our conveyancing service and submit the return on your behalf.",
  },
  {
    question: "What is a commercial lease and what should I look out for?",
    answer:
      "A commercial lease grants a business tenant the right to occupy premises for a fixed period. Key terms to scrutinise include the rent review mechanism, break clauses, repairing obligations (dilapidations), alienation provisions and whether the lease is protected under the Landlord and Tenant Act 1954. Our commercial property team negotiates favourable lease terms for tenants and landlords.",
  },
  {
    question: "What can I do if there is a boundary dispute with my neighbour?",
    answer:
      "Boundary disputes can be resolved through negotiation, mediation or, if necessary, court proceedings. We review title plans, conveyancing documents and historical evidence to establish the correct boundary. Early legal advice significantly reduces the cost and stress of boundary disputes.",
  },
];

const breadcrumb = [
  { name: "Services", href: "/services" },
  { name: "Property Law" },
];

const schemaItems = [
  { name: "Services", href: "/services" },
  { name: "Property Law", href: "/services/property-law" },
];

const steps = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "We discuss your property matter, provide a fixed-fee quote and explain the full process before you instruct us.",
  },
  {
    number: 2,
    title: "Searches & Due Diligence",
    description:
      "We conduct all required searches (local authority, drainage, environmental) and review the title to identify any issues.",
  },
  {
    number: 3,
    title: "Exchange of Contracts",
    description:
      "Once all enquiries are satisfied, we exchange contracts — making the transaction legally binding — and agree a completion date.",
  },
  {
    number: 4,
    title: "Completion",
    description:
      "We transfer funds, register the title at Land Registry and hand you the keys. Your property transaction is complete.",
  },
];

export default function PropertyLawPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={faqs} id="property-law-faq" />

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
              Property Law Solicitors in Manchester — Residential &amp; Commercial Conveyancing
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4 mb-8">
              Whether you are buying your first home, selling a commercial investment or negotiating a business lease,
              NJB Legal provides expert property law advice with fixed-fee transparency and fast turnaround.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Free Consultation
              </Link>
              <a
                href="tel:07587723897"
                className="inline-flex items-center gap-2 font-outfit font-semibold text-gold border border-gold/40 hover:border-gold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Home size={16} />
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
              "Fixed-Fee Conveyancing",
              "Residential & Commercial",
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
            <h2 className="font-cormorant font-bold text-ink text-xl mb-2">What Does Property Law Cover?</h2>
            <p className="font-outfit text-slate text-sm leading-relaxed">
              Property law governs the ownership and use of land and buildings. It covers residential conveyancing
              (buying, selling and remortgaging homes), commercial property transactions (purchases, sales and leases),
              landlord and tenant matters, property disputes (boundary issues, easements, adverse possession) and
              Land Registry registrations. Our Manchester property team handles both residential and commercial matters.
            </p>
          </div>

          {/* Services grid */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Property Law Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon="🏡" name="Residential Conveyancing" description="Fixed-fee conveyancing for property purchases, sales, remortgages and transfers of equity across Cheshire and the North West." href="/services/property-law" />
              <ServiceCard icon="🏢" name="Commercial Property" description="Commercial property purchases, sales and development — from high-street retail to industrial units and office buildings." href="/services/property-law" />
              <ServiceCard icon="📋" name="Lease Negotiations" description="Commercial and residential lease negotiations for landlords and tenants — protecting your position on rent, repairs and break clauses." href="/services/property-law" />
              <ServiceCard icon="⚖️" name="Property Disputes" description="Boundary disputes, easements, adverse possession, nuisance claims and landlord and tenant disputes resolved efficiently." href="/services/property-law" />
              <ServiceCard icon="📁" name="Land Registry Services" description="First registrations, title rectification, restriction applications and Land Registry requisitions handled promptly." href="/services/property-law" />
              <ServiceCard icon="🔑" name="Landlord & Tenant" description="Section 21 and Section 8 notices, lease renewals under the Landlord and Tenant Act 1954, and dilapidations claims." href="/services/property-law" />
            </div>
          </section>

          {/* Process */}
          <section className="mb-16 bg-cream rounded-2xl px-8 py-12">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Conveyancing Process
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
              Why Choose NJB Legal for Property Law?
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { icon: <FileText size={16} className="text-gold" />, title: "Fixed-Fee Conveyancing", body: "No hidden costs. Our fixed-fee conveyancing quotes cover everything — searches, Land Registry fees, SDLT returns and all standard legal work." },
                { icon: <MapPin size={16} className="text-gold" />, title: "Manchester Property Experts", body: "We know the Cheshire and the North West property market. Our team has handled hundreds of transactions across Salford, Stockport, Bolton and beyond." },
                { icon: <CheckCircle2 size={16} className="text-gold" />, title: "Fast Turnaround", body: "We work efficiently to keep your transaction on track. Our clients regularly complete faster than the national average without cutting corners." },
                { icon: <Home size={16} className="text-gold" />, title: "Full Coverage — Residential & Commercial", body: "We handle everything from first-time buyer conveyancing to multi-million pound commercial property transactions and portfolio management." },
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
              Property Law FAQs
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
              <ServiceCard icon="🏢" name="Corporate Law" description="Business formation, mergers, shareholder agreements and commercial contracts for Manchester businesses." href="/services/corporate-law" />
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}


