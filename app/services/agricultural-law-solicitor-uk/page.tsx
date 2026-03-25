import type { Metadata } from "next";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import DefinitionBox from "@/app/components/ui/DefinitionBox";
import ProcessSteps from "@/app/components/ui/ProcessSteps";
import ComparisonTable from "@/app/components/ui/ComparisonTable";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import LocationCard from "@/app/components/ui/LocationCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";
import ServiceSchema from "@/app/components/schema/ServiceSchema";
import type { FAQ } from "@/app/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Agricultural Law Solicitor Cheshire | Farm Land Legal Advice | NJB Legal",
  description:
    "Expert agricultural law advice for farmers and landowners in Cheshire and across the UK. NJB Legal advises on farm tenancies, farmland purchases, rural development and diversification projects. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/services/agricultural-law-solicitor-uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njblegal.co.uk/services/agricultural-law-solicitor-uk",
    title: "Agricultural Law Solicitor Cheshire | Farm Land Legal Advice | NJB Legal",
    description:
      "Expert agricultural law advice for farmers and landowners in Cheshire and across the UK. Farm tenancies, farmland purchases, rural development and diversification. Call 07587 723897.",
  },
};

const breadcrumbItems = [
  { name: "Services", href: "/services" },
  { name: "Agricultural Law" },
];

const steps = [
  {
    number: 1,
    title: "Pre-purchase enquiries & searches",
    description:
      "NJB Legal carries out full title investigation, local authority searches, environmental searches, drainage enquiries and Rural Land Register checks. We identify any restrictions, covenants or designations affecting the land before you commit to a purchase.",
  },
  {
    number: 2,
    title: "Heads of terms agreement",
    description:
      "Once both parties are agreed in principle, we advise on heads of terms — setting out the key commercial points including price, acreage, tenancy position, timing and any conditional elements such as planning consent or subsidy entitlement transfer.",
  },
  {
    number: 3,
    title: "Contract drafting & negotiation",
    description:
      "We draft or review the contract for sale, including any conditional clauses, agricultural covenants, overage provisions, or reserved rights. We negotiate amendments to protect your position and ensure all agreed terms are properly reflected.",
  },
  {
    number: 4,
    title: "Due diligence",
    description:
      "Before exchange, NJB Legal advises on tenancy checks (including any Farm Business Tenancy or AHA tenancy affecting the land), subsidy entitlements, rights of way, sporting rights, drainage rights and any third-party occupiers.",
  },
  {
    number: 5,
    title: "Exchange of contracts",
    description:
      "Once all due diligence is complete and both parties are satisfied, contracts are exchanged and the transaction becomes legally binding. A deposit is typically paid at this stage, and a completion date is fixed.",
  },
  {
    number: 6,
    title: "Completion & Land Registry registration",
    description:
      "On completion, the balance of the purchase price is transferred and title passes to the buyer. NJB Legal handles payment of Stamp Duty Land Tax and registers the new ownership at HM Land Registry under the Land Registration Act 2002.",
  },
];

const comparisonRows: string[][] = [
  [
    "Governing legislation",
    "Agricultural Tenancies Act 1995",
    "Agricultural Holdings Act 1986",
  ],
  [
    "Security of tenure",
    "No automatic security — tenancy ends at contractual term",
    "Strong statutory security of tenure for sitting tenants",
  ],
  [
    "Succession rights",
    "No statutory succession rights",
    "Limited succession rights (up to 2 successions) for qualifying family members",
  ],
  [
    "Rent review",
    "Parties can agree rent review frequency and basis; default is 3 years",
    "Statutory rent arbitration mechanism — more prescriptive",
  ],
  [
    "Flexibility",
    "High flexibility — parties can agree most terms",
    "Low flexibility — heavily regulated statutory code",
  ],
  [
    "Compensation on quitting",
    "Compensation for tenant's improvements agreed in tenancy",
    "Extensive statutory compensation provisions for improvements and disturbance",
  ],
  [
    "When created",
    "On or after 1 September 1995",
    "Before 1 September 1995 (no new AHA tenancies)",
  ],
  [
    "Notice period to terminate",
    "Minimum 12 months' notice for fixed terms of 2+ years; agreed for shorter terms",
    "Minimum 12 months' notice to quit (at least 24 months for retirement notices)",
  ],
];

