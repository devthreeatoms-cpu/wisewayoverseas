"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CountriesPage() {
  const countries = [
    {
      name: "UK 🇬🇧",
      description: "World-class universities, 2-year PSW visa, diverse courses.",
      image: "/images/uk.png"
    },
    {
      name: "Australia 🇦🇺",
      description: "Top-ranked universities, multicultural environment, strong job prospects.",
      image: "/images/australia.png"
    },
    {
      name: "Germany 🇩🇪",
      description: "Low tuition, high-quality education, opportunities in engineering and IT.",
      image: "/images/germany.png"
    },
    {
      name: "Ireland 🇮🇪",
      description: "Growing tech hub with post-study work opportunities.",
      image: "/images/ireland.png"
    },
    {
      name: "Europe 🌍",
      description: "Affordable education options across leading European countries.",
      image: "/images/europe.png"
    },
    {
      name: "Dubai 🇦🇪",
      description: "Safe, modern, and fast-growing education hub.",
      image: "/images/dubai.png"
    },
    {
      name: "USA 🇺🇸",
      description: "Premier universities with flexible study programs.",
      image: "/images/usa.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Study Destinations</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Countries Section */}
      <div className="py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Explore Your Future Abroad</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We guide you through the process of studying in some of the most prestigious education hubs in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {countries.map((country, index) => {
              return (
                <motion.div
                  key={country.name}
                  className="bg-white rounded-premium shadow-premium overflow-hidden border border-gray-100 group hover:border-secondary transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => window.open('https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637', '_blank')}
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-10 flex-grow relative">
                    {/* Gold accent underline */}
                    <div className="absolute top-0 left-10 w-12 h-1.5 bg-gold rounded-full -translate-y-1/2"></div>

                    <h3 className="text-2xl font-bold text-primary-deep mb-4 group-hover:text-secondary transition-colors">{country.name}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{country.description}</p>

                    <div className="mt-auto">
                      <span className="text-secondary font-bold text-sm uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform duration-300">
                        View Opportunities <span className="ml-2 text-gold">→</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}