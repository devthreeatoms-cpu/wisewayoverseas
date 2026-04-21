"use client";

import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
    const message = `Hello, I would like to get in touch with VR Aspire Abroad.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMobile: ${formData.mobile}%0ADestination: ${formData.destination || 'Not specified'}%0AMessage: ${formData.message || 'No message provided'}`;
    
    // Redirect to WhatsApp with the pre-filled message
    window.open(`https://wa.me/918367628807?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavigationBar />
      
      {/* Banner */}
      <div className="pt-24 pb-16 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Have questions about studying abroad? Reach out to us and our expert counselors will guide you through the process.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mb-8 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.365!2d79.4239998!3d17.1647835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA5JzUzLjIiTiA3OcKwMjUnMzUuNyJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="rounded-xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Contact Information</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Email:</span> vraspireabroad@gmail.com
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">UK Phone/WhatsApp:</span> +447721163423
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">India Phone/WhatsApp:</span> +918367528807
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-medium">Location:</span>{' '}
                    <a 
                      href="https://www.google.com/maps/place/17%C2%B009'53.2%22N+79%C2%B025'35.7%22E/@17.1647835,79.4239998,775m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.1647835!4d79.4265747?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://www.facebook.com/share/1E798HM5rN/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image 
                        src="/facebook.png" 
                        alt="Facebook" 
                        width={20} 
                        height={20} 
                      />
                    </motion.a>
                    <motion.a 
                      href="https://www.instagram.com/vraspire_abroad?igsh=MXE4ZWg2Y3A1ZzViMA%3D%3D&utm_source=qr" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image 
                        src="/instagram.png" 
                        alt="Instagram" 
                        width={20} 
                        height={20} 
                      />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Image 
                        src="/linkedin.png" 
                        alt="LinkedIn" 
                        width={20} 
                        height={20} 
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-md p-8 border border-gray-100"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <label htmlFor="destination" className="block text-gray-700 font-medium mb-2">Destination Country</label>
                    <select
                      id="destination"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                      value={formData.destination}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a country</option>
                      <option value="uk">United Kingdom</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="ireland">Ireland</option>
                      <option value="europe">Europe</option>
                      <option value="dubai">Dubai</option>
                      <option value="usa">USA</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Query / Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}