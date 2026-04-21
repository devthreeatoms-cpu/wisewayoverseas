import Script from 'next/script';

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Wiseway Overseas",
    "url": "https://wisewayoverseas.com",
    "logo": "https://wisewayoverseas.com/images/logo.jpeg",
    "description": "Your trusted partner for a hassle-free study abroad journey with personalized, end-to-end support.",
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
      "email": "teamwiseway@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/wiseway.overseas?utm_source=qr&igsh=aHNrb3N6NDhkenRv"
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