import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Liverpool | Business Law | NJB Legal North West",
  description:
    "Commercial property and corporate law advice for Liverpool businesses. NJB Legal provides specialist legal services across Merseyside and the North West. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-liverpool",
  },
  openGraph: {
    title: "Commercial Property Solicitor Liverpool | Business Law | NJB Legal North West",
    description:
      "Commercial property and corporate law advice for Liverpool businesses. NJB Legal provides specialist legal services across Merseyside and the North West. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-liverpool",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property services does NJB Legal offer to Liverpool businesses?",
    answer:
      "NJB Legal advises Liverpool businesses, developers and investors on commercial property acquisitions and disposals, commercial lease negotiations for retail, office and industrial premises, land and development transactions, and business contract matters. Liverpool's commercial property market — spanning the waterfront, city centre, Baltic Triangle and suburban business parks — is diverse and active, and NJB Legal provides the specialist legal expertise that commercial property transactions in this market require.",
  },
  {
    question: "Can NJB Legal advise on commercial leases in Liverpool's city centre?",
    answer:
      "Yes. Liverpool city centre has a dynamic commercial lease market, particularly in retail and hospitality. NJB Legal advises landlords and tenants on lease negotiations, lease renewals, rent review clauses, break options and dilapidations matters in Liverpool. The city's growing reputation as a leisure and cultural destination, alongside its established retail offering, generates strong demand for commercial lease advice. Whether you are a retailer entering Liverpool's city centre or a hospitality operator securing a waterfront premises, NJB Legal can assist.",
  },
  {
    question: "Does NJB Legal handle corporate transactions for Liverpool-based businesses?",
    answer:
      "Absolutely. Liverpool's economy spans port and maritime industries, retail and leisure, financial services, professional services and a growing technology sector. NJB Legal advises Liverpool businesses on corporate acquisitions and disposals, shareholder agreements, management buyouts, and commercial contract drafting. The city's entrepreneurial business community generates a significant volume of corporate transactions, and NJB Legal provides the partner-led, specialist corporate law advice that Liverpool businesses require.",
  },
  {
    question: "How does NJB Legal serve Liverpool clients from its Winsford, Cheshire office?",
    answer:
      "NJB Legal is based in Winsford, Cheshire, approximately 30 miles east of Liverpool city centre. Most commercial property and corporate law matters are handled remotely via video call and electronic document exchange — the standard for commercial legal transactions. The M56 motorway provides direct road access between Manchester and Liverpool, with a typical journey of around 40 to 50 minutes. Liverpool clients can meet NJB Legal remotely or, where preferred, arrange in-person appointments at our Winsford office.",
  },
];

export default function SolicitorLiverpoolPage() {
  return (
    <LocationPageTemplate
      town="Liverpool"
      county="Merseyside"
      distance="approximately 30 miles from Winsford"
      localContext="Liverpool is one of the UK's most historically significant and commercially dynamic cities, with a commercial property market that reflects the city's remarkable economic transformation over the past two decades. The Liverpool waterfront — a UNESCO World Heritage Site — has been the focal point of major commercial and leisure development, with the Pier Head and surrounding areas attracting premium hotel, retail and office investment. Liverpool ONE, the city's principal retail and leisure destination, anchors a substantial commercial property market that extends through the city centre and into suburban retail parks across Merseyside. Beyond retail, Liverpool's commercial property market encompasses a thriving office sector centred on commercial districts including Exchange Flags and the Knowledge Quarter — a 450-acre innovation district home to major universities, the Royal Liverpool University Hospital, and a growing cluster of life sciences, digital and creative businesses. Liverpool's economy has diversified significantly from its historic port and manufacturing base, now encompassing significant financial services, professional services, tourism, culture and retail sectors. The Baltic Triangle area has emerged as a creative and technology hub, attracting digital businesses, creative agencies and start-ups to its converted industrial and commercial buildings. The city's port and logistics sector remains important, with the Port of Liverpool handling substantial freight volumes and generating ongoing demand for warehousing and logistics property across Merseyside. Liverpool's proximity to Greater Manchester — separated only by the Mersey — means that many businesses have commercial interests on both sides of the county boundary, creating demand for solicitors with knowledge of both jurisdictions. NJB Legal advises Liverpool businesses, developers and investors across commercial property, corporate law, and business contracts from our Winsford, Cheshire base."
      whyLocalBody="Liverpool businesses choosing NJB Legal gain access to specialist commercial property and corporate law expertise at the cost structure of a specialist Greater Manchester boutique, rather than a large Liverpool city centre or national commercial law firm. NJB Legal advises Liverpool clients directly and personally — without the referral chains, supervision overheads and billing structures that inflate costs at larger practices. NJB Legal's knowledge of the North West commercial property market, spanning both Merseyside and Greater Manchester, is particularly valuable for Liverpool businesses with commercial interests across the region. Our remote-working model means Liverpool clients receive the same quality of service as local clients, with prompt communication, clear advice and fixed fees agreed before work begins. For Liverpool businesses that want specialist, partner-led commercial legal advice at a competitive and transparent cost, NJB Legal provides the ideal solution."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Warrington", href: "/locations/solicitor-warrington" },
        { town: "Manchester", href: "/locations/solicitor-manchester" },
        { town: "Chester", href: "/locations/solicitor-chester" },
        { town: "Stockport", href: "/locations/solicitor-stockport" },
        { town: "Preston", href: "/locations/solicitor-preston" },
      ]}
      coordinates={{ lat: 53.4084, lng: -2.9916 }}
    />
  );
}
