"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
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
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/vRlogo.png" 
                alt="VR Aspire Abroad Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-xl font-bold text-secondary">
                VR Aspire Abroad
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary hover-grow transition duration-300"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
            >
              Book Free Counseling
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1vHxcmILU7vUN5-fcUxMf7ARn2OQYCZVI3b4AASSkAHo/viewform?ts=68d18637"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-white bg-primary hover:bg-opacity-90 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Free Counseling
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;