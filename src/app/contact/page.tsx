"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    destination: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a message with all the form data
    const message = `Hello, I would like to get in touch with Wiseway Overseas.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobile}%0ADestination: ${formData.destination || 'Not specified'}%0AMessage: ${formData.message || 'No message provided'}`;

    // Redirect to WhatsApp with the pre-filled message
    window.open(`https://wa.me/919666604038?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />

      {/* Banner */}
      <div className="pt-32 md:pt-40 pb-20 md:pb-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 flex-grow bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to take the next step in your global education? Our expert counselors are here to provide personalized guidance and answer all your questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <a
                href="https://maps.app.goo.gl/ZLjW6M8HFbAEnQVm7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group rounded-premium overflow-hidden shadow-premium border border-white h-[400px]"
              >
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-3 rounded-full text-primary font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View on Google Maps
                  </div>
                </div>
                <iframe
                  src="https://maps.google.com/maps?q=17.367933,78.528751&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none"
                ></iframe>
              </a>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a
                  href="mailto:teamwiseway@gmail.com"
                  className="bg-white p-8 rounded-premium shadow-premium border border-gray-50 group hover:border-gold transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-gold-light text-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-xl">✉</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                  <p className="text-gray-600">teamwiseway@gmail.com</p>
                </a>

                <a
                  href="tel:+919666604038"
                  className="bg-white p-8 rounded-premium shadow-premium border border-gray-50 group hover:border-gold transition-all duration-300 block"
                >
                  <div className="w-12 h-12 bg-gold-light text-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                  <p className="text-gray-600">+91 96666 04038</p>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-premium shadow-premium p-10 border border-gray-50">
                <h3 className="text-2xl font-bold text-primary mb-8">Send us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-primary font-bold text-sm uppercase tracking-wider mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-bg-light border border-gray-100 rounded-premium focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-black"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-primary font-bold text-sm uppercase tracking-wider mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-5 py-4 bg-bg-light border border-gray-100 rounded-premium focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-black"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="mobile" className="block text-primary font-bold text-sm uppercase tracking-wider mb-2">Mobile *</label>
                      <input
                        type="tel"
                        id="mobile"
                        required
                        placeholder="Your Mobile"
                        className="w-full px-5 py-4 bg-bg-light border border-gray-100 rounded-premium focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-black"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="destination" className="block text-primary font-bold text-sm uppercase tracking-wider mb-2">Destination</label>
                      <select
                        id="destination"
                        className="w-full px-5 py-4 bg-bg-light border border-gray-100 rounded-premium focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-black appearance-none"
                        value={formData.destination}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country</option>
                        <option value="uk">United Kingdom</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="ireland">Ireland</option>
                        <option value="europe">Europe</option>
                        <option value="dubai">Dubai</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-primary font-bold text-sm uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your plans..."
                      className="w-full px-5 py-4 bg-bg-light border border-gray-100 rounded-premium focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all text-black resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full py-5 text-lg shadow-xl shadow-gold/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message via WhatsApp
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}