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
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">About Us</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16 flex-grow bg-gray-50">
        {/* Who We Are Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Who We Are
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                VR Aspire Abroad is a consultancy dedicated to helping students achieve their dreams of studying overseas. 
                We provide transparent, student-first services with end-to-end support.
              </motion.p>
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our team of experienced counselors understands the challenges students face when navigating the complex 
                process of studying abroad, and we are committed to making this journey as smooth and successful as possible.
              </motion.p>
            </div>
            <motion.div 
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image 
                src="/Students or consultation meeting image.jpg" 
                alt="Students or consultation meeting" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="rounded-xl overflow-hidden order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image 
                src="/Our Mission_To make global education accessible, affordable, and simple.jpg" 
                alt="Our Mission" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                To make global education accessible, affordable, and simple.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg">
                To be the most trusted consultancy guiding students toward global success.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image 
                src="/Our Vision To be the most trusted consultancy guiding students toward global success. a image like helping students.jpg" 
                alt="Our Vision" 
                width={600} 
                height={400} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-secondary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">T</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in clear communication and honest guidance throughout your study abroad journey.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">I</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our dealings with students and partners.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">S</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Student-Centric Approach</h3>
              <p className="text-gray-600">
                Every decision we make is focused on what{`'`}s best for our students and their future.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}