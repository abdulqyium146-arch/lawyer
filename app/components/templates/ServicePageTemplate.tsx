import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import DefinitionBox from "@/app/components/ui/DefinitionBox";
import ProcessSteps from "@/app/components/ui/ProcessSteps";
import ComparisonTable from "@/app/components/ui/ComparisonTable";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";
import ServiceSchema from "@/app/components/schema/ServiceSchema";

interface ServicePageTemplateProps {
  breadcrumb: Array<{ name: string; href?: string }>;
  headline: string;
  intro: string;
  definitionTerm: string;
  definitionText: string;
  definitionLegislation?: string;
  whatWeDoHeading: string;
  whatWeDoBody: string;
  servicesHeading: string;
  servicesList: Array<{ name: string; description: string }>;
  processTitle: string;
  processSteps: Array<{ number: number; title: string; description: string }>;
  comparisonTitle: string;
  comparisonHeaders: string[];
  comparisonRows: string[][];
  whyNJBPoints: Array<{ title: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{
    icon: string;
    name: string;
    description: string;
    href: string;
  }>;
  schemaName: string;
  schemaDescription: string;
  schemaUrl: string;
  headerImage?: string;
}

const LOCATIONS = [
  { town: "Winsford", href: "/locations/solicitor-winsford-cheshire" },
  { town: "Chester", href: "/locations/solicitor-chester-cheshire" },
  { town: "Northwich", href: "/locations/solicitor-northwich-cheshire" },
  { town: "Macclesfield", href: "/locations/solicitor-macclesfield-cheshire" },
  { town: "Crewe", href: "/locations/solicitor-crewe-cheshire" },
  { town: "Knutsford", href: "/locations/solicitor-knutsford-cheshire" },
  { town: "Wilmslow", href: "/locations/solicitor-wilmslow-cheshire" },
  { town: "Warrington", href: "/locations/solicitor-warrington-cheshire" },
  { town: "Manchester", href: "/locations/solicitor-manchester" },
  { town: "Liverpool", href: "/locations/solicitor-liverpool-north-west" },
];

const WHO_WE_HELP = [
  {
    label: "Business Owners",
    desc: "SMEs, sole traders and limited companies requiring commercial legal support.",
  },
  {
    label: "Landlords",
    desc: "Commercial and mixed-use landlords managing lease portfolios across the North West.",
  },
  {
    label: "Tenants",
    desc: "Business tenants negotiating new leases, renewals and lease exits.",
  },
  {
    label: "Property Developers",
    desc: "Developers requiring site acquisition, option agreements and planning legal advice.",
  },
  {
    label: "Farmers & Rural Businesses",
    desc: "Agricultural landowners with diversification, tenancy and rural property needs.",
  },
  {
    label: "Investors",
    desc: "Commercial property investors acquiring, disposing of or refinancing investment assets.",
  },
];

export default function ServicePageTemplate({
  breadcrumb,
  headline,
  intro,
  definitionTerm,
  definitionText,
  definitionLegislation,
  whatWeDoHeading,
  whatWeDoBody,
  servicesHeading,
  servicesList,
  processTitle,
  processSteps,
  comparisonTitle,
  comparisonHeaders,
  comparisonRows,
  whyNJBPoints,
  faqs,
  relatedServices,
  schemaName,
  schemaDescription,
  schemaUrl,
  headerImage,
}: ServicePageTemplateProps) {
  const breadcrumbSchemaItems = breadcrumb.map((item) => ({
    name: item.name,
    href: item.href ?? "#",
  }));

  return (
    <>
      {/* Schema markup */}
      <BreadcrumbSchema items={breadcrumbSchemaItems} />
      <FAQSchema faqs={faqs} id={schemaUrl.replace(/\//g, "-").replace(/^-/, "")} />
      <ServiceSchema
        name={schemaName}
        description={schemaDescription}
        url={schemaUrl}
      />

      {/* Page layout */}
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumb} />
        </div>

        {/* Article header */}
        <header className="relative bg-ink pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {headerImage && (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${headerImage}')` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
            </>
          )}
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              NJB Legal — Winsford, Cheshire &amp; North West
            </p>
            <h1 className="font-cormorant font-bold italic text-white leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}>
              {headline}
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-2">
              {intro}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="btn-primary">
                Request a Consultation
              </a>
              <a
                href="tel:07587723897"
                className="btn-ghost-white"
                aria-label="Call NJB Legal on 07587 723897"
              >
                Call 07587 723897
              </a>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-16 py-12">
            {/* Primary column */}
            <article>
              {/* Definition */}
              <DefinitionBox
                term={definitionTerm}
                definition={definitionText}
                legislation={definitionLegislation}
              />

              {/* What we do */}
              <section aria-labelledby="what-we-do-heading" className="mt-12">
                <h2 id="what-we-do-heading" className="h2-style mb-4">
                  {whatWeDoHeading}
                </h2>
                <span className="gold-rule" aria-hidden="true" />
                <div
                  className="prose-custom font-outfit text-slate text-sm leading-relaxed space-y-4 [&_h3]:h3-style [&_h3]:mt-8 [&_h3]:mb-3 [&_strong]:font-semibold [&_strong]:text-ink [&_a]:text-gold [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: whatWeDoBody }}
                />
              </section>

              {/* Our services */}
              <section aria-labelledby="services-heading" className="mt-14">
                <h2 id="services-heading" className="h2-style mb-4">
                  {servicesHeading}
                </h2>
                <span className="gold-rule" aria-hidden="true" />
                <ul className="mt-4 space-y-4" role="list">
                  {servicesList.map((svc, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 items-start bg-cream rounded-lg px-5 py-4 border border-mist"
                    >
                      <span
                        className="mt-0.5 w-2 h-2 rounded-full bg-gold shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="font-outfit font-semibold text-ink text-sm">
                          {svc.name}
                        </span>
                        {svc.description && (
                          <p className="font-outfit text-slate text-sm leading-relaxed mt-0.5">
                            {svc.description}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Who NJB Legal helps */}
              <section aria-labelledby="who-we-help-heading" className="mt-14">
                <h2 id="who-we-help-heading" className="h2-style mb-4">
                  Who NJB Legal Helps
                </h2>
                <span className="gold-rule" aria-hidden="true" />
                <p className="font-outfit text-slate text-sm leading-relaxed mb-6">
                  NJB Legal provides commercial legal advice to a wide range of clients
                  across Cheshire and the North West. Whether you are acquiring business
                  premises, negotiating a commercial lease or structuring a corporate
                  transaction, our principal solicitor provides direct, partner-level
                  advice tailored to your situation.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {WHO_WE_HELP.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-mist rounded-lg px-5 py-4"
                    >
                      <p className="font-outfit font-semibold text-ink text-sm mb-1">
                        {client.label}
                      </p>
                      <p className="font-outfit text-slate text-xs leading-relaxed">
                        {client.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process steps */}
              <div className="mt-14">
                <ProcessSteps steps={processSteps} title={processTitle} />
              </div>

              {/* Comparison table */}
              <div className="mt-14">
                <ComparisonTable
                  title={comparisonTitle}
                  headers={comparisonHeaders}
                  rows={comparisonRows}
                />
              </div>

              {/* Why Choose NJB Legal */}
              <section aria-labelledby="why-njb-heading" className="mt-14">
                <h2 id="why-njb-heading" className="h2-style mb-4">
                  Why Choose NJB Legal?
                </h2>
                <span className="gold-rule" aria-hidden="true" />
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  {whyNJBPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-cream border border-mist rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-ink font-outfit font-bold text-sm shrink-0"
                          aria-hidden="true"
                        >
                          {idx + 1}
                        </span>
                        <h3 className="font-cormorant font-semibold text-ink text-xl">
                          {point.title}
                        </h3>
                      </div>
                      <p className="font-outfit text-slate text-sm leading-relaxed">
                        {point.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Locations covered */}
              <section aria-labelledby="locations-heading" className="mt-14">
                <h2 id="locations-heading" className="h2-style mb-4">
                  Locations We Cover
                </h2>
                <span className="gold-rule" aria-hidden="true" />
                <p className="font-outfit text-slate text-sm leading-relaxed mb-6">
                  NJB Legal is based at 7 Charter Court, Winsford, Cheshire CW7 2FY and
                  advises clients across Cheshire and the wider North West. We regularly
                  act for clients in Chester, Northwich, Macclesfield, Crewe, Knutsford,
                  Wilmslow, Warrington, Manchester and Liverpool. Meetings can be
                  arranged in Winsford or by video call.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {LOCATIONS.map((loc) => (
                    <LocationCard
                      key={loc.town}
                      town={loc.town}
                      href={loc.href}
                    />
                  ))}
                </div>
              </section>

              {/* FAQs */}
              <div className="mt-14">
                <FAQAccordion
                  faqs={faqs}
                  title="Frequently Asked Questions"
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside aria-label="Related legal services" className="mt-14 lg:mt-0">
              <div className="sticky top-8 space-y-6">
                {/* Contact card */}
                <div className="bg-ink rounded-lg p-6 text-white">
                  <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                    Speak to a Solicitor
                  </p>
                  <p className="font-cormorant font-semibold text-xl text-white mb-2">
                    NJB Legal
                  </p>
                  <p className="font-outfit text-white/70 text-xs leading-relaxed mb-5">
                    Solicitor &amp; Director, NJB Legal. Senior commercial
                    legal expertise serving Cheshire and the North West.
                  </p>
                  <address className="not-italic space-y-2 mb-5">
                    <p className="font-outfit text-white/80 text-xs">
                      7 Charter Court, Winsford,<br />
                      Cheshire CW7 2FY
                    </p>
                    <a
                      href="tel:07587723897"
                      className="block font-outfit text-gold text-sm font-semibold hover:underline"
                    >
                      07587 723897
                    </a>
                    <a
                      href="mailto:info@anisrahmanchambers.co.uk"
                      className="block font-outfit text-gold text-sm font-semibold hover:underline"
                    >
                      info@anisrahmanchambers.co.uk
                    </a>
                  </address>
                  <a href="/contact" className="btn-primary w-full justify-center">
                    Request a Consultation
                  </a>
                </div>

                {/* Related services */}
                <div>
                  <h3 className="font-cormorant font-semibold text-ink text-xl mb-4">
                    Related Services
                  </h3>
                  <div className="space-y-4">
                    {relatedServices.map((svc, idx) => (
                      <ServiceCard
                        key={idx}
                        icon={svc.icon}
                        name={svc.name}
                        description={svc.description}
                        href={svc.href}
                      />
                    ))}
                  </div>
                </div>

                {/* Accreditations note */}
                <div className="bg-cream border border-mist rounded-lg p-5">
                  <p className="font-outfit text-xs text-slate/70 leading-relaxed">
                    NJB Legal is the trading name of NJB Legal, solicitor,
                    regulated by the Solicitors Regulation Authority. NJB Legal
                    is a member of the Nexa Law network, providing access to a
                    wider team of specialist solicitors across England and Wales.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </main>

        {/* CTA Banner */}
        <CTABanner />
      </div>
    </>
  );
}
