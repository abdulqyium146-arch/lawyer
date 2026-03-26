import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Preston | Business Law | NJB Legal North West",
  description:
    "Commercial property, corporate and agricultural law advice in Preston. NJB Legal provides expert legal services for Preston businesses and landowners. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-preston",
  },
  openGraph: {
    title: "Commercial Property Solicitor Preston | Business Law | NJB Legal North West",
    description:
      "Commercial property, corporate and agricultural law advice in Preston. NJB Legal provides expert legal services for Preston businesses and landowners. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-preston",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property advice does NJB Legal offer to Preston businesses?",
    answer:
      "NJB Legal advises Preston businesses on commercial property acquisitions and disposals, commercial lease negotiations for retail, office and industrial premises, land and development transactions, and business contract matters. Preston's commercial property market spans the city centre retail and office core, the major business parks along the M6 and M55 corridors, and the extensive logistics and distribution facilities that reflect Preston's role as a major North West employment centre. NJB Legal provides specialist legal advice across all types of Preston commercial property transaction.",
  },
  {
    question: "Can NJB Legal advise on agricultural land transactions in Lancashire?",
    answer:
      "Yes. Lancashire has a substantial agricultural sector, and NJB Legal's agricultural law expertise extends to farm sales, agricultural tenancy agreements, rural land transactions and diversification projects across Lancashire, including the Preston area. Whether you are a Preston-area farmer selling a holding, a landowner reviewing agricultural tenancy terms, or a rural estate exploring development options, NJB Legal provides specialist agricultural law advice that is fully applicable to the Lancashire rural land market.",
  },
  {
    question: "Does NJB Legal handle corporate transactions for Preston businesses?",
    answer:
      "Absolutely. Preston's economy spans public sector, manufacturing, retail, professional services and the growing aerospace and defence sector associated with BAE Systems at nearby Samlesbury and Warton. NJB Legal advises Preston businesses on corporate acquisitions and disposals, shareholder agreements, management buyouts, joint venture arrangements and commercial contract drafting. Whether your Preston business is in the defence supply chain, professional services or retail, NJB Legal provides the corporate law expertise you require.",
  },
  {
    question: "How does NJB Legal serve Preston clients from its Winsford, Cheshire office?",
    answer:
      "NJB Legal is based in Winsford, Cheshire, approximately 45 miles south of Preston via the M6 motorway. The M6 provides direct road access between Preston and Manchester, with a typical journey of around 50 to 60 minutes. Preston also has frequent rail connections to Crewe, which is close to our Winsford base. The majority of commercial property and corporate work is handled remotely via video call and electronic document exchange, so Preston clients receive the same responsive service as clients based locally.",
  },
];

export default function SolicitorPrestonPage() {
  return (
    <LocationPageTemplate
      town="Preston"
      county="Lancashire"
      distance="approximately 45 miles from Winsford"
      localContext="Preston is Lancashire's county town and a significant North West commercial centre with a diverse economic base encompassing public administration, manufacturing, retail, aerospace and defence, professional services and an expanding digital and creative sector. As a city — Preston received city status in 2002 — it serves as the administrative and commercial hub for a wide Lancashire catchment, attracting businesses and investment from across the county and beyond. Preston's commercial property market is centred on the city centre, which hosts the principal retail provision at the St George's Shopping Centre and surrounding high street, alongside a developing office market in the commercial district around Winckley Square and the university quarter. Beyond the city centre, Preston's major business parks along the M6 and M55 motorway corridors accommodate significant logistics, manufacturing and professional services operations, while the Preston Docks area has been transformed into a mixed commercial and residential environment. The aerospace and defence sector, anchored by BAE Systems' major facilities at Samlesbury and Warton — both within easy distance of Preston — is a significant driver of commercial activity in the area, supporting a substantial supply chain of specialist engineering, manufacturing and professional services businesses that require robust commercial contracts and legal frameworks. Lancashire's agricultural sector remains significant, with the Fylde coast, Ribble Valley and surrounding upland and lowland areas supporting a range of farming enterprises that periodically require specialist agricultural law advice on tenancies, farm sales and rural development. Preston's growing university sector — with the University of Central Lancashire at its heart — also drives commercial property demand in the knowledge economy, research and innovation space. NJB Legal advises Preston businesses, rural landowners and developers across commercial property, corporate law, agricultural matters and business contracts."
      whyLocalBody="Preston businesses choosing NJB Legal benefit from specialist commercial property and corporate law advice delivered by a partner-led boutique practice with deep North West regional expertise. While NJB Legal is based in Winsford, Cheshire, the practice regularly advises clients across Lancashire and the broader North West, with the M6 motorway corridor connecting Preston to our Winsford, Cheshire office. NJB Legal advises Preston clients directly, without the overhead structures of a large Lancashire or national commercial practice, delivering specialist legal advice on commercial property, agricultural law, corporate transactions and business contracts at fixed, transparent fees. For Preston businesses with commercial interests that extend into Greater Manchester or the wider North West — particularly those in the aerospace supply chain or with rural land holdings — NJB Legal's regional knowledge and direct partner access make it a compelling alternative to larger practices. Our remote-working capabilities ensure Preston clients receive prompt, high-quality legal service regardless of the geographical distance."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Manchester", href: "/locations/solicitor-manchester" },
        { town: "Liverpool", href: "/locations/solicitor-liverpool" },
        { town: "Warrington", href: "/locations/solicitor-warrington" },
        { town: "Stockport", href: "/locations/solicitor-stockport" },
      ]}
      coordinates={{ lat: 53.7632, lng: -2.7031 }}
    />
  );
}
