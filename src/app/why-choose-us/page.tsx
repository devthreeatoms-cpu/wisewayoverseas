"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhyChooseUsPage() {
  const features = [
    {
      title: "Unmatched Transparency",
      description: "No hidden fees, no bias—just honest, integrity-driven advice focused solely on your long-term academic and career success.",
      image: "/images/transparent advice.png"
    },
    {
      title: "Global Expertise",
      description: "Decades of experience in navigating international education systems and admission trends to give you a competitive edge.",
      image: "/images/direct partnerships with global uniersities.png"
    },
    {
      title: "Proven Success Rate",
      description: "A track record of securing admissions and visas for even the most competitive student profiles at top-tier institutions.",
      image: "/images/end-end support.png"
    },
    {
      title: "1-on-1 Personalized Approach",
      description: "Every student is unique. We provide individualized attention to create a customized strategy that maximizes your chances of admission.",
      image: "/images/one-one session.png"
    },
    {
      title: "Accelerated Pathways",
      description: "Our optimized processes ensure timely submissions and faster responses, transforming a complex process into manageable milestones.",
      image: "/images/quick hassale.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-40 md:pt-56 pb-20 md:pb-32 bg-[#001F3F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full -mr-96 -mt-96 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Choose Wiseway Overseas</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
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
            <h2 className="text-3xl font-bold text-secondary mb-4">The Wiseway Advantage</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We are committed to providing exceptional mentorship and strategic support to turn your international education dreams into a reality.
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