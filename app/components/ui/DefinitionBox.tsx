interface DefinitionBoxProps {
  term: string;
  definition: string;
  legislation?: string;
}

export default function DefinitionBox({
  term,
  definition,
  legislation,
}: DefinitionBoxProps) {
  return (
    <aside
      aria-label={`Definition: ${term}`}
      className="my-8 border-l-4 border-gold bg-cream rounded-r-lg p-5"
    >
      <p className="text-xs font-outfit font-semibold text-gold uppercase tracking-widest mb-1">
        Definition
      </p>
      <p className="font-cormorant font-semibold text-lg text-ink mb-2">
        {term}
      </p>
      <p className="text-sm font-outfit text-slate leading-relaxed">
        {definition}
      </p>
      {legislation && (
        <p className="mt-2 text-xs font-outfit text-slate/70 italic">
          Governed by: {legislation}
        </p>
      )}
    </aside>
  );
}
