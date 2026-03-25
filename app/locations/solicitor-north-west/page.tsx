import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor North West England | NJB Legal Greater Manchester",
  description:
    "NJB Legal provides commercial property, corporate and agricultural law advice across North West England including Manchester, Liverpool, Warrington, Stockport and Preston. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-north-west",
  },
  openGraph: {
    title: "Commercial Property Solicitor North West England | NJB Legal Greater Manchester",
    description:
      "NJB Legal provides commercial property, corporate and agricultural law advice across North West England including Manchester, Liverpool, Warrington, Stockport and Preston. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-north-west",
    locale: "en_GB",
    type: "website",
  },
};

const NW_LOCATIONS = [
  {
    town: "Manchester",
    href: "/locations/solicitor-manchester",
    description: "Greater Manchester's commercial hub",
  },
  {
    town: "Liverpool",
    href: "/locations/solicitor-liverpool",
    description: "Merseyside commercial & port industries",
  },
  {
    town: "Warrington",
    href: "/locations/solicitor-warrington",
    description: "Logistics, retail and distribution hub",
  },
  {
    town: "Stockport",
    href: "/locations/solicitor-stockport",
    description: "Greater Manchester borough",
  },
  {
    town: "Preston",
    href: "/locations/solicitor-preston",
    description: "Lancashire's county town",
  },
];

const FAQS = [
  {
    question: "Does NJB Legal advise clients outside of Greater Manchester?",
    answer:
      "Yes. While NJB Legal is based in Winsford, Cheshire, we regularly advise clients across North West England including Manchester, Liverpool, Warrington, Stockport and Preston. Many commercial property, corporate and agricultural law matters can be handled remotely via video call and electronic document exchange, meaning geography is rarely a barrier to receiving expert legal advice from NJB Legal.",
  },
  {
    question: "Can NJB Legal handle commercial property transactions in Manchester or Liverpool?",
    answer:
      "Absolutely. NJB Legal advises on commercial property acquisitions, disposals, lease negotiations and development transactions throughout the North West, including Greater Manchester and Merseyside. NJB Legal has the expertise to advise on complex commercial property matters in major North West cities, drawing on detailed knowledge of the regional property market and its legal nuances.",
  },
  {
    question: "What corporate law services does NJB Legal provide in the North West?",
    answer:
      "NJB Legal provides a full range of corporate and commercial law services across North West England, including business acquisitions and disposals, shareholder agreements, joint venture arrangements, corporate restructuring and commercial contract drafting. We advise businesses of all sizes — from growing SMEs in Preston to established commercial operators in Manchester and Liverpool.",
  },
  {
    question: "Is agricultural law advice available for North West landowners?",
    answer:
      "Yes. NJB Legal's agricultural law expertise extends beyond Greater Manchester to rural areas across the North West, including Lancashire and the wider region. We advise on farm sales and purchases, agricultural tenancies, diversification projects, and rural development transactions. Lancashire and the Greater Manchester Plain have a significant agricultural sector, and NJB Legal is well placed to advise landowners and farmers throughout the area.",
  },
];

