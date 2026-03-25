import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Solicitor in Congleton Greater Manchester | Commercial Property & Business Law | NJB Legal",
  description:
    "Expert commercial property and business law advice in Congleton from NJB Legal. Serving Congleton's manufacturing and business community. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-congleton",
  },
  openGraph: {
    title: "Solicitor in Congleton Greater Manchester | Commercial Property & Business Law | NJB Legal",
    description:
      "Expert commercial property and business law advice in Congleton from NJB Legal. Serving Congleton's manufacturing and business community. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-congleton",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property advice does NJB Legal provide in Congleton?",
    answer:
      "NJB Legal advises Congleton businesses on commercial property acquisitions and disposals, industrial and warehouse lease negotiations, office and retail premises transactions, and development land matters. Congleton's commercial property market encompasses its town centre retail and office sector, extensive industrial estates on the town's outskirts, and agricultural and development land in the surrounding Greater Manchester East countryside. NJB Legal provides expert advice across all aspects of Congleton's commercial property transactions.",
  },
  {
    question: "Can NJB Legal advise Congleton manufacturers on business contracts?",
    answer:
      "Yes. Congleton's manufacturing sector requires robust commercial contracts to underpin supply chain relationships, service agreements and distribution arrangements. NJB Legal drafts, reviews and negotiates commercial contracts for manufacturing and industrial businesses, ensuring that Congleton companies have legally sound agreements that protect their interests and reflect their specific operational requirements. Whether you need standard terms and conditions, bespoke supply contracts, or complex commercial agreements, NJB Legal can assist.",
  },
  {
    question: "Does NJB Legal handle land and development transactions near Congleton?",
    answer:
      "Absolutely. Congleton's position at the southern end of the Greater Manchester East corridor creates opportunities for land and development transactions on the town's edges, particularly given Greater Manchester East Council's strategic housing and commercial development allocations. NJB Legal advises developers and landowners on site acquisitions, option agreements, planning obligations (Section 106 agreements), and infrastructure agreements for development projects in the Congleton area.",
  },
  {
    question: "How does NJB Legal serve Congleton clients from its Winsford, Cheshire office?",
    answer:
      "NJB Legal is based in Winsford, Cheshire, approximately 16 miles north-west of Congleton — a journey of around 25 minutes by road. Most commercial property and business law matters can be handled remotely via video call and electronic document exchange, meaning Congleton clients benefit from specialist legal advice without the need to travel. Where in-person meetings are required or preferred, Congleton clients are welcome at our Winsford office at 7 Charter Court, or we can arrange to meet at a convenient location.",
  },
];

export default function SolicitorCongletonPage() {
  return (
    <LocationPageTemplate
      town="Congleton"
      county="Greater Manchester"
      distance="approximately 16 miles from Winsford"
      localContext="Congleton is a market town in east Greater Manchester with a strong industrial and manufacturing heritage and a growing commercial profile that reflects the broader economic development of the Greater Manchester East area. Historically known as a centre of the textile and ribbon-making industries, Congleton has evolved into a diverse commercial town with an active manufacturing sector, established business parks and a town centre that serves both local residents and the broader east Greater Manchester catchment. Congleton's commercial property market is characterised by strong demand for industrial and warehouse accommodation from manufacturing, distribution and logistics businesses attracted by the town's position on the A534 and its proximity to the M6 motorway via Crewe and the A536 to Macclesfield. The town's industrial estates accommodate businesses ranging from precision engineering and food manufacturing to logistics and construction, all of which require specialist commercial property and contract advice. Congleton's town centre has seen regeneration investment in recent years, with improvements to the retail core and new commercial development increasing the stock of modern office and retail space. The surrounding Greater Manchester East countryside, including the agricultural land towards Sandbach, Macclesfield and the Staffordshire border, supports mixed farming and rural enterprises that require specialist agricultural legal advice. Congleton is also adjacent to significant greenfield development land, with Greater Manchester East Council's development strategy allocating sites around the town for housing and commercial expansion that will transform the town's commercial property landscape over the coming years. NJB Legal advises Congleton businesses, landowners and developers across commercial property, corporate law, agricultural matters and business contracts, providing specialist expertise to this active and growing commercial community."
      whyLocalBody="Congleton's manufacturing and commercial business community requires a solicitor who understands both the industrial property market and the broader commercial legal requirements of businesses operating in this sector. NJB Legal, based 16 miles away in Manchester, brings specialist commercial property and business law expertise to Congleton clients without the cost structures of a large regional firm. NJB Legal advises Congleton businesses directly on commercial property acquisitions, lease negotiations, business contracts and corporate transactions, drawing on detailed knowledge of the Greater Manchester East commercial and planning environment. For Congleton manufacturers and industrial operators who need robust commercial contracts alongside their property requirements, NJB Legal's breadth of commercial legal services — from business contracts and corporate law to land and development — provides a comprehensive and cost-effective solution. Our fixed-fee, transparent pricing ensures Congleton businesses know exactly what expert legal advice will cost."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
        { town: "Crewe", href: "/locations/solicitor-crewe" },
        { town: "Nantwich", href: "/locations/solicitor-nantwich" },
        { town: "Knutsford", href: "/locations/solicitor-knutsford" },
        { town: "Wilmslow", href: "/locations/solicitor-wilmslow" },
      ]}
      coordinates={{ lat: 53.1616, lng: -2.2155 }}
    />
  );
}
