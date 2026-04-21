"use client";

import NavigationBar from '@/components/NavigationBar';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "University Selection",
      description: "We help you choose the right universities based on your academic profile, career goals, and personal preferences."
    },
    {
      title: "Application Guidance",
      description: "Expert assistance with SOP, LOR, CV preparation and application submission to ensure maximum acceptance chances."
    },
    {
      title: "Test Prep Support",
      description: "Comprehensive preparation support for IELTS, TOEFL, and Duolingo English Test to achieve your target scores."
    },
    {
      title: "Visa Assistance",
      description: "End-to-end visa application support with document preparation and interview guidance."
    },
    {
      title: "Scholarship & Funding Advice",
      description: "Identify and apply for scholarships and financial aid opportunities to make your education more affordable."
    },
    {
      title: "Pre-departure & Accommodation",
      description: "Guidance on travel arrangements, accommodation options, and essential preparations before departure."
    },
    {
      title: "Post-arrival Support",
      description: "Assistance with settling in, airport pickup, and ongoing support during your initial period abroad."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 flex-grow bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Comprehensive Study Abroad Support</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From initial counseling to post-arrival support, we provide end-to-end services to ensure your study abroad journey is smooth and successful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-10 rounded-premium border border-gray-100 shadow-premium transition-all duration-300 hover:border-secondary group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-light/20 rounded-bl-full translate-x-8 -translate-y-8 group-hover:bg-secondary/10 transition-colors duration-500"></div>

                <div className="w-16 h-16 bg-primary-deep text-white rounded-premium flex items-center justify-center mb-8 shadow-lg group-hover:bg-gold transition-colors duration-500">
                  <span className="text-2xl font-bold italic">{service.title.charAt(0)}</span>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>

                <div className="mt-8 flex items-center text-secondary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Learn More <span className="ml-2">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}