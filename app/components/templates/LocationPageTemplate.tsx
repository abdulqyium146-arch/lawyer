import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

interface NearbyTown {
  town: string;
  href: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface LocationPageTemplateProps {
  town: string;
  county: string;
  distance: string;
  localContext: string;
  whyLocalBody: string;
  faqs: FAQ[];
  nearbyTowns: NearbyTown[];
  coordinates?: { lat: number; lng: number };
}

const NORTH_WEST_COUNTIES = ["Greater Manchester", "Merseyside", "Lancashire"];

const SERVICES = [
  {
    icon: "building",
    name: "Commercial Property",
    description:
      "Expert advice on commercial property acquisitions, disposals, and transfers across Cheshire and the North West.",
    href: "/services/commercial-property-solicitor-cheshire",
  },
  {
    icon: "filetext",
    name: "Commercial Leases",
    description:
      "Specialist lease negotiation, drafting and review for landlords and tenants throughout the region.",
    href: "/services/commercial-lease-solicitor-cheshire",
  },
  {
    icon: "briefcase",
    name: "Corporate & Commercial",
    description:
      "Business structuring, mergers, acquisitions and corporate transactions for North West businesses.",
    href: "/services/corporate-commercial-lawyer-north-west",
  },
  {
    icon: "tractor",
    name: "Agricultural Law",
    description:
      "Specialist agricultural law advice covering farm sales, tenancies, and rural land matters across the UK.",
    href: "/services/agricultural-law-solicitor-uk",
  },
  {
    icon: "hammer",
    name: "Land & Development",
    description:
      "Legal support for land acquisition, planning agreements, and development projects across Cheshire and the North West.",
    href: "/services/land-development-solicitor-cheshire",
  },
  {
    icon: "scale",
    name: "Business Contracts",
    description:
      "Drafting, reviewing and negotiating commercial contracts to protect your business interests.",
    href: "/services/business-contracts-solicitor-cheshire",
  },
];

const BENEFITS = [
  {
    title: "Direct Partner Access",
    body: "You speak directly with our principal solicitor — no junior handoffs, no call centres. Your matter receives senior-level attention from first instruction to completion.",
  },
  {
    title: "Cheshire & North West Expertise",
    body: "Deep knowledge of the Cheshire and North West property market, local planning authorities, and regional commercial landscape built over years of practice in the area.",
  },
  {
    title: "Fixed & Transparent Fees",
    body: "Clear, agreed pricing before work begins. No surprise invoices or hidden charges — you know exactly what specialist legal advice will cost.",
  },
  {
    title: "Responsive Communication",
    body: "Prompt replies by phone and email. NJB Legal operates with the responsiveness of a boutique practice and the expertise of a City firm.",
  },
];

export default function LocationPageTemplate({
  town,
  county,
  distance,
  localContext,
  whyLocalBody,
  faqs,
  nearbyTowns,
}: LocationPageTemplateProps) {
  const isNorthWest = NORTH_WEST_COUNTIES.includes(county);

  const breadcrumbItems = [
    { name: "Locations", href: "/locations" },
    isNorthWest
      ? { name: "Solicitor in North West", href: "/locations/solicitor-north-west" }
      : { name: "Solicitor in Cheshire", href: "/locations/solicitor-cheshire" },
    { name: town },
  ];

  const schemaItems = [
    { name: "Locations", href: "/locations" },
    isNorthWest
      ? { name: "Solicitor in North West", href: "/locations/solicitor-north-west" }
      : { name: "Solicitor in Cheshire", href: "/locations/solicitor-cheshire" },
    { name: town, href: `/locations/solicitor-${town.toLowerCase().replace(/\s+/g, "-")}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={faqs} id={`faq-${town.toLowerCase().replace(/\s+/g, "-")}`} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero / Article Header */}
      <header
        className="relative bg-ink py-20 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/grain.png'), linear-gradient(135deg, #0D1B2A 0%, #1a2f45 100%)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-outfit text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            {county} · {distance}
          </p>
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Commercial Property Solicitor in {town} | NJB Legal
          </h1>
          <span className="gold-rule block mb-6" aria-hidden="true" />
          <p className="font-outfit text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            NJB Legal provides specialist commercial property, corporate and agricultural law advice
            to businesses and landowners in {town} and across {county}. Led by our principal solicitor
            and based in Winsford, Cheshire — {distance} — NJB Legal serves {town} clients across all commercial
            legal matters including commercial property transactions, lease negotiations, corporate
            structuring, agricultural law, land and development, and business contracts. Whether you
            are buying or selling commercial premises in {town}, negotiating a lease, or structuring a
            business acquisition, NJB Legal delivers expert, partner-level legal advice without the
            City price tag. Contact us today to discuss your requirements.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="h2-style mb-4">
            Legal Services NJB Legal Provides in {town}
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

      {/* Local Context Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="local-context-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="local-context-heading" className="h2-style mb-4">
            Legal Advice for {town} Businesses &amp; Landowners
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <div className="prose prose-slate max-w-none font-outfit text-slate leading-relaxed text-base">
            <p>{localContext}</p>
          </div>
        </div>
      </section>

      {/* Why Local Section */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="why-local-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="why-local-heading" className="h2-style mb-4">
            Why Choose a Cheshire-Based Solicitor for {town} Clients?
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <p className="font-outfit text-slate leading-relaxed text-base mb-10">{whyLocalBody}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-mist rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-cormorant font-semibold text-ink text-xl mb-2">
                  {benefit.title}
                </h3>
                <p className="font-outfit text-slate text-sm leading-relaxed">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="h2-style mb-4">
            Frequently Asked Questions — {town}
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* NAP / Address Section */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="address-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="address-heading" className="h2-style mb-4">
            Visit or Contact NJB Legal
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <address className="not-italic font-outfit text-slate text-base leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-ink font-cormorant text-lg mb-1">NJB Legal</p>
                  <p>7 Charter Court</p>
                  <p>Winsford</p>
                  <p>Cheshire</p>
                  <p>CW7 2FY</p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-ink">Phone: </span>
                    <a
                      href="tel:07587723897"
                      className="text-gold hover:underline"
                    >
                      07587 723897
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Email: </span>
                    <a
                      href="mailto:info@njblegal.co.uk"
                      className="text-gold hover:underline"
                    >
                      info@njblegal.co.uk
                    </a>
                  </p>
                </div>
                <p className="text-sm text-slate/80">
                  Serving {town} and surrounding {county} areas. Appointments available in person or
                  remotely.
                </p>
              </address>
            </div>
            <div className="rounded-lg overflow-hidden border border-mist shadow-sm aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.123456789!2d-2.5235!3d53.1917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a5d2b1234abcd%3A0xabcdef1234567890!2s7+Charter+Court%2C+Winsford\+Cheshire\+CW7\+2FY!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NJB Legal office location — 7 Charter Court, Winsford, Cheshire CW7 2FY"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner town={town} />

      {/* Nearby Towns */}
      {nearbyTowns.length > 0 && (
        <aside className="py-16 px-4 bg-cream" aria-labelledby="nearby-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="nearby-heading" className="h2-style mb-4">
              Also Serving Nearby Areas
            </h2>
            <span className="gold-rule block mb-8" aria-hidden="true" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {nearbyTowns.map((nearby) => (
                <LocationCard
                  key={nearby.href}
                  town={nearby.town}
                  href={nearby.href}
                />
              ))}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
