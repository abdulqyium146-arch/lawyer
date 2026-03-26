import type { Metadata } from "next";
import BlogPostLayout from "@/app/components/templates/BlogPostLayout";
import ComparisonTable from "@/app/components/ui/ComparisonTable";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import type { FAQ } from "@/app/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Legal Checklist When Buying a Business in the UK (2026) | NJB Legal",
  description:
    "A complete legal checklist for buying a business in England and Wales. NJB Legal covers due diligence, asset vs share purchase, TUPE and shareholder agreements.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/blog/business-acquisition-legal-checklist",
  },
  openGraph: {
    title: "Legal Checklist When Buying a Business in the UK (2026) | NJB Legal",
    description:
      "A complete legal checklist for buying a business in England and Wales. NJB Legal covers due diligence, asset vs share purchase, TUPE and shareholder agreements.",
    url: "https://anisrahmanchambers.co.uk/blog/business-acquisition-legal-checklist",
    locale: "en_GB",
    type: "article",
  },
};

const structureHeaders = ["Feature", "Asset Purchase", "Share Purchase"];

const structureRows = [
  [
    "What you buy",
    "Selected assets and liabilities of the business",
    "All shares in the company — including all assets and liabilities",
  ],
  [
    "Inherited liabilities",
    "Generally limited — buyer selects which liabilities to take on",
    "All historic liabilities are inherited, including unknown or contingent ones",
  ],
  [
    "TUPE",
    "Usually applies — employees transfer automatically",
    "Employees remain employed by the company — TUPE does not apply on a share sale",
  ],
  [
    "Stamp duty",
    "Stamp duty on property and shares in the acquired assets",
    "Stamp duty of 0.5% on share consideration",
  ],
  [
    "Tax treatment",
    "Potential for goodwill write-off; VAT treatment depends on TOGC status",
    "Capital gains tax for the seller; no step-up in asset values for buyer",
  ],
  [
    "Preferred by",
    "Buyers — offers more protection from historic liabilities",
    "Sellers — cleaner exit; potentially more tax efficient via Business Asset Disposal Relief",
  ],
];

const faqs: FAQ[] = [
  {
    question: "How long does buying a business in the UK take?",
    answer:
      "The timeline for a business acquisition depends on the size and complexity of the transaction. A straightforward small business purchase (under £500,000) with a simple structure and clean due diligence can complete in six to twelve weeks from heads of terms. Larger or more complex acquisitions — involving multiple entities, regulatory approvals, property, third-party consents or contested warranties — typically take three to six months. Early instruction of a corporate solicitor and proactive management of due diligence are the most effective ways to keep the process on track.",
  },
  {
    question: "What is the difference between an asset purchase and a share purchase?",
    answer:
      "In an asset purchase, the buyer acquires selected assets of the business — such as goodwill, contracts, equipment and property — and takes on only the liabilities that are expressly agreed. In a share purchase, the buyer acquires the shares of the company and inherits all of its assets and liabilities, including historic and unknown liabilities. Asset purchases are generally preferred by buyers because of the greater protection from inherited liabilities. Share purchases are often preferred by sellers because they can be more tax efficient and provide a cleaner exit.",
  },
  {
    question: "What is TUPE and does it apply when I buy a business?",
    answer:
      "TUPE — the Transfer of Undertakings (Protection of Employment) Regulations 2006 — protects employees when a business or part of a business is transferred to a new owner. On an asset purchase, TUPE almost always applies: employees who work in the part of the business being transferred automatically transfer to the buyer on their existing terms and conditions. The buyer cannot dismiss employees solely because of the transfer. On a share purchase, TUPE does not apply because the employing company itself is being purchased and the employees remain employed by the same legal entity. Pre-transfer consultation obligations apply in both cases.",
  },
  {
    question: "What warranties should I expect when buying a business?",
    answer:
      "Warranties in a business sale agreement are contractual statements of fact made by the seller about the state of the business. Typical warranties cover the accuracy of financial accounts, ownership of assets, the status of key contracts, employment and pension obligations, tax compliance, intellectual property ownership, litigation history, environmental compliance and GDPR. If a warranty proves to be untrue after completion and you suffer loss as a result, you can claim against the seller. Warranties are negotiated as part of the sale agreement and are usually subject to time limits and financial caps on the seller's liability.",
  },
  {
    question: "Do I need a solicitor to buy a business?",
    answer:
      "Yes. Buying a business is one of the most legally significant transactions a person or company can undertake. Without specialist legal advice, you risk inheriting undisclosed liabilities, signing contracts with inadequate warranty protection, failing to comply with TUPE obligations, or missing regulatory consents required to operate the business. A corporate solicitor will carry out due diligence, draft or negotiate the sale agreement, advise on deal structure, and ensure that the transaction is properly documented and legally effective. The cost of legal advice is modest relative to the value of the transaction and the risks involved.",
  },
];

