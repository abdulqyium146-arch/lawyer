import Link from "next/link";
import { Phone } from "lucide-react";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** @deprecated use heading instead */
  town?: string;
  /** @deprecated use subheading instead */
  subtext?: string;
}

export default function CTABanner({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  town,
  subtext,
}: CTABannerProps) {
  const resolvedHeading =
    heading ??
    (town ? `Need Legal Advice in ${town}?` : "Ready to Speak with a Solicitor?");

  const resolvedSubheading =
    subheading ??
    subtext ??
    "Book your free initial consultation today. No obligation, no jargon — just clear, practical legal advice from our Cheshire solicitors.";

  const resolvedPrimary = primaryCta ?? { label: "Book Free Consultation", href: "/contact" };
  const resolvedSecondary = secondaryCta ?? { label: "07587 723897", href: "tel:07587723897" };

  return (
    <section aria-label="Call to action" className="bg-ink py-16 px-4 grain-overlay">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-cormorant font-semibold text-white text-3xl md:text-4xl mb-4">
          {resolvedHeading}
        </h2>
        <span className="gold-rule mx-auto block" aria-hidden="true" />
        <p className="font-outfit text-white/75 text-sm leading-relaxed mt-4 mb-8 max-w-xl mx-auto">
          {resolvedSubheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={resolvedPrimary.href} className="btn-primary">
            {resolvedPrimary.label}
          </Link>
          <a
            href={resolvedSecondary.href}
            className="btn-ghost-white flex items-center justify-center gap-2"
            aria-label={`Call NJB Legal on ${resolvedSecondary.label}`}
          >
            <Phone size={16} />
            {resolvedSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
