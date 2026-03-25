import type { Metadata } from "next";
import BlogPostLayout from "@/app/components/templates/BlogPostLayout";
import DefinitionBox from "@/app/components/ui/DefinitionBox";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import type { FAQ } from "@/app/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Commercial Lease Agreement Guide for UK Business Owners (2026) | NJB Legal",
  description:
    "Everything you need to know before signing a commercial lease in England and Wales. NJB Legal's complete 2026 guide covering rent, break clauses, dilapidations and the Landlord and Tenant Act 1954.",
  alternates: {
    canonical: "https://njblegal.co.uk/blog/commercial-lease-guide-2026",
  },
  openGraph: {
    title: "Commercial Lease Agreement Guide for UK Business Owners (2026) | NJB Legal",
    description:
      "Everything you need to know before signing a commercial lease in England and Wales. NJB Legal's complete 2026 guide covering rent, break clauses, dilapidations and the Landlord and Tenant Act 1954.",
    url: "https://njblegal.co.uk/blog/commercial-lease-guide-2026",
    locale: "en_GB",
    type: "article",
  },
};

const faqs: FAQ[] = [
  {
    question: "Do I need a solicitor to sign a commercial lease?",
    answer:
      "While there is no legal requirement to instruct a solicitor, it is strongly advisable. Commercial leases are legally binding documents that typically run for years and impose significant financial obligations. A solicitor will review the terms, advise on the Landlord and Tenant Act 1954, negotiate amendments in your favour, raise enquiries about the property and handle the registration formalities. The cost of getting legal advice before signing is far less than the potential cost of an unfavourable lease term locked in for five or ten years.",
  },
  {
    question: "What is a full repairing and insuring lease?",
    answer:
      "A full repairing and insuring (FRI) lease places responsibility for all repairs and the cost of building insurance on the tenant, regardless of the condition of the property at the start of the lease. This is the most common structure for commercial leases in England and Wales. Before signing an FRI lease, you should obtain a schedule of condition — a photographic and written record of the property's state at the start of the lease — to limit your repair liability to returning the property in no better condition than it was when you took it.",
  },
  {
    question: "What is security of tenure in a commercial lease?",
    answer:
      "Security of tenure is the right given to business tenants under the Landlord and Tenant Act 1954 to remain in their premises and request a new lease at the end of the contractual term. A landlord can only refuse renewal on limited statutory grounds. Many commercial leases are 'contracted out' of the Act, meaning the tenant has no automatic right to a new lease at expiry. You should always check whether the 1954 Act applies to your lease before signing, as this significantly affects your security as a tenant.",
  },
  {
    question: "What are dilapidations in a commercial lease?",
    answer:
      "Dilapidations are the disrepair and breaches of repairing covenant that a tenant is liable for at the end of the lease. At lease expiry, landlords commonly serve a dilapidations schedule setting out the works they say the tenant must carry out or pay for. The cost of a dilapidations claim can be significant. You can limit your exposure by agreeing a schedule of condition at the outset, maintaining the property during the term and seeking professional dilapidations advice before the lease expires.",
  },
  {
    question: "What is an upward-only rent review clause?",
    answer:
      "An upward-only rent review clause means that at each rent review date, the rent can only stay the same or increase — it can never reduce, even if open market rents have fallen. This is the standard position in most commercial leases in England and Wales. Tenants should be aware that upward-only review clauses mean they are locked into a minimum rent level for the remainder of the lease, irrespective of changes in the property market. The timing and mechanism for rent review should be reviewed carefully before signing.",
  },
];

