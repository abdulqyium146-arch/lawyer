import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Phone, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import ServiceCard from "@/app/components/ui/ServiceCard";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";
import FAQSchema from "@/app/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Criminal Defence Solicitors Manchester | NJB Legal",
  description:
    "Expert criminal defence solicitors in Manchester. NJB Legal provides 24/7 emergency legal advice, police station representation, magistrates' and Crown Court defence across Cheshire and the North West.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://njblegal.co.uk/services/criminal-law" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Criminal Defence Solicitors Manchester | NJB Legal",
    description:
      "24/7 emergency criminal defence lawyers in Manchester. Police station duty solicitor, magistrates' court and Crown Court representation across Cheshire and the North West.",
    url: "https://njblegal.co.uk/services/criminal-law",
  },
};

const faqs = [
  {
    question: "What should I do if I'm arrested in Manchester?",
    answer:
      "If arrested, you have the right to free legal advice from a duty solicitor. Do not answer police questions until you have spoken to a solicitor. Call NJB Legal immediately on 07587 723897 — our 24/7 emergency line means we can attend the police station at any time.",
  },
  {
    question: "Can I get free legal representation for criminal cases?",
    answer:
      "Yes. Legal aid is available for criminal cases in England and Wales. You may qualify for a free police station duty solicitor regardless of your income. For court proceedings, eligibility depends on the type of case and your financial circumstances. We will advise you on eligibility during your free initial consultation.",
  },
  {
    question: "What is a duty solicitor?",
    answer:
      "A duty solicitor is a qualified criminal defence lawyer who provides free legal advice at police stations. You are entitled to speak to a duty solicitor before and during any police interview. NJB Legal operates a 24-hour duty solicitor service across Cheshire and the North West.",
  },
  {
    question: "What happens if I'm charged with a criminal offence?",
    answer:
      "If charged, you will appear in the magistrates' court first. More serious offences are sent to the Crown Court. Our solicitors will advise you on the likely outcome, prepare your defence, and represent you throughout the proceedings. Early legal advice significantly improves your prospects.",
  },
  {
    question: "How long do criminal cases take in England?",
    answer:
      "Magistrates' court cases can be resolved in weeks. Crown Court trials typically take 6–18 months depending on complexity. We keep you informed at every stage and work to resolve matters as efficiently as possible while building the strongest possible defence.",
  },
  {
    question: "Will I get a criminal record?",
    answer:
      "A criminal record only results from a conviction. If you are found not guilty, or charges are dropped, you will not have a criminal record for that offence. Our goal is always to secure the best outcome — whether that is acquittal, reduced charges, or the most favourable sentence.",
  },
];

const breadcrumb = [
  { name: "Services", href: "/services" },
  { name: "Criminal Defence Law" },
];

const schemaItems = [
  { name: "Services", href: "/services" },
  { name: "Criminal Defence Law", href: "/services/criminal-law" },
];

const services = [
  {
    icon: "⚖️",
    name: "Magistrates' Court Defence",
    description:
      "Expert representation for summary and either-way offences in the magistrates' court. We prepare your plea, gather evidence and present the strongest possible defence.",
    href: "/services/criminal-law",
  },
  {
    icon: "🏛️",
    name: "Crown Court Representation",
    description:
      "Serious criminal charges including GBH, robbery, sexual offences and fraud require specialist Crown Court expertise. We work with experienced barristers to fight your case.",
    href: "/services/criminal-law",
  },
  {
    icon: "🚔",
    name: "Police Station Duty Solicitor",
    description:
      "24/7 attendance at any police station across Cheshire and the North West. You are entitled to free legal advice — do not be interviewed without a solicitor present.",
    href: "/services/criminal-law",
  },
  {
    icon: "🚗",
    name: "Road Traffic Offences",
    description:
      "Speeding, drink driving, dangerous driving, driving without insurance. We defend road traffic cases and fight to protect your licence from disqualification.",
    href: "/services/criminal-law",
  },
  {
    icon: "🔍",
    name: "Drug Offences",
    description:
      "From possession to supply charges, we provide robust defence for drug-related offences at all court levels, including arguments on intent and quantum.",
    href: "/services/criminal-law",
  },
  {
    icon: "🛡️",
    name: "Fraud & Financial Crime",
    description:
      "Complex fraud, money laundering and financial crime cases require specialist legal knowledge. Our solicitors have extensive experience with white-collar criminal defence.",
    href: "/services/criminal-law",
  },
];

