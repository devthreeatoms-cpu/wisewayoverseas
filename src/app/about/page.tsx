"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-grow">
        {/* Who We Are Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-primary mb-8 tracking-tight">Who We Are</h2>
                <div className="space-y-6">
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Wiseway Overseas is a consultancy dedicated to helping students achieve their dreams of studying overseas.
                    We provide transparent, student-first services with end-to-end support.
                  </p>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Our team of experienced counselors understands the challenges students face when navigating the complex
                    process of studying abroad, and we are committed to making this journey as smooth and successful as possible.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute -inset-4 border-2 border-gold/20 rounded-premium pointer-events-none transition-all duration-500 group-hover:-inset-6"></div>
                <div className="rounded-premium overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about us.png"
                    alt="Students or consultation meeting"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 md:py-32 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-12 rounded-premium shadow-premium border border-gray-100 group hover:border-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <span className="text-gold text-3xl font-bold italic">M</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  To make global education accessible, affordable, and simple for every aspiring student.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-12 rounded-premium shadow-premium border border-gray-100 group hover:border-gold transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mb-8 shadow-inner">
                  <span className="text-gold text-3xl font-bold italic">V</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  To be the most trusted consultancy guiding students toward global success and lifelong achievement.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary mb-20 tracking-tight">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { t: 'Transparency', d: 'We believe in clear communication and honest guidance throughout your study abroad journey.', i: 'T' },
                { t: 'Integrity', d: 'We uphold the highest ethical standards in all our dealings with students and partners.', i: 'I' },
                { t: 'Student-Centric', d: 'Every decision we make is focused on what’s best for our students and their future.', i: 'S' }
              ].map((val, idx) => (
                <motion.div
                  key={val.t}
                  className="card-premium p-10 hover:border-gold group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-primary-deep w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-gold transition-colors duration-500">
                    <span className="text-white text-3xl font-bold">{val.i}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{val.t}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {val.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}