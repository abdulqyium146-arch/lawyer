import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/app/components/ui/CTABanner";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Solicitor Locations | Greater Manchester & North West England | NJB Legal",
  description:
    "NJB Legal provides commercial property, corporate and agricultural law advice across Greater Manchester and the North West. Based in Manchester. View all service locations.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations",
  },
  openGraph: {
    title: "Solicitor Locations | Greater Manchester & North West England | NJB Legal",
    description:
      "NJB Legal provides commercial property, corporate and agricultural law advice across Greater Manchester and the North West. Based in Manchester. View all service locations.",
    url: "https://anisrahmanchambers.co.uk/locations",
    locale: "en_GB",
    type: "website",
  },
};

const CHESHIRE_TOWNS = [
  { town: "Manchester", href: "/locations/solicitor-winsford" },
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

const NORTH_WEST_CITIES = [
  { town: "Manchester", href: "/locations/solicitor-manchester" },
  { town: "Liverpool", href: "/locations/solicitor-liverpool" },
  { town: "Warrington", href: "/locations/solicitor-warrington" },
  { town: "Stockport", href: "/locations/solicitor-stockport" },
  { town: "Preston", href: "/locations/solicitor-preston" },
];

export default function LocationsHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Locations", href: "/locations" }]}
      />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <BreadcrumbNav items={[{ name: "Locations" }]} />
        </div>
      </div>

      {/* Hero */}
      <header className="bg-ink py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-outfit text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Service Locations
          </p>
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Commercial Property Solicitor Serving Greater Manchester &amp; the North West | NJB Legal
          </h1>
          <span className="gold-rule block mb-6" aria-hidden="true" />
          <p className="font-outfit text-white/80 text-base md:text-lg leading-relaxed max-w-3xl">
            NJB Legal is a specialist commercial property and business law practice based in
            Manchester. Solicitor NJB Legal and the NJB Legal team advise businesses,
            landowners, developers and entrepreneurs across Greater Manchester and the wider North West of
            England. From Chester in the west to Manchester in the north-east, and from Preston in
            Lancashire to Crewe in the south, NJB Legal provides the same high standard of
            partner-led legal advice regardless of your location. Our services span commercial
            property transactions, commercial lease negotiation, corporate and commercial law,
            agricultural law, land and development work, and business contracts — all delivered with
            transparency, expertise and a direct line to your solicitor. Explore our service
            locations below or contact us to discuss your requirements today.
          </p>
        </div>
      </header>

      {/* Greater Manchester Towns */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="cheshire-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="cheshire-heading" className="h2-style mb-4">
            Greater Manchester Service Areas
          </h2>
          <span className="gold-rule block mb-4" aria-hidden="true" />
          <p className="font-outfit text-slate text-base mb-8 max-w-2xl">
            NJB Legal advises clients across all of Greater Manchester. Select your nearest town to learn more
            about the commercial legal services available in your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {CHESHIRE_TOWNS.map((loc) => (
              <LocationCard key={loc.town} town={loc.town} href={loc.href} />
            ))}
          </div>
        </div>
      </section>

      {/* North West Cities */}
      <section className="py-16 px-4 bg-white" aria-labelledby="nw-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="nw-heading" className="h2-style mb-4">
            North West Service Areas
          </h2>
          <span className="gold-rule block mb-4" aria-hidden="true" />
          <p className="font-outfit text-slate text-base mb-8 max-w-2xl">
            Beyond Greater Manchester, NJB Legal regularly advises clients in Manchester, Liverpool,
            Stockport, Warrington and Preston — covering the full breadth of North West England.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {NORTH_WEST_CITIES.map((loc) => (
              <LocationCard key={loc.town} town={loc.town} href={loc.href} />
            ))}
          </div>
        </div>
      </section>

      {/* Hub Links */}
      <section className="py-16 px-4 bg-cream" aria-labelledby="hub-links-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="hub-links-heading" className="h2-style mb-4">
            Browse by Region
          </h2>
          <span className="gold-rule block mb-8" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/locations/solicitor-cheshire"
              className="group block bg-white border border-mist rounded-lg p-8 hover:shadow-lg hover:border-gold transition-all duration-200"
            >
              <h3 className="font-cormorant font-semibold text-ink text-2xl mb-3 group-hover:text-gold transition-colors">
                Solicitor in Greater Manchester
              </h3>
              <p className="font-outfit text-slate text-sm leading-relaxed mb-4">
                View all Greater Manchester service areas, including Chester, Northwich, Macclesfield,
                Knutsford, Wilmslow, Nantwich, Crewe, Congleton and more.
              </p>
              <span className="font-outfit text-gold font-semibold text-sm group-hover:underline">
                View Greater Manchester locations →
              </span>
            </Link>
            <Link
              href="/locations/solicitor-north-west"
              className="group block bg-white border border-mist rounded-lg p-8 hover:shadow-lg hover:border-gold transition-all duration-200"
            >
              <h3 className="font-cormorant font-semibold text-ink text-2xl mb-3 group-hover:text-gold transition-colors">
                Solicitor in the North West
              </h3>
              <p className="font-outfit text-slate text-sm leading-relaxed mb-4">
                View North West service areas including Manchester, Liverpool, Warrington,
                Stockport and Preston — all served from our Winsford, Cheshire base.
              </p>
              <span className="font-outfit text-gold font-semibold text-sm group-hover:underline">
                View North West locations →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
