import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Case Results | Commercial Property, Corporate & Agricultural Law | NJB Legal Cheshire",
  description:
    "See NJB Legal's track record of successful outcomes across commercial property, corporate & commercial and agricultural law in Cheshire and the North West.",
  alternates: { canonical: "https://anisrahmanchambers.co.uk/case-results" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Case Results | NJB Legal Cheshire",
    description:
      "NJB Legal track record — completed deals, negotiated savings and successful outcomes across commercial property, corporate and agricultural law in Cheshire and nationwide.",
    url: "https://anisrahmanchambers.co.uk/case-results",
  },
};

const schemaItems = [{ name: "Case Results", href: "/case-results" }];

const caseResults = [
  {
    area: "Commercial Property",
    areaColor: "bg-amber-100 text-amber-800",
    type: "Freehold Acquisition",
    outcome: "Deal Completed — Under Budget",
    description:
      "A Cheshire-based business owner wanted to buy the industrial unit they had been renting for years. We handled all searches, negotiated the contract terms and completed the purchase smoothly — coming in under the client's budget with no last-minute surprises.",
  },
  {
    area: "Commercial Property",
    areaColor: "bg-amber-100 text-amber-800",
    type: "Commercial Lease Renewal",
    outcome: "£38K Saved Over Lease Term",
    description:
      "A retail tenant was facing a lease renewal on terms heavily weighted in the landlord's favour. We pushed back on the rent review clause and the full repairing and insuring obligation, negotiating a fairer deal that saved the client around £38,000 over the full lease term.",
  },
  {
    area: "Commercial Property",
    areaColor: "bg-amber-100 text-amber-800",
    type: "Multi-Unit Portfolio Sale",
    outcome: "Completed on Time",
    description:
      "A North West property investor needed to sell three commercial units simultaneously to fund a larger acquisition. We coordinated all three completions on the same day, managing tight timescales and keeping the chain moving from start to finish.",
  },
  {
    area: "Corporate & Commercial",
    areaColor: "bg-blue-100 text-blue-800",
    type: "Business Acquisition",
    outcome: "£1.8M Deal Completed",
    description:
      "A management buyout of a Cheshire-based logistics business valued at £1.8M. We ran full legal due diligence, flagged a key contractual issue with a major supplier, renegotiated the purchase price accordingly and got the deal across the line on schedule.",
  },
  {
    area: "Corporate & Commercial",
    areaColor: "bg-blue-100 text-blue-800",
    type: "Shareholder Dispute",
    outcome: "Settlement Agreed — No Litigation",
    description:
      "Two co-founders of a growing business had fallen out badly over the direction of the company. We negotiated a clean exit for one shareholder, including a fair buyout price and a mutual non-disparagement agreement, without the matter ever reaching court.",
  },
  {
    area: "Corporate & Commercial",
    areaColor: "bg-blue-100 text-blue-800",
    type: "Commercial Contract Review",
    outcome: "Harmful Clauses Removed",
    description:
      "A business was about to sign a distribution agreement that included an unlimited liability clause and an automatic five-year rollover with no exit right. We identified both issues and renegotiated them out of the contract before the client put pen to paper.",
  },
  {
    area: "Agricultural Law",
    areaColor: "bg-green-100 text-green-800",
    type: "Farmland Purchase",
    outcome: "Transaction Completed",
    description:
      "A farming family in Cheshire purchased an additional 80 acres of agricultural land to expand their arable operation. We dealt with the title, arranged the necessary searches and worked with the lender's solicitors to complete the purchase without delay.",
  },
  {
    area: "Agricultural Law",
    areaColor: "bg-green-100 text-green-800",
    type: "Farm Tenancy Dispute",
    outcome: "Favourable Resolution",
    description:
      "A landlord and a long-standing farm tenant had a serious disagreement over dilapidations and whether the tenancy had been validly terminated. We advised the landlord throughout and reached a resolution that avoided a costly tribunal hearing.",
  },
  {
    area: "Agricultural Law",
    areaColor: "bg-green-100 text-green-800",
    type: "Diversification Project",
    outcome: "Legal Framework Put in Place",
    description:
      "A Cheshire landowner wanted to convert redundant farm buildings into holiday lets. We advised on planning requirements, drafted the necessary lease and licence agreements and put the right legal structure in place to protect the client's position.",
  },
];

