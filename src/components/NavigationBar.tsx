"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const NavigationBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-premium py-2' : 'bg-transparent py-4'
        }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group" aria-label="Wiseway Overseas Home">
              <div className="relative w-14 h-14 md:w-16 md:h-16 mr-3 overflow-hidden rounded-full shadow-md bg-white transition-transform duration-500 group-hover:scale-105 flex items-center justify-center p-1">
                <Image
                  src="/images/logo2.jpeg"
                  alt="Wiseway Overseas Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'}`}>
                Wiseway<span className="text-gold ml-0.5">Overseas</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex flex-1 items-center justify-end space-x-2">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-[14px] font-bold transition-all duration-300 relative group rounded-full ${scrolled
                      ? (isActive ? 'text-gold' : 'text-primary hover:text-gold')
                      : (isActive ? 'text-gold' : 'text-white hover:text-gold')
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                    <motion.span
                      className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gold rounded-full`}
                      initial={false}
                      animate={{ width: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="flex-shrink-0 ml-6">
              <button
                className="bg-gold text-white py-3 px-8 rounded-full font-bold text-[14px] shadow-lg shadow-gold/20 whitespace-nowrap transition-all duration-300 hover:bg-gold-dark hover:scale-[1.05] active:scale-[0.98]"
                onClick={() => router.push('/contact')}
                aria-label="Book Global Consultation"
              >
                Global Consultation
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-slate-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 pt-4 pb-12 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-6 py-4 text-lg font-bold rounded-premium transition-all ${pathname === link.href ? 'text-gold bg-gold-light' : 'text-primary hover:text-gold hover:bg-slate-50'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-6 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  className="btn-primary w-full py-5 text-xl"
                  onClick={() => {
                    setIsMenuOpen(false);
                    router.push('/contact');
                  }}
                >
                  Global Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;

