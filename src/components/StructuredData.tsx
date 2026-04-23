import Script from 'next/script';

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://wisewayoverseas.com/#organization",
        "name": "Wiseway Overseas",
        "url": "https://wisewayoverseas.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wisewayoverseas.com/images/logo2.jpeg",
          "width": 1200,
          "height": 630
        },
        "description": "India's premier study abroad consultancy providing expert guidance for UK, Australia, Germany, USA, and Europe.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gajams Complex, Beside Croma Electronics, Srinagar Colony, Pillar NO.1549, Dilsukhnagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500060",
          "addressCountry": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 96666 04038",
          "contactType": "customer service",
          "email": "teamwiseway@gmail.com",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi", "te"]
        },
        "sameAs": [
          "https://www.instagram.com/wiseway.overseas?utm_source=qr&igsh=aHNrb3N6NDhkenRv"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://wisewayoverseas.com/#localbusiness",
        "name": "Wiseway Overseas Hyderabad",
        "image": "https://wisewayoverseas.com/images/logo2.jpeg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Gajams Complex, Beside Croma Electronics, Srinagar Colony, Pillar NO.1549, Dilsukhnagar",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500060",
          "addressCountry": "India"
        },
        "priceRange": "$$",
        "telephone": "+91 96666 04038"
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}