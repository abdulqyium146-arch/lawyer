interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
}

export default function ProcessSteps({ steps, title }: ProcessStepsProps) {
  return (
    <section aria-label={title ?? "Process steps"} className="my-10">
      {title && (
        <h2 className="h2-style mb-8">{title}</h2>
      )}
      <ol className="relative space-y-0">
        {steps.map((step, index) => (
          <li key={step.number} className="flex gap-6 group">
            {/* Vertical connector */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-ink font-outfit font-bold text-sm shrink-0 z-10">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 flex-1 bg-gold-rule my-1 min-h-[2rem]" aria-hidden="true" />
              )}
            </div>
            {/* Content */}
            <div className="pb-8">
              <h3 className="font-cormorant font-semibold text-lg text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-sm font-outfit text-slate leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
