interface ComparisonTableProps {
  title?: string;
  headers: string[];
  rows: string[][];
}

export default function ComparisonTable({
  title,
  headers,
  rows,
}: ComparisonTableProps) {
  return (
    <section aria-label={title ?? "Comparison table"} className="my-10 overflow-x-auto">
      {title && (
        <h2 className="h2-style mb-6">{title}</h2>
      )}
      <table className="w-full text-sm font-outfit border-collapse">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className={`px-4 py-3 text-left font-semibold ${
                  i === 0
                    ? "bg-gold text-ink"
                    : "bg-ink text-white"
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-cream" : "bg-white"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-3 border-b border-mist text-slate leading-relaxed ${
                    cellIndex === 0 ? "font-semibold text-ink" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
