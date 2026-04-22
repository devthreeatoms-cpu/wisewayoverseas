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
      <section className="pt-48 pb-32 hero-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none animate-pulse"></div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 block">About Wiseway Overseas</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight text-balance">Shaping Global Futures</h1>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <main className="flex-grow">
        {/* Who We Are Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Our Legacy</span>
                <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Consultancy of Excellence</h2>
                <div className="space-y-6">
                  <p className="text-text-muted text-xl leading-relaxed text-balance">
                    Wiseway Overseas is a premier global education consultancy founded on the principle that every student deserves access to world-class opportunities. We are more than just a service provider; we are your global education partners.
                  </p>
                  <p className="text-text-muted text-xl leading-relaxed text-balance">
                    With a mission to empower students through transparent, results-driven mentorship, we have helped thousands of aspirants secure admissions in top-tier institutions worldwide. Our team combines deep industry knowledge with a student-first approach.
                  </p>
                </div>
                
                <div className="mt-12 flex flex-wrap gap-8">
                  <div className="p-6 rounded-2xl bg-bg-light border border-slate-100 min-w-[200px]">
                    <p className="text-4xl font-bold text-primary mb-1">10k+</p>
                    <p className="text-gold text-sm font-bold uppercase tracking-wider">Students Guided</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-bg-light border border-slate-100 min-w-[200px]">
                    <p className="text-4xl font-bold text-primary mb-1">98%</p>
                    <p className="text-gold text-sm font-bold uppercase tracking-wider">Success Rate</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute -inset-4 border-2 border-gold/10 rounded-[40px] pointer-events-none transition-all duration-700 group-hover:-inset-8"></div>
                <div className="rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative h-[500px]">
                  <Image
                    src="/images/about us.png"
                    alt="Our Team"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-32 bg-bg-light relative">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="bg-white p-12 rounded-[32px] shadow-premium border border-slate-100 group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gold-light rounded-2xl flex items-center justify-center mb-8 shadow-inner transform transition-transform group-hover:rotate-3">
                  <span className="text-gold text-4xl font-bold">M</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-text-muted text-xl leading-relaxed">
                  To empower aspiring students by dismantling the barriers to global education through transparency, expert guidance, and unwavering advocacy.
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-12 rounded-[32px] shadow-premium border border-slate-100 group hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-gold-light rounded-2xl flex items-center justify-center mb-8 shadow-inner transform transition-transform group-hover:-rotate-3">
                  <span className="text-gold text-4xl font-bold">V</span>
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-text-muted text-xl leading-relaxed">
                  To be the global benchmark for excellence in overseas consultancy, recognized for our integrity and the transformative success of our students.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-32 bg-white">
          <div className="section-container text-center">
            <span className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Foundation</span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-24 tracking-tight">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { t: 'Unmatched Transparency', d: 'No hidden fees, no bias—just honest, integrity-driven advice focused solely on your success.', i: 'T' },
                { t: 'Global Expertise', d: 'Decades of experience in navigating international education systems and admission trends.', i: 'E' },
                { t: 'Student-First Approach', d: 'Placing your unique aspirations and long-term goals at the center of every decision.', i: 'S' }
              ].map((val, idx) => (
                <motion.div
                  key={val.t}
                  className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-premium hover:shadow-premium-hover hover:border-gold/30 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-primary-deep w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:bg-gold transition-all duration-500 transform group-hover:scale-110">
                    <span className="text-white text-3xl font-bold">{val.i}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gold transition-colors">{val.t}</h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {val.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}