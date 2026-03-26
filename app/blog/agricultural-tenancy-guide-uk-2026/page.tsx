import type { Metadata } from "next";
import BlogPostLayout from "@/app/components/templates/BlogPostLayout";
import DefinitionBox from "@/app/components/ui/DefinitionBox";
import ComparisonTable from "@/app/components/ui/ComparisonTable";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import type { FAQ } from "@/app/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Farm Business Tenancy vs Agricultural Holdings: UK Guide 2026 | NJB Legal",
  description:
    "What is the difference between a Farm Business Tenancy and an Agricultural Holdings Act tenancy? NJB Legal explains the key differences for UK farmers and landowners.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/blog/agricultural-tenancy-guide-uk-2026",
  },
  openGraph: {
    title: "Farm Business Tenancy vs Agricultural Holdings: UK Guide 2026 | NJB Legal",
    description:
      "What is the difference between a Farm Business Tenancy and an Agricultural Holdings Act tenancy? NJB Legal explains the key differences for UK farmers and landowners.",
    url: "https://anisrahmanchambers.co.uk/blog/agricultural-tenancy-guide-uk-2026",
    locale: "en_GB",
    type: "article",
  },
};

const comparisonHeaders = ["Feature", "Farm Business Tenancy (FBT)", "Agricultural Holdings Act (AHA)"];

const comparisonRows = [
  [
    "Legislation",
    "Agricultural Tenancies Act 1995",
    "Agricultural Holdings Act 1986",
  ],
  [
    "Security of Tenure",
    "Limited — tenant has no right to remain beyond the agreed term",
    "Strong — tenant has a statutory right to remain and challenge a notice to quit",
  ],
  [
    "Succession Rights",
    "None — FBTs cannot be inherited by family members",
    "Qualified succession rights for close family members on death or retirement of the tenant",
  ],
  [
    "Rent Review",
    "Flexible — parties can agree any rent review mechanism",
    "Statutory arbitration mechanism if parties cannot agree rent",
  ],
  [
    "Compensation on Quitting",
    "Limited — tenant may claim for tenant's improvements only",
    "Broader compensation rights including for disturbance and improvements",
  ],
  [
    "Notice to Quit",
    "Minimum 12 months' notice for tenancies of 2 years or more",
    "Minimum 12 months' notice, but tenant can contest on statutory grounds",
  ],
  [
    "Flexibility",
    "High — parties can tailor terms freely within the Act's framework",
    "Low — many terms are governed by statute regardless of the agreement",
  ],
  [
    "New Agreements",
    "All new tenancies created after 1 September 1995 are FBTs",
    "No new AHA tenancies can be created — existing AHA tenancies continue",
  ],
];

const faqs: FAQ[] = [
  {
    question: "Can I still create a new Agricultural Holdings Act tenancy?",
    answer:
      "No. Since 1 September 1995, it has not been possible to create new Agricultural Holdings Act tenancies. All new agricultural tenancies created after that date are Farm Business Tenancies governed by the Agricultural Tenancies Act 1995. Existing AHA tenancies created before September 1995 continue in force and retain all their statutory protections. If you are a farmer or landowner with an existing AHA tenancy, it is important to understand that those rights are valuable and should be carefully managed.",
  },
  {
    question: "What succession rights do AHA tenants have?",
    answer:
      "Under the Agricultural Holdings Act 1986, the close family members of a tenant — typically a spouse, civil partner or child — may be entitled to apply to succeed to an AHA tenancy on the death or retirement of the sitting tenant. Succession is not automatic: the applicant must satisfy eligibility criteria (including a principal source of livelihood test and a suitability test) and must apply to the Agricultural Land Tribunal within strict time limits. Succession rights are limited to two generations in most cases. FBT tenants have no succession rights.",
  },
  {
    question: "What is the rent review process under a Farm Business Tenancy?",
    answer:
      "Under a Farm Business Tenancy, the parties can agree any rent review mechanism they choose — this may be a fixed date review, an RPI-linked increase, an open market review or any other mechanism. If the tenancy does not contain a rent review clause, either party can trigger a rent review at any time by serving a statutory review notice under the Agricultural Tenancies Act 1995. If the parties cannot agree the new rent, an arbitrator or independent expert (depending on what the tenancy provides) can determine the market rent. This is more flexible than the AHA arbitration process.",
  },
  {
    question: "What compensation is a farm tenant entitled to on quitting?",
    answer:
      "Under the Agricultural Tenancies Act 1995, an FBT tenant is entitled to claim compensation for tenant's improvements — physical improvements and planning permissions obtained by the tenant — when the tenancy ends, provided they gave the landlord proper notice before carrying out the improvement. Under the Agricultural Holdings Act 1986, AHA tenants have wider compensation rights, including disturbance compensation (typically one year's rent) and compensation for improvements, routine improvements and high farming. The AHA compensation regime is significantly more generous than that available to FBT tenants.",
  },
  {
    question: "Do I need a written tenancy agreement for a Farm Business Tenancy?",
    answer:
      "The Agricultural Tenancies Act 1995 does not require a Farm Business Tenancy to be in writing, but a written agreement is strongly recommended. A well-drafted written tenancy agreement clearly sets out the term, rent, review mechanism, repairing obligations, permitted use, restrictions on assignment and subletting, and provisions for compensation at the end of the tenancy. Without a written agreement, disputes about the terms of the tenancy are much more likely. NJB Legal can draft or review FBT agreements for both landlords and tenants.",
  },
];

