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
    { title: 'Global Expertise', description: 'Decades of experience in navigating international education systems and admission trends.' },
    { title: 'Proven Success Rate', description: 'A track record of securing admissions and visas for even the most competitive student profiles.' },
    { title: 'Unmatched Transparency', description: 'Honest, integrity-driven advice focused solely on your long-term academic and career success.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative pt-32 pb-24 md:pt-48 md:pb-40 hero-gradient overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Subtle Glow Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center bg-gold/20 text-gold-light border border-gold/30 px-5 py-1.5 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm"
              >
                <span className="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></span>
                Your Global Ambition, Our Expert Guidance
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]"
              >
                Navigate Your Path To <br />
                <span className="text-gold">Global Excellence</span>
              </motion.h1>
              <motion.p
                className="text-white/80 mb-12 text-xl max-w-xl leading-relaxed"
              >
                Gain admission to the world&apos;s most prestigious universities with India&apos;s most trusted study abroad partner. Secure your future with personalized mentorship and end-to-end support.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  className="btn-primary py-4 px-10 text-lg shadow-xl shadow-black/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                >
                  Book Your Free Consultation
                </motion.button>
                <motion.button
                  className="btn-outline py-4 px-10 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                >
                  Explore Destinations
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-6 relative">
                {/* Decorative background shape */}
                <div className="absolute inset-0 border-2 border-gold/20 rounded-premium -m-4 pointer-events-none"></div>

                {landmarks.map((landmark, index) => (
                  <motion.div
                    key={landmark.name}
                    className="rounded-premium overflow-hidden shadow-2xl relative group h-48 md:h-64"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index + 0.6 }}
                  >
                    <Image
                      src={landmark.image}
                      alt={landmark.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-bold">{landmark.name}, {landmark.country}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intro Line Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <p className="text-2xl md:text-3xl text-primary font-medium max-w-4xl mx-auto leading-relaxed italic">
              &quot;At Wiseway Overseas, we don&apos;t just process applications; we mentor the next generation of global leaders, ensuring every student has the tools to thrive in the world&apos;s most prestigious academic environments.&quot;
            </p>
            <div className="absolute -left-8 -top-8 text-gold-light text-8xl opacity-30 select-none font-serif">“</div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-32 bg-bg-light" id="countries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Study Destinations</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="bg-white rounded-premium shadow-premium overflow-hidden group border border-gray-100 hover:border-secondary transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-deep mb-3 group-hover:text-secondary transition-colors">{destination.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Choose Us</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-10 rounded-premium border border-transparent hover:border-gold-light transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-gold-light w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <span className="text-gold text-4xl font-bold italic">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto rounded-[32px] overflow-hidden hero-gradient relative shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)] bg-[length:40px_40px]"></div>

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Your Global Success <span className="text-gold">Starts Here</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Don&apos;t leave your international education to chance. Partner with experts who care about your future and start your journey today.
            </p>
            <motion.button
              className="bg-secondary text-white py-5 px-12 rounded-premium font-bold text-xl shadow-xl transition-all duration-300 hover:bg-primary-deep hover:scale-[1.05] active:scale-[0.98]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}