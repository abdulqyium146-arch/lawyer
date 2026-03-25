import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import CTABanner from "@/app/components/ui/CTABanner";
import FAQAccordion from "@/app/components/ui/FAQAccordion";
import EnquiryForm from "@/app/components/ui/EnquiryForm";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact NJB Legal | Commercial Property & Business Law Solicitors in Cheshire",
  description:
    "Contact NJB Legal in Winsford, Cheshire. Commercial property, corporate & commercial and agricultural law solicitors. Call 07587 723897 or email info@njblegal.co.uk.",
  alternates: { canonical: "https://njblegal.co.uk/contact" },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Contact NJB Legal | Winsford, Cheshire",
    description:
      "Get in touch with NJB Legal in Winsford, Cheshire. Specialist commercial property, corporate & commercial and agricultural law solicitors. Call 07587 723897.",
    url: "https://njblegal.co.uk/contact",
  },
};

const schemaItems = [{ name: "Contact", href: "/contact" }];

const faqs = [
  {
    question: "How quickly will you respond to my enquiry?",
    answer:
      "We aim to respond to all enquiries the same day or the next working day. If your matter is urgent, please call us directly on 07587 723897 — we will do our best to speak with you straight away.",
  },
  {
    question: "Is the initial conversation really free?",
    answer:
      "Yes, completely free and with no obligation. We are happy to have an initial chat about your situation, give you an honest view on how we can help, and take it from there. There is no charge for that first conversation and no pressure to proceed.",
  },
  {
    question: "What should I have ready when I get in touch?",
    answer:
      "It helps to have a brief summary of your situation ready — the key facts, any relevant documents such as contracts, lease agreements or property details, and a sense of what outcome you are hoping to achieve. The more background you can give us, the more useful our initial advice will be.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Contact" }]} />
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
              Contact NJB Legal
            </h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="font-outfit text-white/80 text-base leading-relaxed max-w-2xl mt-4">
              Get in touch with our Cheshire solicitors. Whether you want to discuss a commercial property deal, a business transaction or an agricultural matter, we are happy to have an initial chat — no obligation, no charge.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main two-column layout */}
          <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-16 mb-20">
            {/* Contact info */}
            <div>
              <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Get in Touch
              </h2>
              <span className="gold-rule" aria-hidden="true" />

              <div className="mt-8 space-y-6">
                {/* Office */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-mist">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-ink text-sm mb-1">Office Address</h3>
                    <address className="not-italic font-outfit text-slate text-sm leading-relaxed">
                      NJB Legal<br />
                      7 Charter Court<br />
                      Winsford, Cheshire, CW7 2FY
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-mist">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-ink text-sm mb-1">Telephone</h3>
                    <a href="tel:07587723897" className="font-outfit text-gold font-semibold text-base hover:underline">
                      07587 723897
                    </a>
                    <p className="font-outfit text-slate text-xs mt-1">Mon – Fri, 9:00am – 5:30pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-mist">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-ink text-sm mb-1">Email</h3>
                    <a href="mailto:info@njblegal.co.uk" className="font-outfit text-gold font-semibold text-sm hover:underline">
                      info@njblegal.co.uk
                    </a>
                    <p className="font-outfit text-slate text-xs mt-1">We respond within 1 working day</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-5 bg-cream rounded-xl border border-mist">
                  <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-ink text-sm mb-2">Office Hours</h3>
                    <div className="font-outfit text-slate text-sm space-y-1">
                      <p>Monday – Friday: 9:00am – 6:00pm</p>
                      <p>Saturday: By appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Emergency */}
                <div className="flex items-start gap-4 p-5 bg-ink rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center shrink-0">
                    <AlertCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-gold text-sm mb-1">Urgent Matter?</h3>
                    <p className="font-outfit text-white/80 text-xs leading-relaxed mb-2">
                      If your matter is time-sensitive, please call us directly rather than using the enquiry form. We will do our best to speak with you as quickly as possible.
                    </p>
                    <a href="tel:07587723897" className="font-outfit text-gold font-bold text-base hover:underline">
                      07587 723897
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl bg-cream border border-mist h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-gold mx-auto mb-2" />
                  <p className="font-outfit text-sm text-slate font-semibold">7 Charter Court, Winsford, Cheshire CW7 2FY</p>
                  <p className="font-outfit text-xs text-slate/60 mt-1">Serving clients across Cheshire, the North West &amp; UK-wide</p>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div>
              <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                Send an Enquiry
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </div>

          {/* How we can help */}
          <section className="mb-16 pt-12 border-t border-mist">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              How We Can Help
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🏢", name: "Commercial Property", desc: "Freehold acquisitions, portfolio transactions, commercial property sales and purchases.", href: "/services/commercial-property-solicitor-cheshire" },
                { icon: "📋", name: "Corporate & Commercial", desc: "Business acquisitions, shareholder agreements, due diligence and commercial contracts.", href: "/services/corporate-commercial-lawyer-north-west" },
                { icon: "🌾", name: "Agricultural Law", desc: "Farmland purchases, agricultural tenancies, diversification and rural property matters.", href: "/services/agricultural-law-solicitor-uk" },
                { icon: "📑", name: "Commercial Leases", desc: "Lease negotiations, rent reviews, break clauses and repairing obligations for landlords and tenants.", href: "/services/commercial-lease-solicitor-cheshire" },
              ].map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="bg-cream border border-mist rounded-xl p-5 hover:border-gold/50 transition-colors block"
                >
                  <span className="text-2xl mb-3 block">{s.icon}</span>
                  <h3 className="font-outfit font-semibold text-ink text-sm mb-1">{s.name}</h3>
                  <p className="font-outfit text-slate text-xs leading-relaxed">{s.desc}</p>
                  <p className="font-outfit text-gold text-xs font-semibold mt-3 flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    Free Initial Consultation
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-cormorant font-bold text-ink mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              Contact FAQs
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