export default function AgriculturalTenancyGuideUK2026Page() {
  return (
    <BlogPostLayout
      title="Farm Business Tenancy vs Agricultural Holdings: UK Guide 2026"
      datePublished="2026-02-28"
      dateDisplay="28 February 2026"
      readTime="9 min read"
      category="Agricultural Law"
      breadcrumbTitle="Farm Business Tenancy vs Agricultural Holdings"
      url="/blog/agricultural-tenancy-guide-uk-2026"
      description="What is the difference between a Farm Business Tenancy and an Agricultural Holdings Act tenancy? NJB Legal explains the key differences for UK farmers and landowners."
      faqs={faqs}
    >
      {/* Intro */}
      <p>
        Understanding the difference between a Farm Business Tenancy and an Agricultural Holdings
        Act tenancy is essential for any farmer or landowner in England and Wales. The two regimes
        operate under entirely different legislation and provide very different rights and
        protections for tenants and landlords. Getting the wrong advice — or failing to understand
        which regime applies — can have significant and long-lasting financial consequences.
      </p>
      <p>
        This guide explains both types of agricultural tenancy, compares the key differences and
        provides practical guidance for farmers and landowners considering their options.
      </p>

      {/* Table of Contents */}
      <nav aria-label="Table of contents" className="my-8 bg-cream border border-mist rounded-lg p-5">
        <p className="font-outfit font-semibold text-ink text-sm mb-3 uppercase tracking-wide">
          Contents
        </p>
        <ol className="space-y-1.5 text-sm font-outfit text-slate list-decimal pl-5">
          <li><a href="#what-is-fbt">What is a Farm Business Tenancy (FBT)?</a></li>
          <li><a href="#what-is-aha">What is an Agricultural Holdings Act Tenancy?</a></li>
          <li><a href="#comparison">Key Differences: FBT vs Agricultural Holdings Act Tenancy</a></li>
          <li><a href="#security-of-tenure">Security of Tenure Under Agricultural Tenancy Law</a></li>
          <li><a href="#succession">Succession Rights on Farm Tenancies</a></li>
          <li><a href="#which-is-right">Which Agricultural Tenancy is Right for You?</a></li>
          <li><a href="#faqs">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* Section 1 */}
      <h2 id="what-is-fbt">What is a Farm Business Tenancy (FBT)?</h2>

      <DefinitionBox
        term="Farm Business Tenancy (FBT)"
        definition="A Farm Business Tenancy is an agricultural tenancy governed by the Agricultural Tenancies Act 1995. All new agricultural tenancies created on or after 1 September 1995 in England and Wales are Farm Business Tenancies. FBTs offer flexibility to the parties but provide tenants with significantly less security of tenure and fewer statutory rights than the older Agricultural Holdings Act regime."
        legislation="Agricultural Tenancies Act 1995"
      />

      <p>
        Farm Business Tenancies were introduced to replace the Agricultural Holdings Act regime for
        new tenancies from 1 September 1995. The policy objective was to encourage landowners to let
        agricultural land by removing the strong security of tenure protections that had deterred
        many from letting under the AHA regime. As a result, FBTs give the parties broad freedom to
        agree their own terms within the statutory framework.
      </p>
      <p>
        Key features of Farm Business Tenancies include: no security of tenure beyond the agreed
        term; no succession rights; flexible rent review mechanisms; and compensation for tenant's
        improvements on quitting. Tenancies of two years or more require a minimum of twelve months'
        written notice to terminate. Shorter tenancies can be brought to an end on the agreed
        expiry date or by the notice provided in the tenancy agreement.
      </p>

      {/* Section 2 */}
      <h2 id="what-is-aha">What is an Agricultural Holdings Act Tenancy?</h2>

      <DefinitionBox
        term="Agricultural Holdings Act (AHA) Tenancy"
        definition="An Agricultural Holdings Act tenancy is an agricultural tenancy governed by the Agricultural Holdings Act 1986. No new AHA tenancies can be created after 1 September 1995, but existing tenancies created before that date continue in force and retain their full statutory protections, including strong security of tenure, succession rights for close family members and broad compensation rights on quitting."
        legislation="Agricultural Holdings Act 1986"
      />

      <p>
        AHA tenancies are historically significant and remain in force across many farms in England
        and Wales. Because of the strong statutory protections — particularly security of tenure and
        succession rights — AHA tenancies are often described as the gold standard of agricultural
        tenancy law from the tenant's perspective. A sitting AHA tenant is very difficult for a
        landlord to remove without statutory grounds, and the compensation regime on quitting is
        substantially more generous than under an FBT.
      </p>
      <p>
        For landowners, the existence of an AHA tenancy significantly affects the value of the land.
        Agricultural land subject to an AHA tenancy is typically valued at a substantial discount to
        vacant possession value — reflecting the difficulty of recovering possession and the long-term
        nature of the tenant's rights. This is an important consideration for landowners selling or
        inheriting land with sitting AHA tenants.
      </p>

      {/* Section 3 */}
      <h2 id="comparison">Key Differences: FBT vs Agricultural Holdings Act Tenancy</h2>

      <ComparisonTable
        headers={comparisonHeaders}
        rows={comparisonRows}
      />

      {/* Section 4 */}
      <h2 id="security-of-tenure">Security of Tenure Under Agricultural Tenancy Law</h2>

      <p>
        Security of tenure is the most fundamental difference between the two regimes. Under the
        Agricultural Holdings Act 1986, a tenant has statutory security of tenure that means the
        tenancy does not automatically end when the contractual term expires. A landlord wishing to
        recover possession must serve a notice to quit and, in most cases, the tenant has the right
        to challenge the notice through arbitration or the Agricultural Land Tribunal. The landlord
        must establish one of the statutory grounds for possession set out in the Act — such as
        non-payment of rent, breach of tenancy obligations, or the landlord's need to use the land
        for non-agricultural purposes. Challenging a notice to quit can take years and, even if
        successful, may result in the landlord having to pay significant compensation.
      </p>
      <p>
        Under the Agricultural Tenancies Act 1995, Farm Business Tenancy tenants have no statutory
        security of tenure beyond the agreed term of the tenancy. When a fixed-term FBT expires
        and the appropriate notice has been served, the tenant must vacate. Periodic FBTs (such as
        year-to-year tenancies) can be ended by either party serving not less than twelve months'
        notice expiring at the end of a period of the tenancy. There is no right for the FBT tenant
        to contest a valid notice to quit or to apply for a new tenancy.
      </p>
      <p>
        The difference in security of tenure is the primary reason why, from a tenant's perspective,
        an existing AHA tenancy is far more valuable than an equivalent FBT. Tenants with AHA
        tenancies should take specialist legal advice before surrendering them or agreeing to any
        variation that might affect their statutory rights.
      </p>

      {/* Section 5 */}
      <h2 id="succession">Succession Rights on Farm Tenancies</h2>

      <p>
        One of the most valuable features of an AHA tenancy is the right of close family members
        to succeed to the tenancy on the death or retirement of the sitting tenant. Under the
        Agricultural Holdings Act 1986, a spouse, civil partner or child of the tenant may apply
        to the Agricultural Land Tribunal to succeed to the tenancy if they satisfy the eligibility
        criteria — in particular, the principal source of livelihood test and the suitability test.
        Succession is limited: in most cases, no more than two successions can occur before the
        landlord is entitled to recover possession.
      </p>
      <p>
        Farm Business Tenancies have no succession rights whatsoever. When an FBT tenant dies,
        the tenancy forms part of their estate and, unless the tenancy agreement specifically
        provides otherwise, the landlord can bring it to an end by serving the appropriate notice
        on the personal representatives. For farming families, the absence of succession rights
        under FBTs represents a significant difference from the AHA regime and should be a key
        factor when structuring farming arrangements and succession planning.
      </p>

      {/* Section 6 */}
      <h2 id="which-is-right">Which Agricultural Tenancy is Right for You?</h2>

      <p>
        For landowners who are letting agricultural land for the first time, or re-letting land
        where the previous AHA tenancy has ended, a Farm Business Tenancy under the 1995 Act is
        the only option for a new letting. The FBT framework gives you flexibility to tailor the
        term, rent and conditions to your requirements, and — crucially — gives you the certainty
        of recovering possession at the end of the agreed term. FBTs are particularly appropriate
        for short to medium term lettings, diversification projects, and situations where the
        landlord may wish to use the land for other purposes in the future.
      </p>
      <p>
        For tenants, the priority should always be understanding what type of tenancy you have —
        and if you hold an AHA tenancy, protecting and exercising your statutory rights. AHA
        tenants should be very cautious about agreeing to any surrender, variation or novation
        that could affect their security of tenure, succession rights or compensation entitlements,
        and should always take specialist legal advice before doing so.
      </p>
      <p>
        NJB Legal advises farmers and landowners across Cheshire and the North West on all aspects
        of agricultural tenancy law, including Farm Business Tenancy drafting and negotiation, AHA
        tenancy advice, succession planning and dispute resolution. Contact us to discuss your
        specific situation.
      </p>

      {/* FAQ Section */}
      <h2 id="faqs">Frequently Asked Questions About Agricultural Tenancies</h2>

      <FAQAccordion faqs={faqs} />
    </BlogPostLayout>
  );
}
