"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NavigationBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Countries', href: '/countries' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Journey', href: '/journey' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-premium z-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center mr-8">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/images/logo.jpeg" 
                alt="Wiseway Overseas Logo" 
                width={60} 
                height={60} 
                className="mr-3 rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold text-primary tracking-tight whitespace-nowrap">
                Wiseway<span className="text-gold ml-0.5">Overseas</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-1 items-center justify-end space-x-5 2xl:space-x-8">
            <div className="flex items-center space-x-4 xl:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[14px] 2xl:text-[15px] font-bold text-primary hover:text-gold transition-colors duration-300 relative group py-2 whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <div className="flex-shrink-0 ml-4">
              <button
                className="bg-secondary text-white py-3 px-6 rounded-premium font-bold text-[14px] shadow-lg shadow-secondary/10 whitespace-nowrap transition-all duration-300 hover:bg-primary-deep hover:scale-[1.05] active:scale-[0.98]"
                onClick={() => router.push('/contact')}
              >
                Global Consultation
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-gold transition-colors focus:outline-none p-2"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-white border-t border-gray-100 shadow-xl"
        >
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-primary hover:text-secondary hover:bg-bg-light rounded-premium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-4">
              <button
                className="bg-secondary text-white py-4 w-full rounded-premium font-bold transition-all duration-300 hover:bg-primary-deep"
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/contact');
                }}
              >
                Global Consultation
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavigationBar;