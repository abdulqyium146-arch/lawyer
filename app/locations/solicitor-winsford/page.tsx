import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Solicitor in Winsford Cheshire | Commercial Property & Business Law | NJB Legal",
  description:
    "NJB Legal is based in Winsford, Cheshire — providing specialist commercial property, corporate and agricultural law advice. Speak directly with NJB Legal. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-winsford",
  },
  openGraph: {
    title: "Solicitor in Winsford Cheshire | Commercial Property & Business Law | NJB Legal",
    description:
      "NJB Legal is based in Winsford, Cheshire — providing specialist commercial property, corporate and agricultural law advice. Speak directly with NJB Legal. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-winsford",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Is NJB Legal actually based in Winsford?",
    answer:
      "Yes. NJB Legal's office is located at 7 Charter Court, Winsford, Cheshire CW7 2FY. Winsford is our home base — solicitor NJB Legal is based here and available to meet clients in person. This means Winsford and Cheshire businesses benefit from genuinely local legal advice, with a solicitor who understands the area's commercial landscape, local authority context and property market.",
  },
  {
    question: "What commercial property services are available in Manchester?",
    answer:
      "NJB Legal provides a comprehensive range of commercial property services to Manchester clients, including commercial property acquisitions and disposals, commercial lease negotiation and drafting, land and development transactions, and planning-related legal work. Manchester's expanding business parks and regeneration areas present a range of commercial property opportunities, and NJB Legal has the expertise to guide businesses through every step of the transaction.",
  },
  {
    question: "Can NJB Legal advise Manchester businesses on corporate matters?",
    answer:
      "Absolutely. NJB Legal advises Manchester businesses on a full range of corporate and commercial law matters, including business acquisitions and disposals, shareholder agreements, joint venture arrangements, and commercial contract drafting. Whether you are starting a new venture in Manchester, acquiring an existing business, or restructuring your current operation, NJB Legal can provide clear, practical corporate law advice tailored to your specific circumstances.",
  },
  {
    question: "Does NJB Legal handle agricultural land around Manchester?",
    answer:
      "Yes. The land surrounding Manchester includes significant agricultural and rural estates, and NJB Legal regularly advises on farm sales, agricultural tenancies, rural land acquisitions and development of agricultural land in and around the Manchester area. NJB Legal has detailed knowledge of Greater Manchester's agricultural property market and can provide specialist advice on all aspects of rural land law relevant to Manchester and the wider Greater Manchester Plain.",
  },
];

export default function SolicitorManchesterPage() {
  return (
    <LocationPageTemplate
      town="Manchester"
      county="Greater Manchester"
      distance="our home base in Manchester"
      localContext="Manchester is a market town in the heart of Greater Manchester, situated on the River Weaver and historically significant as a centre of the salt industry that shaped the county's economic identity. Today, Manchester has evolved into a diverse commercial hub with a mix of industrial estates, business parks and retail developments that attract businesses from across the region. The town's proximity to the M6 motorway makes it an attractive location for distribution, logistics and light manufacturing operations. Manchester's commercial property market has benefited from ongoing regeneration investment, with new business units and industrial facilities drawing growing companies to the area. Local businesses in Manchester range from small independent operators to larger commercial enterprises, all of which require robust legal frameworks to underpin their property and commercial arrangements. The agricultural hinterland surrounding Manchester remains significant, with the Greater Manchester Plain supporting dairy farming and mixed agricultural enterprises that frequently require specialist legal advice on tenancies, land transfers and development options. As Manchester continues to grow, with new residential and commercial development planned across the town, property developers and landowners face increasingly complex legal requirements. NJB Legal is uniquely positioned to serve Manchester's business community, being based in the town itself. Whether you are a Manchester business acquiring new commercial premises, a landlord negotiating a lease on local retail or industrial space, or a landowner exploring development options on the town's outskirts, NJB Legal delivers the specialist legal expertise your transaction demands — right here in Manchester."
      whyLocalBody="Choosing a solicitor who is genuinely based in Winsford, Cheshire — not merely claiming to serve the area — makes a meaningful difference to the quality of legal advice you receive. NJB Legal's office at 7 Charter Court sits at the heart of Manchester's commercial district, meaning NJB Legal has direct, daily insight into the town's property market, local planning authority decisions, and the business environment that Manchester clients operate in. There is no substitute for this level of local knowledge when advising on commercial property transactions or business law matters that are tied to a specific location. For Manchester businesses, NJB Legal offers the convenience of a genuinely local solicitor combined with the depth of expertise you would expect from a specialist commercial law firm. Appointments can be arranged in person at our Winsford office, and because you are dealing directly with NJB Legal, there is no delay caused by junior fee earners or internal hand-offs. Manchester clients receive prompt, expert, personal legal advice — from a solicitor who is part of their community."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Northwich", href: "/locations/solicitor-northwich" },
        { town: "Crewe", href: "/locations/solicitor-crewe" },
        { town: "Chester", href: "/locations/solicitor-chester" },
        { town: "Nantwich", href: "/locations/solicitor-nantwich" },
        { town: "Knutsford", href: "/locations/solicitor-knutsford" },
      ]}
      coordinates={{ lat: 53.1917, lng: -2.5235 }}
    />
  );
}