const testimonials = [
  {
    quote:
      "We had a tight deadline on a commercial property purchase and NJB Legal delivered. They kept us informed every step of the way and sorted out a title issue that could have derailed the whole deal. Really impressive.",
    author: "Michael R.",
    location: "Cheshire",
  },
  {
    quote:
      "The team reviewed our distribution contract and spotted two clauses that could have cost us dearly. Their advice was straight to the point and they turned it around quickly. Money very well spent.",
    author: "Karen B.",
    location: "North West",
  },
  {
    quote:
      "Buying farmland involves so many moving parts and NJB Legal handled everything professionally. They clearly know agricultural law inside out and made the whole process much less stressful than we feared.",
    author: "Tom W.",
    location: "Cheshire",
  },
];

const faqs = [
  {
    question: "Are these real cases?",
    answer:
      "Yes, all the case summaries on this page are based on real matters we have handled. Names and identifying details have been changed to protect our clients' confidentiality, but the facts and outcomes are genuine.",
  },
  {
    question: "Do these results mean you will get the same outcome for me?",
    answer:
      "Every case is different, so we cannot promise a specific result. What we can promise is that we will give you our honest assessment of your situation from the outset, work hard to get the best outcome possible, and keep you fully informed throughout.",
  },
  {
    question: "How do I know NJB Legal is the right firm for my matter?",
    answer:
      "The best way to find out is to give us a call or drop us an email. We are happy to have a no-pressure initial chat about your situation, explain how we would approach it, and give you a feel for whether we are the right fit. We are regulated via Nexa Law (SRA No. 633024), so you know you are working with a properly regulated firm.",
  },
  {
    question: "Where can I read client reviews?",
    answer:
      "We have genuine client reviews on Google that reflect real experiences working with us. We cannot share individual client details due to confidentiality, but you are welcome to have a look at our reviews before getting in touch.",
  },
];

export default function CaseResultsPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Case Results" }]} />
        </div>

        {/* Hero */}
        <header className="bg-ink pt-14 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              NJB Legal — Winsford, Cheshire
            </p>
            <h1
              className="font-cormorant font-bold italic text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
            >
              Our Case Results — A Track Record You Can Trust
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4">
              We let our results do the talking. Here are some examples of what we have achieved for clients across commercial property, corporate and agricultural law — in Cheshire, the North West and beyond.
            </p>
          </div>
        </header>

        {/* Stats bar */}
        <div className="bg-gold py-5 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { stat: "500+", label: "Matters Handled" },
              { stat: "98%", label: "Client Satisfaction" },
              { stat: "4.9★", label: "Google Rating" },
              { stat: "Senior-Level", label: "Expertise" },
            ].map((s) => (
              <div key={s.label} className="text-ink">
                <p className="font-cormorant font-bold text-2xl">{s.stat}</p>
                <p className="font-outfit text-xs font-semibold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Case results grid */}
          <section className="mb-20">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Recent Case Outcomes
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-slate text-sm mt-4 mb-8 max-w-2xl">
              The following case summaries illustrate the types of outcomes we have achieved for our clients.
              All cases are anonymised to protect client confidentiality.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseResults.map((c, i) => (
                <div key={i} className="bg-white border border-mist rounded-xl p-6 flex flex-col">
                  <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-outfit font-semibold mb-3 ${c.areaColor}`}>
                    {c.area}
                  </span>
                  <p className="font-outfit text-xs text-slate/60 uppercase tracking-wider mb-2">{c.type}</p>
                  <p className="font-outfit font-semibold text-green-700 text-base mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0" />
                    {c.outcome}
                  </p>
                  <p className="font-outfit text-slate text-sm leading-relaxed flex-1">{c.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              What Our Clients Say
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="border-l-4 border-gold bg-cream rounded-r-xl px-5 py-6">
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-outfit text-slate text-sm leading-relaxed italic mb-4">"{t.quote}"</p>
                  <footer className="font-outfit text-xs font-semibold text-ink">
                    {t.author} — {t.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              About Our Track Record
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* CTA inline */}
          <div className="bg-ink rounded-2xl px-8 py-12 text-center mb-16">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Ready to Discuss Your Case?
            </p>
            <h2 className="font-cormorant font-bold text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Get Expert Legal Advice — Free Initial Consultation
            </h2>
            <p className="font-outfit text-white/70 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              Our solicitors are ready to listen to your situation and advise on the best course of action.
              No obligation. No pressure. Just honest legal advice.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Consultation
            </Link>
          </div>
        </main>

        <CTABanner />
      </div>
    </>
  );
}
