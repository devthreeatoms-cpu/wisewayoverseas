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
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Our Services</h1>
        </div>
      </div>

      {/* Services Grid */}
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
            <h2 className="text-3xl font-bold text-secondary mb-4">Comprehensive Study Abroad Support</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From initial counseling to post-arrival support, we provide end-to-end services to ensure your study abroad journey is smooth and successful.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}