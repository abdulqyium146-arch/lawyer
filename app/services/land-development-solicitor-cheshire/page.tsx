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
  title: "Land Development Solicitor Cheshire | Property Developer Legal Advice | NJB Legal",
  description:
    "Legal advice for property developers and landowners in Cheshire and the North West. NJB Legal handles site acquisitions, option agreements, Section 106 obligations and plot sales. Call 07587 723897.",
  alternates: {
    canonical: "https://njblegal.co.uk/services/land-development-solicitor-cheshire",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://njblegal.co.uk/services/land-development-solicitor-cheshire",
    title: "Land Development Solicitor Cheshire | Property Developer Legal Advice | NJB Legal",
    description:
      "Legal advice for property developers and landowners in Cheshire and the North West. Site acquisitions, option agreements, Section 106 and plot sales. Call 07587 723897.",
  },
};

const breadcrumbItems = [
  { name: "Services", href: "/services" },
  { name: "Land & Development" },
];

const steps = [
  {
    number: 1,
    title: "Site identification & initial due diligence",
    description:
      "NJB Legal advises on initial title investigation, identification of potential constraints such as restrictive covenants, rights of way, ransom strips and access issues, and confirms ownership structure. Early legal due diligence prevents costly surprises later in the process.",
  },
  {
    number: 2,
    title: "Option agreement or conditional contract",
    description:
      "Most development transactions are structured as option agreements or conditional contracts. NJB Legal drafts and negotiates these documents, ensuring the developer's interests are protected — including the right to withdraw if planning is not achieved and clear provisions on the exercise price.",
  },
  {
    number: 3,
    title: "Planning application & S106 negotiation",
    description:
      "Once a planning application is submitted, NJB Legal advises on and negotiates Section 106 agreements under the Town and Country Planning Act 1990. S106 obligations may include affordable housing contributions, infrastructure payments, highway works and community facilities funding.",
  },
  {
    number: 4,
    title: "Site acquisition & title investigation",
    description:
      "On exercise of an option or satisfaction of conditions, NJB Legal handles the full conveyancing process — carrying out searches, investigating title, raising enquiries, drafting the transfer and advising on any outstanding legal issues before completion.",
  },
  {
    number: 5,
    title: "Plot sales & development completion",
    description:
      "For residential developments, NJB Legal handles the legal aspects of plot sales — including preparation of plot sale packs, title splits, management company structures and the registration of new titles at HM Land Registry. We also advise on build-to-rent structures and commercial plot disposals.",
  },
];

const comparisonRows: string[][] = [
  [
    "Who pays planning costs",
    "Developer pays all planning costs",
    "Promoter pays all planning costs on behalf of landowner",
  ],
  [
    "Planning risk",
    "Developer bears the risk of planning failure",
    "Promoter bears the risk — landowner pays nothing if planning fails",
  ],
  [
    "Landowner control",
    "Limited — developer drives the planning process",
    "Greater involvement — landowner typically retains approval rights",
  ],
  [
    "Developer/promoter obligation",
    "Developer has an option (right, not obligation) to purchase",
    "Promoter is typically obliged to use reasonable endeavours to obtain planning",
  ],
  [
    "Payment timing",
    "Lump sum on exercise of option",
    "Percentage of net sale proceeds after marketing and disposal",
  ],
  [
    "Flexibility",
    "Fixed exercise price (or formula) agreed at outset",
    "Landowner benefits from any uplift in market value at point of sale",
  ],
  [
    "Typical use",
    "Developer acquiring specific site with planning potential",
    "Larger land promotions where full value realisation is the priority",
  ],
  [
    "Legal complexity",
    "Moderate — option agreement, exercise mechanism, overage",
    "Higher — promotion agreement, marketing strategy, cost sharing, dispute resolution",
  ],
];

