import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Corporate & Commercial Lawyer Cheshire | Business Legal Advice | NJB Legal",
  description:
    "Corporate and commercial legal advice for businesses in Cheshire and the North West. NJB Legal advises on business acquisitions, shareholder agreements, due diligence and commercial contracts. Call 07587 723897.",
  alternates: {
    canonical:
      "https://njblegal.co.uk/services/corporate-commercial-lawyer-north-west",
  },
  openGraph: {
    locale: "en_GB",
    title:
      "Corporate & Commercial Lawyer Cheshire | Business Legal Advice | NJB Legal",
    description:
      "Corporate and commercial legal advice for businesses in Cheshire and the North West. Business acquisitions, shareholder agreements and commercial contracts. Call 07587 723897.",
    url: "https://njblegal.co.uk/services/corporate-commercial-lawyer-north-west",
    siteName: "NJB Legal",
    type: "website",
  },
};

const whatWeDoBody = `
<p>When businesses across the North West require a <strong>corporate lawyer</strong>, they need more than generic legal templates — they need commercially astute advice from a solicitor who understands how businesses are structured, financed, acquired and grown. NJB Legal, Based in Winsford, Cheshire, provides corporate and commercial legal advice to owner-managed businesses, SMEs and investors across the North West UK, led by solicitor NJB Legal with senior-level commercial legal experience. All corporate work is grounded in the <strong>Companies Act 2006</strong> and the full body of English commercial law.</p>

<h3>What legal advice do I need when buying or selling a business?</h3>
<p>A business acquisition — whether of shares or assets — is one of the most significant transactions a business owner will ever undertake. NJB Legal advises buyers and sellers throughout the process: from reviewing and advising on the heads of terms, through the due diligence process, selecting the appropriate legal structure (asset purchase or share purchase), drafting and negotiating the acquisition agreement, and completing the transaction. On a <strong>share purchase</strong>, the buyer acquires the target company including all its liabilities, contracts and obligations — making thorough due diligence essential. The acquisition agreement will be governed by the <strong>Companies Act 2006</strong> and will include extensive warranties and, where appropriate, indemnities from the seller. On an <strong>asset purchase</strong>, the buyer selects the specific assets they wish to acquire, leaving unwanted liabilities with the seller — though TUPE (Transfer of Undertakings (Protection of Employment) Regulations 2006) may apply where employees transfer with the business.</p>

<h3>Why do I need a shareholders agreement?</h3>
<p>A company's articles of association set the constitutional framework for how the company is run, but they are a public document and cannot adequately address the commercial arrangements between shareholders. A <strong>shareholders agreement</strong> is a private, confidential document that governs the relationship between shareholders in detail: voting rights and deadlock provisions, dividend policy, restrictions on transferring shares (pre-emption rights), tag-along and drag-along rights, good and bad leaver provisions, non-compete obligations and what happens in the event of a dispute. NJB Legal drafts shareholders agreements tailored to the specific circumstances of each business and shareholder group, ensuring that all parties understand their rights and obligations from the outset.</p>

<h3>What is a management buyout (MBO) and how does it work?</h3>
<p>A management buyout (MBO) is a transaction in which a company's existing management team acquires ownership of the business, typically from a retiring founder, private equity house or corporate parent. MBOs are legally and commercially complex, involving simultaneous consideration of the acquisition structure, management team equity arrangements, debt and equity funding, and the departing owner's tax position. NJB Legal advises management teams on the legal aspects of MBOs, working alongside financial advisers and accountants to deliver a coherent transaction. Key documents include a heads of terms, due diligence report, share purchase agreement, shareholders agreement, management team service agreements and, where applicable, banking and security documentation.</p>

<h3>What commercial contracts does NJB Legal draft?</h3>
<p>Alongside corporate transactions, NJB Legal drafts and reviews the full range of commercial contracts that businesses need in their day-to-day operations. These include supply agreements, terms and conditions of business, distribution and agency agreements, licence agreements, joint venture agreements, non-disclosure agreements (NDAs) and director service agreements. All contracts are drafted in accordance with the <strong>Sale of Goods Act 1979</strong>, the Supply of Goods and Services Act 1982 and the Unfair Contract Terms Act 1977 (as amended by the Consumer Rights Act 2015 for consumer-facing contracts). NJB Legal ensures your contracts are commercially sensible, legally enforceable and protect your business interests effectively.</p>
`;

