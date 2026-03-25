import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import BreadcrumbNav from "@/app/components/ui/BreadcrumbNav";
import BreadcrumbSchema from "@/app/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Terms of Use | NJB Legal",
  description: "Terms of use for the NJB Legal website — njblegal.co.uk",
  alternates: {
    canonical: "https://njblegal.co.uk/terms",
  },
  openGraph: {
    locale: "en_GB",
    type: "website",
    title: "Terms of Use | NJB Legal",
    description: "Terms of use for the NJB Legal website — njblegal.co.uk",
    url: "https://njblegal.co.uk/terms",
    siteName: "NJB Legal",
  },
};

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Terms of Use", href: "/terms" }]} />

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-mist px-4">
        <div className="max-w-4xl mx-auto">
          <BreadcrumbNav items={[{ name: "Terms of Use" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-ink py-16 px-4" aria-label="Terms of use header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-cormorant font-semibold text-white text-4xl md:text-5xl leading-tight mb-5">
            Terms of Use | NJB Legal
          </h1>
          <span className="gold-rule mx-auto block mb-5" aria-hidden="true" />
          <p className="font-outfit text-white/70 text-base">
            Please read these terms carefully before using this website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 px-4" aria-label="Terms of use content">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-mist p-8 md:p-12 space-y-10">

            {/* Intro */}
            <div>
              <p className="font-outfit text-slate leading-relaxed">
                These Terms of Use govern your access to and use of the NJB Legal website located at{" "}
                <Link href="/" className="text-gold hover:underline">njblegal.co.uk</Link>{" "}
                (the &ldquo;Website&rdquo;). By accessing or using this Website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use this Website.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                These Terms of Use should be read alongside our{" "}
                <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>{" "}
                and{" "}
                <Link href="/disclaimer" className="text-gold hover:underline">Legal Disclaimer</Link>
                , which also apply to your use of this Website.
              </p>
            </div>

            {/* Section 1 — Use of Website */}
            <div>
              <h2 className="h2-style mb-4">1. Use of This Website</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                You may use this Website for lawful purposes only and in a manner consistent with all applicable laws and regulations. In particular, you agree not to:
              </p>
              <ul className="space-y-3">
                {[
                  "Use this Website in any way that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable.",
                  "Transmit any unsolicited commercial communications or engage in spamming.",
                  "Attempt to gain unauthorised access to any part of this Website or its related systems.",
                  "Introduce viruses, trojans, worms, logic bombs or any other material that is malicious or technologically harmful.",
                  "Use automated tools, scrapers or bots to extract content or data from this Website without our prior written consent.",
                  "Reproduce, copy, distribute or commercially exploit any content from this Website without written authorisation from NJB Legal.",
                  "Use this Website in a manner that could damage, disable, overburden or impair the Website or interfere with any other party's use and enjoyment of it.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <p className="font-outfit text-sm text-slate leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="font-outfit text-slate leading-relaxed mt-4 text-sm">
                NJB Legal reserves the right to suspend or terminate your access to this Website at any time if, in our sole discretion, you have breached these Terms of Use.
              </p>
            </div>

            {/* Section 2 — No Legal Advice */}
            <div>
              <h2 className="h2-style mb-4">2. No Legal Advice Disclaimer</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mb-4">
                <p className="font-outfit font-semibold text-ink text-sm mb-2">Important Notice</p>
                <p className="font-outfit text-sm text-slate leading-relaxed">
                  The content published on this Website is provided for general information and educational purposes only. It does not constitute legal advice and must not be relied upon as such.
                </p>
              </div>
              <p className="font-outfit text-slate leading-relaxed">
                The information on this Website is of a general nature and may not reflect the most current legal developments, case law or legislation. Laws change, and their application depends on the specific facts and circumstances of each case. Accordingly, the content on this Website cannot substitute for professional legal advice tailored to your individual situation.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                Reading, accessing or using this Website does not create a solicitor-client relationship between you and NJB Legal. A solicitor-client relationship is only established when NJB Legal formally agrees in writing to act for you, following appropriate due diligence, conflict checks and execution of a client care letter.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                If you require legal advice on a specific matter, please{" "}
                <Link href="/contact" className="text-gold hover:underline">contact NJB Legal</Link>{" "}
                directly to discuss your requirements.
              </p>
            </div>

            {/* Section 3 — Intellectual Property */}
            <div>
              <h2 className="h2-style mb-4">3. Intellectual Property</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                All content on this Website — including but not limited to text, graphics, logos, images, blog articles, service descriptions, page layouts and design elements — is the intellectual property of NJB Legal or its licensors and is protected by copyright, trade mark and other applicable intellectual property laws.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                You may access and view content on this Website for your own personal, non-commercial use. You may also share links to pages on this Website, provided you do so in a way that is fair and legal and does not damage NJB Legal&apos;s reputation.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                You must not reproduce, publish, distribute, adapt, modify, transmit, display or create derivative works from any content on this Website without the express prior written consent of NJB Legal. Requests to reproduce content should be directed to{" "}
                <a href="mailto:info@njblegal.co.uk" className="text-gold hover:underline">
                  info@njblegal.co.uk
                </a>
                .
              </p>
            </div>

            {/* Section 4 — Third Party Links */}
            <div>
              <h2 className="h2-style mb-4">4. Third-Party Links</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                This Website may contain links to third-party websites or resources for your convenience and information. NJB Legal does not endorse and is not responsible for the content, accuracy, privacy practices or availability of any third-party websites. Links to third-party sites do not imply any endorsement, recommendation or affiliation.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                You access any linked third-party websites at your own risk and subject to the terms and conditions of those websites. NJB Legal accepts no responsibility or liability for any loss or damage that may arise from your use of linked websites.
              </p>
            </div>

            {/* Section 5 — Liability */}
            <div>
              <h2 className="h2-style mb-4">5. Limitation of Liability</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                To the fullest extent permitted by applicable law, NJB Legal excludes all liability for any direct, indirect, incidental, consequential or special loss or damage arising out of or in connection with your use of, or inability to use, this Website or its content.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                In particular, NJB Legal makes no representations or warranties, express or implied, as to the accuracy, completeness, timeliness or suitability of the information contained on this Website. All content is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                NJB Legal will not be liable for any loss or damage arising from your reliance on information published on this Website in place of professional legal advice. Nothing in these Terms of Use shall limit or exclude any liability that cannot be lawfully excluded, including liability for death or personal injury caused by negligence or for fraud or fraudulent misrepresentation.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                NJB Legal does not guarantee that this Website will be uninterrupted, error-free or free from viruses or other harmful components. You are responsible for implementing sufficient security measures to protect your own systems.
              </p>
            </div>

            {/* Section 6 — Governing Law */}
            <div>
              <h2 className="h2-style mb-4">6. Governing Law and Jurisdiction</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                These Terms of Use are governed by and shall be construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms of Use or your use of this Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
              <p className="font-outfit text-slate leading-relaxed mt-4">
                If you are accessing this Website from outside England and Wales, you are responsible for complying with all applicable local laws and regulations.
              </p>
            </div>

            {/* Section 7 — Changes */}
            <div>
              <h2 className="h2-style mb-4">7. Changes to These Terms</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed">
                NJB Legal reserves the right to amend these Terms of Use at any time. Any changes will be posted on this page and, where appropriate, notified to you by email. Your continued use of this Website following any changes constitutes your acceptance of the revised Terms of Use. We recommend that you check this page periodically to stay informed of any updates.
              </p>
            </div>

            {/* Section 8 — Contact */}
            <div>
              <h2 className="h2-style mb-4">8. Contact</h2>
              <span className="gold-rule block mb-6" aria-hidden="true" />
              <p className="font-outfit text-slate leading-relaxed mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <address className="not-italic bg-cream rounded-lg border border-mist p-5 space-y-3">
                <p className="font-outfit font-semibold text-ink">NJB Legal</p>
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
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
