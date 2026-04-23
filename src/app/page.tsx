import { Metadata } from 'next';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: "Trusted Study Abroad Consultancy - Wiseway Overseas",
  description: "Join 10,000+ successful students. Expert-led guidance for top universities in UK, Australia, Germany, USA & more. Get your free consultation today at Wiseway Overseas.",
  keywords: "study abroad consultancy hyderabad, overseas education, student visa UK, study in Australia from india, Germany education consultants",
  metadataBase: new URL('https://wisewayoverseas.com'),
  openGraph: {
    title: "Start Your Global Journey | Wiseway Overseas",
    description: "Expert study abroad consultancy with a 98% success rate. Your path to top global universities starts here.",
    url: "https://wisewayoverseas.com",
    siteName: "Wiseway Overseas",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Wiseway Overseas - Study Abroad Excellence"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiseway Overseas - India's Premier Study Abroad Experts",
    description: "Personalized mentorship for your international education journey.",
    images: ["/images/logo.jpeg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <HomePageClient />
      <Footer />
    </div>
  );
}