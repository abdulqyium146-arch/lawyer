import type { Metadata } from "next";
import BlogPostLayout from "@/app/components/templates/BlogPostLayout";

export const metadata: Metadata = {
  title: "Child Custody in Manchester: A Complete Guide to Child Arrangements (2026)",
  description:
    "A complete guide to child custody — called child arrangements — in England and Wales. Understand residence orders, contact, mediation and what courts consider. Advice from NJB Legal Manchester.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://njblegal.co.uk/blog/child-custody-manchester-guide",
  },
  openGraph: {
    locale: "en_GB",
    type: "article",
    title: "Child Custody in Manchester: A Complete Guide to Child Arrangements (2026)",
    description:
      "Everything parents in Manchester need to know about child custody law in England and Wales — residence, contact, mediation, court orders and parental rights.",
    url: "https://njblegal.co.uk/blog/child-custody-manchester-guide",
  },
};

const faqs = [
  {
    question: "What is the difference between custody and a child arrangements order?",
    answer:
      "English law no longer uses the term 'custody'. Instead, family courts make Child Arrangements Orders specifying where a child 'lives' (previously called residence) and who the child 'spends time with' (previously called contact). Both parents retain parental responsibility regardless of the arrangement.",
  },
  {
    question: "Do courts always give mothers custody in England?",
    answer:
      "No. English family courts do not automatically favour mothers. The court's only consideration is the welfare of the child. Fathers have equal standing before the court, and many arrangements involve the child spending substantial time with both parents. The presumption is that involvement of both parents is in the child's best interests, unless there is evidence of risk.",
  },
  {
    question: "Can a child decide which parent they live with?",
    answer:
      "There is no set age at which a child can decide. The court takes into account the child's wishes and feelings, giving them greater weight as the child gets older and shows greater understanding. A 15 or 16-year-old's views will carry significant weight, but the court will always consider whether those views reflect the child's genuine feelings or the influence of one parent.",
  },
  {
    question: "What is a CAFCASS officer and will one be involved in my case?",
    answer:
      "CAFCASS (Children and Family Court Advisory and Support Service) officers represent children's interests in family court proceedings. In contested child arrangements cases, the court will typically appoint a CAFCASS officer to write a safeguarding letter initially and, in more complex cases, a full report (Section 7 report) with recommendations. Their report carries significant weight with the judge.",
  },
  {
    question: "How long do child arrangements proceedings take in Manchester?",
    answer:
      "Straightforward cases where agreement is reached through mediation can be resolved in weeks. Contested proceedings in the Manchester Family Court typically take 6–12 months from first application to final hearing, though complex cases or those involving safeguarding concerns can take longer. We always explore settlement options to minimise delay and cost.",
  },
];

