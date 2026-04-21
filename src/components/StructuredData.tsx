import Script from 'next/script';

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "VR Aspire Abroad",
    "url": "https://vraspireabroad.com",
    "logo": "https://vraspireabroad.com/vRlogo.png",
    "description": "Your trusted partner for a hassle-free study abroad journey with personalized, end-to-end support.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "vraspireabroad@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/vraspireabroad",
      "https://www.instagram.com/vraspireabroad",
      "https://www.linkedin.com/company/vraspireabroad"
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