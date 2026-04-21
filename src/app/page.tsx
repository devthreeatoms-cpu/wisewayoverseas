import { Metadata } from 'next';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: "Study Abroad Made Simple | Wiseway Overseas",
  description: "Your trusted partner for a hassle-free study abroad journey. We connect students with top universities in UK, Australia, Germany, Ireland, Europe, Dubai, and USA with personalized end-to-end support.",
  keywords: "study abroad, education consultancy, overseas education, student visa, university admission, UK education, Australia study, Germany universities, Ireland courses, Dubai education, USA colleges",
  metadataBase: new URL('https://wisewayoverseas.com'),
  openGraph: {
    title: "Study Abroad Made Simple | Wiseway Overseas",
    description: "Your trusted partner for a hassle-free study abroad journey. Expert guidance for UK, Australia, Germany, Ireland, Europe, Dubai, and USA.",
    url: "https://wisewayoverseas.com",
    siteName: "Wiseway Overseas",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Wiseway Overseas - Study Abroad Made Simple"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Made Simple | Wiseway Overseas",
    description: "Your trusted partner for a hassle-free study abroad journey with expert guidance.",
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