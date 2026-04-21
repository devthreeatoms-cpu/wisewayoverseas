"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JourneyPage() {
  const steps = [
    {
      title: "Counseling & Profile Assessment",
      description: "Initial consultation to understand your academic background, career goals, and study preferences.",
      image: "/images/counseling.png"
    },
    {
      title: "Test Preparation",
      description: "Comprehensive preparation support for IELTS, TOEFL, or Duolingo English Test to achieve target scores.",
      image: "/images/test preparation.png"
    },
    {
      title: "Course & University Shortlisting",
      description: "Identifying the best-fit universities and programs based on your profile and aspirations.",
      image: "/images/couseanduniversityshorlist.png"
    },
    {
      title: "Application Submission",
      description: "Assistance with application forms, SOP, LOR, CV, and all required documents for submission.",
      image: "/images/application submission.png"
    },
    {
      title: "Offer Letter & Tuition Fee Payment",
      description: "Guidance through offer acceptance process and tuition fee payment procedures.",
      image: "/images/offer letter.png"
    },
    {
      title: "Visa Filing",
      description: "Complete visa application support with document preparation and interview guidance.",
      image: "/images/visa filling.png"
    },
    {
      title: "Pre-departure Support",
      description: "Essential preparations including travel arrangements, accommodation, and cultural orientation.",
      image: "/images/predeparture.png"
    },
    {
      title: "Fly Abroad ✈",
      description: "Final assistance with airport pickup and settling in at your destination.",
      image: "/images/fly abroad.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Your Journey</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="py-24 flex-grow bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Step-by-Step Path to Your Success</h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              We guide you through every stage of your study abroad journey, ensuring a smooth and hassle-free experience.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gold-light/30 -translate-x-1/2"></div>

            <div className="space-y-20">
              {steps.map((step, index) => {
                return (
                  <motion.div
                    key={step.title}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="flex-1 lg:text-right lg:pr-16"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <h3 className="text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>

                    {/* Circle for mobile */}
                    <motion.div
                      className="lg:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-white font-bold flex items-center justify-center w-full h-full">
                        {index + 1}
                      </span>
                    </motion.div>

                    {/* Circle for desktop */}
                    <motion.div
                      className="hidden lg:block w-12 h-12 rounded-full bg-primary absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="text-white font-bold flex items-center justify-center w-full h-full">
                        {index + 1}
                      </span>
                    </motion.div>

                    <motion.div
                      className="flex-1 lg:pl-16 rounded-xl overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}