export default function CommercialLeaseGuide2026Page() {
  return (
    <BlogPostLayout
      title="Commercial Lease Agreement Guide for UK Business Owners (2026)"
      datePublished="2026-03-10"
      dateDisplay="10 March 2026"
      readTime="10 min read"
      category="Commercial Leases"
      breadcrumbTitle="Commercial Lease Agreement Guide (2026)"
      url="/blog/commercial-lease-guide-2026"
      description="Everything you need to know before signing a commercial lease in England and Wales. NJB Legal's complete 2026 guide covering rent, break clauses, dilapidations and the Landlord and Tenant Act 1954."
      faqs={faqs}
    >
      {/* Intro */}
      <p>
        Before signing a commercial lease, you need to understand the key terms that will govern
        your business premises for the duration of the tenancy. A commercial lease is a legally
        binding contract — often running for five, ten or more years — and the obligations it
        imposes on you as a tenant can have a significant impact on your business finances and
        operations if they are not properly understood before you commit.
      </p>
      <p>
        This guide explains the main provisions of a commercial lease agreement, what to look out
        for before signing, and how the law in England and Wales protects (or does not protect)
        commercial tenants.
      </p>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="my-8 bg-cream border border-mist rounded-lg p-5">
        <p className="font-outfit font-semibold text-ink text-sm mb-3 uppercase tracking-wide">
          Contents
        </p>
        <ol className="space-y-1.5 text-sm font-outfit text-slate list-decimal pl-5">
          <li><a href="#what-is-a-commercial-lease">What is a Commercial Lease Agreement?</a></li>
          <li><a href="#key-terms">Key Terms to Check in a Commercial Lease</a></li>
          <li><a href="#lta-1954">What is the Landlord and Tenant Act 1954 and Does it Apply to You?</a></li>
          <li><a href="#dilapidations">Understanding Dilapidations: Your Obligations at Lease End</a></li>
          <li><a href="#rent-review">Rent Review Clauses: What Tenants Need to Know</a></li>
          <li><a href="#checklist">Checklist: What to Check Before Signing a Commercial Lease</a></li>
          <li><a href="#faqs">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* Section 1 */}
      <h2 id="what-is-a-commercial-lease">What is a Commercial Lease Agreement?</h2>

      <DefinitionBox
        term="Commercial Lease Agreement"
        definition="A commercial lease agreement is a legally binding contract between a landlord and a business tenant, granting the tenant the right to occupy commercial premises — such as offices, retail units, warehouses or industrial property — for a fixed term in exchange for the payment of rent and compliance with specified lease conditions."
        legislation="Landlord and Tenant Act 1954"
      />

      <p>
        Unlike residential tenancies, commercial leases in England and Wales are largely governed by
        the agreement between the parties rather than by statutory protection. The terms of a
        commercial lease are therefore negotiable, and it is important to understand what you are
        agreeing to before the lease is signed. Once signed, the terms bind both landlord and
        tenant for the duration of the lease, subject only to any amendment agreed in writing.
      </p>

      {/* Section 2 */}
      <h2 id="key-terms">Key Terms to Check in a Commercial Lease</h2>

      <p>
        A commercial lease will typically contain a large number of provisions. The following are
        the most important terms to review and understand before entering into any commercial
        tenancy:
      </p>

      <h3>Rent and Rent Deposits</h3>
      <p>
        Check the initial rent, the frequency of payment (monthly or quarterly in advance is most
        common) and whether a rent deposit is required. Rent deposits are typically held by the
        landlord as security and should be protected under a formal rent deposit deed that sets out
        the conditions for its release at the end of the lease.
      </p>

      <h3>Lease Term and Break Clauses</h3>
      <p>
        Understand the length of the lease and whether there are any break clauses — provisions
        allowing early termination by one or both parties. A tenant-only break clause provides
        flexibility to exit if circumstances change. Check the notice period required to exercise
        any break and the conditions that must be met (typically vacant possession and payment of
        all sums due).
      </p>

      <h3>Rent Review</h3>
      <p>
        Most commercial leases include a mechanism for reviewing the rent at intervals during the
        term — typically every three or five years. Upward-only rent review clauses, which prevent
        the rent from falling even if market rents have declined, are standard but disadvantageous
        for tenants. Check the review mechanism (open market, RPI, fixed uplift) and the review
        timetable.
      </p>

      <h3>Repairing Obligations: FRI vs Internal Repairing Only</h3>
      <p>
        A full repairing and insuring (FRI) lease places responsibility for all repairs and the
        cost of insurance on the tenant. An internal repairing only (IRI) lease limits the tenant's
        obligations to the interior of the demised premises. In a multi-let building, the landlord
        typically recovers the cost of external and structural repairs through a service charge. You
        should always obtain a schedule of condition at the start of the lease to limit your repair
        liability on exit.
      </p>

      <h3>Dilapidations</h3>
      <p>
        Dilapidations are claims by the landlord for the cost of repairing the property to the
        standard required by the lease at the end of the tenancy. These claims can be substantial.
        A schedule of condition limits your exposure by establishing the baseline condition of the
        property at lease commencement.
      </p>

      <h3>Assignment and Subletting</h3>
      <p>
        Check whether the lease allows you to assign (transfer) the lease or sublet all or part of
        the property. Most commercial leases restrict assignment and subletting to cases where the
        landlord gives consent — which must not be unreasonably withheld. Some leases require the
        outgoing tenant to give an authorised guarantee agreement (AGA) on assignment, guaranteeing
        the obligations of the new tenant.
      </p>

      <h3>Service Charges</h3>
      <p>
        In multi-let buildings, tenants pay a service charge contribution towards the cost of
        maintaining common areas, the structure and shared services. Check the service charge cap
        (if any), how costs are apportioned and what items the landlord can recover. Uncapped
        service charges can be unpredictable and expensive.
      </p>

      {/* Section 3 */}
      <h2 id="lta-1954">What is the Landlord and Tenant Act 1954 and Does it Apply to You?</h2>

      <p>
        The Landlord and Tenant Act 1954 gives business tenants in England and Wales a statutory
        right to remain in their premises and apply to the court for a new tenancy at the end of
        the lease term. This is known as security of tenure. Where the 1954 Act applies, a
        landlord can only refuse to grant a new tenancy on limited statutory grounds — for example,
        if they intend to redevelop the property or occupy it themselves.
      </p>
      <p>
        However, many commercial leases are contracted out of the 1954 Act by agreement before the
        lease is entered into. This process requires the landlord to serve a formal warning notice
        on the tenant, who must then sign a statutory declaration acknowledging that they will have
        no right to a new tenancy at expiry. If your lease has been contracted out, you have no
        statutory right to remain in your premises at the end of the term and no right to apply for
        a new tenancy.
      </p>
      <p>
        Always check whether the 1954 Act applies to your lease before signing, and take legal
        advice on the implications for your business if the lease is contracted out.
      </p>

      {/* Section 4 */}
      <h2 id="dilapidations">Understanding Dilapidations: Your Obligations at Lease End</h2>

      <p>
        Dilapidations are one of the most common areas of dispute between commercial landlords and
        tenants. At the end of a lease, the landlord is entitled to require the tenant to return the
        property in the condition required by the lease — typically repaired, decorated and cleared
        of all alterations carried out during the tenancy.
      </p>
      <p>
        Landlords usually serve a dilapidations schedule towards the end of the lease term or after
        handback, setting out the works they say the tenant must carry out or pay for. The tenant
        has the right to challenge items on the schedule and to argue that the landlord has suffered
        less loss than the cost of the claimed works (the supersession argument, under s18 of the
        Landlord and Tenant Act 1927).
      </p>
      <p>
        To protect your position from the outset, always insist on a detailed schedule of condition
        being annexed to the lease at the start of the tenancy. This records the condition of the
        property photographically and in writing, and limits your obligation to returning the
        property in no better condition than when you took it. Without a schedule of condition, you
        may face liability for repairing defects that pre-existed your tenancy.
      </p>

      {/* Section 5 */}
      <h2 id="rent-review">Rent Review Clauses: What Tenants Need to Know</h2>

      <p>
        Rent reviews are a standard feature of most commercial leases. The purpose of a rent review
        is to adjust the rent during the lease term to reflect changes in market rents. In England
        and Wales, the most common type of rent review is the open market rent review, which resets
        the rent to the level that the property would achieve if let on the open market at the
        review date, on the assumptions set out in the lease.
      </p>
      <p>
        Almost all commercial leases include an upward-only rent review clause, which means the
        rent can increase at review but cannot fall. If market rents have declined since the last
        review, the rent stays at its existing level. Tenants should model the financial impact of
        potential rent increases before signing a long lease. Alternative review mechanisms include
        RPI-linked increases, fixed percentage uplifts, and open market with a cap and collar — each
        of which has different risk profiles for tenant and landlord.
      </p>

      {/* Section 6 */}
      <h2 id="checklist">Checklist: What to Check Before Signing a Commercial Lease</h2>

      <ol>
        <li>
          <strong>Confirm the demise:</strong> Check exactly what premises you are being granted —
          including any car parking, storage or shared areas — and ensure this matches what was
          agreed in heads of terms.
        </li>
        <li>
          <strong>Verify the term and break rights:</strong> Confirm the length of the lease, the
          contractual expiry date and whether any break clauses exist, in whose favour they operate
          and what conditions must be met to exercise them.
        </li>
        <li>
          <strong>Check the rent and review mechanism:</strong> Understand the initial rent, any
          rent-free period, the frequency of payment and the rent review provisions, including
          whether review is upward only and what basis is used for the review.
        </li>
        <li>
          <strong>Understand your repair obligations:</strong> Establish whether the lease is FRI
          or IRI, insist on a schedule of condition and check whether you are responsible for
          inheriting pre-existing disrepair.
        </li>
        <li>
          <strong>Assess alterations provisions:</strong> Check what alterations you are permitted
          to carry out during the tenancy and what reinstatement obligations you will have at the
          end of the lease.
        </li>
        <li>
          <strong>Check assignment and subletting rights:</strong> Ensure you have adequate
          flexibility to assign or sublet the lease if your business needs change during the term,
          and understand any conditions the landlord can impose.
        </li>
        <li>
          <strong>Consider security of tenure:</strong> Establish whether the 1954 Act applies and,
          if not, understand the implications for your business at the end of the lease.
        </li>
        <li>
          <strong>Review service charge provisions:</strong> In multi-let buildings, check what
          services are recoverable, how costs are apportioned and whether there is a cap on your
          annual service charge liability.
        </li>
      </ol>

      {/* FAQ Section */}
      <h2 id="faqs">Frequently Asked Questions About Commercial Leases</h2>

      <FAQAccordion faqs={faqs} />
    </BlogPostLayout>
  );
}
