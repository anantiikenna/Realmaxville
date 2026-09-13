export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Realmaxville",
    url: "https://realmaxville.com",
    logo: "https://realmaxville.com/images/logo1.png",
    description:
      "Professional architectural design, construction, renovation and building plan services in Lagos, Nigeria. Established 2017.",
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4a, Ogombo Rd, Opp Abraham Adesanya Estate",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-808-041-9259",
      contactType: "customer service",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.instagram.com/realmaxville",
      "https://www.linkedin.com/company/realmaxville",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Realmaxville",
    image: "https://realmaxville.com/images/logo1.png",
    url: "https://realmaxville.com",
    telephone: "+234-808-041-9259",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4a, Ogombo Rd, Opp Abraham Adesanya Estate",
      addressLocality: "Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/realmaxville",
      "https://www.linkedin.com/company/realmaxville",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Realmaxville",
    url: "https://realmaxville.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://realmaxville.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
