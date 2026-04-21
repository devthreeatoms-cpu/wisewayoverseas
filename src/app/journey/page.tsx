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
      image: "/1_Counseling & Profile Assessment_Initial consultation to understand your academic background, career goals, and study preferences..jpg"
    },
    {
      title: "Test Preparation",
      description: "Comprehensive preparation support for IELTS, TOEFL, or Duolingo English Test to achieve target scores.",
      image: "/2_Test Preparation_Comprehensive preparation support for IELTS, TOEFL, or Duolingo English Test to achieve target scores..jpg"
    },
    {
      title: "Course & University Shortlisting",
      description: "Identifying the best-fit universities and programs based on your profile and aspirations.",
      image: "/Course & University Shortlisting_Identifying the best-fit universities and programs based on your profile and aspirations..jpg"
    },
    {
      title: "Application Submission",
      description: "Assistance with application forms, SOP, LOR, CV, and all required documents for submission.",
      image: "/Application Submission_Assistance with application forms, SOP, LOR, CV, and all required documents for submission..jpg"
    },
    {
      title: "Offer Letter & Tuition Fee Payment",
      description: "Guidance through offer acceptance process and tuition fee payment procedures.",
      image: "/Offer Letter & Tuition Fee Payment_Guidance through offer acceptance process and tuition fee payment procedures..jpg"
    },
    {
      title: "Visa Filing",
      description: "Complete visa application support with document preparation and interview guidance.",
      image: "/6_Visa Filing_Complete visa application support with document preparation and interview guidance..jpg"
    },
    {
      title: "Pre-departure Support",
      description: "Essential preparations including travel arrangements, accommodation, and cultural orientation.",
      image: "/Pre-departure Support_Essential preparations including travel arrangements, accommodation, and cultural orientation..jpg"
    },
    {
      title: "Fly Abroad ✈",
      description: "Final assistance with airport pickup and settling in at your destination.",
      image: "/Fly Abroad ✈_Final assistance with airport pickup and settling in at your destination..jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Your Study Abroad Journey</h1>
        </div>
      </div>

      {/* Journey Steps */}
      <div className="py-16 flex-grow bg-gray-50">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">Step-by-Step Process</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We guide you through every stage of your study abroad journey with expert support and personalized attention.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden lg:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}