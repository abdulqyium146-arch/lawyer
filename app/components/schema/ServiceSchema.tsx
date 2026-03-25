interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}

export default function ServiceSchema({
  name,
  description,
  url,
  areaServed = ["Cheshire", "North West England", "England and Wales"],
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://njblegal.co.uk${url}`,
    provider: {
      "@id": "https://njblegal.co.uk/#organization",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    serviceType: "Legal Services",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://njblegal.co.uk/contact",
      servicePhone: "+447587723897",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
