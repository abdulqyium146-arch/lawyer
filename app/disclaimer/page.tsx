import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, AlertTriangle, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Legal Disclaimer | NJB Legal",
  description:
    "Legal disclaimer for NJB Legal — information on this website does not constitute legal advice.",
  alternates: {
    canonical: "https://anisrahmanchambers.co.uk/disclaimer",
  },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Legal Disclaimer | NJB Legal",
    description:
      "Legal disclaimer for NJB Legal — information on this website does not constitute legal advice.",
    url: "https://anisrahmanchambers.co.uk/disclaimer",
    siteName: "NJB Legal",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Legal Disclaimer", href: "/disclaimer" }]} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNav items={[{ name: "Legal Disclaimer" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 px-4" aria-label="Legal disclaimer header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl leading-tight mb-5">
            Legal Disclaimer | NJB Legal
          </h1>
          <span className="gold-rule mx-auto block mb-5" aria-hidden="true" />
          <p className="font-outfit text-white/70 text-base max-w-2xl mx-auto">
            Important information about the nature of content published on this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-4" aria-label="Legal disclaimer content">
        <div className="max-w-4xl mx-auto space-y-6">

          {/* Prominent disclaimer notice */}
          <div className="bg-white rounded-xl border-2 border-gold/40 p-8 flex items-start gap-5">
            <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
              <AlertTriangle size={24} className="text-gold" />
            </div>
            <div>
              <h2 className="font-cormorant font-semibold text-ink text-2xl mb-3">
                Website Content Is Not Legal Advice
              </h2>
              <p className="font-outfit text-slate leading-relaxed">
                The information published on this website — including all articles, guides, service descriptions, blog posts and any other content — is provided for general informational and educational purposes only. It does not constitute legal advice and must not be relied upon as such.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-3">
                Legal matters are fact-specific. The general information on this website cannot account for your individual circumstances, the jurisdiction in which you are based, or the current state of the law at the time you read it. Before taking or refraining from any action based on content published on this website, you should seek independent legal advice from a qualified solicitor.
              </p>
            </div>
          </div>

          {/* Main content card */}
          <div className="bg-white rounded-xl border border-mist p-8 md:p-12 space-y-10">

            {/* Section 1 — No Solicitor-Client Relationship */}
            <div>
              <h2 className="h2-style mb-4">1. No Solicitor-Client Relationship</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                Accessing, reading or using this website does not create a solicitor-client relationship between you and NJB Legal or NJB Legal. A solicitor-client relationship is established only when NJB Legal formally agrees to act for you in writing — following appropriate conflict of interest checks, client due diligence, and the issue of a client care letter and engagement terms.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Until a formal engagement is in place, any information you provide to NJB Legal via this website — for example through the enquiry form — is not subject to legal professional privilege and should not include confidential or sensitive information that you are not comfortable disclosing to a third party.
              </p>
            </div>

            {/* Section 2 — SRA Authorisation */}
            <div>
              <h2 className="h2-style mb-4">2. Authorisation and Regulation</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <div className="bg-cream rounded-xl border border-mist p-6 flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-outfit font-semibold text-ink text-sm mb-2">
                    SRA Authorisation Statement
                  </p>
                  <p className="font-outfit text-sm text-slate leading-relaxed">
                    NJB Legal (trading as NJB Legal) is a solicitor authorised and regulated by the Solicitors Regulation Authority (SRA) of England and Wales. NJB Legal operates as part of the Solicitors Regulation Authority, which is itself authorised and regulated by the SRA.
                  </p>
                  <p className="font-outfit text-sm text-slate leading-relaxed mt-3">
                    NJB Legal practises exclusively in England and Wales. Information on this website relates to the laws of England and Wales only unless otherwise stated. If you are based outside England and Wales, this website&apos;s content may not be accurate or applicable to your jurisdiction.
                  </p>
                  <a
                    href="https://www.sra.org.uk/consumers/register/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-outfit text-sm text-gold hover:underline mt-3"
                  >
                    Verify authorisation on the SRA register
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Section 3 — Professional Indemnity */}
            <div>
              <h2 className="h2-style mb-4">3. Professional Indemnity Insurance</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal holds professional indemnity insurance as required by the SRA, which provides cover for claims arising from legal services provided to clients in the course of a formal engagement. This professional indemnity insurance does not extend to any loss or damage suffered as a result of reliance on content published on this website in the absence of a formal solicitor-client retainer.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                NJB Legal is committed to maintaining the highest standards of professional conduct in accordance with the SRA Standards and Regulations. If you have a concern about the professional conduct of NJB Legal, you may raise a complaint in accordance with NJB Legal&apos;s complaints procedure, details of which are available upon request. Alternatively, you may contact the Legal Ombudsman at{" "}
                <a
                  href="https://www.legalombudsman.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  legalombudsman.org.uk
                </a>
                .
              </p>
            </div>

            {/* Section 4 — Accuracy */}
            <div>
              <h2 className="h2-style mb-4">4. Accuracy of Information</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal takes reasonable steps to ensure that the information published on this website is accurate and up to date at the time of publication. However, the law changes frequently, and we cannot guarantee that all content remains current. Case law, legislation and regulatory guidance may develop after content is published, and content may not be updated immediately to reflect those changes.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                NJB Legal makes no representations or warranties, express or implied, as to the completeness, accuracy, reliability, suitability or availability of any information on this website. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            {/* Section 5 — Contact for Advice */}
            <div>
              <h2 className="h2-style mb-4">5. Contact NJB Legal for Legal Advice</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                If you require legal advice on a specific matter — whether relating to commercial property, corporate law, agricultural land, commercial leases, land development or business contracts — we strongly encourage you to contact NJB Legal directly. NJB Legal provides personal, expert legal advice tailored to your specific circumstances, and initial discussions can be arranged quickly.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Do not rely on general information from this website when making important legal or business decisions. Contact us and get advice that is specific to your matter.
              </p>

              <address className="not-italic mt-6 bg-cream rounded-xl border border-mist p-6 space-y-3">
                <p className="font-outfit font-semibold text-ink">NJB Legal</p>
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
                  <a href="mailto:info@anisrahmanchambers.co.uk" className="hover:text-gold transition-colors">
                    info@anisrahmanchambers.co.uk
                  </a>
                </div>
              </address>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/contact" className="btn-primary text-center">
                  Contact NJB Legal
                </Link>
                <a
                  href="tel:07587723897"
                  className="btn-secondary text-center"
                >
                  Call 07587 723897
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
