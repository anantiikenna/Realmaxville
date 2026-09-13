export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Realmaxville",
    url: "https://realmaxville.com",
    logo: "https://realmaxville.com/images/logo1.png",
    description:
      "Professional architectural design, construction, renovation and building plan services in Lagos, Nigeria. Established 2017. We sell architectural designs worldwide — Nigerian customers pay in ₦, international customers in USD.",
    foundingDate: "2017",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4a, Ogombo Rd, Opp Abraham Adesanya Estate",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-808-041-9259",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: ["NG", "US", "GB", "CA", "AE", "ZA"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "South Africa" },
    ],
    knowsAbout: [
      "Architectural Design",
      "Structural Engineering",
      "Building Construction",
      "Interior Design",
      "Renovation",
      "Building Plans",
      "Floor Plans",
      "3D Architectural Renders",
      "Commercial Architecture",
      "Residential Architecture",
    ],
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
    priceRange: "$1100 - $3200",
    currenciesAccepted: "NGN, USD",
    paymentAccepted: "Credit Card, Debit Card, Bank Transfer, Mobile Money",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "50",
      bestRating: "5",
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
    description:
      "Buy architectural designs online. Residential, commercial, and mixed-use building plans available worldwide.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://realmaxville.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Architectural Design",
    provider: {
      "@type": "Organization",
      name: "Realmaxville",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Designs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Residential Architectural Plans",
            description: "Complete residential building plans with floor plans, elevations, structural engineering, and 3D renders.",
          },
          priceCurrency: "USD",
          price: "1100-2500",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Commercial Architectural Plans",
            description: "Commercial building designs including offices, event centers, and mixed-use developments.",
          },
          priceCurrency: "USD",
          price: "2000-3200",
        },
      ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
