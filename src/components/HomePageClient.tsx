"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePageClient() {
  const destinations = [
    {
      name: 'UK 🇬🇧',
      description: 'World-class universities, 2-year PSW visa, diverse courses.',
      image: '/uk.webp'
    },
    {
      name: 'Australia 🇦🇺',
      description: 'Top-ranked universities, multicultural environment, strong job prospects.',
      image: '/Australia 🇦🇺.png'
    },
    {
      name: 'Germany 🇩🇪',
      description: 'Low tuition, high-quality education, opportunities in engineering and IT.',
      image: '/Germany.webp'
    },
    {
      name: 'Ireland 🇮🇪',
      description: 'Growing tech hub with post-study work opportunities.',
      image: '/ireland.webp'
    },
    {
      name: 'Europe 🌍',
      description: 'Affordable education options across leading European countries.',
      image: '/Europe.webp'
    },
    {
      name: 'Dubai 🇦🇪',
      description: 'Safe, modern, and fast-growing education hub.',
      image: '/Dubai.webp'
    },
    {
      name: 'USA 🇺🇸',
      description: 'Premier universities with flexible study programs.',
      image: '/usa.jpg'
    }
  ];

  const landmarks = [
    { name: 'Big Ben', country: 'UK', image: '/uk.webp' },
    { name: 'Sydney Opera House', country: 'Australia', image: '/Australia 🇦🇺.png' },
    { name: 'Hohenzollern Castle', country: 'Germany', image: '/Germany.webp' },
    { name: 'Cliffs of Moher', country: 'Ireland', image: '/ireland.webp' },
  ];

  const whyChooseUs = [
    { title: 'Expert Counselors', description: 'Professional guidance from experienced counselors.' },
    { title: 'Fast Processing', description: 'Quick and efficient application processing.' },
    { title: 'Transparent Guidance', description: 'Clear and honest advice throughout your journey.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Your Gateway to Global Education
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Study Abroad Made Simple
              </motion.h1>
              <motion.p
                className="text-gray-600 mb-10 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We simplify the process of studying abroad by connecting students with top universities in the UK, Australia, Germany, Ireland, Europe, Dubai, and beyond.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button 
                  className="gold-gradient text-white font-bold py-3 px-8 rounded-md text-lg hover:opacity-90 transition duration-300"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637', '_blank')}
                >
                  Book Your Consultation
                </motion.button>
                <motion.button 
                  className="bg-secondary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition duration-300"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={landmark.name}
                    className="rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-40">
                      <Image 
                        src={landmark.image} 
                        alt={landmark.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intro Line */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="text-xl text-secondary max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We simplify the process of studying abroad by connecting students with top universities in the UK, Australia, Germany, Ireland, Europe, Dubai, and beyond.
          </motion.p>
        </div>
      </motion.section>

      {/* Destinations Section */}
      <motion.section 
        className="py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-secondary mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Popular Destinations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48">
                  <Image 
                    src={destination.image} 
                    alt={destination.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center text-secondary mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 bg-primary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Book a Free Counseling Session Today!
          </motion.h2>
          <motion.p 
            className="text-xl text-white mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Take the first step towards your dream of studying abroad with our expert guidance.
          </motion.p>
          <motion.button 
            className="bg-white text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-100 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637', '_blank')}
          >
            Book Free Counseling
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}