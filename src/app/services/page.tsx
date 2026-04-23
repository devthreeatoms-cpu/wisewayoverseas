"use client";

import NavigationBar from '@/components/NavigationBar';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: "Personalized Guidance",
      description: "Expert mentorship to align your academic strengths and career aspirations with the world's most prestigious universities."
    },
    {
      title: "Score Improvement",
      description: "Targeted coaching for IELTS, TOEFL, and PTE to unlock doors to top-ranked institutions and global opportunities."
    },
    {
      title: "Right-Fit University Shortlisting",
      description: "Data-backed selection of universities that perfectly match your profile, budget, and long-term career goals."
    },
    {
      title: "Error-Free Submissions",
      description: "Meticulous application management and refinement of SOPs and LORs to ensure your profile stands out to admission committees."
    },
    {
      title: "Smooth Approvals",
      description: "Expert guidance through complex visa documentation and interview preparation to ensure high success rates."
    },
    {
      title: "Stress-Free Relocation",
      description: "Comprehensive support for travel planning, cultural orientation, and secure accommodation scouting for a seamless transition."
    },
    {
      title: "Continuous Student Advocacy",
      description: "Ongoing mentorship and support to help you integrate and excel from the moment you land on your new campus."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-40 md:pt-48 pb-20 md:pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 flex-grow bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Expert Support for Every Step</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From initial counseling to post-arrival mentorship, we provide the strategic guidance you need to turn your global ambitions into a successful reality.
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


              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}