const faqs: FAQ[] = [
  {
    question: "What is a Section 106 agreement in property development?",
    answer:
      "A Section 106 agreement (S106) is a legal obligation entered into between a developer and a local planning authority as a condition of granting planning permission, under the Town and Country Planning Act 1990. S106 agreements require developers to mitigate the impact of their development on the local area. Common obligations include providing a proportion of affordable housing, making financial contributions towards local infrastructure, funding highways improvements, or creating community facilities. NJB Legal advises developers and landowners on negotiating S106 obligations to ensure they are proportionate, reasonable and properly documented, minimising the financial burden on the development.",
  },
  {
    question: "What is an option agreement on development land?",
    answer:
      "An option agreement gives a developer the right, but not the obligation, to purchase a piece of land within a specified period — usually conditional on obtaining satisfactory planning permission. The developer pays an option fee to secure the right. During the option period, the developer promotes and obtains planning consent. If planning is achieved to the required standard, the developer can exercise the option and purchase at a price agreed in advance (or calculated by formula). If planning fails, the developer walks away and the landowner retains the option fee. NJB Legal drafts and negotiates option agreements for both developers and landowners across Cheshire and the North West.",
  },
  {
    question: "What is a promotion agreement for landowners?",
    answer:
      "A promotion agreement is an alternative to an option agreement that is often preferred by landowners who want to maximise the value realised from their land. Under a promotion agreement, the promoter (typically a specialist land promotion company) agrees to obtain planning permission for the land at its own cost and risk. Once planning is obtained, the land is sold on the open market and the promoter receives a percentage of the net sale proceeds as their fee. The landowner pays nothing if planning is not achieved and retains all the benefit of market value growth. NJB Legal advises landowners on the legal terms of promotion agreements to ensure their interests are properly protected.",
  },
  {
    question: "What is a ransom strip and how do I deal with one?",
    answer:
      "A ransom strip is a narrow piece of land that controls access to a development site — for example, a strip of land between the site and the public highway. The owner of the ransom strip can demand a payment (often a significant percentage of the development value) in exchange for granting access rights. Ransom strips can arise through historic boundary arrangements or deliberate retention on a sale. NJB Legal advises developers on identifying ransom strip risks during due diligence, negotiating the acquisition of ransom strips, and structuring transactions to minimise exposure. We also advise landowners who hold ransom strips on their legal rights.",
  },
  {
    question: "What legal checks are needed when buying development land?",
    answer:
      "When buying development land in Cheshire and the North West, NJB Legal carries out comprehensive legal due diligence including: title investigation to check ownership and identify covenants or restrictions; local authority searches to identify planning history, designations and highway status; environmental searches to identify contamination risks; drainage and water searches; checking for ransom strips and access issues; reviewing any existing tenancies or occupiers; and investigating statutory charges or notices. We also advise on the planning status of the site, any CIL (Community Infrastructure Levy) liability, and the terms of any existing option or promotion agreements. Thorough due diligence is essential to avoid costly surprises post-acquisition.",
  },
  {
    question: "What is a conditional contract in property development?",
    answer:
      "A conditional contract is a binding agreement to buy and sell land, but where completion is dependent on one or more conditions being satisfied — most commonly the grant of a satisfactory planning permission. Unlike an option agreement, a conditional contract is typically binding on both parties: once the condition is satisfied, both parties must complete. NJB Legal drafts conditional contracts that specify the planning condition in detail, including the type of permission required, minimum unit numbers, and an agreed long-stop date after which either party may withdraw if the condition remains unsatisfied. We also advise on conditional contracts under the Infrastructure Act 2015 and other relevant legislation.",
  },
];

const locationItems = [
  { town: "Winsford", href: "/locations/solicitor-winsford" },
  { town: "Northwich", href: "/locations/solicitor-northwich" },
  { town: "Chester", href: "/locations/solicitor-chester" },
  { town: "Crewe", href: "/locations/solicitor-crewe" },
  { town: "Macclesfield", href: "/locations/solicitor-macclesfield" },
  { town: "Knutsford", href: "/locations/solicitor-knutsford" },
  { town: "Warrington", href: "/locations/solicitor-warrington" },
  { town: "Nantwich", href: "/locations/solicitor-nantwich" },
];

