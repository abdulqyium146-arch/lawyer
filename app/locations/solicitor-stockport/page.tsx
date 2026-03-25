import type { Metadata } from "next";
import LocationPageTemplate from "@/app/components/templates/LocationPageTemplate";

export const metadata: Metadata = {
  title: "Solicitor in Stockport | Commercial Property & Business Law | NJB Legal",
  description:
    "NJB Legal provides commercial property, corporate and business contract advice in Stockport. Serving Stockport's growing commercial and retail sectors. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/locations/solicitor-stockport",
  },
  openGraph: {
    title: "Solicitor in Stockport | Commercial Property & Business Law | NJB Legal",
    description:
      "NJB Legal provides commercial property, corporate and business contract advice in Stockport. Serving Stockport's growing commercial and retail sectors. Call 07587 723897.",
    url: "https://njblegal.co.uk/locations/solicitor-stockport",
    locale: "en_GB",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What commercial property services does NJB Legal provide in Stockport?",
    answer:
      "NJB Legal advises Stockport businesses and investors on commercial property acquisitions and disposals, commercial lease negotiations for retail, office and industrial premises, land and development transactions, and associated business contract matters. Stockport's commercial property market has been significantly shaped by recent regeneration investment — including the Merseyway shopping centre redevelopment and Stockport Town Centre West — creating new commercial property opportunities and active lease markets.",
  },
  {
    question: "Can NJB Legal advise Stockport technology businesses on corporate and commercial law?",
    answer:
      "Yes. Stockport has emerged as a notable location for technology, digital and professional services businesses, attracted by its connectivity to Manchester, lower cost base and improving commercial environment. NJB Legal advises Stockport technology and professional services businesses on corporate transactions including business acquisitions, shareholder agreements, management buyouts, and commercial contract drafting. Whether you are scaling a Stockport technology business or structuring a management buyout, NJB Legal provides the specialist corporate legal advice you need.",
  },
  {
    question: "How does NJB Legal's knowledge of both Greater Manchester and Greater Manchester help Stockport clients?",
    answer:
      "Stockport sits directly on the boundary between Greater Manchester and Greater Manchester, meaning many businesses here have commercial interests and transactions that cross county lines. NJB Legal's knowledge of both the Greater Manchester and Greater Manchester commercial property markets — and the different planning authority contexts, market conditions and legal frameworks that apply in each — is a significant advantage for Stockport clients whose operations span both areas. This dual perspective is difficult to find in solicitors based solely in one county.",
  },
  {
    question: "Does NJB Legal handle development land transactions near Stockport?",
    answer:
      "Yes. The areas surrounding Stockport — including its boundaries with Greater Manchester East and the greenbelt areas towards Wilmslow and Macclesfield — include significant development land transactions. NJB Legal advises developers and landowners on site acquisitions, option agreements, planning obligations and infrastructure agreements in the Stockport area. Whether you are a developer pursuing a regeneration site in Stockport town centre or a landowner with a residential allocation on Stockport's greenbelt boundary, NJB Legal can provide specialist advice.",
  },
];

export default function SolicitorStockportPage() {
  return (
    <LocationPageTemplate
      town="Stockport"
      county="Greater Manchester"
      distance="approximately 22 miles from Winsford"
      localContext="Stockport is a major commercial centre in Greater Manchester that occupies a strategically important position between the metropolitan centre of Manchester to the north and the affluent Greater Manchester towns of Wilmslow, Knutsford and Macclesfield to the south. The town has undergone significant regeneration investment in recent years, with major schemes transforming the town centre and creating new commercial property opportunities in what has historically been an undervalued market. The Stockport Town Centre West masterplan and associated development programmes have positioned Stockport as one of the North West's most interesting commercial property markets, attracting developer interest and occupier activity across retail, office, residential and mixed-use development categories. Stockport's commercial property market encompasses the main retail and leisure core around the Merseyway shopping centre, significant industrial and warehouse accommodation in the Portwood and Bredbury areas, and business park development along the A6 and M60 motorway corridors. The town's connectivity is exceptional — Stockport railway station provides frequent direct services to Manchester Piccadilly in 10 minutes and London Euston in under two hours, while the M60, M56 and A6 provide comprehensive road access across Greater Manchester and into Greater Manchester. Stockport's economy has diversified from its hat-making and textile heritage into financial services, technology, healthcare, retail and professional services, creating demand for commercial property across all building types. The boundary between Greater Manchester and Greater Manchester East runs through the Stockport borough, meaning many businesses and landowners in the area have interests that straddle both counties. NJB Legal advises Stockport businesses, developers and investors across commercial property, corporate law, and business contracts, bringing both Greater Manchester and Greater Manchester expertise to clients in this transitional market."
      whyLocalBody="Stockport's position on the Greater Manchester-Greater Manchester boundary makes it an ideal market for NJB Legal — a Greater Manchester-based specialist with knowledge of both county markets. NJB Legal advises Stockport businesses directly on commercial property, corporate transactions and business contracts, drawing on understanding of both the Greater Manchester East planning authority context to the south and the Greater Manchester commercial environment to the north. For Stockport businesses whose commercial activities span both areas, this dual perspective is genuinely valuable and difficult to replicate with advisers rooted in one county only. NJB Legal's boutique structure means Stockport clients receive partner-level attention, transparent fixed fees and rapid communication — without the overhead charges and internal referral processes of larger commercial practices. Based just 22 miles south in Manchester, with good motorway access via the M56, NJB Legal is highly accessible to Stockport clients who prefer in-person meetings."
      faqs={FAQS}
      nearbyTowns={[
        { town: "Manchester", href: "/locations/solicitor-manchester" },
        { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
        { town: "Wilmslow", href: "/locations/solicitor-wilmslow" },
        { town: "Knutsford", href: "/locations/solicitor-knutsford" },
        { town: "Warrington", href: "/locations/solicitor-warrington" },
      ]}
      coordinates={{ lat: 53.4083, lng: -2.1494 }}
    />
  );
}
