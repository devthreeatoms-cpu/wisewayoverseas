import { Metadata } from 'next';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: "Study Abroad Made Simple | VR Aspire Abroad",
  description: "Your trusted partner for a hassle-free study abroad journey. We connect students with top universities in UK, Australia, Germany, Ireland, Europe, Dubai, and USA with personalized end-to-end support.",
  keywords: "study abroad, education consultancy, overseas education, student visa, university admission, UK education, Australia study, Germany universities, Ireland courses, Dubai education, USA colleges",
  metadataBase: new URL('https://vraspireabroad.com'),
  openGraph: {
    title: "Study Abroad Made Simple | VR Aspire Abroad",
    description: "Your trusted partner for a hassle-free study abroad journey. Expert guidance for UK, Australia, Germany, Ireland, Europe, Dubai, and USA.",
    url: "https://vraspireabroad.com",
    siteName: "VR Aspire Abroad",
    images: [
      {
        url: "/vRlogo.png",
        width: 1200,
        height: 630,
        alt: "VR Aspire Abroad - Study Abroad Made Simple"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad Made Simple | VR Aspire Abroad",
    description: "Your trusted partner for a hassle-free study abroad journey with expert guidance.",
    images: ["/vRlogo.png"],
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