const steps = [
  {
    number: 1,
    title: "Free Initial Consultation",
    description:
      "Contact us any time — 24/7 for emergencies. We listen to your situation and explain your legal position in plain English.",
  },
  {
    number: 2,
    title: "Evidence Review",
    description:
      "We analyse all prosecution evidence, identify weaknesses, and advise on the strength of your case and likely outcomes.",
  },
  {
    number: 3,
    title: "Build Your Defence",
    description:
      "We gather witness statements, instruct experts where needed, and prepare the most effective defence strategy.",
  },
  {
    number: 4,
    title: "Court Representation",
    description:
      "We represent you with confidence at every hearing — from the first appearance through to trial or sentencing.",
  },
];

export default function CriminalLawPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <FAQSchema faqs={faqs} id="criminal-law-faq" />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumb} />
        </div>

        {/* Hero */}
        <header className="bg-ink pt-14 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              NJB Legal — Manchester &amp; Cheshire and the North West
            </p>
            <h1
              className="font-cormorant font-bold italic text-white leading-tight mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
            >
              Expert Criminal Defence Solicitors in Manchester
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4 mb-8">
              Facing a criminal charge is one of the most stressful situations in life. Our specialist criminal defence
              solicitors are available 24 hours a day, 7 days a week — from the moment of arrest through to acquittal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Free Consultation
              </Link>
              <a
                href="tel:07587723897"
                className="inline-flex items-center gap-2 font-outfit font-semibold text-gold border border-gold/40 hover:border-gold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Phone size={16} />
                07587 723897 — 24/7
              </a>
            </div>
          </div>
        </header>

        {/* Stats bar */}
        <div className="bg-gold py-5 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: <Phone size={18} />, label: "24/7 Emergency Line" },
              { icon: <Shield size={18} />, label: "Free Initial Consultation" },
              { icon: <CheckCircle2 size={18} />, label: "SRA Regulated" },
              { icon: <AlertCircle size={18} />, label: "Legal Aid Available" },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-center gap-2 text-ink font-outfit font-semibold text-sm">
                {s.icon}
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Definition */}
          <div className="border-l-4 border-gold bg-cream rounded-r-xl px-6 py-5 mb-16 max-w-3xl">
            <h2 className="font-cormorant font-bold text-ink text-xl mb-2">What is Criminal Defence?</h2>
            <p className="font-outfit text-slate text-sm leading-relaxed">
              Criminal defence law involves representing individuals and organisations accused of criminal offences in
              England and Wales. A criminal defence solicitor advises you of your rights, challenges prosecution evidence,
              negotiates with the Crown Prosecution Service, and represents you in court. Early specialist advice is the
              single most important step you can take after an arrest or charge.
            </p>
          </div>

          {/* Services grid */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Criminal Defence Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.name} icon={s.icon} name={s.name} description={s.description} href={s.href} />
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16 bg-cream rounded-2xl px-8 py-12">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              How We Work
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center mb-4">
                    <span className="font-cormorant font-bold text-gold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-outfit font-semibold text-ink text-base mb-2">{step.title}</h3>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Apex */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Why Choose NJB Legal for Criminal Defence?
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "24/7 Emergency Availability",
                  body: "Arrests do not happen 9-to-5. Our criminal defence line operates around the clock — call us from the police station and we will attend immediately.",
                },
                {
                  title: "Legal Aid & Duty Solicitor",
                  body: "We are proud to offer legal aid representation. All suspects are entitled to free police station advice — we ensure you exercise that right.",
                },
                {
                  title: "Experienced Advocate Network",
                  body: "For Crown Court trials we work with a trusted network of specialist barristers, giving your case the full weight of experienced advocacy.",
                },
                {
                  title: "Proven Track Record",
                  body: "We have secured acquittals, dropped charges and reduced sentences for clients across Cheshire and the North West for over 18 years. Your case matters.",
                },
              ].map((p) => (
                <div key={p.title} className="bg-white border border-mist rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-gold" />
                    </div>
                    <h3 className="font-outfit font-semibold text-ink text-base">{p.title}</h3>
                  </div>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Criminal Defence FAQs
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>

          {/* Related services */}
          <section className="mb-16 pt-12 border-t border-mist">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Other Legal Services
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <ServiceCard icon="👨‍👩‍👧" name="Family Law" description="Divorce, child custody, financial settlements and domestic abuse protection across Manchester." href="/services/family-law" />
              <ServiceCard icon="🏢" name="Corporate Law" description="Business formation, mergers, shareholder agreements and commercial contracts for Manchester businesses." href="/services/corporate-law" />
              <ServiceCard icon="🏠" name="Property Law" description="Residential and commercial conveyancing, lease negotiations and property disputes in Cheshire and the North West." href="/services/property-law" />
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}