export default function LandDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name: "Land & Development", href: "/services/land-development-solicitor-cheshire" },
        ]}
      />
      <FAQSchema faqs={faqs} id="land-development" />
      <ServiceSchema
        name="Land & Property Development"
        description="NJB Legal provides specialist land and property development legal advice for developers and landowners across Cheshire and the North West."
        url="/services/land-development-solicitor-cheshire"
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
              Land &amp; Property Development Solicitor in Cheshire and the North West | NJB Legal
            </h1>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-base leading-relaxed max-w-3xl">
              NJB Legal is a specialist land development solicitor Cheshire and the North West property developers
              and landowners trust for expert legal advice. Whether you are a developer acquiring
              a greenfield or brownfield site, a landowner entering an option agreement, or a
              housebuilder completing plot sales, solicitor NJB Legal provides clear,
              commercially focused advice from NJB Legal's base in Winsford, Cheshire. With
              senior-level legal experience across property and development transactions, NJB Legal advises
              on the full development cycle — from initial site due diligence and option
              agreements through to Section 106 negotiations, site acquisitions and plot sales.
              Contact us today on{" "}
              <a href="tel:07587723897" className="text-gold hover:underline">
                07587 723897
              </a>{" "}
              to discuss your development project.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Definition Box */}
          <DefinitionBox
            term="Section 106 Agreement"
            definition="A Section 106 agreement (S106) is a legal obligation attached to a planning permission under the Town and Country Planning Act 1990. It requires developers to mitigate the impact of their development, typically through affordable housing contributions, infrastructure funding or community facilities payments. S106 agreements are negotiated between the developer and the local planning authority and run with the land, binding future owners."
            legislation="Town and Country Planning Act 1990"
          />

          {/* What Does a Land Development Solicitor Do? */}
          <section aria-label="What does a land development solicitor do" className="my-12">
            <h2 className="h2-style mb-4">What Does a Land Development Solicitor Do?</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed">
              <p>
                A land development solicitor advises property developers, landowners and
                investors on the legal aspects of acquiring, promoting and developing land.
                Development transactions are legally complex — they involve careful due diligence,
                intricate contractual structures, planning law obligations and Land Registry
                requirements. NJB Legal provides specialist legal support at every stage of the
                development process, from initial site identification to final plot sales and
                title registration.
              </p>
              <p>
                <strong className="text-ink">Conditional contracts and option agreements</strong> are
                the legal instruments most commonly used to secure development land. A conditional
                contract binds both parties to complete once a specified condition (typically a
                planning permission) is satisfied. An option agreement gives the developer the
                right, but not the obligation, to purchase. NJB Legal drafts and negotiates both
                types of agreement, ensuring clients' interests are protected — whether you are
                the developer seeking flexibility or the landowner wishing to maximise value.
              </p>
              <p>
                <strong className="text-ink">Option agreements</strong> allow developers to lock
                in the right to purchase a site at an agreed price or formula, typically subject
                to obtaining satisfactory planning permission. NJB Legal advises on the key terms
                of option agreements, including the option period, the exercise mechanism, price
                calculation, and overage provisions that allow the landowner to share in any
                uplift in value. <strong className="text-ink">Promotion agreements</strong> offer
                an alternative structure particularly suited to larger sites, where a promoter
                funds and manages the planning process in return for a percentage of sale proceeds.
              </p>
              <p>
                <strong className="text-ink">Section 106 negotiations</strong> under the Town and
                Country Planning Act 1990 are a critical part of any significant development.
                S106 obligations can represent a substantial cost to developers, and the terms
                negotiated can significantly affect development viability. NJB Legal advises on
                the scope and drafting of S106 agreements, working with planning consultants to
                challenge unreasonable demands and ensure obligations are limited to what is
                necessary and proportionate.
              </p>
              <p>
                <strong className="text-ink">Site assembly</strong> — bringing together multiple
                parcels of land to create a development site — requires careful legal coordination.
                NJB Legal advises on the separate acquisition of each parcel, the management of
                ransom strips and access rights, and the structure of the assembled site. The
                Infrastructure Act 2015 provides a framework for certain types of infrastructure
                delivery that can affect development sites. NJB Legal also advises on
                <strong className="text-ink"> plot sales</strong> for residential developers,
                handling the legal aspects of selling individual plots within a development —
                including management company structures, estate charges and the transfer of
                individual titles.
              </p>
              <p>
                Whether you need advice on a single-plot self-build acquisition or a major
                multi-phase development site, NJB Legal provides focused, commercially aware
                legal support across Cheshire and the North West.
              </p>
            </div>
          </section>

          {/* Services List */}
          <section aria-label="Land development services" className="my-12">
            <h2 className="h2-style mb-4">Our Land &amp; Development Legal Services</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Greenfield & brownfield acquisitions",
                "Planning obligations (S106)",
                "Infrastructure agreements (S278)",
                "Conditional contracts & options",
                "Promotion agreements",
                "Plot sales for developers",
                "Build-to-rent legal advice",
                "Landowner/developer structures",
                "Ransom strips & access rights",
                "Site assembly transactions",
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

          {/* Process Steps */}
          <ProcessSteps
            title="5 Legal Stages of a Property Development in Cheshire and the North West"
            steps={steps}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Option Agreement vs Promotion Agreement"
            headers={["Feature", "Option Agreement", "Promotion Agreement"]}
            rows={comparisonRows}
          />

          {/* Why Choose NJB Legal */}
          <section aria-label="Why choose NJB Legal for land development" className="my-12">
            <h2 className="h2-style mb-4">Why Choose NJB Legal for Land Development in Cheshire and the North West?</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed mt-2">
              <p>
                Cheshire and the North West is one of the most active residential and commercial development markets
                in the North West, with significant land promotion activity around Chester,
                Northwich, Macclesfield and the Crewe growth zone. NJB Legal is ideally positioned
                to advise on Cheshire and the North West land development matters — combining specialist legal
                knowledge with an understanding of the local planning environment, land values
                and market conditions.
              </p>
              <p>
                NJB Legal offers a genuinely personal service. Solicitor NJB Legal handles
                every matter personally — you will not be passed between departments or deal with
                a different lawyer each time you call. This continuity is especially valuable in
                development transactions, which can span months or years and require consistent
                legal oversight throughout.
              </p>
              <p>
                As part of the Nexa Law network, NJB Legal has access to professional resources
                and support that enable us to handle complex multi-party transactions and
                large-scale site acquisitions that might be beyond the capacity of a sole
                practitioner. Clients benefit from both the personal attention of a dedicated
                specialist and the infrastructure of a national network.
              </p>
              <p>
                With deep expertise in property and development law, Nicholas
                Ball understands the commercial pressures that developers and landowners face.
                NJB Legal's advice is always practical, focused on deal completion, and designed
                to minimise legal risk without slowing down your project unnecessarily.
              </p>
            </div>
          </section>
        </div>

        {/* Locations */}
        <section aria-label="Locations served" className="bg-cream py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="h2-style mb-2">
              Serving Property Developers &amp; Landowners Across Cheshire and the North West &amp; the North West
            </h2>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm leading-relaxed mb-8 max-w-2xl">
              NJB Legal advises property developers and landowners throughout Cheshire and the North West — from
              urban fringe sites in Chester and Northwich to rural land promotions in mid-Cheshire and the North West.
              We also advise on development projects across the wider North West region, including
              Warrington, Cheshire, the North West and Merseyside. Based in Winsford, Cheshire, all matters are
              handled personally by NJB Legal.
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
            title="Frequently Asked Questions: Land & Development Law"
            faqs={faqs}
          />
        </div>
      </article>

      <CTABanner />
    </>
  );
}


