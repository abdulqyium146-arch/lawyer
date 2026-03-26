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
  title: "Business Contracts Solicitor Cheshire | Commercial Contract Advice | NJB Legal",
  description:
    "Expert business contract advice for companies in Cheshire and the North West. NJB Legal drafts and reviews commercial contracts, supply agreements, franchise agreements and NDAs. Call 07587 723897.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/services/business-contracts-solicitor-cheshire",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://anisrahmanchambers.co.uk/services/business-contracts-solicitor-cheshire",
    title: "Business Contracts Solicitor Cheshire | Commercial Contract Advice | NJB Legal",
    description:
      "Expert business contract advice for companies in Cheshire and the North West. Commercial contracts, supply agreements, franchise agreements and NDAs. Call 07587 723897.",
  },
};

const breadcrumbItems = [
  { name: "Services", href: "/services" },
  { name: "Business Contracts" },
];

const steps = [
  {
    number: 1,
    title: "Initial consultation & contract submission to NJB Legal",
    description:
      "Contact NJB Legal to discuss your contract requirements. Share the contract document or brief us on what you need drafted. NJB Legal will confirm the scope of the review or drafting work, timescales and fees at the outset — no hidden costs and no surprises.",
  },
  {
    number: 2,
    title: "Contract review & risk identification",
    description:
      "NJB Legal carries out a thorough review of your contract, identifying legal risks, unfair or one-sided clauses, gaps in protection and any terms that do not reflect your agreed commercial position. We assess the contract against English contract law, the Consumer Rights Act 2015 and any applicable sector-specific regulations.",
  },
  {
    number: 3,
    title: "Negotiation & amendments",
    description:
      "We prepare a clear summary of recommended changes and, where required, negotiate directly with the other party's legal advisors or draft amended clauses for your use. NJB Legal's objective is always to achieve a contract that is commercially workable, legally sound and properly protects your interests.",
  },
  {
    number: 4,
    title: "Finalisation & signing advice",
    description:
      "Once all amendments are agreed, NJB Legal advises on the correct execution of the contract — including signature requirements, effective date, and any conditions precedent to the agreement coming into force. We also advise on contract management best practice to minimise future disputes.",
  },
];

const comparisonRows: string[][] = [
  [
    "Relationship type",
    "Ongoing relationship — franchisee operates under franchisor's system",
    "Licensor grants rights to use IP — no ongoing operational system",
  ],
  [
    "IP rights",
    "Use of brand, trademarks, know-how and system for the term",
    "Use of specific intellectual property rights as defined in the licence",
  ],
  [
    "Ongoing obligations",
    "Extensive — training, quality standards, reporting, exclusivity",
    "Limited — mainly payment of licence fees and compliance with use restrictions",
  ],
  [
    "Cost",
    "Upfront franchise fee plus ongoing royalties and marketing contributions",
    "Typically a licence fee only — upfront, periodic or royalty-based",
  ],
  [
    "Regulatory requirements",
    "British Franchise Association code and sector-specific rules may apply",
    "Fewer regulatory requirements — governed primarily by contract law",
  ],
  [
    "Exit provisions",
    "Strict — typically tied to a fixed term with limited break rights",
    "More flexible — termination for convenience provisions more common",
  ],
  [
    "Suitability",
    "Business format replication — retail, food & beverage, services",
    "Technology, software, brand licensing, creative works",
  ],
];

