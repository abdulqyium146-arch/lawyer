import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Manchester | Corporate Law | NJB Legal North West",
  description:
    "NJB Legal provides specialist commercial property, corporate law and business contract advice for Manchester businesses. Expert North West legal advice. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-manchester",
  },
  openGraph: {
    title: "Commercial Property Solicitor Manchester | Corporate Law | NJB Legal North West",
    description:
      "NJB Legal provides specialist commercial property, corporate law and business contract advice for Manchester businesses. Expert North West legal advice. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-manchester",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Can NJB Legal advise on commercial property transactions in Manchester city centre?",
    answer:
      "Yes. NJB Legal advises on commercial property acquisitions, disposals and lease transactions throughout Greater Manchester, including Manchester city centre, Salford Quays, MediaCityUK and the surrounding commercial districts. Manchester's commercial property market is the largest outside London, and NJB Legal has the expertise to advise Manchester businesses on complex commercial property transactions in this major metropolitan market. Contact NJB Legal to discuss your Manchester commercial property requirements.",
  },
  {
    question: "What corporate law advice does NJB Legal provide for Manchester businesses?",
    answer:
      "NJB Legal advises Manchester businesses on a comprehensive range of corporate and commercial law matters, including business acquisitions and disposals, management buyouts, shareholder agreements, joint venture arrangements and commercial contract drafting. Manchester's dynamic commercial economy — spanning technology, media, financial services, retail and professional services — generates a significant volume of corporate transactions, and NJB Legal provides the partner-led, specialist corporate advice that Manchester businesses require.",
  },
  {
    question: "Does NJB Legal offer competitive rates compared to Manchester city centre solicitors?",
    answer:
      "One of the key advantages of instructing NJB Legal as a Manchester business is the cost differential between a specialist Cheshire-based boutique practice and a large Manchester city centre commercial law firm. NJB Legal charges fixed, transparent fees that reflect the genuine cost of specialist legal advice without the overhead of a large firm's office infrastructure and staffing levels. Manchester clients consistently find that NJB Legal delivers comparable or superior expertise at significantly more competitive rates than comparable city centre practices.",
  },
  {
    question: "How does NJB Legal deliver services to Manchester clients from its Winsford, Cheshire office?",
    answer:
      "NJB Legal is based in Winsford, Cheshire, approximately 25 miles south of Manchester city centre — around 35 to 40 minutes by road or rail. The majority of commercial property and corporate work is handled remotely via video call and secure electronic document exchange, which is the standard working method for sophisticated commercial transactions across the legal profession. Where in-person meetings are required, NJB Legal can travel to Manchester or host Manchester clients at the Winsford office.",
  },
];

export default function SolicitorManchesterPage() {
  return (
    <LocationPageTemplate
      town="Manchester"
      county="Greater Manchester"
      distance="approximately 25 miles from Winsford"
      localContext="Manchester is the economic capital of the North West and one of the UK's most significant commercial property markets outside London. The city's commercial real estate landscape encompasses the prime city centre office core around Spinningfields, the rapidly expanding NOMA district, the established retail and leisure of the Arndale and Deansgate areas, and the transformational MediaCityUK development at Salford Quays that has reshaped Greater Manchester's commercial map. Manchester's economy is exceptionally diverse, driven by financial and professional services, technology and digital media, higher education, healthcare, retail and a growing life sciences sector. This economic breadth generates a wide range of commercial property transactions — from prime city centre office acquisitions and leases to neighbourhood retail units and business park transactions across the Greater Manchester conurbation. Manchester's commercial property market has attracted substantial international investment in recent years, with overseas institutional investors acquiring significant commercial assets. The corporate and commercial transactions market in Manchester is equally active, with the city's business ecosystem generating significant M&A activity, business disposals, management buyouts and corporate restructuring transactions. Manchester's strong entrepreneurial culture means that business contract advice — from commercial terms and conditions to sophisticated supply chain agreements — is in constant demand. The city's hinterland extends into Greater Manchester, with businesses in Stockport, Wilmslow and Knutsford often looking to Manchester for commercial context while remaining rooted in the Greater Manchester market. NJB Legal serves Manchester businesses and property investors across commercial property, corporate law, agricultural matters and business contracts, offering a specialist, partner-led alternative to the city's larger commercial practices."
      whyLocalBody="Manchester businesses choosing NJB Legal benefit from specialist commercial property and corporate law expertise delivered at a cost structure that reflects a Cheshire-based boutique practice rather than a Manchester city centre overhead model. NJB Legal provides partner-level advice directly to Manchester clients — on commercial property acquisitions, complex lease structures, corporate transactions and business contracts — without the internal referral and supervision layers that add cost and delay in larger practices. NJB Legal's knowledge of both the Manchester commercial market and the broader North West and Greater Manchester property landscape is particularly valuable for businesses with commercial interests on both sides of the Cheshire-Greater Manchester border. Our remote-working capabilities mean Manchester clients receive the same standard of legal service as clients based next door to our Winsford office, with rapid response times, clear communication and fixed, agreed fees from the outset."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Stockport", href: "/locations/solicitor-stockport" },
        { town: "Warrington", href: "/locations/solicitor-warrington" },
        { town: "Liverpool", href: "/locations/solicitor-liverpool" },
        { town: "Preston", href: "/locations/solicitor-preston" },
        { town: "Wilmslow", href: "/locations/solicitor-wilmslow" },
      ]}
      coordinates={{ lat: 53.4808, lng: -2.2426 }}
    />
  );
}