export default function CorporateCommercialPage() {
  return (
    <ServicePageTemplate
      breadcrumb={[
        { name: "Services", href: "/services" },
        { name: "Corporate Commercial Lawyer North West" },
      ]}
      headline="Corporate & Commercial Lawyer in the North West | NJB Legal"
      intro="NJB Legal provides corporate and commercial legal advice for businesses across the North West UK. Based in Winsford, Cheshire, solicitor NJB Legal acts as a trusted corporate lawyer North West UK businesses rely on for M&A transactions, shareholders agreements, business acquisitions and a full range of commercial contracts. With senior-level corporate and commercial experience, and working within the Nexa Law network, NJB Legal advises owner-managed businesses, SMEs and investors on transactions governed by the Companies Act 2006, Sale of Goods Act 1979 and Partnership Act 1890. Whether you are buying or selling a business, restructuring your shareholding or putting commercial contracts in place, NJB Legal provides direct, commercially focused advice. Call 07587 723897 or email info@njblegal.co.uk."
      definitionTerm="Corporate & Commercial Law"
      definitionText="Corporate law governs the formation, operation and dissolution of companies in England and Wales under the Companies Act 2006, while commercial law covers the contracts and transactions that businesses enter into. Together, they form the legal framework within which businesses operate, acquire, grow and restructure."
      definitionLegislation="Companies Act 2006, Sale of Goods Act 1979, Partnership Act 1890"
      whatWeDoHeading="What Does a Corporate & Commercial Lawyer Do?"
      whatWeDoBody={whatWeDoBody}
      servicesHeading="Our Corporate & Commercial Legal Services"
      servicesList={[
        {
          name: "Company Formations & Structuring",
          description:
            "Advising on the appropriate legal structure for new businesses — limited company, LLP or partnership — and preparing constitutional documents, including articles of association and partnership agreements.",
        },
        {
          name: "Shareholders Agreements",
          description:
            "Drafting bespoke shareholders agreements covering voting rights, pre-emption rights, tag-along and drag-along provisions, dividend policy, good and bad leaver provisions and dispute resolution mechanisms.",
        },
        {
          name: "Partnership Agreements",
          description:
            "Drafting LLP and general partnership agreements for professional services firms, farming partnerships and joint venture vehicles, tailored to the specific commercial arrangements of the partners.",
        },
        {
          name: "Business Acquisitions & Disposals (M&A)",
          description:
            "Acting for buyers and sellers on the acquisition and disposal of businesses, including heads of terms advice, due diligence, structure selection, SPA or APA drafting and completion.",
        },
        {
          name: "Asset Purchase Agreements",
          description:
            "Drafting and negotiating asset purchase agreements covering the acquisition of specific business assets: goodwill, plant, equipment, stock, IP, contracts and property.",
        },
        {
          name: "Share Purchase Agreements",
          description:
            "Drafting and negotiating share purchase agreements with full warranty and indemnity packages, disclosure letters, locked box or completion accounts mechanisms and earn-out provisions.",
        },
        {
          name: "Management Buyouts (MBOs)",
          description:
            "Advising management teams on MBO transactions, including equity structuring, due diligence, acquisition documentation, shareholders agreements and director service arrangements.",
        },
        {
          name: "Due Diligence for Business Sales",
          description:
            "Conducting legal due diligence investigations on target businesses, reviewing corporate records, material contracts, property, IP, employment and litigation, and reporting to buyer clients.",
        },
        {
          name: "Joint Ventures",
          description:
            "Advising parties on joint venture structures and drafting joint venture agreements, shareholders agreements and ancillary documents governing the venture's operation.",
        },
        {
          name: "Director Service Agreements",
          description:
            "Drafting director service agreements and executive employment contracts, including terms around remuneration, duties, confidentiality, IP ownership, garden leave and post-termination restrictions.",
        },
        {
          name: "Commercial Contracts",
          description:
            "Drafting and reviewing supply agreements, distribution agreements, agency agreements, licence agreements and terms and conditions of business for North West companies.",
        },
        {
          name: "NDAs & Confidentiality Agreements",
          description:
            "Drafting non-disclosure agreements and confidentiality provisions to protect sensitive business information during negotiations, due diligence and ongoing commercial relationships.",
        },
      ]}
      processTitle="5 Steps to Buying a Business in the North West"
      processSteps={[
        {
          number: 1,
          title: "Heads of Terms",
          description:
            "The process begins with the parties agreeing heads of terms — a commercial summary of the key terms of the proposed deal. While not usually legally binding, heads of terms shape the entire transaction and should reflect the key commercial points: price, payment structure (including any deferred consideration or earn-out), deal structure (assets or shares), conditions precedent, exclusivity period and a target completion date. NJB Legal reviews heads of terms at this early stage to identify any commercial or legal issues before formal due diligence begins.",
        },
        {
          number: 2,
          title: "Legal Due Diligence",
          description:
            "Legal due diligence is the buyer's investigation into the legal status of the target business. NJB Legal reviews the target company's corporate records (articles, shareholder registers, board minutes), material contracts, property interests, intellectual property, employment arrangements, litigation history and regulatory compliance. We produce a due diligence report setting out key findings, highlighting issues that need to be addressed in the transaction documents or that may affect the purchase price.",
        },
        {
          number: 3,
          title: "Structure: Assets or Shares?",
          description:
            "A fundamental decision in any business acquisition is whether to buy the shares of the target company or its underlying assets. A share purchase acquires the entire company — including all liabilities, known and unknown. An asset purchase lets the buyer select what they want to acquire. Asset purchases may trigger TUPE obligations if employees transfer with the business. The choice affects SDLT, stamp duty, VAT, and the scope of warranties required. NJB Legal advises on the optimal structure for your transaction.",
        },
        {
          number: 4,
          title: "Contract Negotiation",
          description:
            "NJB Legal drafts or reviews the principal acquisition document — the share purchase agreement (SPA) or asset purchase agreement (APA) — together with ancillary documents: the disclosure letter, tax deed, shareholders agreement, director service agreements and any property documents. The SPA will contain extensive warranties from the seller about the state of the business, and the disclosure letter sets out exceptions to those warranties. Negotiating a fair warranty and indemnity package that reflects the due diligence findings is one of the most important stages of any M&A transaction.",
        },
        {
          number: 5,
          title: "Completion",
          description:
            "On the completion date, the parties execute all transaction documents, the buyer pays the purchase price (either directly or through an escrow arrangement), and ownership of the business transfers. NJB Legal manages the completion process, prepares the completion agenda and checklist, ensures all conditions precedent have been satisfied, and deals with any post-completion filings at Companies House. We provide a completion report summarising all documents executed and any post-completion obligations.",
        },
      ]}
      comparisonTitle="Asset Purchase vs Share Purchase"
      comparisonHeaders={["Feature", "Asset Purchase", "Share Purchase"]}
      comparisonRows={[
        [
          "What Is Acquired",
          "Specific assets chosen by the buyer: goodwill, stock, equipment, contracts, IP",
          "All shares in the target company — the entire legal entity including all assets and liabilities",
        ],
        [
          "Historic Liabilities",
          "Buyer generally takes no responsibility for the seller's historic liabilities",
          "Buyer acquires all historic liabilities of the company, known and unknown",
        ],
        [
          "TUPE",
          "TUPE likely to apply where employees transfer with the business",
          "Employees remain employed by the company — no TUPE transfer",
        ],
        [
          "Stamp Duty / SDLT",
          "SDLT payable on property elements; no stamp duty on non-property assets",
          "Stamp duty at 0.5% of the purchase price payable on share transfer",
        ],
        [
          "Due Diligence",
          "Less extensive — buyer can select assets and decline liabilities",
          "Extensive due diligence required given full assumption of company history",
        ],
        [
          "Purchase Price",
          "Often lower; based on agreed asset values",
          "May include a premium for goodwill and reflects full business value",
        ],
        [
          "Complexity",
          "Simpler structure; requires transfer of each asset individually",
          "More complex documentation; requires warranty and indemnity package",
        ],
        [
          "Flexibility",
          "Greater flexibility — buyer can cherry-pick desired assets",
          "Less flexible — all assets and liabilities transfer automatically with shares",
        ],
      ]}
      whyNJBPoints={[
        {
          title: "Commercial Focus, Not Just Legal Process",
          body: "NJB Legal understands that corporate transactions are driven by commercial objectives, not just legal formalities. NJB Legal's advice is always grounded in the commercial reality of the deal — helping clients make informed decisions about structure, risk and value, not just ticking legal boxes.",
        },
        {
          title: "Owner-Managed Business Expertise",
          body: "The majority of NJB Legal's corporate clients are owner-managed businesses and SMEs across Cheshire and the North West. NJB Legal understands the particular challenges faced by business owners — including the personal and emotional dimension of buying or selling a business they have built — and provides advice that reflects this.",
        },
        {
          title: "Direct Solicitor Access Throughout",
          body: "Every corporate instruction at NJB Legal is handled directly by NJB Legal. There are no junior associates or paralegals working on your transaction without your knowledge. You receive his direct contact details and can expect timely, substantive responses to your queries throughout the deal.",
        },
        {
          title: "Nexa Law Network Coverage",
          body: "As a member of the Nexa Law network, NJB Legal can draw on specialist expertise across employment law (including TUPE advice on business acquisitions), intellectual property, banking and finance, and dispute resolution — ensuring that all aspects of complex corporate transactions are covered by the right expert.",
        },
      ]}
      faqs={[
        {
          question:
            "What is corporate law and do I need a corporate lawyer?",
          answer:
            "Corporate law in England and Wales governs the creation, operation, governance and disposal of companies, primarily under the Companies Act 2006. It covers matters such as company formation, share structures, directors' duties, shareholder rights, corporate transactions (M&A) and company dissolution. You need a corporate lawyer whenever you are buying or selling a business, restructuring your company's share capital, entering into a joint venture, or putting shareholders agreements or director service arrangements in place. NJB Legal provides corporate legal advice to businesses across Cheshire and the North West from its Winsford, Cheshire office.",
        },
        {
          question:
            "What is a shareholders agreement and why do I need one?",
          answer:
            "A shareholders agreement is a private contract between the shareholders of a company that governs their relationship with each other and with the company. Unlike the articles of association (which are public), a shareholders agreement is confidential. It typically covers: how key decisions are made (voting thresholds, reserved matters requiring unanimous consent), what happens if shareholders disagree (deadlock provisions), restrictions on selling shares (pre-emption rights, tag-along and drag-along), dividend policy, good and bad leaver provisions, and post-termination non-compete obligations. Without a shareholders agreement, disputes between shareholders are resolved by reference to the default rules in the Companies Act 2006 and the articles — which may not reflect what was intended.",
        },
        {
          question:
            "What legal advice do I need when buying a business in the UK?",
          answer:
            "When buying a business in England and Wales, you need legal advice on: the appropriate transaction structure (asset or share purchase); due diligence into the target's legal, commercial, property and employment position; drafting and negotiating the acquisition agreement (SPA or APA), including the warranty and indemnity package and disclosure process; any ancillary documents such as a shareholders agreement, director service agreements or property documents; TUPE obligations if employees transfer; and completion mechanics and post-completion filings at Companies House. NJB Legal advises buyers and sellers across the North West on business acquisitions of all sizes.",
        },
        {
          question:
            "What is the difference between an asset purchase and a share purchase?",
          answer:
            "In a share purchase, the buyer acquires all of the shares in the target company, taking on the company with all its assets and liabilities — including any historic liabilities not discovered during due diligence. The company's contracts, employees and licences continue automatically. In an asset purchase, the buyer selects specific assets to acquire (goodwill, equipment, stock, IP, contracts) and leaves unwanted liabilities behind. Each asset must be individually transferred. TUPE applies to asset purchases where employees transfer with the business. Share purchases typically require a more extensive warranty package to compensate for the additional risk of inheriting historic liabilities.",
        },
        {
          question:
            "How long does a business acquisition take in the UK?",
          answer:
            "The timeline for a business acquisition in England and Wales varies considerably depending on the complexity of the deal and the completeness of the seller's information. A straightforward asset purchase of a small business can be completed in 4–8 weeks. A share purchase with full due diligence, a complex warranty negotiation, regulatory consents or property transfers typically takes 8–16 weeks. Transactions involving external funding, property elements, or regulatory approvals may take longer. NJB Legal provides a realistic timeline estimate at the outset and works actively to keep your transaction on schedule.",
        },
        {
          question: "What is a management buyout (MBO)?",
          answer:
            "A management buyout (MBO) is a transaction in which a company's existing management team — typically senior directors or managers — acquires ownership of the business, usually from a founder exiting the business, a corporate parent divesting a subsidiary, or a private equity house realising its investment. The management team will usually require external funding (debt finance from a bank or private equity investment) to fund the acquisition. An MBO involves simultaneous negotiation of the acquisition terms with the seller, the equity structure within the management team, the funding package with lenders or investors, and the management team's own service arrangements. NJB Legal advises management teams on the legal aspects of MBOs across the North West.",
        },
      ]}
      relatedServices={[
        {
          icon: "briefcase",
          name: "Business Contracts",
          description:
            "Drafting and reviewing commercial contracts, terms of business, NDAs and supplier agreements for North West businesses.",
          href: "/services/business-contracts-solicitor-cheshire",
        },
        {
          icon: "building",
          name: "Commercial Property",
          description:
            "Buying, selling and leasing commercial premises across Cheshire and the North West and the wider North West.",
          href: "/services/commercial-property-solicitor-cheshire",
        },
        {
          icon: "filetext",
          name: "Commercial Leases",
          description:
            "Lease negotiation, renewal and assignment advice for landlords and tenants across Cheshire and the North West.",
          href: "/services/commercial-lease-solicitor-cheshire",
        },
      ]}
      schemaName="Corporate & Commercial Law"
      schemaDescription="NJB Legal provides corporate and commercial legal advice for businesses across the North West, including M&A, shareholder agreements and business acquisitions."
      schemaUrl="/services/corporate-commercial-lawyer-north-west"
    />
  );
}