export default function ChildCustodyGuidePage() {
  return (
    <BlogPostLayout
      title="Child Custody in Manchester: A Complete Guide to Child Arrangements (2026)"
      datePublished="2026-03-10"
      dateDisplay="10 March 2026"
      readTime="10 min read"
      category="Family Law"
      breadcrumbTitle="Child Custody Manchester Guide"
      url="/blog/child-custody-manchester-guide"
      description="A complete guide to child custody — called child arrangements — in England and Wales. Understand residence orders, contact, mediation and what courts consider."
      faqs={faqs}
    >
      <p>
        Child custody — formally known as &ldquo;child arrangements&rdquo; in English law — is often the
        most emotionally charged aspect of family breakdown. Whether you are separating from a partner or
        going through a divorce, understanding how the law protects your child&apos;s interests — and your
        rights as a parent — is essential. This guide from NJB Legal in Manchester explains
        how child arrangements work in England and Wales in 2026.
      </p>

      <nav aria-label="Contents">
        <ol>
          <li>How English law approaches child custody</li>
          <li>Parental responsibility — what it means</li>
          <li>Types of child arrangements</li>
          <li>Agreeing arrangements without court</li>
          <li>When court proceedings are necessary</li>
          <li>What the court considers</li>
          <li>CAFCASS and safeguarding</li>
          <li>Changing a child arrangements order</li>
          <li>How NJB Legal can help</li>
        </ol>
      </nav>

      <h2>1. How English Law Approaches Child Custody</h2>
      <p>
        The Children Act 1989 governs child arrangements in England and Wales. Crucially, the Act does not
        use the word &ldquo;custody&rdquo;. Instead, it focuses on <strong>parental responsibility</strong>
        and <strong>child arrangements orders</strong> — a deliberate shift away from the idea that one
        parent &ldquo;wins&rdquo; custody and the other loses it.
      </p>
      <p>
        The overriding principle is the <strong>welfare of the child</strong>. The court must treat the
        child&apos;s welfare as its paramount consideration in any decision affecting them.
      </p>
      <p>
        There is a strong legal presumption that <strong>involvement of both parents</strong> in a
        child&apos;s life is in that child&apos;s best interests — unless there is evidence that such
        involvement would put the child at risk of harm.
      </p>

      <h2>2. Parental Responsibility — What It Means</h2>
      <p>
        Parental responsibility (PR) is the legal status that gives a parent the right to make decisions
        about a child&apos;s life — including education, medical treatment, religion and travel abroad.
      </p>
      <ul>
        <li><strong>Mothers</strong> always have parental responsibility automatically</li>
        <li><strong>Fathers</strong> have PR automatically if married to the mother, or if named on the birth certificate (for births registered after 1 December 2003 in England and Wales)</li>
        <li><strong>Unmarried fathers not on the birth certificate</strong> can acquire PR through a parental responsibility agreement or court order</li>
      </ul>
      <p>
        Having parental responsibility does not determine where a child lives — that is a separate question
        governed by the child arrangements order.
      </p>

      <h2>3. Types of Child Arrangements</h2>
      <p>
        A Child Arrangements Order (CAO) can specify:
      </p>
      <ul>
        <li><strong>Who the child lives with</strong> — this can be one parent (sole residence) or both parents (shared residence / shared care)</li>
        <li><strong>Who the child spends time with</strong> — contact arrangements, which can be direct (in-person) or indirect (phone, video, letters)</li>
      </ul>
      <p>
        <strong>Shared care</strong> is increasingly common and involves the child spending substantial time
        with both parents — for example, alternating weeks, or a 60/40 or 70/30 split. It does not
        necessarily mean an exactly equal split.
      </p>

      <h2>4. Agreeing Arrangements Without Court</h2>
      <p>
        Courts strongly encourage parents to reach their own agreement, without the need for judicial
        intervention. There are several ways to do this:
      </p>
      <ul>
        <li><strong>Direct negotiation</strong> — parents agree between themselves, ideally with the support of solicitors</li>
        <li><strong>Mediation</strong> — a trained mediator helps both parents reach agreement. Most parents must attend a Mediation Information and Assessment Meeting (MIAM) before applying to court</li>
        <li><strong>Collaborative law</strong> — both parents work with their solicitors together in a series of meetings</li>
      </ul>
      <p>
        An agreed arrangement can be made into a court order by consent — giving it legal force without
        the need for a contested hearing.
      </p>

      <h2>5. When Court Proceedings Are Necessary</h2>
      <p>
        If agreement cannot be reached, either parent can apply to the family court for a Child
        Arrangements Order. An application is made using Form C100 and submitted to the local family
        court — in Manchester, this is the Manchester Civil Justice Centre.
      </p>
      <p>
        Court proceedings may be necessary where:
      </p>
      <ul>
        <li>There is significant disagreement about where the child should live</li>
        <li>One parent is refusing the other parent contact</li>
        <li>There are safeguarding concerns (domestic abuse, substance misuse, neglect)</li>
        <li>One parent is planning to relocate — particularly internationally</li>
        <li>The existing arrangement has broken down</li>
      </ul>

      <h2>6. What the Court Considers — The Welfare Checklist</h2>
      <p>
        When making any order relating to a child, the court applies the welfare checklist from
        Section 1(3) of the Children Act 1989:
      </p>
      <ul>
        <li>The <strong>ascertainable wishes and feelings</strong> of the child (considered in light of their age and understanding)</li>
        <li>The child&apos;s <strong>physical, emotional and educational needs</strong></li>
        <li>The likely effect of any <strong>change in circumstances</strong></li>
        <li>The child&apos;s age, sex, background and any other relevant characteristics</li>
        <li>Any <strong>harm</strong> the child has suffered or is at risk of suffering</li>
        <li>The <strong>capability of each parent</strong> (and any other relevant person) to meet the child&apos;s needs</li>
        <li>The range of powers available to the court</li>
      </ul>

      <h2>7. CAFCASS and Safeguarding</h2>
      <p>
        In contested proceedings, the court will ask CAFCASS (Children and Family Court Advisory and
        Support Service) to carry out safeguarding checks and, in more complex cases, prepare a welfare
        report with recommendations.
      </p>
      <p>
        A CAFCASS officer will speak to both parents and, depending on the child&apos;s age, may speak
        to the child directly. Their recommendations carry significant weight with the judge, though
        the court is not bound to follow them.
      </p>

      <h2>8. Changing a Child Arrangements Order</h2>
      <p>
        A Child Arrangements Order can be varied or discharged if there has been a significant change
        in circumstances since the order was made. Either parent can apply to the court. Common
        reasons include a parent relocating, a change in the child&apos;s school, or a significant
        change in a parent&apos;s living or work situation.
      </p>

      <h2>9. How NJB Legal Can Help</h2>
      <p>
        Our family law team in Manchester has extensive experience of child arrangements — from reaching
        consent orders through mediation to representing parents in contested proceedings at the
        Manchester Family Court.
      </p>
      <p>
        We help clients with:
      </p>
      <ul>
        <li>Advice on parental responsibility and your legal rights</li>
        <li>Negotiating child arrangements agreements</li>
        <li>Mediation referrals and collaborative law</li>
        <li>Making and defending applications for Child Arrangements Orders</li>
        <li>Urgent applications where a child&apos;s safety is at risk</li>
        <li>International relocation cases</li>
      </ul>
      <p>
        We offer a free initial consultation. Call NJB Legal on <strong>07587 723897</strong> or
        contact us online to speak with one of our Manchester family solicitors.
      </p>
    </BlogPostLayout>
  );
}
