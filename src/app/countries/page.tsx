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
      image: "/uk.webp"
    },
    {
      name: "Australia 🇦🇺",
      description: "Top-ranked universities, multicultural environment, strong job prospects.",
      image: "/Australia 🇦🇺.png"
    },
    {
      name: "Germany 🇩🇪",
      description: "Low tuition, high-quality education, opportunities in engineering and IT.",
      image: "/Germany.webp"
    },
    {
      name: "Ireland 🇮🇪",
      description: "Growing tech hub with post-study work opportunities.",
      image: "/ireland.webp"
    },
    {
      name: "Europe 🌍",
      description: "Affordable education options across leading European countries.",
      image: "/Europe.webp"
    },
    {
      name: "Dubai 🇦🇪",
      description: "Safe, modern, and fast-growing education hub.",
      image: "/Dubai.webp"
    },
    {
      name: "USA 🇺🇸",
      description: "Premier universities with flexible study programs.",
      image: "/usa.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Countries We Serve</h1>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="py-16 flex-grow bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">Explore Global Education Opportunities</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the best study abroad destinations and find the perfect fit for your academic and career goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48">
                  <Image 
                    src={country.image} 
                    alt={country.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-3">{country.name}</h3>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <motion.button 
                    className="text-primary font-medium hover:underline"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    onClick={() => window.open('https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637', '_blank')}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}