const faqs: FAQ[] = [
  {
    question: "What is a Farm Business Tenancy (FBT) in the UK?",
    answer:
      "A Farm Business Tenancy (FBT) is an agricultural tenancy created on or after 1 September 1995, governed by the Agricultural Tenancies Act 1995. FBTs offer far greater flexibility than older Agricultural Holdings Act tenancies. The parties can largely agree their own terms, including the length of the tenancy, rent review provisions and any restrictions on use. An FBT must satisfy a business condition (land farmed as a business) and either a character condition or an agricultural notice condition at the outset. FBTs have become the standard form of agricultural letting in England and Wales since 1995.",
  },
  {
    question: "What is the difference between an FBT and an AHA tenancy?",
    answer:
      "The key differences between a Farm Business Tenancy (FBT) and an Agricultural Holdings Act (AHA) tenancy relate to security of tenure, succession and flexibility. AHA tenancies created before 1 September 1995 carry strong statutory security of tenure and limited succession rights for qualifying family members — making them very valuable and difficult for landlords to recover. FBTs have no automatic security of tenure and no statutory succession rights. This means landlords can recover possession at the end of the agreed term, giving much greater flexibility. No new AHA tenancies can be created today; all new agricultural tenancies are FBTs.",
  },
  {
    question: "Do I need a solicitor to sell agricultural land in England?",
    answer:
      "While there is no strict legal requirement to use a solicitor when selling agricultural land, it is strongly advisable. Agricultural land transactions are legally complex — they often involve tenancies, subsidy entitlements, easements, rights of way, drainage rights, overage provisions, covenants and Land Registry requirements under the Land Registration Act 2002. NJB Legal handles all aspects of agricultural land sales, from drafting the contract and carrying out title investigation to exchanging contracts and completing the Land Registry registration. Attempting to sell without specialist legal advice carries significant risk.",
  },
  {
    question: "What legal issues arise with rural development and planning?",
    answer:
      "Rural development raises a range of legal issues. Planning permission is required under the Town and Country Planning Act 1990 for most changes of use and new development, though certain agricultural permitted development rights exist. Section 106 agreements may attach planning obligations to any consent. Landowners should also consider covenants restricting development, rights of way that may affect development access, agricultural tenancy constraints, drainage and water rights, and environmental designations such as SSSIs or Green Belt restrictions. NJB Legal advises on all aspects of rural development law, working with planning consultants where needed to guide clients from site identification to completion.",
  },
  {
    question: "How does succession planning work for a farm in the UK?",
    answer:
      "Farm succession planning involves structuring the legal and financial ownership of a farming business to facilitate its transfer to the next generation or a successor. This typically involves reviewing the ownership structure of land and buildings, the nature of any agricultural tenancies, partnership or company structures, and the availability of Agricultural Property Relief (APR) and Business Property Relief (BPR) for inheritance tax purposes. NJB Legal advises farming families on the legal aspects of succession planning, including drafting partnership agreements, reviewing wills and trust structures, and advising on the implications of any existing tenancies. Early planning is essential to minimise tax exposure and ensure a smooth transition.",
  },
  {
    question: "What are sporting rights and easements on rural land?",
    answer:
      "Sporting rights are rights to hunt, shoot or fish over agricultural land. They can be reserved by a seller when disposing of land, granted to a third party, or included within a tenancy. Easements are rights that one landowner has over another's land — common examples include rights of way, rights of drainage, and rights to lay pipes or cables. Both sporting rights and easements can significantly affect the value and use of rural land. NJB Legal advises buyers, sellers and landowners on the existence, scope and legal effect of sporting rights and easements as part of any agricultural land transaction.",
  },
];

