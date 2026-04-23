import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wiseway Overseas - Best Study Abroad Consultancy in India",
    template: "%s | Wiseway Overseas"
  },
  description: "Wiseway Overseas is India's leading study abroad consultancy. We provide expert guidance for admissions in UK, Australia, Germany, Ireland, USA, and Europe. Start your global education journey with our personalized support.",
  keywords: "best study abroad consultancy, overseas education consultants, study in UK, study in Australia, study in Germany, student visa assistance, university admissions india, wiseway overseas, global education mentors",
  authors: [{ name: "Wiseway Overseas" }],
  creator: "Wiseway Overseas",
  publisher: "Wiseway Overseas",
  metadataBase: new URL('https://wisewayoverseas.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://wisewayoverseas.com"
  },
  openGraph: {
    title: "Wiseway Overseas - Your Trusted Partner for Study Abroad",
    description: "Expert study abroad consultancy helping students achieve their dreams of overseas education in UK, Australia, Germany, Ireland, Europe, Dubai, and USA.",
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
    title: "Wiseway Overseas - Study Abroad Made Simple",
    description: "India's premier study abroad consultancy. Expert-led admission and visa guidance.",
    images: ["/images/logo.jpeg"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // User should update this
  },
  icons: {
    icon: "/images/logo2.jpeg",
    shortcut: "/images/logo2.jpeg",
    apple: "/images/logo2.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}