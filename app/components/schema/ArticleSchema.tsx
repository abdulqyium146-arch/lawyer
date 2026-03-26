interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  imageUrl?: string;
}

export default function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl = "https://anisrahmanchambers.co.uk/android-chrome-512x512.png",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    url: `https://anisrahmanchambers.co.uk${url}`,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@id": "https://anisrahmanchambers.co.uk/#organization",
    },
    publisher: {
      "@id": "https://anisrahmanchambers.co.uk/#organization",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://anisrahmanchambers.co.uk${url}`,
    },
    inLanguage: "en-GB",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
