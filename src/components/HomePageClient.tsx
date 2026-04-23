"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePageClient() {
  const router = useRouter();
  const destinations = [
    {
      name: 'United Kingdom 🇬🇧',
      description: 'Access world-class research institutions and globally recognized degrees in a historic academic setting.',
      image: '/images/uk.png'
    },
    {
      name: 'Australia 🇦🇺',
      description: 'Benefit from cutting-edge research and a vibrant, multicultural environment with strong career prospects.',
      image: '/images/Australia.png'
    },
    {
      name: 'Germany 🇩🇪',
      description: 'Leverage exceptional engineering and technology programs with minimal tuition fees in Europe’s industrial heart.',
      image: '/images/germany.png'
    },
    {
      name: 'Ireland 🇮🇪',
      description: 'Explore opportunities in Europe’s fastest-growing tech hub with excellent post-study work pathways.',
      image: '/images/ireland.png'
    },
    {
      name: 'Europe 🌍',
      description: 'Discover diverse and affordable education options across the most influential countries in the EU.',
      image: '/images/europe.png'
    },
    {
      name: 'Dubai 🇦🇪',
      description: 'Experience modern, futuristic education in a rapidly expanding global business and tourism hub.',
      image: '/images/dubai.png'
    },
    {
      name: 'USA 🇺🇸',
      description: 'Unrivaled innovation and academic diversity at the world’s most prestigious university networks.',
      image: '/images/usa.png'
    }
  ];

  const landmarks = [
    { name: 'Heritage University Campus', country: 'UK', image: '/images/ukh.png' },
    { name: 'University Campus', country: 'Australia', image: '/images/aush.png' },
    { name: 'Classical University Campus', country: 'Germany', image: '/images/germnayhro.png' },
    { name: 'Historic University Campus', country: 'Ireland', image: '/images/irelh.png' },
  ];

  const whyChooseUs = [
    { title: 'Global Expertise', description: 'Decades of experience in navigating international education systems and admission trends.', icon: '🌍' },
    { title: 'Proven Success Rate', description: 'A track record of securing admissions and visas for even the most competitive student profiles.', icon: '📈' },
    { title: 'Unmatched Transparency', description: 'Honest, integrity-driven advice focused solely on your long-term academic and career success.', icon: '🤝' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="bg-white">
      {/* Redesigned Hero Section */}
      <section className="relative flex items-center pt-32 pb-16 overflow-hidden bg-[#001F3F]">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 blur-[140px] rounded-full -mr-96 -mt-96 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="section-container relative z-10 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-6"
              >
                <span className="text-white/90 text-sm font-semibold tracking-wide">
                  Trusted by 10,000+ Students
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Unlock Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">Global Potential</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light">
                India&apos;s premier consultancy for world-class education. Secure your admission to elite universities with expert-led mentorship.
              </p>

              <div className="flex flex-wrap gap-6">
                <button
                  className="group relative bg-gold hover:bg-gold-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 shadow-[0_20px_50px_-10px_rgba(184,134,11,0.3)] hover:shadow-gold/40 flex items-center gap-3"
                  onClick={() => router.push('/contact')}
                >
                  Start Your Journey
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
                <button
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  onClick={() => document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Destinations
                </button>
              </div>

              {/* Floating Stat Card (Mobile/Tablet subtle view) */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-gold text-3xl font-bold mb-1">98%</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Success Rate</p>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <p className="text-gold text-3xl font-bold mb-1">500+</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Universities</p>
                </div>
                <div className="border-l border-white/10 pl-8">
                  <p className="text-gold text-3xl font-bold mb-1">24/7</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Composition */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative">
                {/* Main Hero Image Frame */}
                <div className="relative w-[400px] h-[500px] mx-auto rounded-[48px] overflow-hidden border-[8px] border-white/5 shadow-2xl group">
                  <Image
                    src={landmarks[0].image}
                    alt="Study Abroad"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                </div>

                {/* Floating Glass Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-20 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gold/50">
                      <Image
                        src="/images/uk.png"
                        alt="UK"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-white font-bold text-sm">Top Choice 2024</p>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">Oxford & Cambridge application mentorship open.</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-12 bottom-32 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                    </span>
                    <p className="text-white font-bold">Live Consultation</p>
                  </div>
                  <p className="text-white/60 text-xs">Join 42 others online right now</p>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-6 block">Our Philosophy</span>
              <p className="text-3xl md:text-4xl lg:text-5xl text-primary font-bold leading-tight tracking-tight text-balance">
                &quot;We don&apos;t just process applications; we mentor the next generation of global leaders.&quot;
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-16 h-1 bg-gold rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-32 bg-bg-light relative" id="countries">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 block">World-Class Education</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">Prime Destinations</h2>
            </div>
            <p className="text-text-muted text-lg max-w-sm">
              Discover the most prestigious academic environments tailored to your career goals.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.name}
                variants={itemVariants}
                className="group relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-100 lg:opacity-90 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{destination.name}</h3>
                  <p className="text-white/90 leading-relaxed mb-4 md:mb-6 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100 text-sm md:text-base">
                    {destination.description}
                  </p>
                  <button 
                    className="flex items-center text-gold font-bold gap-2 transform translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 delay-200 text-sm md:text-base"
                    onClick={() => router.push('/countries')}
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white relative" id="why-choose-us">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Wiseway Edge</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight">Why Students <br /> Trust Us</h2>
              <p className="text-text-muted text-xl leading-relaxed mb-10">
                With a commitment to transparency and a focus on long-term success, we provide the mentorship you need to thrive.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 p-6 rounded-2xl hover:bg-bg-light transition-colors duration-300"
                  >
                    <div className="w-14 h-14 bg-white shadow-premium rounded-xl flex items-center justify-center text-3xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              className="flex items-center justify-center h-full lg:h-[600px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-bg-light border border-slate-100 p-10 md:p-14 rounded-[40px] shadow-premium relative w-full">
                {/* Quotation mark decoration */}
                <div className="absolute -top-8 -left-4 text-gold-light text-9xl opacity-40 font-serif leading-none select-none">“</div>
                
                <div className="relative z-10">
                  <p className="text-primary font-bold text-2xl md:text-3xl leading-relaxed italic mb-10">
                    &quot;The guidance I received was life-changing. I&apos;m now pursuing my Masters at University of Melbourne.&quot;
                  </p>
                  <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-200">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-2xl">R</div>
                    <div>
                      <p className="font-bold text-primary text-xl">Rahul Sharma</p>
                      <p className="text-text-muted text-sm uppercase tracking-wider font-semibold mt-1">Melbourne Alumni</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto rounded-[48px] overflow-hidden hero-gradient relative shadow-[0_40px_100px_-20px_rgba(0,31,63,0.4)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/20 blur-[150px] rounded-full -mr-300 -mt-300"></div>

          <div className="relative z-10 py-24 px-8 md:px-20 text-center">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Ready to Define Your <br />
              <span className="text-gold">Future Abroad?</span>
            </h2>
            <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t leave your international education to chance. Join 10,000+ students who achieved their dreams with Wiseway Overseas.
            </p>
            <motion.button
              className="bg-gold text-white py-6 px-16 rounded-full font-bold text-xl shadow-2xl shadow-black/20 flex items-center justify-center gap-3 mx-auto transition-all duration-300 hover:bg-gold-dark hover:scale-[1.05] active:scale-[0.98]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
            >
              Start Your Free Consultation
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}