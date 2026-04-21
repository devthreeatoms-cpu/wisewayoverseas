"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Direct Partnerships with Global Universities",
      description: "We have established direct connections with universities worldwide, ensuring you get accurate information and streamlined application processes.",
      image: "/Direct Partnerships with Global Universities_We have established direct connections with universities worldwide, ensuring you get accurate information and streamlined application processes. (1).jpg"
    },
    {
      title: "Transparent, Commission-Free Guidance",
      description: "Our advice is completely unbiased and transparent. We don't earn commissions from universities, so our recommendations are solely based on your best interests.",
      image: "/Transparent, Commission-Free Guidance_Our advice is completely unbiased and transparent. We don't earn commissions from universities, so our recommendations are solely based on your best interests.jpg"
    },
    {
      title: "End-to-End Support",
      description: "From initial counseling to post-arrival support, we guide you through every step of your study abroad journey.",
      image: "/End-to-End Support_From initial counseling to post-arrival support, we guide you through every step of your study abroad journey..jpg"
    },
    {
      title: "Personalized, One-on-One Sessions",
      description: "We provide individualized attention to understand your unique goals and create a customized roadmap for your success.",
      image: "/Personalized, One-on-One Sessions_We provide individualized attention to understand your unique goals and create a customized roadmap for your success..jpg"
    },
    {
      title: "Quick and Hassle-Free Processing",
      description: "Our efficient processes ensure timely submissions and faster responses, reducing your wait time and anxiety.",
      image: "/Quick and Hassle-Free Processing_Our efficient processes ensure timely submissions and faster responses, reducing your wait time and anxiety..jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Why Choose VR Aspire Abroad</h1>
        </div>
      </div>

      {/* Features Section */}
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
            <h2 className="text-3xl font-bold text-secondary mb-4">What Sets Us Apart</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We are committed to providing exceptional service and support to make your study abroad dreams a reality.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div 
                  className="flex-1 rounded-xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}