export default function BusinessAcquisitionLegalChecklistPage() {
  return (
    <BlogPostLayout
      title="Legal Checklist When Buying a Business in the UK (2026)"
      datePublished="2026-02-20"
      dateDisplay="20 February 2026"
      readTime="11 min read"
      category="Corporate Law"
      breadcrumbTitle="Legal Checklist When Buying a Business"
      url="/blog/business-acquisition-legal-checklist"
      description="A complete legal checklist for buying a business in England and Wales. NJB Legal covers due diligence, asset vs share purchase, TUPE and shareholder agreements."
      faqs={faqs}
    >
      {/* Intro */}
      <p>
        Buying a business in the UK involves a series of legal checks that protect you from
        inheriting hidden liabilities, undisclosed disputes and obligations that could undermine
        the value of your acquisition. Without a thorough legal process, you may discover after
        completion that the business has outstanding tax liabilities, employment tribunal claims,
        broken contracts or property issues that the seller did not disclose. A structured legal
        checklist helps ensure you carry out proper due diligence and negotiate the right
        protections before you commit.
      </p>
      <p>
        This guide sets out the six key legal steps for buying a business in England and Wales in
        2026, from choosing the right purchase structure to agreeing warranties and protections in
        the sale agreement.
      </p>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="my-8 bg-cream border border-mist rounded-lg p-5">
        <p className="font-outfit font-semibold text-ink text-sm mb-3 uppercase tracking-wide">
          Contents
        </p>
        <ol className="space-y-1.5 text-sm font-outfit text-slate list-decimal pl-5">
          <li><a href="#structure">Step 1: Decide Your Structure — Asset Purchase or Share Purchase</a></li>
          <li><a href="#instruct-solicitor">Step 2: Instruct a Corporate Solicitor Early</a></li>
          <li><a href="#due-diligence">Step 3: Due Diligence Checklist for Buying a Business</a></li>
          <li><a href="#tupe">Step 4: Understand TUPE When Buying a Business</a></li>
          <li><a href="#shareholders">Step 5: Shareholder Agreements and Director Arrangements</a></li>
          <li><a href="#warranties">Step 6: Warranties and Indemnities in Business Sales</a></li>
          <li><a href="#timeline">How Long Does a Business Acquisition Take?</a></li>
          <li><a href="#faqs">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* Section 1 */}
      <h2 id="structure">Step 1: Decide Your Structure — Asset Purchase or Share Purchase</h2>

      <p>
        The first decision in any business acquisition is whether to purchase the assets of the
        business or the shares of the company that operates it. Each structure has very different
        legal, tax and commercial implications. The right choice depends on the nature of the
        business, the seller's tax position, the extent of potential liabilities and the buyer's
        commercial objectives.
      </p>

      <ComparisonTable
        headers={structureHeaders}
        rows={structureRows}
      />

      <p>
        As a buyer, you will usually prefer an asset purchase because it limits your exposure to
        historic liabilities. As a seller, you will often prefer a share sale because it can
        qualify for Business Asset Disposal Relief (formerly Entrepreneurs' Relief), reducing the
        capital gains tax rate to 10% (subject to lifetime limits). In practice, the structure is
        negotiated between the parties and will depend on the relative bargaining positions. Take
        specialist legal and tax advice before agreeing heads of terms.
      </p>

      {/* Section 2 */}
      <h2 id="instruct-solicitor">Step 2: Instruct a Corporate Solicitor Early</h2>

      <p>
        One of the most important steps in any business acquisition is instructing a specialist
        corporate solicitor before you commit to anything — including signing heads of terms or
        paying exclusivity fees. Early instruction allows your solicitor to advise you on deal
        structure, flag issues in the heads of terms before they become contractual obligations,
        and begin the due diligence process promptly.
      </p>
      <p>
        Many buyers make the mistake of instructing a solicitor only after heads of terms have been
        agreed. By that stage, the key commercial terms are often locked in and it is much harder
        to renegotiate the price, structure or risk allocation. A corporate solicitor involved from
        the outset can shape the deal in your favour from the beginning.
      </p>
      <p>
        Your solicitor will manage the due diligence process, instruct specialists where required
        (for example, employment lawyers for TUPE advice, property lawyers for any real estate
        in the transaction), negotiate the sale and purchase agreement, advise on the disclosure
        letter and ensure all conditions to completion are satisfied before you commit to the
        final handover.
      </p>

      {/* Section 3 */}
      <h2 id="due-diligence">Step 3: Due Diligence Checklist for Buying a Business</h2>

      <p>
        Due diligence is the systematic process of investigating a business before you buy it.
        The objective is to verify what you are buying, identify risks and liabilities, and gather
        information to support your negotiating position on price and contract terms.
      </p>
      <p>A comprehensive business acquisition due diligence exercise should cover:</p>
      <ol>
        <li>
          <strong>Financial due diligence:</strong> Audited accounts for the last three years,
          management accounts, cash flow projections, outstanding debts, debtors and creditors,
          tax compliance history, and any outstanding HMRC enquiries.
        </li>
        <li>
          <strong>Legal — contracts:</strong> Review all material commercial contracts, including
          supplier agreements, customer contracts, distribution agreements, licences and joint
          venture arrangements. Identify contracts with change of control provisions that may
          require consent to assignment.
        </li>
        <li>
          <strong>Legal — intellectual property:</strong> Confirm ownership of all trademarks,
          patents, copyright, domain names and trade secrets. Check for any IP disputes or
          licences granted to or by the business.
        </li>
        <li>
          <strong>Employment:</strong> Review employment contracts, staff handbook, bonus
          arrangements, pension obligations and any tribunal claims or grievances. Understand TUPE
          implications and identify key employees whose retention is critical to the business.
        </li>
        <li>
          <strong>Property:</strong> Where the business occupies property, review the freehold
          title or lease terms, check the planning use class, identify any dilapidations exposure
          and confirm that the occupation arrangements can continue after completion.
        </li>
        <li>
          <strong>Regulatory and compliance:</strong> Identify all licences, registrations and
          regulatory approvals required to operate the business and confirm they are current and
          transferable (or capable of being re-obtained) by the buyer.
        </li>
        <li>
          <strong>Litigation history:</strong> Review any past, current or threatened litigation,
          disputes or insurance claims involving the business. Consider whether any identified
          claims warrant a specific indemnity in the sale agreement.
        </li>
        <li>
          <strong>Environmental:</strong> For businesses operating from owned or leased premises,
          consider whether there is any environmental liability — including contamination,
          hazardous materials or regulatory enforcement — that could be inherited by the buyer.
        </li>
        <li>
          <strong>GDPR and data protection:</strong> Confirm the business's data processing
          activities are lawful, that a data protection register is maintained and that
          appropriate consents or legitimate bases for processing personal data are in place.
          Consider the position on any data sharing arrangements post-completion.
        </li>
      </ol>

      {/* Section 4 */}
      <h2 id="tupe">Step 4: Understand TUPE When Buying a Business</h2>

      <p>
        The Transfer of Undertakings (Protection of Employment) Regulations 2006 (TUPE) is one of
        the most important areas of employment law for any business acquisition. TUPE protects
        employees when the business or part of the business for which they work transfers to a
        new employer. On an asset purchase, TUPE will generally apply and the employees who work
        in the transferring business will automatically transfer to the buyer on their existing
        terms and conditions.
      </p>
      <p>
        As the buyer (the transferee), you inherit all of the employment liabilities of the
        seller in relation to transferring employees — including any historic claims, outstanding
        tribunal proceedings and continuity of employment for redundancy calculation purposes. You
        cannot dismiss employees solely because of the transfer: such dismissals are automatically
        unfair. Any variation to the terms and conditions of transferring employees that is
        connected to the transfer is also void, unless the change is for an economic, technical
        or organisational (ETO) reason.
      </p>
      <p>
        Both the seller and the buyer have pre-completion consultation obligations under TUPE.
        The seller must provide employee liability information to the buyer at least 28 days
        before completion. Both parties must inform and, in some cases, consult with employee
        representatives about the measures they intend to take following the transfer. Failure to
        comply with TUPE obligations can result in financial penalties and tribunal claims against
        both seller and buyer. Take specialist employment law advice on TUPE as early as possible
        in the transaction.
      </p>

      {/* Section 5 */}
      <h2 id="shareholders">Step 5: Shareholder Agreements and Director Arrangements</h2>

      <p>
        If you are buying a business together with other investors or co-directors, you should put
        a shareholders agreement in place before or at the time of completion. A shareholders
        agreement sets out the rights and obligations of each shareholder, governs how decisions
        are made, provides for the transfer of shares between shareholders and to third parties,
        and includes provisions for resolving deadlocks and disputes.
      </p>
      <p>
        You should also consider director appointments: who will be appointed to the board,
        what their responsibilities will be, and what service agreements or consultancy
        arrangements will govern their relationship with the company. Getting these arrangements
        properly documented at the outset avoids costly disputes later.
      </p>

      {/* Section 6 */}
      <h2 id="warranties">Step 6: Warranties and Indemnities in Business Sales</h2>

      <p>
        Warranties are contractual statements of fact made by the seller about the state of the
        business. If a warranty proves to be untrue and you suffer loss as a result, you can bring
        a claim against the seller for breach of warranty. Warranties cover a wide range of matters
        — the accuracy of accounts, the status of contracts, employment compliance, tax, IP
        ownership, litigation and regulatory matters. Carefully negotiated warranties are your
        primary legal protection against undisclosed liabilities in the acquired business.
      </p>
      <p>
        Indemnities are a stronger form of protection than warranties: they give the buyer a
        pound-for-pound recovery for a specific identified risk, regardless of whether it causes
        loss in the traditional sense. Indemnities are typically sought where a specific risk has
        been identified in due diligence — for example, a tax liability, a pending lawsuit or a
        regulatory breach. Sellers will seek to limit warranty and indemnity liability through
        time limits (typically 18–24 months for general warranties, longer for tax), financial
        caps (usually linked to the purchase price) and the disclosure letter (which qualifies
        warranties against matters fairly disclosed by the seller). Your solicitor will negotiate
        these limitations in light of your due diligence findings.
      </p>

      {/* Section 7 */}
      <h2 id="timeline">How Long Does a Business Acquisition Take in the UK?</h2>

      <p>
        The timeline varies considerably depending on the size, structure and complexity of the
        transaction. A straightforward small business purchase with clean due diligence and an
        uncomplicated structure can typically complete within six to twelve weeks of heads of
        terms being agreed. Mid-market transactions involving multiple entities, real estate,
        regulatory approvals or complex employment arrangements typically take three to five months.
        Larger or cross-border acquisitions may take six months or more. Early instruction of
        legal and financial advisers, prompt provision of information by the seller and active
        project management by all parties are the most effective ways to keep the timetable
        on track.
      </p>

      {/* FAQ Section */}
      <h2 id="faqs">Frequently Asked Questions</h2>

      <FAQAccordion faqs={faqs} />
    </BlogPostLayout>
  );
}
