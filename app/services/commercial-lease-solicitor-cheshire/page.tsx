import type { Metadata } from "next";
import ServicePageTemplate from "@/app/components/templates/ServicePageTemplate";

export const metadata: Metadata = {
  title:
    "Commercial Lease Solicitor Cheshire | Lease Agreement Advice | NJB Legal",
  description:
    "Expert commercial lease advice for landlords and tenants in Cheshire and the North West. NJB Legal handles lease negotiation, renewal, assignment and rent reviews. Based in Winsford, Cheshire. Call 07587 723897.",
  alternates: {
    canonical:
      "https://anisrahmanchambers.co.uk/services/commercial-lease-solicitor-cheshire",
  },
  openGraph: {
    locale: "en_GB",
    title:
      "Commercial Lease Solicitor Cheshire | Lease Agreement Advice | NJB Legal",
    description:
      "Expert commercial lease advice for landlords and tenants in Cheshire and the North West. Lease negotiation, renewal, assignment and rent reviews. Call 07587 723897.",
    url: "https://anisrahmanchambers.co.uk/services/commercial-lease-solicitor-cheshire",
    siteName: "NJB Legal",
    type: "website",
  },
};

const whatWeDoBody = `
<p>Finding a specialist <strong>commercial lease solicitor in Cheshire and the North West</strong> is essential whether you are a landlord granting a new lease or a business tenant taking on commercial premises for the first time. Commercial leases are long-term, financially significant commitments — a poorly negotiated lease can expose tenants to unexpected repair costs, restrictive user clauses or onerous rent review provisions. At NJB Legal, solicitor NJB Legal provides direct, plain-English lease advice to landlords and tenants across Cheshire, Chester, Northwich and throughout the North West.</p>

<h3>What is security of tenure under the Landlord and Tenant Act 1954?</h3>
<p>The <strong>Landlord and Tenant Act 1954</strong> (LTA 1954) is the cornerstone of commercial leasehold law in England and Wales. Part II of the Act grants qualifying business tenants the right to renew their lease on broadly similar terms at the end of the contractual term — this is known as security of tenure. If a landlord wishes to oppose renewal, they must rely on one of the statutory grounds set out in section 30 of the Act (for example, persistent rent arrears, breach of covenant, or the landlord's intention to redevelop or occupy). Tenants must serve a section 26 request or respond to a landlord's section 25 notice within strict time limits. Failure to act can result in losing renewal rights entirely. NJB Legal ensures both landlords and tenants understand their statutory position and take the correct procedural steps.</p>

<h3>How does NJB Legal negotiate heads of terms?</h3>
<p>Heads of terms are the commercial summary of the agreed terms between landlord and tenant — they are not themselves legally binding but form the basis of the formal lease. They typically address: the length of term, the initial rent and rent review mechanism, any rent-free period, repairing obligations (full repairing and insuring (FRI) or internal repairing only), permitted use, rights to assign or sublet, and whether the lease is to be contracted out of the LTA 1954. NJB Legal reviews and advises on heads of terms before they are agreed, as it is far harder to renegotiate commercial terms once solicitors have begun drafting the formal documentation.</p>

<h3>What are dilapidations and how do they affect tenants?</h3>
<p>Dilapidations are the repairs and reinstatement works that a tenant is required to carry out under the terms of their lease — typically at the end of the term. Under a full repairing and insuring (FRI) lease, the tenant is responsible for keeping the premises in good and substantial repair and condition throughout the term, regardless of the state of the building at the lease start. Landlords serve a Schedule of Dilapidations (either interim or terminal) identifying disrepair and claiming compensation. The <strong>Landlord and Tenant Act 1954</strong> and common law (including the Leasehold Property (Repairs) Act 1938) provide some protection for tenants. NJB Legal advises tenants on their obligations and helps landlords pursue legitimate dilapidations claims.</p>

<h3>What does a break clause review involve?</h3>
<p>Break clauses allow one or both parties to terminate the lease early — typically on a specified date, on notice, and subject to conditions. These conditions often require the tenant to be up to date with rent payments and to have vacated the premises and given up occupation by the break date. Compliance with break conditions is strictly construed by the courts: even a minor breach can invalidate the break, leaving the tenant bound by the lease for the remainder of the term. NJB Legal reviews break clause conditions carefully, advises on compliance well in advance of the break date and drafts the required break notices to ensure they are valid in form and service.</p>
`;

