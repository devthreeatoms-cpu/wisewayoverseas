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
      feedback: "I couldn&apos;t have asked for better guidance. Wiseway Overseas helped me navigate the complex application process and secured my admission to one of Canada&apos;s top universities. Forever grateful!"
    },
    {
      name: "Ananya Reddy",
      destination: "Master of Data Science, University of Melbourne, Australia",
      feedback: "From course selection to visa approval, Wiseway Overseas was with me every step. Their expertise and personalized attention made the entire process stress-free. Thank you for making my dreams come true!"
    },
    {
      name: "Rahul Verma",
      destination: "MBA, University of Manchester, UK",
      feedback: "The team at Wiseway Overseas was incredibly supportive. They helped me secure admission to my dream university and guided me through every step. Highly recommended for anyone planning to study abroad!"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Student Testimonials</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 flex-grow">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Real experiences from students who achieved their study abroad dreams with Wiseway Overseas.
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
              className="testimonial-swiper !pb-16"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="bg-white rounded-premium shadow-premium p-10 md:p-16 text-center border border-gray-100 relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {/* Premium Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-premium flex items-center justify-center border border-gray-50">
                      <span className="text-4xl text-gold font-serif leading-none mt-4">“</span>
                    </div>

                    <p className="text-gray-700 text-xl md:text-2xl italic mb-10 leading-relaxed font-medium">
                      &quot;{testimonial.feedback}&quot;
                    </p>

                    <div className="w-16 h-1 bg-gold/20 mx-auto mb-8 rounded-full"></div>

                    <div className="pt-2">
                      <h3 className="text-2xl font-bold text-primary mb-2 tracking-tight">{testimonial.name}</h3>
                      <p className="text-secondary font-semibold uppercase tracking-widest text-sm">{testimonial.destination}</p>
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