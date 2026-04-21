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
    default: "VR Aspire Abroad - Your Trusted Partner for Study Abroad",
    template: "%s | VR Aspire Abroad"
  },
  description: "We simplify your study abroad process with personalized, end-to-end support to help you pursue higher education across the world. Expert guidance for UK, Australia, Germany, Ireland, Europe, Dubai, and USA.",
  keywords: "study abroad, education consultancy, overseas education, student visa, university admission, UK education, Australia study, Germany universities, Ireland courses, Dubai education, USA colleges",
  authors: [{ name: "VR Aspire Abroad" }],
  creator: "VR Aspire Abroad",
  publisher: "VR Aspire Abroad",
  metadataBase: new URL('https://vraspireabroad.com'),
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
    canonical: "https://vraspireabroad.com"
  },
  openGraph: {
    title: "VR Aspire Abroad - Your Trusted Partner for Study Abroad",
    description: "Expert study abroad consultancy helping students achieve their dreams of overseas education in UK, Australia, Germany, Ireland, Europe, Dubai, and USA.",
    url: "https://vraspireabroad.com",
    siteName: "VR Aspire Abroad",
    images: [
      {
        url: "/vRlogo.png",
        width: 1200,
        height: 630,
        alt: "VR Aspire Abroad Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Aspire Abroad - Study Abroad Made Simple",
    description: "Expert study abroad consultancy helping students achieve their dreams of overseas education.",
    images: ["/vRlogo.png"],
  },
  verification: {
    google: "",
  },
  icons: {
    icon: "/vRlogo.png",
    shortcut: "/vRlogo.png",
    apple: "/vRlogo.png",
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