const faqs: FAQ[] = [
  {
    question: "Do I need a solicitor to draft a business contract?",
    answer:
      "While there is no legal requirement to use a solicitor when drafting a business contract, doing so is strongly advisable for any commercially significant agreement. A poorly drafted contract can leave your business exposed to financial loss, unenforceable obligations, or protracted disputes. NJB Legal drafts commercial contracts that are clear, enforceable under English law, and properly reflect the agreed commercial terms. We also identify common drafting risks — such as inadequate limitation of liability clauses, unclear payment terms, or missing dispute resolution provisions — that could otherwise cause serious problems down the line.",
  },
  {
    question: "What should a commercial contract include?",
    answer:
      "A well-drafted commercial contract should include: clearly identified parties; a precise description of the goods or services to be provided; price and payment terms; delivery or performance timescales; intellectual property ownership and licences; confidentiality obligations; limitation of liability and indemnity provisions; termination rights and notice periods; and a governing law and dispute resolution clause. NJB Legal ensures that every commercial contract we draft covers these essential elements and is tailored to the specific nature of the transaction. Contracts that lack any of these provisions can create significant uncertainty and increase the risk of disputes.",
  },
  {
    question: "What is a non-disclosure agreement (NDA)?",
    answer:
      "A non-disclosure agreement (NDA) is a legally binding contract in which one or more parties agree to keep specified information confidential and not to disclose it to third parties without consent. NDAs are commonly used before business negotiations, when sharing commercially sensitive information with potential partners or investors, and to protect trade secrets or know-how. They can be mutual (both parties agree to keep information confidential) or one-way (only one party is bound). NJB Legal drafts and reviews NDAs for businesses across Cheshire and the North West, ensuring the definition of confidential information, the permitted use, and the duration of the obligation are all properly specified.",
  },
  {
    question: "What is the difference between a franchise agreement and a licence?",
    answer:
      "A franchise agreement grants a franchisee the right to operate a business under the franchisor's established brand, systems and processes, typically with ongoing support and quality control obligations on both sides. A licence, by contrast, simply grants permission to use specified intellectual property — such as a trademark, patent or software — without the broader operational framework of a franchise. Franchise agreements are typically more complex, longer-term and more heavily regulated than licences. NJB Legal advises both franchisors and franchisees on the drafting and review of franchise agreements, and advises businesses on IP licensing arrangements across a range of sectors.",
  },
  {
    question: "How do I deal with a breach of contract in the UK?",
    answer:
      "If another party has breached a commercial contract, your first step should be to review the contract carefully to understand your rights and any notice or cure provisions. NJB Legal advises on pre-litigation steps including issuing a letter before action, attempting negotiated resolution or mediation, and assessing whether losses are recoverable. Under English contract law, you may be entitled to damages, specific performance, or termination depending on the nature of the breach and the contract terms. The Misrepresentation Act 1967 may also be relevant if you were induced into the contract by false representations. NJB Legal provides practical, cost-conscious advice on resolving contract disputes.",
  },
  {
    question: "What is a heads of terms document?",
    answer:
      "A heads of terms document (also called heads of agreement or a term sheet) is a preliminary document that sets out the key commercial terms agreed in principle between parties before a formal contract is drafted. Heads of terms are typically non-binding, though certain provisions — such as exclusivity or confidentiality — may be expressed as legally binding. They are used in business sales, joint ventures, commercial lettings and major supply agreements to record the deal structure before lawyers are instructed to draft the formal documentation. NJB Legal advises on the drafting and review of heads of terms documents to ensure they accurately reflect the commercial deal and do not create unintended legal obligations.",
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
  { town: "Wilmslow", href: "/locations/solicitor-wilmslow" },
];

export default function BusinessContractsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name: "Business Contracts", href: "/services/business-contracts-solicitor-cheshire" },
        ]}
      />
      <FAQSchema faqs={faqs} id="business-contracts" />
      <ServiceSchema
        name="Business Contracts"
        description="NJB Legal drafts and reviews commercial contracts for businesses across Cheshire and the North West, including supply agreements, franchise agreements, NDAs and licensing agreements."
        url="/services/business-contracts-solicitor-cheshire"
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
              Business Contracts Solicitor in Cheshire and the North West | Commercial Contract Advice | NJB Legal
            </h1>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-base leading-relaxed max-w-3xl">
              NJB Legal is a specialist business contracts solicitor Cheshire and the North West companies rely on
              for expert commercial contract drafting, review and negotiation. Contract Law
              governs every commercial relationship — from supply agreements and franchise
              arrangements to software licences and NDAs. Solicitor NJB Legal, based in
              Winsford, Cheshire, provides clear, commercially focused advice that protects your business
              interests without unnecessary complexity. Whether you need a new contract drafted
              from scratch, an existing agreement reviewed before signing, or support with a
              contract dispute, NJB Legal delivers practical, experienced legal guidance.
              With senior-level legal experience across commercial and corporate matters,
              NJB Legal understands the real-world pressures Cheshire and the North West businesses face.
              Call{" "}
              <a href="tel:07587723897" className="text-gold hover:underline">
                07587 723897
              </a>{" "}
              to discuss your contract requirements today.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* Definition Box */}
          <DefinitionBox
            term="Commercial Contract"
            definition="A commercial contract is a legally binding agreement between two or more businesses setting out the rights and obligations of each party. Under English contract law, a valid contract requires offer, acceptance, consideration and an intention to create legal relations. The Consumer Rights Act 2015 and Sale of Goods Act 1979 provide additional statutory protections where the contract involves the supply of goods or services, and the courts will assess whether contractual terms are fair and reasonable."
            legislation="Contract Law (common law), Sale of Goods Act 1979, Consumer Rights Act 2015"
          />

          {/* What Does a Business Contracts Solicitor Do? */}
          <section aria-label="What does a business contracts solicitor do" className="my-12">
            <h2 className="h2-style mb-4">What Does a Business Contracts Solicitor Do?</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed">
              <p>
                A business contracts solicitor advises companies and individuals on the drafting,
                review and negotiation of commercial contracts. Every business relationship that
                involves an exchange of goods, services or rights should be documented in a clear,
                legally sound contract. NJB Legal helps Cheshire and the North West businesses of all sizes to create
                contracts that accurately reflect their commercial agreements and provide effective
                legal protection if things go wrong.
              </p>
              <p>
                <strong className="text-ink">Drafting commercial contracts</strong> from scratch
                is one of the most valuable services NJB Legal provides. Many businesses rely on
                generic templates downloaded from the internet — but template contracts rarely
                reflect the nuances of a specific commercial relationship and may not be enforceable
                in the way the parties intend. NJB Legal drafts bespoke contracts tailored to
                your specific business needs, ensuring that payment terms, delivery obligations,
                intellectual property ownership, liability limitations and termination rights are
                all clearly and correctly documented.
              </p>
              <p>
                <strong className="text-ink">Reviewing and negotiating</strong> contracts presented
                by the other side is equally important. NJB Legal reviews contracts on behalf of
                clients before they sign, identifying legally risky clauses — such as unlimited
                liability provisions, one-sided termination rights, or automatic renewal clauses
                that are easy to miss. We then negotiate amendments with the other party's lawyers
                to bring the contract to a more balanced position. Under English contract law, once
                a contract is signed it becomes binding, and it is far easier and cheaper to
                negotiate better terms before signing than to pursue remedies after a dispute arises.
              </p>
              <p>
                <strong className="text-ink">Identifying unfair terms</strong> is particularly
                relevant where the contract involves a business and a consumer. The Consumer Rights
                Act 2015 requires that contract terms are fair and transparent, and NJB Legal
                advises businesses on compliance with these requirements to avoid unenforceability
                challenges. The Misrepresentation Act 1967 is also relevant — it provides remedies
                where a party has been induced to enter a contract by a false statement.
              </p>
              <p>
                <strong className="text-ink">Pre-litigation dispute resolution</strong> is another
                important area of NJB Legal's business contracts work. When a contract dispute
                arises, early specialist advice can save significant time and cost. NJB Legal
                advises on the interpretation of contract terms, the legal options available, and
                the most effective route to resolution — whether through negotiation, mediation,
                or formal legal proceedings. We draft letters before action and settlement
                agreements, and support clients through the pre-action protocol process.
              </p>
              <p>
                NJB Legal's approach to commercial contracts is always practical and commercially
                aware. The objective is not to create unnecessarily complex documents, but to
                produce clear, effective contracts that allow your business relationships to
                function smoothly while providing real legal protection when it matters.
              </p>
            </div>
          </section>

          {/* Services List */}
          <section aria-label="Business contract services" className="my-12">
            <h2 className="h2-style mb-4">Our Business Contract Services</h2>
            <span className="gold-rule block" aria-hidden="true" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Drafting & reviewing commercial contracts",
                "Supply agreements",
                "Distribution agreements",
                "Franchise agreements",
                "Agency agreements",
                "SaaS & licensing agreements",
                "Contract disputes (pre-litigation)",
                "Letters before action",
                "Settlement negotiations",
                "Mediation support",
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
            title="How to Get a Business Contract Reviewed: 4-Step Process"
            steps={steps}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Franchise Agreement vs Licence Agreement"
            headers={["Feature", "Franchise Agreement", "Licence Agreement"]}
            rows={comparisonRows}
          />

          {/* Why Choose NJB Legal */}
          <section aria-label="Why choose NJB Legal for business contracts" className="my-12">
            <h2 className="h2-style mb-4">
              Why Choose NJB Legal for Business Contract Advice in Cheshire and the North West?
            </h2>
            <span className="gold-rule block" aria-hidden="true" />
            <div className="space-y-4 font-outfit text-slate text-sm leading-relaxed mt-2">
              <p>
                Cheshire and the North West is home to a diverse and thriving business community — from technology
                companies in Macclesfield and Knutsford to logistics operators in Warrington and
                professional services firms in Chester. NJB Legal understands the commercial
                priorities of Cheshire and the North West businesses and provides contract advice that is tailored
                to real-world business needs, not overly cautious or unnecessarily expensive
                legal guidance.
              </p>
              <p>
                Every client who instructs NJB Legal for business contract work deals directly
                with solicitor NJB Legal. There are no juniors, no paralegals and no account
                managers acting as intermediaries. This means you receive consistent, expert
                advice from a qualified solicitor with senior-level commercial experience,
                every time you contact us.
              </p>
              <p>
                NJB Legal operates as part of the Nexa Law network, which provides professional
                infrastructure, regulatory compliance and continuing professional development
                support. This means clients benefit from the personal service of a specialist
                boutique combined with the standards and resources of a substantial legal
                organisation. Whether your contract matter is a straightforward NDA review or
                a complex multi-party supply agreement, NJB Legal has the expertise to advise.
              </p>
              <p>
                NJB Legal's commercial contract service is designed to be fast, clear and cost-effective.
                We provide clear fee estimates at the outset, communicate in plain English rather
                than legal jargon, and focus on delivering practical outcomes rather than
                producing lengthy documents for the sake of it. Our goal is to help your business
                operate with greater confidence and legal security.
              </p>
            </div>
          </section>
        </div>

        {/* Locations */}
        <section aria-label="Locations served" className="bg-cream py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="h2-style mb-2">
              Serving Businesses Across Cheshire and the North West
            </h2>
            <span className="gold-rule block" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm leading-relaxed mb-8 max-w-2xl">
              NJB Legal advises businesses on commercial contract matters throughout Cheshire and the North West —
              from Manchester, Northwich and Chester in the west to Macclesfield, Knutsford and
              Wilmslow in the east. We also advise companies across the broader North West,
              including Warrington, Liverpool and beyond. All matters are handled
              personally by solicitor NJB Legal from Winsford, Cheshire.
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
            title="Frequently Asked Questions: Business Contracts"
            faqs={faqs}
          />
        </div>
      </article>

      <CTABanner />
    </>
  );
}


