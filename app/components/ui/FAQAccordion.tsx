"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQAccordion({ faqs, title }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-label="Frequently asked questions" className="my-12">
      {title && (
        <h2 className="h2-style mb-8">{title}</h2>
      )}
      <dl className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div
              key={index}
              className="border border-mist rounded-lg overflow-hidden bg-white"
            >
              <dt>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-cormorant font-semibold text-ink text-lg hover:bg-cream transition-colors"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </dt>
              <dd
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-1 text-sm font-outfit text-slate leading-relaxed border-t border-mist">
                  {faq.answer}
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
