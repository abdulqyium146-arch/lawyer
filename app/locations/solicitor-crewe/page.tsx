import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Solicitor in Crewe | Commercial Property & Business Law | NJB Legal Greater Manchester",
  description:
    "Commercial property, corporate and agricultural law advice in Crewe from NJB Legal. Serving Crewe's engineering, rail and business sectors. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-crewe",
  },
  openGraph: {
    title: "Solicitor in Crewe | Commercial Property & Business Law | NJB Legal Greater Manchester",
    description:
      "Commercial property, corporate and agricultural law advice in Crewe from NJB Legal. Serving Crewe's engineering, rail and business sectors. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-crewe",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property advice is available for Crewe businesses?",
    answer:
      "NJB Legal advises Crewe businesses on commercial property acquisitions and disposals, industrial unit and warehouse leases, office lease negotiations, and land and development transactions. Crewe's commercial property market spans its town centre retail and office sector, extensive industrial estates, and the major logistics and engineering facilities that surround the town. NJB Legal has the expertise to handle commercial property transactions across the full range of Crewe's diverse property market.",
  },
  {
    question: "Can NJB Legal advise on business contracts for Crewe engineering or rail companies?",
    answer:
      "Yes. NJB Legal drafts, reviews and negotiates commercial contracts for businesses across all sectors, including engineering, rail, manufacturing and logistics companies that form the backbone of Crewe's economy. Whether you need supply chain contracts, service agreements, licensing arrangements or bespoke commercial terms, NJB Legal can draft and review contracts that protect your Crewe business's interests and reflect the specific requirements of your industry.",
  },
  {
    question: "Does NJB Legal handle agricultural land transactions near Crewe?",
    answer:
      "Absolutely. The countryside surrounding Crewe, including the south Greater Manchester Plain towards Nantwich and the rural areas to the west towards Chester, supports significant dairy farming and mixed agricultural enterprises. NJB Legal advises on farm sales, agricultural tenancy agreements, and rural land transactions in the Crewe area. The proximity of Nantwich — one of Greater Manchester's most significant agricultural market towns — makes this a particularly active area for rural legal work.",
  },
  {
    question: "How does HS2 and rail infrastructure investment affect Crewe property transactions?",
    answer:
      "Crewe is set to become a major hub on the HS2 network, and the associated infrastructure investment has significant implications for commercial property transactions in the area. Potential compulsory purchase implications, development opportunity zones and changing transport connectivity all need careful legal consideration. NJB Legal advises Crewe property owners and developers on the commercial and legal implications of major infrastructure projects, helping clients understand their rights and opportunities.",
  },
];

export default function SolicitorCrewePage() {
  return (
    <LocationPageTemplate
      town="Crewe"
      county="Greater Manchester"
      distance="approximately 12 miles from Winsford"
      localContext="Crewe is one of south Greater Manchester's most significant commercial towns, with an economy historically defined by the railway engineering industry that gave the town its identity. The Crewe Works, once the largest railway engineering facility in the world, established the town as an industrial powerhouse, and this heritage continues to shape Crewe's commercial profile today. While the town has diversified considerably, engineering, manufacturing, logistics and rail-related industries remain central to Crewe's economic base. Bentley Motors, headquartered in Crewe, is one of the most prominent manufacturers in the county, and the company's presence supports a substantial supply chain of engineering, logistics and professional services businesses across south Greater Manchester. Crewe's commercial property market reflects this industrial identity, with extensive areas of industrial and warehouse accommodation alongside a developing town centre office market. The town's position as a major railway junction — one of the busiest in the UK — and its proximity to the M6 motorway makes Crewe an exceptionally well-connected logistics hub, attracting distribution and warehousing operations that require both industrial property advice and robust commercial lease arrangements. Crewe is also set to be a key station on the HS2 network, and the associated regeneration investment is expected to transform the town's commercial property market significantly over the coming decade. The surrounding south Greater Manchester countryside, stretching towards Nantwich, Sandbach and the Staffordshire border, supports extensive dairy farming and mixed agricultural estates. NJB Legal advises Crewe businesses, landowners and developers on all aspects of commercial property, corporate law, agricultural matters and business contracts, bringing specialist expertise to one of Greater Manchester's most dynamic commercial towns."
      whyLocalBody="Crewe's commercial and industrial economy presents a distinctive set of legal requirements that benefit from a specialist, locally knowledgeable solicitor. NJB Legal, based 12 miles north in Manchester, understands the specific characteristics of Crewe's commercial property market — from its major industrial sites and logistics facilities to its developing town centre commercial core. NJB Legal advises Crewe businesses directly, bringing Greater Manchester-wide commercial property expertise to every transaction without the overhead costs of a large regional firm. For Crewe engineering, manufacturing and logistics businesses that require robust commercial contract advice alongside their property requirements, NJB Legal's breadth of commercial law services is particularly valuable. Our fixed-fee, transparent pricing model ensures that Crewe businesses know the cost of expert legal advice before work begins — and our direct partner access means your matter is handled personally by a specialist solicitor throughout."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Nantwich", href: "/locations/solicitor-nantwich" },
        { town: "Manchester", href: "/locations/solicitor-winsford" },
        { town: "Chester", href: "/locations/solicitor-chester" },
        { town: "Congleton", href: "/locations/solicitor-congleton" },
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
      ]}
      coordinates={{ lat: 53.0993, lng: -2.4441 }}
    />
  );
}
