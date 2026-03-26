import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Award, Users, Star, Scale } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import CTABanner from "@/app/components/ui/CTABanner";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
  description:
    "NJB Legal is a specialist law firm based in Winsford, Cheshire, providing expert commercial property, corporate & commercial and agricultural law services. SRA regulated via Nexa Law.",
  alternates: { canonical: "https://anisrahmanchambers.co.uk/about" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "About NJB Legal | Commercial Property & Business Law Solicitors",
    description:
      "Commercial property, corporate & commercial and agricultural law solicitors in Winsford, Cheshire. Serving clients across the North West and nationwide. SRA regulated.",
    url: "https://anisrahmanchambers.co.uk/about",
  },
};

const schemaItems = [{ name: "About", href: "/about" }];

const values = [
  {
    icon: <Scale size={24} className="text-gold" />,
    title: "Commercial Thinking",
    description:
      "We approach every matter with your commercial goals in mind. Legal advice that ignores the business reality is not much use, so we keep both in view at all times.",
  },
  {
    icon: <Award size={24} className="text-gold" />,
    title: "Integrity",
    description:
      "We give you our honest view — even when it is not the answer you were hoping for. Our reputation is built on straight talking and advice you can rely on.",
  },
  {
    icon: <Users size={24} className="text-gold" />,
    title: "Accessibility",
    description:
      "We are easy to reach, quick to respond and keep you updated throughout. You will always know where your matter stands and what is happening next.",
  },
  {
    icon: <Star size={24} className="text-gold" />,
    title: "Excellence",
    description:
      "We hold ourselves to high professional standards. Every client, every file and every transaction gets our full attention and the expertise it deserves.",
  },
];

const faqs = [
  {
    question: "What does NJB Legal do?",
    answer:
      "We are specialist solicitors focusing on commercial property, corporate & commercial law and agricultural law. We help businesses buy and lease property, advise on company deals and contracts, and support farmers and rural landowners across Cheshire, the North West and nationwide.",
  },
  {
    question: "Is NJB Legal regulated?",
    answer:
      "Yes. NJB Legal is a trading name of NJB Legal Limited, authorised and regulated through Nexa Law (SRA No. 633024). Working with a regulated firm means you have the protection of the SRA Standards and Regulations and access to the SRA Compensation Fund.",
  },
  {
    question: "Can I meet with a solicitor in person?",
    answer:
      "Yes. We see clients by appointment at our offices at 7 Charter Court, Winsford, Cheshire CW7 2FY. We also offer telephone and video consultations, so you do not always need to come to us. Many of our clients across the North West and UK prefer to work with us remotely.",
  },
  {
    question: "How do I get started with NJB Legal?",
    answer:
      "Just call us on 07587 723897 or email info@anisrahmanchambers.co.uk. We will have an initial chat about your situation, give you an honest view on how we can help, and take it from there. There is no charge for the initial conversation and no obligation to proceed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "About" }]} />
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
              About NJB Legal
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4">
              NJB Legal is a specialist law firm based in Winsford, Cheshire. We focus on commercial property, corporate & commercial law and agricultural law — giving businesses, investors and landowners access to senior-level legal advice across the North West and nationwide.
            </p>
          </div>
        </header>

        {/* Stats */}
        <div className="bg-gold py-5 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { stat: "500+", label: "Matters Completed" },
              { stat: "3", label: "Core Practice Areas" },
              { stat: "4.9★", label: "Google Rating" },
              { stat: "UK-Wide", label: "Client Coverage" },
            ].map((s) => (
              <div key={s.label} className="text-ink">
                <p className="font-cormorant font-bold text-2xl">{s.stat}</p>
                <p className="font-outfit text-xs font-semibold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Our story */}
          <section className="mb-16 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Our Story
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-6 space-y-4 font-outfit text-slate text-sm leading-relaxed">
                <p>
                  NJB Legal was set up with one simple goal: to give businesses, investors and landowners access to high-quality, commercially focused legal advice without the complexity or cost that often comes with larger firms. Based at 7 Charter Court in Winsford, Cheshire, we work with clients across the North West and throughout the UK.
                </p>
                <p>
                  We specialise in three areas where we can genuinely add value: commercial property, corporate & commercial law and agricultural law. That focus matters. It means you get a solicitor who knows their area inside out — not a generalist stretched across every type of legal work.
                </p>
                <p>
                  NJB Legal is a trading name of NJB Legal Limited, authorised and regulated through Nexa Law (SRA No. 633024). Working with a regulated firm gives you important protections, including access to the SRA Compensation Fund if something goes wrong.
                </p>
                <p>
                  We believe legal advice should be straightforward and accessible. We always explain things clearly, keep you updated and give you our honest view — even when the answer is not what you were hoping to hear.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              {/* Decorative card */}
              <div className="bg-ink rounded-2xl p-8 text-white">
                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-6">
                  <span className="font-cormorant font-bold text-gold text-3xl">N</span>
                </div>
                <h3 className="font-cormorant font-bold text-2xl mb-1">NJB Legal</h3>
                <p className="font-outfit text-gold text-xs font-semibold uppercase tracking-wider mb-6">
                  Commercial Property · Corporate · Agricultural Law
                </p>
                <address className="not-italic font-outfit text-white/80 text-sm space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                    7 Charter Court, Winsford, Cheshire, CW7 2FY
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} className="text-gold shrink-0" />
                    <a href="tel:07587723897" className="text-gold hover:underline font-semibold">
                      07587 723897
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-gold shrink-0" />
                    <a href="mailto:info@anisrahmanchambers.co.uk" className="text-gold hover:underline">
                      info@anisrahmanchambers.co.uk
                    </a>
                  </p>
                </address>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="font-outfit text-white/60 text-xs">
                    Authorised and regulated by the Solicitors Regulation Authority
                  </p>
                  <p className="font-outfit text-white/60 text-xs">SRA No. 633024 (Nexa Law)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Our values */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Our Values
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-cream rounded-xl p-6 border border-mist">
                  <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-cormorant font-bold text-ink text-xl mb-2">{v.title}</h3>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why clients choose us */}
          <section className="mb-16 bg-cream rounded-2xl px-8 py-12">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Why Clients Choose NJB Legal
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Specialist Focus", body: "We do not try to cover every area of law. We focus on commercial property, corporate & commercial and agricultural law — and we know these areas thoroughly." },
                { title: "Transparent Pricing", body: "Clear costs from the outset. No surprise invoices. We discuss fees at the start and keep you informed if anything changes." },
                { title: "Direct Access to Your Solicitor", body: "You deal with a senior solicitor throughout, not a junior assistant. That means better advice and a much smoother experience." },
                { title: "Cheshire and Beyond", body: "We are based in Winsford, Cheshire and understand the local market well — but we work with clients across the North West and nationwide." },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-xl p-6 border border-mist">
                  <h3 className="font-outfit font-semibold text-ink text-base mb-2">{p.title}</h3>
                  <p className="font-outfit text-slate text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              About the Firm — FAQs
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 max-w-3xl">
              <FAQAccordion faqs={faqs} />
            </div>
          </section>
        </main>

        <CTABanner />
      </div>
    </>
  );
}
