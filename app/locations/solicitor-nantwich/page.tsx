import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Nantwich | Agricultural Law | NJB Legal",
  description:
    "Commercial property, agricultural law and business contract advice in Nantwich. NJB Legal serves Nantwich's farming, rural and commercial communities. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/locations/solicitor-nantwich",
  },
  openGraph: {
    title: "Commercial Property Solicitor Nantwich | Agricultural Law | NJB Legal",
    description:
      "Commercial property, agricultural law and business contract advice in Nantwich. NJB Legal serves Nantwich's farming, rural and commercial communities. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/locations/solicitor-nantwich",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Does NJB Legal provide specialist agricultural law advice for Nantwich farmers?",
    answer:
      "Yes. Agricultural law is a core specialism at NJB Legal, and Nantwich — as one of Greater Manchester's most significant agricultural market towns — is an area where this expertise is particularly relevant. NJB Legal advises Nantwich area farmers and rural landowners on farm sales and purchases, agricultural tenancy agreements, farm business tenancy terms, grazing licences, and the development of agricultural land for diversification or residential purposes. NJB Legal provides direct, specialist rural law advice to clients throughout the Nantwich area.",
  },
  {
    question: "What commercial property services are available for Nantwich town centre businesses?",
    answer:
      "NJB Legal advises Nantwich businesses on commercial property acquisitions and disposals, lease negotiations and reviews for retail, office and hospitality premises, and commercial contract matters. Nantwich's historic town centre, with its distinctive black-and-white timbered architecture, is a premium retail and hospitality location that generates active demand for commercial lease advice. Whether you are taking a lease on a Nantwich town centre property or acquiring a commercial building, NJB Legal provides expert guidance.",
  },
  {
    question: "Can NJB Legal help with farm sales and purchases in the Nantwich area?",
    answer:
      "Absolutely. Farm sales in the Nantwich area involve complex legal considerations, including Agricultural Holdings Act and Farm Business Tenancy legislation, environmental and stewardship scheme obligations, Basic Payment Scheme entitlements, and the particular title issues that arise with agricultural land. NJB Legal advises buyers and sellers on all aspects of farm transactions in the Nantwich area, ensuring that every legal dimension of the sale or purchase is carefully addressed from the outset.",
  },
  {
    question: "How does NJB Legal support rural business diversification projects near Nantwich?",
    answer:
      "Many Nantwich area farmers and rural landowners are exploring diversification opportunities — from farm shops and holiday accommodation to solar energy installations and equestrian facilities. Each of these requires careful legal advice, including planning-related agreements, lease structures for new enterprises, and commercial contracts for services and supplies. NJB Legal advises on all legal aspects of rural business diversification, helping Nantwich area landowners structure their new ventures on a legally sound footing.",
  },
];

export default function SolicitorNantwichPage() {
  return (
    <LocationPageTemplate
      town="Nantwich"
      county="Greater Manchester"
      distance="approximately 14 miles from Winsford"
      localContext="Nantwich is one of south Greater Manchester's most characterful market towns, with a rich history as a salt town and agricultural centre that has shaped its identity for centuries. Today, Nantwich remains a focal point for the south Greater Manchester farming community, hosting one of the UK's most prestigious agricultural shows — the Nantwich Show — and serving as a market and service centre for the extensive dairy and mixed farming enterprises across the surrounding plain. The town's agricultural significance means that legal advice on farm tenancies, rural land sales, and agricultural business structures is particularly in demand in the Nantwich area. Beyond its agricultural role, Nantwich has developed a vibrant commercial scene, with its picturesque historic town centre supporting a thriving mix of independent retailers, restaurants, hotels and professional services. The town's distinctive black-and-white timbered buildings and Georgian architecture create a conservation area environment that presents particular legal considerations for commercial property transactions — including listed building consent requirements and restrictive covenants that affect the use and alteration of commercial premises. Nantwich's commercial property market has strengthened significantly in recent years, driven by population growth in the surrounding residential areas and the town's appeal as a quality-of-life destination for businesses and their employees. The south Greater Manchester Plain surrounding Nantwich supports extensive dairy farming, with Greater Manchester cheese production remaining an important part of the local agricultural economy. Landowners in the area frequently require advice on agricultural tenancies, farm succession planning, and the development potential of agricultural land on Nantwich's edges. NJB Legal serves Nantwich's farming community, rural landowners, and town centre businesses across commercial property, corporate law, agricultural matters and business contracts."
      whyLocalBody="Nantwich's agricultural and commercial legal landscape requires a solicitor with genuine expertise in both rural law and commercial property — a combination that NJB Legal delivers. Based 14 miles north in Manchester, NJB Legal advises Nantwich farmers, rural landowners, and town centre businesses directly, bringing specialist knowledge of agricultural law alongside commercial property and corporate expertise. For Nantwich's farming community in particular, working with a specialist agricultural solicitor who also understands the commercial property implications of farm diversification and development is enormously valuable. NJB Legal's fixed-fee, transparent approach means that Nantwich clients — whether agricultural or commercial — know the cost of expert legal advice upfront. Direct partner access ensures your matter is handled by someone who genuinely understands the south Greater Manchester rural and commercial landscape, without the internal referral delays of a large regional firm."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Crewe", href: "/locations/solicitor-crewe" },
        { town: "Manchester", href: "/locations/solicitor-winsford" },
        { town: "Chester", href: "/locations/solicitor-chester" },
        { town: "Congleton", href: "/locations/solicitor-congleton" },
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
      ]}
      coordinates={{ lat: 53.0664, lng: -2.5219 }}
    />
  );
}
