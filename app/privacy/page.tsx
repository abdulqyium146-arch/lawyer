import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | NJB Legal",
  description:
    "NJB Legal's privacy policy — how we collect, use and protect your personal data in accordance with UK GDPR.",
  alternates: {
    canonical: "https://njblegal.co.uk/privacy",
  },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Privacy Policy | NJB Legal",
    description:
      "NJB Legal's privacy policy — how we collect, use and protect your personal data in accordance with UK GDPR.",
    url: "https://njblegal.co.uk/privacy",
    siteName: "NJB Legal",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", href: "/privacy" }]} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNav items={[{ name: "Privacy Policy" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 px-4" aria-label="Privacy policy header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl leading-tight mb-5">
            Privacy Policy | NJB Legal
          </h1>
          <span className="gold-rule mx-auto block mb-5" aria-hidden="true" />
          <p className="font-outfit text-white/70 text-base">
            Effective date: 1 January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-4" aria-label="Privacy policy content">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-mist p-8 md:p-12 space-y-10">

            {/* Intro */}
            <div>
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how NJB Legal collects, uses, stores and protects personal information when you use our website at{" "}
                <Link href="/" className="text-gold hover:underline">njblegal.co.uk</Link>{" "}
                or contact us in any way. It also sets out your rights under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Please read this policy carefully. By using our website or contacting NJB Legal, you confirm that you have read and understood this policy.
              </p>
            </div>

            {/* Section 1 — Who We Are */}
            <div>
              <h2 className="h2-style mb-4">1. Who We Are</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal is a specialist commercial property and corporate law practice, led by solicitor NJB Legal. NJB Legal operates as part of the Solicitors Regulation Authority and is authorised and regulated by the Solicitors Regulation Authority (SRA).
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                For the purposes of UK GDPR, the data controller is:
              </p>
              <address className="not-italic mt-4 bg-cream rounded-lg border border-mist p-5 space-y-3">
                <p className="font-outfit font-semibold text-ink">NJB Legal (NJB Legal)</p>
                <div className="flex items-start gap-2 text-sm text-slate font-outfit">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>7 Charter Court, Winsford, Cheshire, CW7 2FY</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate font-outfit">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:07587723897" className="hover:text-gold transition-colors">
                    07587 723897
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate font-outfit">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a href="mailto:info@njblegal.co.uk" className="hover:text-gold transition-colors">
                    info@njblegal.co.uk
                  </a>
                </div>
              </address>
            </div>

            {/* Section 2 — Data We Collect */}
            <div>
              <h2 className="h2-style mb-4">2. Data We Collect</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                We may collect and process the following categories of personal data:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Identity data",
                    detail: "Your name, as provided when you complete our enquiry form or contact us directly.",
                  },
                  {
                    title: "Contact data",
                    detail: "Your email address, telephone number and postal address.",
                  },
                  {
                    title: "Enquiry and matter data",
                    detail: "Information you provide about your legal matter, business, property or transaction when contacting NJB Legal.",
                  },
                  {
                    title: "Technical data",
                    detail: "IP address, browser type, operating system, referral source, and website usage data collected via cookies and analytics tools.",
                  },
                  {
                    title: "Communications data",
                    detail: "Records of your correspondence with NJB Legal, including emails, phone call notes and messages.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-outfit text-sm text-slate leading-relaxed">
                      <span className="font-semibold text-ink">{item.title}:</span>{" "}
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="font-outfit text-slate leading-relaxed mt-4 text-sm">
                We do not collect any special category personal data (such as health, racial or ethnic origin, religious beliefs or criminal records) unless this is strictly necessary for your legal matter and you have provided explicit consent.
              </p>
            </div>

            {/* Section 3 — How We Use Your Data */}
            <div>
              <h2 className="h2-style mb-4">3. How We Use Your Data</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                NJB Legal uses your personal data for the following purposes:
              </p>
              <ul className="space-y-3">
                {[
                  "To respond to your legal enquiry and provide the legal services you have requested.",
                  "To communicate with you about your matter, including sending correspondence, documents and updates.",
                  "To comply with our legal and regulatory obligations, including SRA professional duties, anti-money laundering obligations and court orders.",
                  "To maintain accurate records of our legal work and client communications.",
                  "To improve our website and services through analysis of anonymised usage data.",
                  "To send you information about NJB Legal services where you have consented to receive such communications.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-outfit text-sm text-slate leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 — Legal Basis */}
            <div>
              <h2 className="h2-style mb-4">4. Legal Basis for Processing</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                We process your personal data on the following legal bases under UK GDPR:
              </p>
              <div className="space-y-4">
                {[
                  {
                    basis: "Contract",
                    detail:
                      "Where we are providing legal services to you, processing is necessary for the performance of a contract between us, or to take steps at your request prior to entering a contract.",
                  },
                  {
                    basis: "Legal obligation",
                    detail:
                      "Where processing is necessary to comply with a legal obligation to which NJB Legal is subject — including SRA regulatory requirements, anti-money laundering legislation and tax obligations.",
                  },
                  {
                    basis: "Legitimate interests",
                    detail:
                      "Where we have a legitimate interest in processing your data that is not overridden by your rights — for example, to respond to website enquiries, maintain client records and improve our services.",
                  },
                  {
                    basis: "Consent",
                    detail:
                      "Where you have given clear consent for us to process your data for a specific purpose, such as sending marketing communications. You may withdraw consent at any time by contacting us.",
                  },
                ].map((item) => (
                  <div key={item.basis} className="bg-cream rounded-lg border border-mist p-5">
                    <p className="font-outfit font-semibold text-ink text-sm mb-1">
                      {item.basis}
                    </p>
                    <p className="font-outfit text-sm text-slate leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5 — Data Retention */}
            <div>
              <h2 className="h2-style mb-4">5. Data Retention</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal will retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting or reporting requirements.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                For client matter files, we typically retain records for a minimum of six years following the conclusion of a matter, in accordance with SRA guidance and limitation periods under English law. In certain cases — such as property transactions or matters involving trusts or wills — longer retention periods may apply.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Where you contact us via the website enquiry form but do not proceed to instruct NJB Legal, we will retain your enquiry data for no longer than 12 months unless a longer period is required by law.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Website analytics data is retained in anonymised form and is not linked to identifiable individuals.
              </p>
            </div>

            {/* Section 6 — Your Rights */}
            <div>
              <h2 className="h2-style mb-4">6. Your Rights</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                Under UK GDPR, you have the following rights in relation to your personal data:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    right: "Right of access",
                    detail:
                      "You have the right to request a copy of the personal data we hold about you.",
                  },
                  {
                    right: "Right to rectification",
                    detail:
                      "You have the right to ask us to correct inaccurate or incomplete personal data.",
                  },
                  {
                    right: "Right to erasure",
                    detail:
                      "In certain circumstances, you have the right to ask us to delete your personal data.",
                  },
                  {
                    right: "Right to restrict processing",
                    detail:
                      "You may ask us to restrict the processing of your personal data in certain circumstances.",
                  },
                  {
                    right: "Right to data portability",
                    detail:
                      "Where processing is based on consent or contract, you may request that we transfer your data to another organisation in a commonly used, machine-readable format.",
                  },
                  {
                    right: "Right to object",
                    detail:
                      "You have the right to object to processing based on legitimate interests or for direct marketing purposes.",
                  },
                  {
                    right: "Right to withdraw consent",
                    detail:
                      "Where processing is based on consent, you may withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out prior to withdrawal.",
                  },
                ].map((item) => (
                  <li key={item.right} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-outfit text-sm text-slate leading-relaxed">
                      <span className="font-semibold text-ink">{item.right}:</span>{" "}
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="font-outfit text-slate leading-relaxed mt-4 text-sm">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@njblegal.co.uk" className="text-gold hover:underline">
                  info@njblegal.co.uk
                </a>
                . We will respond to all legitimate requests within one month. If you are not satisfied with our response, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>

            {/* Section 7 — Cookies */}
            <div>
              <h2 className="h2-style mb-4">7. Cookies</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                The NJB Legal website uses cookies — small text files placed on your device — to help us understand how visitors use our site and to improve your experience. Cookies we use include:
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  {
                    type: "Strictly necessary cookies",
                    detail:
                      "Required for the website to function correctly. These cannot be disabled.",
                  },
                  {
                    type: "Analytics cookies",
                    detail:
                      "Used to collect anonymised information about how visitors use the website — for example, pages visited and time spent on site. We use this data to improve our website. Analytics cookies are only placed where you have given consent.",
                  },
                  {
                    type: "Preference cookies",
                    detail:
                      "Used to remember your preferences and settings when you return to our website.",
                  },
                ].map((item) => (
                  <li key={item.type} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-outfit text-sm text-slate leading-relaxed">
                      <span className="font-semibold text-ink">{item.type}:</span>{" "}
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="font-outfit text-slate leading-relaxed mt-4 text-sm">
                You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.
              </p>
            </div>

            {/* Section 8 — Contact Us */}
            <div>
              <h2 className="h2-style mb-4">8. Contact Us</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                If you have any questions about this Privacy Policy or the way NJB Legal handles your personal data, please contact us:
              </p>
              <address className="not-italic mt-4 bg-cream rounded-lg border border-mist p-5 space-y-3">
                <p className="font-outfit font-semibold text-ink">NJB Legal — Data Privacy Enquiries</p>
                <div className="flex items-start gap-2 text-sm text-slate font-outfit">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>7 Charter Court, Winsford, Cheshire, CW7 2FY</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate font-outfit">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a href="mailto:info@njblegal.co.uk" className="hover:text-gold transition-colors">
                    info@njblegal.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate font-outfit">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a href="tel:07587723897" className="hover:text-gold transition-colors">
                    07587 723897
                  </a>
                </div>
              </address>
              <p className="font-outfit text-slate leading-relaxed mt-4 text-sm">
                This Privacy Policy was last updated on 1 January 2026. NJB Legal reserves the right to amend this policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
