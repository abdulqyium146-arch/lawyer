import type { Metadata } from "next";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Cheshire | NJB Legal — Winsford",
  description:
    "NJB Legal provides specialist commercial property, corporate and agricultural law across all of Cheshire. Based in Winsford, Cheshire, serving Chester, Northwich, Macclesfield, Crewe, Knutsford and more. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-cheshire",
  },
  openGraph: {
    title: "Commercial Property Solicitor Cheshire | NJB Legal — Winsford",
    description:
      "NJB Legal provides specialist commercial property, corporate and agricultural law across all of Cheshire. Based in Winsford, Cheshire, serving Chester, Northwich, Macclesfield, Crewe, Knutsford and more. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-cheshire",
    locale: "en_GB",
    type: "website",
  },
};

const CHESHIRE_TOWNS = [
  { town: "Winsford", href: "/locations/solicitor-winsford" },
  { town: "Chester", href: "/locations/solicitor-chester" },
  { town: "Northwich", href: "/locations/solicitor-northwich" },
  { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
  { town: "Crewe", href: "/locations/solicitor-crewe" },
  { town: "Knutsford", href: "/locations/solicitor-knutsford" },
  { town: "Wilmslow", href: "/locations/solicitor-wilmslow" },
  { town: "Nantwich", href: "/locations/solicitor-nantwich" },
  { town: "Congleton", href: "/locations/solicitor-congleton" },
  { town: "Warrington", href: "/locations/solicitor-warrington" },
  { town: "Ellesmere Port", href: "/locations/solicitor-cheshire" },
  { town: "Sandbach", href: "/locations/solicitor-cheshire" },
  { town: "Middlewich", href: "/locations/solicitor-cheshire" },
  { town: "Runcorn", href: "/locations/solicitor-cheshire" },
];

const SERVICES = [
  {
    icon: "building",
    name: "Commercial Property",
    description:
      "Expert advice on commercial property acquisitions, disposals, and transfers across Cheshire.",
    href: "/services/commercial-property-solicitor-cheshire",
  },
  {
    icon: "filetext",
    name: "Commercial Leases",
    description:
      "Specialist lease negotiation, drafting and review for landlords and tenants throughout Cheshire.",
    href: "/services/commercial-lease-solicitor-cheshire",
  },
  {
    icon: "briefcase",
    name: "Corporate & Commercial",
    description:
      "Business structuring, mergers, acquisitions and corporate transactions for Cheshire businesses.",
    href: "/services/corporate-commercial-lawyer-north-west",
  },
  {
    icon: "tractor",
    name: "Agricultural Law",
    description:
      "Specialist agricultural law advice covering farm sales, tenancies, and rural land matters across Cheshire.",
    href: "/services/agricultural-law-solicitor-uk",
  },
  {
    icon: "hammer",
    name: "Land & Development",
    description:
      "Legal support for land acquisition, planning agreements, and development projects in Cheshire.",
    href: "/services/land-development-solicitor-cheshire",
  },
  {
    icon: "scale",
    name: "Business Contracts",
    description:
      "Drafting, reviewing and negotiating commercial contracts to protect Cheshire businesses.",
    href: "/services/business-contracts-solicitor-cheshire",
  },
];

const USP_CARDS = [
  {
    title: "Partner-Led Advice",
    body: "Every Cheshire client speaks directly with solicitor NJB Legal. No junior handoffs, no impersonal service — expert legal advice delivered personally.",
  },
  {
    title: "County-Wide Coverage",
    body: "NJB Legal advises clients across all of Cheshire — from Chester in the west to Macclesfield in the east, and from Warrington in the north to Nantwich in the south.",
  },
  {
    title: "Local Market Knowledge",
    body: "Years of experience advising Cheshire businesses, landowners and developers gives NJB Legal unparalleled insight into the county's commercial and agricultural property markets.",
  },
  {
    title: "Transparent Pricing",
    body: "Fixed, agreed fees before work begins. Cheshire clients always know the cost of their legal advice — no surprises, no unexpected bills.",
  },
];

const FAQS = [
  {
    question: "What areas of Cheshire does NJB Legal cover?",
    answer:
      "NJB Legal advises clients throughout Cheshire, including Chester, Northwich, Macclesfield, Crewe, Knutsford, Wilmslow, Nantwich, Congleton, Warrington, Manchester, Ellesmere Port, Sandbach, Middlewich and Runcorn. Whether you are in a major Cheshire town or a rural village, NJB Legal can advise on your commercial property, agricultural or business law matter.",
  },
  {
    question: "How do I find a commercial property solicitor in Cheshire?",
    answer:
      "NJB Legal is one of Cheshire's specialist commercial property practices, based in Winsford at 7 Charter Court, Winsford, Cheshire CW7 2FY. You can contact solicitor NJB Legal directly by phone on 07587 723897 or by email at info@anisrahmanchambers.co.uk. We offer initial consultations and can advise on commercial property purchases, sales, leases and development across the county.",
  },
  {
    question: "Can NJB Legal advise on agricultural land in Cheshire?",
    answer:
      "Yes. Agricultural law is a core specialism at NJB Legal. Cheshire has a significant farming and rural landowning community, and NJB Legal regularly advises on farm sales, agricultural tenancy agreements, rural land acquisitions, and development of agricultural land across the county. NJB Legal has extensive experience in Cheshire's rural property market.",
  },
  {
    question: "Does NJB Legal handle commercial leases in Chester?",
    answer:
      "Absolutely. NJB Legal advises both landlords and tenants on commercial leases across all of Cheshire, including Chester's busy retail and hospitality sectors. Whether you are negotiating a new lease, reviewing a lease renewal, or dealing with a lease assignment, NJB Legal can provide expert, cost-effective advice tailored to the Cheshire commercial property market.",
  },
];

export default function SolicitorCheshirePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations" },
          { name: "Solicitor in Cheshire", href: "/locations/solicitor-cheshire" },
        ]}
      />
      <FAQSchema faqs={FAQS} id="faq-cheshire" />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { name: "Locations", href: "/locations" },
              { name: "Solicitor in Cheshire" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <header className="bg-ink py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-outfit text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Cheshire · Based in Manchester
          </p>
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Commercial Property &amp; Business Solicitor in Cheshire | NJB Legal
          </h1>
          <span className="gold-rule block mb-6" aria-hidden="true" />
          <p className="font-outfit text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            NJB Legal is a specialist commercial property, corporate and agricultural law practice
            based in Winsford, Cheshire, at the heart of Cheshire. Solicitor NJB Legal and the NJB Legal
            team advise businesses, landowners, developers and entrepreneurs across the full county
            — from Chester and Ellesmere Port in the west, to Macclesfield and Wilmslow in the
            east, from Warrington and Knutsford in the north to Crewe, Nantwich and Congleton in
            the south. Whether you are purchasing commercial premises in Northwich, negotiating an
            agricultural tenancy in Nantwich, structuring a corporate transaction in Macclesfield,
            or reviewing commercial lease terms in Chester, NJB Legal delivers partner-led,
            specialist legal advice across all of Cheshire. Our transparent, fixed-fee approach
            means you know the cost of expert Cheshire legal advice before work begins — with
            direct access to your solicitor throughout.
          </p>
        </div>
      </header>

      {/* Cheshire Towns Grid */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="cheshire-towns-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="cheshire-towns-heading" className="h2-style mb-4">
            Cheshire Service Areas
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CHESHIRE_TOWNS.map((loc) => (
              <LocationCard key={loc.town} town={loc.town} href={loc.href} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="h2-style mb-4">
            All Legal Services Across Cheshire
          </h2>
          <span className="gold-rule block mb-10" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.href}
                icon={service.icon}
                name={service.name}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="why-cheshire-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="why-cheshire-heading" className="h2-style mb-4">
            Why Cheshire Businesses Choose NJB Legal
          </h2>
          <span className="gold-rule block mb-10" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USP_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-mist rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-cormorant font-semibold text-ink text-xl mb-2">
                  {card.title}
                </h3>
                <p className="font-outfit text-slate text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="h2-style mb-4">
            Frequently Asked Questions — Cheshire
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