const locationItems = [
  { town: "Winsford", href: "/locations/solicitor-winsford" },
  { town: "Northwich", href: "/locations/solicitor-northwich" },
  { town: "Nantwich", href: "/locations/solicitor-nantwich" },
  { town: "Crewe", href: "/locations/solicitor-crewe" },
  { town: "Chester", href: "/locations/solicitor-chester" },
  { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
  { town: "Knutsford", href: "/locations/solicitor-knutsford" },
  { town: "Warrington", href: "/locations/solicitor-warrington" },
];

export default function AgriculturalLawPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name: "Agricultural Law", href: "/services/agricultural-law-solicitor-uk" },
        ]}
      />
      <FAQSchema faqs={faqs} id="agricultural-law" />
      <ServiceSchema
        name="Agricultural Law"
        description="NJB Legal provides specialist agricultural law advice for farmers and landowners across Cheshire, the North West and the UK."
        url="/services/agricultural-law-solicitor-uk"
      />

      <div className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      <article>
        {/* Header */}
        <header className="bg-cream pb-12 pt-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-cormorant font-bold italic text-ink leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}>
              Agricultural Land &amp; Rural Property Solicitor | UK Legal Advice | NJB Legal
            </h1>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-base leading-relaxed max-w-3xl">
              NJB Legal provides specialist agricultural land legal advice UK farmers and landowners
              can rely on — from farm tenancy negotiations to rural land sales and succession
              planning. Solicitor NJB Legal, Based in Winsford, Cheshire, advises clients
              across the UK on all aspects of agricultural and rural property law. NJB Legal understands the practical realities of farming
              and rural land ownership. Whether you need advice on a Farm Business Tenancy under
              the Agricultural Tenancies Act 1995, a complex land purchase, or a long-term
              succession strategy, NJB Legal provides clear, expert guidance at every stage.
              Call <a href="tel:07587723897" className="text-gold hover:underline">07587 723897</a> to
              speak directly with NJB Legal.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Definition Box */}
          <DefinitionBox
            term="Farm Business Tenancy (FBT)"
            definition="A Farm Business Tenancy (FBT) is a modern agricultural tenancy agreement governed by the Agricultural Tenancies Act 1995, offering greater flexibility for both landlords and farming tenants compared to older Agricultural Holdings Act tenancies. FBTs have no automatic security of tenure, allowing landlords to recover possession at the end of the agreed term, while still providing a structured framework for agricultural lettings."
            legislation="Agricultural Tenancies Act 1995"
          />

          {/* What Does an Agricultural Law Solicitor Do? */}
          <section aria-label="What does an agricultural law solicitor do" className="my-12">
            <h2 className="h2-style mb-4">What Does an Agricultural Law Solicitor Do?</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed">
              <p>
                An agricultural law solicitor advises farmers, landowners, rural estates and
                agricultural investors on the full range of legal issues that arise in connection
                with farming land and rural property. Agricultural law is a highly specialised
                area — it draws on property law, contract law, planning law and a complex body of
                agricultural-specific legislation that has evolved over decades. NJB Legal brings
                together expertise across all of these areas to provide practical, commercially
                focused advice.
              </p>
              <p>
                <strong className="text-ink">Farm Business Tenancy (FBT) negotiations</strong> are
                one of the most common areas of work for agricultural law solicitors. Since the
                Agricultural Tenancies Act 1995 came into force, all new agricultural tenancies
                in England and Wales are FBTs. Solicitors advise both landlords and tenants on
                the drafting and negotiation of FBT agreements, including the length of the
                tenancy, rent and rent review provisions, permitted use, repair obligations, and
                what happens at the end of the tenancy. Getting these terms right at the outset
                protects both parties throughout the relationship.
              </p>
              <p>
                <strong className="text-ink">Agricultural Holdings Act (AHA) 1986 tenancy advice</strong> remains
                important despite the fact that no new AHA tenancies have been created since 1995.
                Many farms across England and Wales are still subject to AHA tenancies, which carry
                strong statutory protections for tenants. Solicitors advise landlords on strategies
                for recovering possession, and tenants on protecting their rights — including any
                succession entitlements that may allow a qualifying family member to take over the
                tenancy on the death or retirement of the tenant.
              </p>
              <p>
                <strong className="text-ink">Agricultural land purchases and sales</strong> involve
                a wide range of legal issues beyond the standard residential or commercial property
                transaction. Title investigation must cover any tenancies affecting the land, rights
                of way and easements, agricultural covenants, drainage rights, common land
                registration, and any applicable planning designations. The Land Registration Act
                2002 governs title registration, and Stamp Duty Land Tax applies to the purchase
                price. NJB Legal handles the full conveyancing process for agricultural land
                transactions of all sizes.
              </p>
              <p>
                <strong className="text-ink">Planning for rural development</strong> is governed
                principally by the Town and Country Planning Act 1990. While certain agricultural
                operations benefit from permitted development rights, more significant development
                — such as converting agricultural buildings to residential use, or promoting land
                for residential or commercial development — requires planning permission and often
                involves Section 106 agreements. NJB Legal advises on the legal aspects of rural
                planning, including conditional contracts, option agreements and overage
                arrangements designed to capture development value.
              </p>
              <p>
                <strong className="text-ink">Sporting rights</strong> — including shooting, hunting
                and fishing rights — can be reserved, granted, or included in agricultural tenancy
                agreements. NJB Legal advises on the creation and transfer of sporting rights as
                part of land transactions. <strong className="text-ink">Succession planning</strong> for
                farming families involves structuring land ownership, tenancy arrangements and
                business vehicles to facilitate the efficient transfer of the farm to the next
                generation, taking account of Agricultural Property Relief and Business Property
                Relief from inheritance tax.
              </p>
              <p>
                NJB Legal also advises on SFI (Sustainable Farming Incentive) and BPS (Basic
                Payment Scheme) subsidy legal issues as the agricultural support regime continues
                to evolve post-Brexit, as well as boundary disputes, neighbour disputes, land
                drainage rights, and overage provisions on agricultural land with development
                potential.
              </p>
            </div>
          </section>

          {/* Services List */}
          <section aria-label="Agricultural law services" className="my-12">
            <h2 className="h2-style mb-4">Our Agricultural Law Services</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Agricultural land purchases & sales",
                "Farm Business Tenancies (FBT)",
                "Agricultural Holdings Act tenancies",
                "Grazing & agistment agreements",
                "Sporting rights & easements",
                "Rural development & planning law",
                "Land drainage rights",
                "Overage on agricultural land",
                "Farm succession planning",
                "SFI/BPS subsidy legal issues",
                "Boundary & neighbour disputes",
              ].map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 bg-cream border border-mist rounded-lg px-4 py-3"
                >
                  <span className="mt-0.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                  <span className="font-outfit text-sm text-slate">{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Who NJB Legal Helps */}
          <section aria-label="Who NJB Legal helps" className="my-12">
            <h2 className="h2-style mb-4">Who NJB Legal Helps</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  title: "Farmers",
                  desc: "Advice on tenancy agreements, land purchases, planning matters and subsidy legal issues for working farmers across England and Wales.",
                },
                {
                  title: "Landowners",
                  desc: "Guidance on letting agricultural land, overage arrangements, development potential and estate management across Cheshire, the North West and the UK.",
                },
                {
                  title: "Rural Estates",
                  desc: "Comprehensive legal support for estates managing agricultural tenancies, sporting rights, land sales and rural development.",
                },
                {
                  title: "Agricultural Investors",
                  desc: "Due diligence, contract negotiation and title investigation for investors acquiring agricultural land as an asset class.",
                },
                {
                  title: "Rural Developers",
                  desc: "Legal support for those promoting or developing rural land, including option agreements, conditional contracts and S106 negotiations.",
                },
                {
                  title: "Farming Families with Succession Issues",
                  desc: "Specialist advice on transferring farming businesses between generations, including partnership agreements, wills and inheritance tax planning.",
                },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="h3-style mb-2">{item.title}</h3>
                  <p className="font-outfit text-sm text-slate leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <ProcessSteps
            title="How to Buy Agricultural Land in the UK: 6 Legal Steps"
            steps={steps}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Farm Business Tenancy vs Agricultural Holdings Act Tenancy"
            headers={["Feature", "Farm Business Tenancy (FBT)", "AHA Tenancy"]}
            rows={comparisonRows}
          />

          {/* Why Choose NJB Legal */}
          <section aria-label="Why choose NJB Legal for agricultural law" className="my-12">
            <h2 className="h2-style mb-4">
              Why Choose NJB Legal for Agricultural Law?
            </h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed mt-2">
              <p>
                Cheshire has a strong and varied agricultural sector — dairy farming, arable land, mixed estates, and a significant amount of land with development potential. NJB Legal is based in Winsford, Cheshire and brings a genuine understanding of the local agricultural landscape. That local knowledge, combined with specialist legal expertise in agricultural and rural property law, means we can give you advice that is grounded in real understanding of your situation.
              </p>
              <p>
                We are a personal service firm. When you instruct us, you deal directly with your solicitor — not a junior assistant or a call centre. There are no handoffs and no delays. Clients value the directness, responsiveness and practical focus we bring to every matter.
              </p>
              <p>
                As part of the Nexa Law network, NJB Legal combines the attention and flexibility of a specialist firm with access to the resources and support of a national solicitor network. That means professional indemnity insurance, regulatory compliance and the infrastructure of a substantial organisation — without losing the personal touch.
              </p>
              <p>
                We have advised on agricultural land transactions, farm tenancy negotiations, rural development projects and succession planning matters across Cheshire, the North West and throughout the UK. Whether your matter is straightforward or complex, we give you clear, practical advice focused on the outcome you need.
              </p>
            </div>
          </section>
        </div>

        {/* Locations */}
        <section aria-label="Locations served" className="bg-cream py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="h2-style mb-2">
              Serving Agricultural Law Clients Across Cheshire &amp; the North West
            </h2>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm leading-relaxed mb-8 max-w-2xl">
              NJB Legal advises farmers and landowners throughout Cheshire's agricultural
              heartlands — from the rural areas around Winsford and Northwich to the
              farming communities of Nantwich, Crewe and the wider Cheshire Plain. We also
              advise clients across the broader North West farming region, including Shropshire
              border areas, Lancashire and beyond. All matters are handled personally by
              NJB Legal from Winsford, Cheshire.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {locationItems.map((loc) => (
                <LocationCard key={loc.href} town={loc.town} href={loc.href} />
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* FAQ */}
          <FAQAccordion
            title="Frequently Asked Questions: Agricultural Law"
            faqs={faqs}
          />
        </div>
      </article>

      <CTABanner />
    </>
  );
}


