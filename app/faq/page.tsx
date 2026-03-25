import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Legal FAQ | Commercial Property, Corporate & Agricultural Law Questions | NJB Legal Cheshire",
  description:
    "Answers to frequently asked questions about commercial property, corporate & commercial and agricultural law from NJB Legal — solicitors based in Winsford, Cheshire, serving clients UK-wide.",
  alternates: { canonical: "https://njblegal.co.uk/faq" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Legal FAQ | NJB Legal Cheshire",
    description:
      "Clear answers to common legal questions — commercial property, corporate & commercial and agricultural law — from NJB Legal, Winsford, Cheshire.",
    url: "https://njblegal.co.uk/faq",
  },
};

const schemaItems = [{ name: "FAQ", href: "/faq" }];

const generalFaqs = [
  {
    question: "What does NJB Legal specialise in?",
    answer:
      "We focus on three main areas: commercial property, corporate & commercial law, and agricultural law. That means we help businesses buy, sell and lease commercial premises, advise on company deals and contracts, and support farmers and landowners with the legal side of their land and businesses.",
  },
  {
    question: "Where are you based and who do you work with?",
    answer:
      "We are based at 7 Charter Court, Winsford, Cheshire CW7 2FY. We work with businesses, investors and landowners across Cheshire, the North West and throughout the UK. Many of our clients do not need to visit us in person — we handle a lot of work remotely.",
  },
  {
    question: "How do I get in touch or book an initial chat?",
    answer:
      "The easiest way is to call us on 07587 723897 or email info@njblegal.co.uk. You can also use the enquiry form on our contact page. We aim to get back to you the same day or the next working day at the latest.",
  },
  {
    question: "Is NJB Legal properly regulated?",
    answer:
      "Yes. NJB Legal is a trading name of NJB Legal Limited, which is authorised and regulated through Nexa Law (SRA No. 633024). The Solicitors Regulation Authority (SRA) sets the standards all regulated solicitors must follow, so you can be confident your matter is in safe hands.",
  },
  {
    question: "Do you only work with large businesses?",
    answer:
      "Not at all. We work with all kinds of clients — from sole traders and small family businesses to larger companies and property investors. What matters to us is giving you the same quality of advice regardless of the size of your transaction.",
  },
];

const commercialPropertyFaqs = [
  {
    question: "What is commercial property law?",
    answer:
      "Commercial property law covers the legal side of non-residential property — things like offices, shops, warehouses, factories and land. It includes buying and selling commercial buildings, negotiating leases, dealing with planning issues and handling development projects.",
  },
  {
    question: "How long does a commercial property purchase take?",
    answer:
      "It depends on the complexity of the deal, but most straightforward commercial purchases complete within 8 to 12 weeks. More complex transactions — for example, those involving planning conditions or multiple titles — can take longer. We keep things moving and always keep you updated.",
  },
  {
    question: "What should I look out for in a commercial lease?",
    answer:
      "Key things to check include the rent review provisions, the length of the lease and any break clauses, your repair and maintenance obligations, whether you can sublet or assign the lease, and what happens at the end. Getting proper legal advice before you sign can save you a lot of problems later.",
  },
  {
    question: "What is Stamp Duty Land Tax on commercial property?",
    answer:
      "Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England. The rates differ from residential property — currently 0% on the first £150,000, 2% on the next £100,000, and 5% above that. For leases, SDLT is calculated differently based on the total rent. We work out your exact liability as part of the transaction.",
  },
  {
    question: "Do I need a solicitor to buy commercial property?",
    answer:
      "Legally you do not have to use a solicitor, but it would be very risky not to. Commercial property transactions involve title checks, searches, contract negotiations and often planning and environmental issues. A mistake here can be very costly. We make sure everything is checked properly before you commit.",
  },
];

