import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Solicitor in Northwich Greater Manchester | Commercial Property & Business Law | NJB Legal",
  description:
    "Commercial property and business law advice in Northwich from NJB Legal. Serving Northwich's growing business community from our Winsford, Cheshire base. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-northwich",
  },
  openGraph: {
    title: "Solicitor in Northwich Greater Manchester | Commercial Property & Business Law | NJB Legal",
    description:
      "Commercial property and business law advice in Northwich from NJB Legal. Serving Northwich's growing business community from our Winsford, Cheshire base. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-northwich",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property services does NJB Legal provide in Northwich?",
    answer:
      "NJB Legal advises Northwich clients on commercial property acquisitions, disposals and transfers, commercial lease negotiations for both landlords and tenants, land and development transactions, and business contract matters. Northwich's expanding business parks and retail regeneration schemes have created a dynamic commercial property market, and NJB Legal has the expertise to guide businesses through complex transactions in the town. Contact NJB Legal to discuss your Northwich commercial property requirements.",
  },
  {
    question: "Can NJB Legal advise on business acquisitions in the Northwich area?",
    answer:
      "Yes. NJB Legal's corporate and commercial law services extend to Northwich businesses, covering business purchases and sales, shareholder agreements, corporate restructuring and commercial contract drafting. Northwich's growing business community includes sectors ranging from retail and hospitality to technology and professional services, all of which require expert commercial legal advice when entering into significant transactions. NJB Legal delivers partner-level corporate advice to Northwich clients.",
  },
  {
    question: "How close is NJB Legal to Northwich?",
    answer:
      "NJB Legal is based in Winsford, approximately 4 miles south of Northwich — a journey of around 10 minutes by road. This makes NJB Legal one of the most conveniently located commercial legal practices for Northwich businesses and landowners. In-person appointments at our Winsford office at 7 Charter Court, Winsford, Cheshire CW7 2FY are available, or we can accommodate Northwich clients remotely via video call and secure electronic document exchange.",
  },
  {
    question: "Does NJB Legal handle agricultural land matters near Northwich?",
    answer:
      "Absolutely. The countryside surrounding Northwich, including the Weaver Valley and rural areas towards Knutsford and Manchester, includes significant agricultural land and rural estates. NJB Legal advises on farm sales, agricultural tenancy agreements, rural land acquisitions and development of agricultural land in the Northwich area. Whether you are a farmer, landowner or rural investor operating in mid-Greater Manchester, NJB Legal provides specialist agricultural law advice with direct access to NJB Legal.",
  },
];

export default function SolicitorNorthwichPage() {
  return (
    <LocationPageTemplate
      town="Northwich"
      county="Greater Manchester"
      distance="approximately 4 miles from Winsford"
      localContext="Northwich is a thriving mid-Greater Manchester market town that has undergone significant commercial transformation in recent decades. Long associated with the salt and chemical industries that defined the Weaver Valley's industrial heritage, Northwich has evolved into a diverse commercial centre with a growing retail offering, active business parks and a professional services community that supports the town's expanding economy. The Barons Quay development transformed Northwich's town centre, bringing major national retailers and leisure operators to the area and stimulating further commercial property investment in the surrounding streets. Northwich's industrial legacy has also created unique opportunities in the redevelopment of former manufacturing and processing sites, presenting complex legal challenges around contaminated land, title issues and development consents. The town's position at the junction of the A533, A556 and A559 road network makes it an attractive location for businesses seeking easy access to the wider Greater Manchester and North West road network without the costs associated with Chester or Warrington. Northwich's commercial property market encompasses town centre retail, office accommodation, industrial units and mixed-use development sites, all of which are subject to the oversight of Greater Manchester West and Chester Council's planning and commercial property policies. The agricultural hinterland stretching east towards Knutsford and south towards Manchester supports dairy farming and mixed agricultural enterprises, creating demand for specialist rural legal advice in the area. NJB Legal advises Northwich businesses, landowners and developers on commercial property, corporate law, agricultural matters and business contracts, drawing on the detailed local knowledge that comes from being based just four miles away in Manchester."
      whyLocalBody="Northwich businesses and landowners benefit enormously from instructing a solicitor based just four miles away in Manchester. NJB Legal's proximity to Northwich means NJB Legal has detailed insight into the mid-Greater Manchester commercial property market, the planning policies of Greater Manchester West and Chester Council, and the specific business environment in which Northwich clients operate. This local knowledge translates directly into more relevant, accurate legal advice — whether you are negotiating a commercial lease in Northwich town centre, acquiring a business park unit, or completing a rural land transaction in the Weaver Valley. NJB Legal operates with the responsiveness and personal service of a boutique local practice, combined with the specialist expertise needed to handle complex commercial property and business law matters. Northwich clients have direct access to NJB Legal throughout their matter, with prompt responses by phone and email and no unnecessary delays caused by internal referrals or junior fee earners. Our fixed-fee pricing ensures complete cost transparency from the outset."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Manchester", href: "/locations/solicitor-winsford" },
        { town: "Knutsford", href: "/locations/solicitor-knutsford" },
        { town: "Chester", href: "/locations/solicitor-chester" },
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
        { town: "Warrington", href: "/locations/solicitor-warrington" },
      ]}
      coordinates={{ lat: 53.2587, lng: -2.5182 }}
    />
  );
}
