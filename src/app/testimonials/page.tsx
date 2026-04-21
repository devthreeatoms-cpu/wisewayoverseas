"use client";

import NavigationBar from '@/components/NavigationBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  // Real testimonials
  const testimonials = [
    {
      name: "Karthik Patel",
      destination: "MS in Engineering, University of Toronto, Canada",
      feedback: "I couldn&apos;t have asked for better guidance. VR Aspire Abroad helped me navigate the complex application process and secured my admission to one of Canada&apos;s top universities. Forever grateful!"
    },
    {
      name: "Ananya Reddy",
      destination: "Master of Data Science, University of Melbourne, Australia",
      feedback: "From course selection to visa approval, VR Aspire Abroad was with me every step. Their expertise and personalized attention made the entire process stress-free. Thank you for making my dreams come true!"
    },
    {
      name: "Rahul Verma",
      destination: "MBA, University of Manchester, UK",
      feedback: "The team at VR Aspire Abroad was incredibly supportive. They helped me secure admission to my dream university and guided me through every step. Highly recommended for anyone planning to study abroad!"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Student Testimonials</h1>
        </div>
      </div>

      {/* Testimonials Section */}
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
            <h2 className="text-3xl font-bold text-secondary mb-4">What Our Students Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real experiences from students who achieved their study abroad dreams
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 7000 }}
              pagination={{ clickable: true }}
              navigation={true}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 flex items-center justify-center">
                        <span className="text-4xl text-gray-400">❝</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg md:text-xl italic mb-8 leading-relaxed">
                      &quot;{testimonial.feedback}&quot;
                    </p>
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-bold text-secondary">{testimonial.name}</h3>
                      <p className="text-primary font-medium mt-2">{testimonial.destination}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}