export default function SolicitorNorthWestPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Locations", href: "/locations" },
          { name: "Solicitor in North West", href: "/locations/solicitor-north-west" },
        ]}
      />
      <FAQSchema faqs={FAQS} id="faq-north-west" />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav
            items={[
              { name: "Locations", href: "/locations" },
              { name: "Solicitor in North West" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <header className="bg-ink py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-outfit text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            North West England · Based in Manchester
          </p>
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Commercial Property &amp; Business Solicitor in the North West | NJB Legal
          </h1>
          <span className="gold-rule block mb-6" aria-hidden="true" />
          <p className="font-outfit text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            NJB Legal is a specialist commercial property and business law practice based in
            Manchester — ideally situated to serve clients across North West England.
            Solicitor NJB Legal advises businesses, developers, landowners and entrepreneurs in
            Manchester, Liverpool, Warrington, Stockport, Preston and throughout the wider region.
            From Manchester's thriving commercial property market to Liverpool's dynamic port and
            retail sectors, from Stockport's growing business community to Preston's diverse
            commercial landscape and Lancashire's agricultural estates, NJB Legal brings the same
            standard of specialist, partner-led legal advice to every client. Our services cover
            commercial property transactions, commercial lease negotiation, corporate and commercial
            law, agricultural law, land and development, and business contracts — all delivered
            with transparency and direct access to your solicitor. Contact NJB Legal today to
            discuss how we can support your North West business or property matter.
          </p>
        </div>
      </header>

      {/* Location Cards */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="nw-locations-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="nw-locations-heading" className="h2-style mb-4">
            North West Service Areas
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NW_LOCATIONS.map((loc) => (
              <LocationCard
                key={loc.town}
                town={loc.town}
                href={loc.href}
                description={loc.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Individual City Sections */}
      <section className="py-16 px-4 bg-white" aria-labelledby="city-detail-heading">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 id="city-detail-heading" className="h2-style mb-4">
            Legal Services Across the North West
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />

          {[
            {
              city: "Manchester",
              href: "/locations/solicitor-manchester",
              body: "Manchester is the North West's principal commercial centre and one of the UK's most dynamic property markets. NJB Legal advises Manchester businesses on commercial property acquisitions, lease negotiations, corporate transactions and business contracts. From MediaCityUK to the Northern Quarter, NJB Legal understands Manchester's commercial landscape and delivers expert legal advice to match.",
            },
            {
              city: "Liverpool",
              href: "/locations/solicitor-liverpool",
              body: "Liverpool's commercial property sector spans the waterfront, retail core and expanding business districts. NJB Legal provides commercial property, corporate and agricultural law advice to Liverpool businesses and landowners across Merseyside. Whether you are acquiring commercial premises, negotiating a complex lease, or structuring a business sale, NJB Legal is well placed to assist.",
            },
            {
              city: "Warrington",
              href: "/locations/solicitor-warrington",
              body: "Warrington is one of the North West's most significant logistics, retail and distribution hubs. Situated between Manchester and Liverpool, it attracts major commercial property investment. NJB Legal advises Warrington businesses on commercial property transactions, lease agreements and corporate law, drawing on detailed knowledge of this strategically important market.",
            },
            {
              city: "Stockport",
              href: "/locations/solicitor-stockport",
              body: "Stockport's commercial property market has seen significant regeneration investment in recent years. NJB Legal advises Stockport businesses and developers on commercial property acquisitions, commercial leases, and corporate transactions. Close to both Manchester and the Greater Manchester border, Stockport clients benefit from NJB Legal's dual knowledge of the Greater Manchester and Greater Manchester markets.",
            },
            {
              city: "Preston",
              href: "/locations/solicitor-preston",
              body: "Preston is Lancashire's county town and a growing commercial centre. NJB Legal advises Preston businesses on commercial property, corporate law and agricultural matters — particularly relevant given Lancashire's substantial farming sector. Whether you are a Preston-based business acquiring new premises or a rural landowner in the surrounding Lancashire countryside, NJB Legal can help.",
            },
          ].map((item) => (
            <div key={item.city} className="border-l-2 border-gold pl-6">
              <h3 className="font-cormorant font-semibold text-ink text-2xl mb-3">
                <Link
                  href={item.href}
                  className="hover:text-gold transition-colors"
                >
                  Solicitor in {item.city}
                </Link>
              </h3>
              <p className="font-outfit text-slate text-sm leading-relaxed mb-3">{item.body}</p>
              <Link
                href={item.href}
                className="font-outfit text-gold font-semibold text-sm hover:underline"
              >
                Learn more about {item.city} legal services →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Link to Greater Manchester */}
      <section className="py-12 px-4 bg-cream" aria-labelledby="cheshire-link-heading">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-mist rounded-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 id="cheshire-link-heading" className="font-cormorant font-semibold text-ink text-2xl mb-2">
                Also Serving All of Cheshire
              </h2>
              <p className="font-outfit text-slate text-sm">
                NJB Legal is based in Winsford, Cheshire and covers the full county — including
                Chester, Northwich, Macclesfield, Knutsford, Wilmslow, Nantwich and more.
              </p>
            </div>
            <Link
              href="/locations/solicitor-cheshire"
              className="btn-primary whitespace-nowrap shrink-0"
            >
              View Greater Manchester Locations
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="h2-style mb-4">
            Frequently Asked Questions — North West England
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