export default function CommercialLeasePage() {
  return (
    <ServicePageTemplate
      breadcrumb={[
        { name: "Services", href: "/services" },
        { name: "Commercial Lease Solicitor Cheshire and the North West" },
      ]}
      headline="Commercial Lease Solicitor in Cheshire and the North West | Lease Agreement Advice | NJB Legal"
      intro="NJB Legal is a specialist commercial lease solicitor in Cheshire and the North West, advising landlords and tenants on all aspects of commercial leasehold law from our Winsford, Cheshire office. Solicitor NJB Legal has senior-level experience advising on the Landlord and Tenant Act 1954, negotiating lease terms, handling lease renewals and resolving dilapidations disputes. Whether you are a landlord letting commercial premises in Chester, a retailer negotiating a new Northwich shop lease, or a business tenant seeking to assign or sublet your lease, NJB Legal provides clear, commercially focused advice. Contact us on 07587 723897 or email info@anisrahmanchambers.co.uk."
      definitionTerm="Commercial Lease"
      definitionText="A commercial lease is a legally binding agreement between a landlord and a business tenant granting the right to occupy commercial premises for a set term in exchange for rent. Commercial leases in England and Wales are governed by the Landlord and Tenant Act 1954, which provides security of tenure rights for qualifying business tenants."
      definitionLegislation="Landlord and Tenant Act 1954, Landlord and Tenant Act 1988"
      whatWeDoHeading="What Does a Commercial Lease Solicitor Do?"
      whatWeDoBody={whatWeDoBody}
      servicesHeading="Our Commercial Lease Legal Services"
      servicesList={[
        {
          name: "New Lease Negotiation",
          description:
            "Acting for landlords and tenants on the grant of new commercial leases, including reviewing heads of terms, drafting or reviewing the formal lease, and advising on all key provisions.",
        },
        {
          name: "Lease Renewal (LTA 1954)",
          description:
            "Advising landlords and tenants on the statutory renewal procedure under the Landlord and Tenant Act 1954, including section 25 notices, section 26 requests and applications to the court where necessary.",
        },
        {
          name: "Lease Assignment & Subletting",
          description:
            "Acting on the assignment (transfer) of a lease from outgoing to incoming tenant, including obtaining landlord's consent, reviewing the licence to assign and advising on AGA (authorised guarantee agreement) obligations.",
        },
        {
          name: "Break Clause Advice",
          description:
            "Advising on break clause conditions, drafting valid break notices and ensuring tenants comply strictly with all conditions to achieve an effective lease break.",
        },
        {
          name: "Rent Review Clauses",
          description:
            "Advising landlords and tenants on upward-only, open market and index-linked rent review provisions, including the time limits and assumptions applicable to each.",
        },
        {
          name: "Dilapidations Advice",
          description:
            "Advising tenants on their repairing obligations during and at the end of the lease, and acting for landlords on preparing and pursuing terminal Schedule of Dilapidations claims.",
        },
        {
          name: "Forfeiture & Relief from Forfeiture",
          description:
            "Advising landlords on the right to forfeit a commercial lease for breach of covenant, and tenants on applying to the court for relief from forfeiture.",
        },
        {
          name: "Service Charge Disputes",
          description:
            "Advising tenants on challenging unreasonable or improperly calculated service charge demands, and landlords on the correct administration of service charge provisions.",
        },
        {
          name: "Heads of Terms Review",
          description:
            "Reviewing and advising on the commercial terms of proposed leases before they are agreed, to ensure tenants and landlords understand their obligations before solicitors begin formal drafting.",
        },
        {
          name: "FRI Leases",
          description:
            "Specialist advice on full repairing and insuring (FRI) leases, including the scope of repairing obligations, insurance covenants and schedule of condition protection for tenants.",
        },
      ]}
      processTitle="6 Steps to Negotiating a Commercial Lease in Cheshire and the North West"
      processSteps={[
        {
          number: 1,
          title: "Instruct Your Solicitor Early",
          description:
            "Contact NJB Legal before you agree heads of terms with the landlord or their agent. Early legal advice ensures you understand the key commercial terms — rent, term, break clauses, repairing obligations, permitted use — before they are agreed. It is far easier to negotiate favourable terms at the heads of terms stage than to seek to renegotiate once formal documents are in circulation.",
        },
        {
          number: 2,
          title: "Review & Agree Heads of Terms",
          description:
            "NJB Legal reviews the proposed heads of terms and advises you on any provisions that may be onerous or commercially unusual. We identify key issues — such as whether the lease will be protected or contracted out of the LTA 1954, the scope of repairing obligations, rent review mechanics and assignment restrictions — and recommend amendments where appropriate.",
        },
        {
          number: 3,
          title: "Draft Lease Review",
          description:
            "Once heads of terms are agreed, the landlord's solicitors will produce a draft lease. NJB Legal carries out a detailed review of all lease provisions: repairing covenants, user clauses, alienation (assignment and subletting) provisions, rent review, service charge, break clause conditions, and LTA 1954 status. We produce a schedule of amendments setting out our negotiating position.",
        },
        {
          number: 4,
          title: "Negotiation of Lease Terms",
          description:
            "We negotiate directly with the landlord's solicitors to achieve the best possible lease terms for you. This may include negotiating a schedule of condition to limit your repairing liability, a more flexible user clause, tenant-friendly break clause conditions, caps on service charges, or improved assignment provisions. NJB Legal keeps you updated throughout and refers key commercial decisions back to you.",
        },
        {
          number: 5,
          title: "Exchange & Engrossment",
          description:
            "Once all terms are agreed and both parties' solicitors have approved the final form of lease, the landlord's solicitors engross (produce final execution copies of) the documents. Both landlord and tenant sign their respective counterparts. At this stage, the lease is formally entered into and becomes legally binding on both parties.",
        },
        {
          number: 6,
          title: "Completion & Registration",
          description:
            "On the agreed lease start date, the lease completes. For leases of more than seven years, NJB Legal registers the lease at HM Land Registry and deals with any SDLT (Stamp Duty Land Tax) obligations on the lease premium or rent. We provide you with a completion report summarising your key obligations under the lease and retain copies of all documents on your file.",
        },
      ]}
      comparisonTitle="Protected vs Unprotected Commercial Leases Under the LTA 1954"
      comparisonHeaders={[
        "Feature",
        "Protected Lease (LTA 1954)",
        "Contracted-Out Lease",
      ]}
      comparisonRows={[
        [
          "Security of Tenure",
          "Tenant has statutory right to renew at the end of the term",
          "No statutory right to renew — lease ends on the contractual expiry date",
        ],
        [
          "Renewal Rights",
          "Tenant can apply to court for a new lease on similar terms",
          "No renewal rights; tenant must negotiate a new lease on commercial terms",
        ],
        [
          "Court Application",
          "Either party can apply to court to determine the new lease terms",
          "No court application available — parties rely on contractual negotiation",
        ],
        [
          "Landlord Opposition",
          "Landlord must rely on statutory grounds in s.30 LTA 1954 to oppose renewal",
          "No grounds required — landlord can simply decline to grant a new lease",
        ],
        [
          "Compensation",
          "Tenant may be entitled to statutory compensation if renewal is refused",
          "No statutory compensation payable on lease expiry",
        ],
        [
          "Notice Requirements",
          "Strict procedural notices required (s.25 or s.26) with prescribed forms",
          "No statutory notices required; contractual notice provisions only",
        ],
        [
          "Flexibility for Landlord",
          "Less flexible — landlord cannot recover possession without statutory ground",
          "Greater flexibility — landlord regains possession automatically on expiry",
        ],
      ]}
      whyNJBPoints={[
        {
          title: "LTA 1954 Expertise",
          body: "The Landlord and Tenant Act 1954 is a technically demanding piece of legislation with strict procedural requirements and short time limits. NJB Legal has extensive experience advising both landlords and tenants on the renewal procedure, ensuring clients comply with all statutory steps and do not inadvertently lose their rights.",
        },
        {
          title: "Acting for Both Landlords & Tenants",
          body: "NJB Legal's experience on both sides of commercial lease transactions provides an important strategic advantage. Understanding the landlord's perspective helps tenants negotiate more effectively, and vice versa. NJB Legal provides balanced, commercially realistic advice that reflects the actual dynamics of lease negotiations in the Cheshire and the North West market.",
        },
        {
          title: "Plain-English Lease Reports",
          body: "Commercial leases are long, complex documents. NJB Legal provides every client with a clear, plain-English lease report summarising the key terms, obligations and risks of their lease — not just a dry schedule of definitions. You will understand exactly what you are signing before you sign it.",
        },
        {
          title: "North West Market Knowledge",
          body: "Based in Winsford, Cheshire, NJB Legal advises on commercial leases across Chester, Northwich, Crewe, Knutsford, Macclesfield, Warrington and Manchester. NJB Legal's knowledge of local commercial property markets, typical lease terms and the agents and landlords operating in the area is a tangible benefit to every leasehold client.",
        },
      ]}
      faqs={[
        {
          question: "What is a break clause in a commercial lease?",
          answer:
            "A break clause is a provision in a commercial lease that allows one or both parties to terminate the lease before the end of the contractual term, usually on a specified date and subject to written notice (typically 6 months). Break clauses are often subject to conditions — for example, that the tenant is not in arrears of rent, has vacated and given up occupation on the break date, and has complied with all lease covenants. Courts construe break conditions strictly, meaning even minor non-compliance can prevent a valid break. NJB Legal advises tenants and landlords on break clause compliance across Cheshire and the North West.",
        },
        {
          question:
            "Can a landlord refuse to renew a commercial lease in the UK?",
          answer:
            "If a commercial lease is protected by the Landlord and Tenant Act 1954, a landlord can only refuse to renew the lease on one of the statutory grounds set out in section 30 of the Act. These grounds include: persistent delay in paying rent, substantial breach of covenant, the landlord intending to redevelop the premises, or the landlord wishing to occupy the premises for their own business. If the landlord successfully opposes renewal on certain grounds, the tenant may be entitled to statutory compensation. If the lease was contracted out of the LTA 1954, the landlord has no obligation to offer a new lease.",
        },
        {
          question: "What are dilapidations in a commercial lease?",
          answer:
            "Dilapidations are the repair and reinstatement obligations owed by a tenant under the terms of their commercial lease. Under a full repairing and insuring (FRI) lease, the tenant must keep the premises in good repair throughout the term and yield them up in that condition at lease end. Landlords can serve a Schedule of Dilapidations setting out breaches and claiming damages or requiring repairs. The Leasehold Property (Repairs) Act 1938 provides tenants with some protection against interim dilapidations claims for leases with three or more years unexpired. NJB Legal advises tenants on negotiating dilapidations settlements and landlords on pursuing valid claims.",
        },
        {
          question: "What is the Landlord and Tenant Act 1954?",
          answer:
            "The Landlord and Tenant Act 1954 is the primary statute governing commercial leases in England and Wales. Part II of the Act grants qualifying business tenants the right to remain in occupation and apply for a new lease on similar terms when their contractual term expires — this is known as security of tenure. Landlords can only oppose renewal on specified statutory grounds. Both parties must serve and respond to prescribed statutory notices within strict time limits. Leases can be 'contracted out' of the Act's protection by agreement before the lease is granted, following a court order or (since 1 June 2004) a simple landlord's declaration procedure.",
        },
        {
          question: "How do I assign a commercial lease?",
          answer:
            "To assign (transfer) a commercial lease to another party, you must usually obtain the landlord's written consent — most leases require this as a condition of assignment. The Landlord and Tenant Act 1988 requires landlords to deal with consent applications within a reasonable time and not to withhold consent unreasonably. The assignment is completed by way of a deed of assignment executed by outgoing tenant, incoming tenant and, where required, the landlord. The outgoing tenant may be required to provide an authorised guarantee agreement (AGA), guaranteeing the incoming tenant's obligations. NJB Legal acts for both assignors and assignees across Cheshire and the North West.",
        },
        {
          question: "What should I check before signing a commercial lease?",
          answer:
            "Before signing a commercial lease in England and Wales, you should review: the length of the term and any break clause; the initial rent and rent review provisions; whether the lease is protected or contracted out of the LTA 1954; the repairing obligations (FRI or internal repairing only); any schedule of condition limiting your repair liability; the permitted use and any restrictions on use; the assignment and subletting provisions; the landlord's insurance obligations; service charge provisions and any caps; and the dilapidations position on exit. NJB Legal reviews all of these points and provides a comprehensive lease report to every client before completion.",
        },
      ]}
      relatedServices={[
        {
          icon: "building",
          name: "Commercial Property",
          description:
            "Buying, selling and due diligence for commercial premises across Cheshire and the North West.",
          href: "/services/commercial-property-solicitor-cheshire",
        },
        {
          icon: "briefcase",
          name: "Business Contracts",
          description:
            "Drafting and reviewing commercial contracts, terms of business and supplier agreements for North West businesses.",
          href: "/services/business-contracts-solicitor-cheshire",
        },
        {
          icon: "scale",
          name: "Corporate & Commercial",
          description:
            "M&A, shareholders agreements and corporate transactions for North West businesses.",
          href: "/services/corporate-commercial-lawyer-north-west",
        },
      ]}
      schemaName="Commercial Lease Advice"
      schemaDescription="NJB Legal provides expert commercial lease legal advice for landlords and tenants across Cheshire and the North West."
      schemaUrl="/services/commercial-lease-solicitor-cheshire"
    />
  );
}