const corporateFaqs = [
  {
    question: "What is the difference between an asset purchase and a share purchase?",
    answer:
      "When you buy assets, you pick which parts of a business you want — the equipment, contracts, goodwill — but not its history of debts or liabilities. When you buy shares, you buy the whole company, including any past problems. Both routes have pros and cons depending on your situation, and we can walk you through which is better for you.",
  },
  {
    question: "What is a shareholders' agreement and do I need one?",
    answer:
      "A shareholders' agreement is a private contract between the owners of a company that sets out how major decisions are made, what happens if someone wants to sell their shares, and how disputes are resolved. If you have more than one shareholder, having one of these in place from the start can prevent a lot of arguments down the line.",
  },
  {
    question: "What is due diligence when buying a business?",
    answer:
      "Due diligence is the process of checking everything about a business before you buy it — its contracts, finances, employees, property, any legal disputes and more. It helps you spot any problems before you are committed. We manage the legal due diligence and flag anything you need to know about.",
  },
  {
    question: "What commercial contracts do businesses typically need?",
    answer:
      "Most businesses need terms and conditions for their products or services, supplier agreements, employment contracts, confidentiality agreements and sometimes distribution or franchise agreements. We draft and review contracts to make sure they actually protect your business rather than leaving gaps.",
  },
];

const agriculturalFaqs = [
  {
    question: "What does agricultural law cover?",
    answer:
      "Agricultural law covers all the legal issues that farmers, landowners and rural estates face. That includes buying and selling farmland, farm tenancy agreements, planning permission for agricultural buildings, diversification projects, and legal issues around subsidies and grants.",
  },
  {
    question: "What is a farm business tenancy?",
    answer:
      "A farm business tenancy (FBT) is the most common type of agricultural tenancy agreement in England and Wales since 1995. It sets out the rights and responsibilities of the landlord and tenant for farming land. FBTs can be for a fixed term or from year to year, and the terms can be quite flexible.",
  },
  {
    question: "Do I need planning permission for agricultural buildings?",
    answer:
      "Some agricultural buildings benefit from permitted development rights, which means you do not always need full planning permission. But the rules depend on the size of the building, how the land is used, and whether it is in a protected area. We can advise you on what applies to your specific situation.",
  },
  {
    question: "What are the legal issues with diversifying a farm?",
    answer:
      "Diversification — turning a barn into holiday lets or setting up a farm shop, for example — often involves planning permission, change of use, new business contracts and sometimes issues with your existing tenancy or mortgage. Getting the legal side right from the start means fewer surprises later.",
  },
];

const allFaqs = [...generalFaqs, ...commercialPropertyFaqs, ...corporateFaqs, ...agriculturalFaqs];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={allFaqs} id="njb-legal-faq" />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "FAQ" }]} />
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
              Frequently Asked Legal Questions
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4">
              Straight answers to the questions we get asked most often — about commercial property, corporate law and agricultural law. Can&apos;t find what you need?{" "}
              <Link href="/contact" className="text-gold underline hover:text-white transition-colors">
                Get in touch for a free initial chat
              </Link>.
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* General */}
          <section>
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              General Questions
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-6">
              <FAQAccordion faqs={generalFaqs} />
            </div>
          </section>

          {/* Commercial Property */}
          <section>
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              Commercial Property
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-6">
              <FAQAccordion faqs={commercialPropertyFaqs} />
            </div>
          </section>

          {/* Corporate & Commercial */}
          <section>
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              Corporate &amp; Commercial Law
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-6">
              <FAQAccordion faqs={corporateFaqs} />
            </div>
          </section>

          {/* Agricultural Law */}
          <section>
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
              Agricultural Law
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-6">
              <FAQAccordion faqs={agriculturalFaqs} />
            </div>
          </section>

          {/* Still have questions CTA */}
          <div className="bg-ink rounded-2xl px-8 py-10 text-center">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Still Have Questions?
            </p>
            <h2 className="font-cormorant font-bold text-white text-2xl mb-3">
              Speak to a Solicitor — No Obligation
            </h2>
            <p className="font-outfit text-white/70 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              If you could not find the answer here, just get in touch. We are happy to have a quick chat about your situation with no pressure and no obligation.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </main>

        <CTABanner />
      </div>
    </>
  );
}
