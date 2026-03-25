import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Commercial Property Solicitor Chester | Business & Property Law | NJB Legal",
  description:
    "NJB Legal provides specialist commercial property, corporate and agricultural law in Chester. Expert advice for Chester's retail, hospitality and commercial sectors. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-chester",
  },
  openGraph: {
    title: "Commercial Property Solicitor Chester | Business & Property Law | NJB Legal",
    description:
      "NJB Legal provides specialist commercial property, corporate and agricultural law in Chester. Expert advice for Chester's retail, hospitality and commercial sectors. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-chester",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Can NJB Legal help me acquire commercial property in Chester city centre?",
    answer:
      "Yes. NJB Legal advises on commercial property acquisitions throughout Chester, including the historic city centre, the Rows, Foregate Street and the wider retail and office districts. Chester's commercial property market has particular complexities arising from its listed building heritage and conservation area designations, and NJB Legal has the expertise to guide buyers and sellers through these considerations. Contact NJB Legal to discuss your Chester commercial property requirements.",
  },
  {
    question: "What lease advice does NJB Legal offer to Chester retailers and hospitality businesses?",
    answer:
      "Chester's retail and hospitality sectors are among the most active in the North West, with significant demand for prime city centre and out-of-town retail space. NJB Legal advises Chester landlords and tenants on lease negotiations, rent review mechanisms, break clauses, dilapidations and lease assignments. Whether you are opening a new restaurant in Chester's historic centre or acquiring a retail unit in a Chester shopping centre, NJB Legal provides expert, cost-effective lease advice.",
  },
  {
    question: "Does NJB Legal advise on agricultural land around Chester?",
    answer:
      "Absolutely. Chester sits at the heart of Greater Manchester's agricultural plain, and the surrounding countryside includes significant farming and rural estates. NJB Legal advises on farm sales and purchases, agricultural tenancy agreements, and rural land transactions in the Chester area and across west Cheshire. Whether you are a farmer, rural landowner or agricultural investor operating near Chester, NJB Legal can provide specialist agricultural law advice.",
  },
  {
    question: "How far is NJB Legal from Chester?",
    answer:
      "NJB Legal is based in Winsford, Cheshire, approximately 18 miles east of Chester — around 25 to 30 minutes by road via the A51 or A54. Despite the distance, many Chester clients choose to work with NJB Legal remotely via video call and electronic document exchange, which is perfectly suited to commercial property and business law transactions. In-person appointments at our Winsford office can also be arranged for Chester clients who prefer face-to-face meetings.",
  },
];

export default function SolicitorChesterPage() {
  return (
    <LocationPageTemplate
      town="Chester"
      county="Greater Manchester"
      distance="approximately 18 miles from Winsford"
      localContext="Chester is one of England's most historically significant cities and one of Greater Manchester's premier commercial and tourism destinations. The city's unique two-tier shopping galleries — known as the Rows — create a distinctive retail environment unlike anywhere else in the UK, attracting premium national and international brands alongside independent operators. Chester's commercial property market is shaped by its World Heritage Site status, conservation area designations and listed building constraints, all of which create a complex legal landscape for property transactions. Beyond the city centre, Chester's business parks and out-of-town retail parks accommodate a broad range of commercial operators, from professional services firms to logistics companies benefiting from Chester's excellent road links via the M56, A55 and A483. Chester's hospitality and tourism sector is particularly significant — the city attracts millions of visitors annually, supporting a substantial hotel, restaurant and leisure property market that generates ongoing demand for specialist commercial lease advice. The city is also home to a thriving professional services community, with law, accountancy, financial services and technology businesses clustered around the Northgate and business district areas. Chester's proximity to North Wales also makes it a gateway for cross-border commercial property and agricultural transactions, adding further complexity to the region's legal landscape. For businesses and landowners operating in Chester, the combination of heritage constraints, active commercial property investment and strong tourism-driven demand creates a legal environment where specialist advice is essential. NJB Legal advises Chester clients on commercial property, leases, corporate transactions and agricultural law from our Winsford, Cheshire base, delivering expertise that matches the sophistication of Chester's commercial market."
      whyLocalBody="Chester's commercial property market demands solicitors who understand the particular complexities of advising in a heritage city — from conservation area restrictions on commercial development to the nuances of leasing within listed buildings. NJB Legal, based in Winsford just 18 miles from Chester, provides specialist legal advice that combines deep Cheshire county knowledge with an understanding of Chester's unique commercial and planning environment. Solicitor NJB Legal has advised clients on commercial property matters across Chester and west Cheshire, giving NJB Legal the local market insight that Chester businesses and landowners require. Choosing a Greater Manchester-based solicitor means your adviser understands the local planning authorities, the specific characteristics of Chester's property market, and the commercial context in which Chester businesses operate — knowledge that a national or City firm simply cannot replicate. NJB Legal's fixed-fee, partner-led approach ensures Chester clients receive expert, personalised legal advice without the overheads of a large commercial practice."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Northwich", href: "/locations/solicitor-northwich" },
        { town: "Nantwich", href: "/locations/solicitor-nantwich" },
        { town: "Manchester", href: "/locations/solicitor-winsford" },
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
        { town: "Crewe", href: "/locations/solicitor-crewe" },
      ]}
      coordinates={{ lat: 53.1905, lng: -2.8932 }}
    />
  );
}
