"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CountriesPage() {
  const countries = [
    {
      name: "United Kingdom 🇬🇧",
      description: "A tradition of academic excellence with globally recognized degrees, world-class research, and a vibrant cultural heritage.",
      image: "/images/uk.png"
    },
    {
      name: "Australia 🇦🇺",
      description: "Unparalleled career growth and research opportunities in a diverse, welcoming environment with a high quality of life.",
      image: "/images/Australia.png"
    },
    {
      name: "Germany 🇩🇪",
      description: "High-quality education with low-to-no tuition fees, perfect for aspirants in engineering, IT, and industrial technology.",
      image: "/images/germany.png"
    },
    {
      name: "Ireland 🇮🇪",
      description: "Europe's emerging tech hub offering specialized courses and excellent post-study work pathways in a friendly setting.",
      image: "/images/ireland.png"
    },
    {
      name: "Europe 🌍",
      description: "Continental excellence with diverse, affordable education options across the world's most influential academic centers.",
      image: "/images/europe.png"
    },
    {
      name: "Dubai 🇦🇪",
      description: "A modern, fast-growing education gateway connecting you to global business opportunities and a futuristic lifestyle.",
      image: "/images/dubai.png"
    },
    {
      name: "USA 🇺🇸",
      description: "The ultimate destination for innovation, offering diverse programs at the world's most prestigious and influential universities.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">World-Class Study Destinations</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Explore your future in the world’s most prestigious education hubs with our expert guidance and institutional insights.
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