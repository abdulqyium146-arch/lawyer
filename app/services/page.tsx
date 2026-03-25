import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import CTABanner from "@/app/components/ui/CTABanner";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Legal Services | Commercial Property, Corporate & Agricultural Law | NJB Legal Cheshire",
  description:
    "NJB Legal in Winsford, Cheshire offers specialist commercial property, corporate & commercial and agricultural law services for businesses, investors and landowners across the North West and UK.",
  alternates: { canonical: "https://njblegal.co.uk/services" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Legal Services | NJB Legal Cheshire",
    description:
      "Specialist legal services in Cheshire — commercial property, corporate & commercial and agricultural law. SRA regulated. Serving clients across the North West and nationwide.",
    url: "https://njblegal.co.uk/services",
  },
};

const schemaItems = [{ name: "Services", href: "/services" }];

const practiceAreas = [
  {
    icon: "🏢",
    name: "Commercial Property",
    href: "/services/commercial-property-solicitor-cheshire",
    highlight: "Cheshire & North West",
    description:
      "We handle all types of commercial property transactions for buyers, sellers, landlords and tenants. Whether you are purchasing a freehold investment, taking on a new lease or managing a property portfolio, we give you clear, practical advice throughout.",
    services: [
      "Freehold & Leasehold Acquisitions",
      "Commercial Property Sales",
      "Investment Property Transactions",
      "Portfolio Management",
      "Property Development",
      "Land Registry Services",
    ],
  },
  {
    icon: "📋",
    name: "Corporate & Commercial Law",
    href: "/services/corporate-commercial-lawyer-north-west",
    highlight: "Business Focused",
    description:
      "From buying or selling a business to setting up a shareholder agreement or reviewing a commercial contract, we give businesses across the North West commercially grounded legal support that is straightforward and cost-effective.",
    services: [
      "Business Acquisitions & Sales",
      "Due Diligence",
      "Shareholder Agreements",
      "Commercial Contracts",
      "Business Structures & Formation",
      "Joint Ventures",
    ],
  },
  {
    icon: "🌾",
    name: "Agricultural Law",
    href: "/services/agricultural-law-solicitor-uk",
    highlight: "Cheshire & Nationwide",
    description:
      "We support farmers, landowners and rural estates with the full range of agricultural legal matters. From buying farmland to dealing with tenancy disputes and planning for diversification projects, we understand the rural sector and the specific issues it faces.",
    services: [
      "Farmland Purchases & Sales",
      "Agricultural Tenancy Agreements",
      "Farm Business Tenancies (FBT)",
      "Diversification Projects",
      "Rural Planning & Development",
      "Agricultural Disputes",
    ],
  },
  {
    icon: "📑",
    name: "Commercial Leases",
    href: "/services/commercial-lease-solicitor-cheshire",
    highlight: "Landlords & Tenants",
    description:
      "Commercial leases are long-term commitments and the details really matter. We negotiate, draft and review commercial leases for landlords and tenants across Cheshire and the North West — making sure the terms work in your favour before you sign.",
    services: [
      "New Lease Negotiations",
      "Lease Renewals",
      "Break Clause Advice",
      "Rent Review Clauses",
      "Repairing Obligations",
      "Lease Assignments",
    ],
  },
];

const areas = [
  "Winsford", "Cheshire", "Chester", "Crewe", "Northwich",
  "Nantwich", "Knutsford", "Macclesfield", "Warrington", "Manchester",
  "Liverpool", "Preston", "North West England", "Nationwide",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Services" }]} />
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
              Specialist Legal Services for Businesses &amp; Landowners
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4 mb-8">
              Commercial property, corporate & commercial and agricultural law — focused, senior-level advice for businesses, investors and landowners across Cheshire, the North West and nationwide.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Practice areas */}
          <section className="mb-20">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Practice Areas
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-10 space-y-8">
              {practiceAreas.map((area) => (
                <div key={area.name} className="bg-white border border-mist rounded-2xl p-8 lg:flex lg:gap-10">
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl">{area.icon}</span>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-outfit font-semibold uppercase tracking-wider mb-2">
                          {area.highlight}
                        </span>
                        <h3 className="font-cormorant font-bold text-ink text-2xl">{area.name}</h3>
                      </div>
                    </div>
                    <p className="font-outfit text-slate text-sm leading-relaxed mb-6">{area.description}</p>
                    <Link
                      href={area.href}
                      className="btn-primary inline-flex"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="lg:w-1/2">
                    <p className="font-outfit text-xs text-slate/60 uppercase tracking-wider font-semibold mb-3">
                      Services Include
                    </p>
                    <ul className="space-y-2">
                      {area.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 font-outfit text-sm text-slate">
                          <CheckCircle2 size={14} className="text-gold shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why NJB Legal */}
          <section className="mb-20 bg-cream rounded-2xl px-8 py-12">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Why Choose NJB Legal?
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "SRA Regulated", desc: "NJB Legal is regulated through Nexa Law (SRA No. 633024) — so you get the full protection of working with a properly regulated firm." },
                { stat: "Cheshire Based", desc: "Based in Winsford, Cheshire, we know the local market well and work with clients across the North West and throughout the UK." },
                { stat: "Senior-Level Advice", desc: "You deal directly with a senior solicitor — not a junior assistant. That means better advice and a smoother experience." },
                { stat: "Free Initial Chat", desc: "Not sure if we can help? Give us a call or drop us an email. The first conversation is always free and with no obligation." },
              ].map((p) => (
                <div key={p.stat} className="bg-white rounded-xl p-5 border border-mist">
                  <h3 className="font-cormorant font-bold text-ink text-xl mb-2">{p.stat}</h3>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Areas we serve */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Areas We Serve
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm mt-4 mb-6 max-w-2xl">
              We are based in Winsford, Cheshire and work with clients across Cheshire, the North West and throughout the UK. Many clients work with us remotely — we make the process as straightforward as possible wherever you are.
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream border border-mist rounded-full font-outfit text-sm text-slate"
                >
                  <MapPin size={12} className="text-gold" />
                  {area}
                </span>
              ))}
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}


