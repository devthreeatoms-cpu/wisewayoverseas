'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ThreeAtomsModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
    onClick={onClose}
  >
    <div
      className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="bg-primary-deep p-7 relative flex flex-col items-center">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all text-lg leading-none"
        >
          ✕
        </button>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">Three</span>
          <span className="text-2xl font-bold tracking-tight text-gold">Atoms</span>
        </div>
        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Premium Software</p>
      </div>

      {/* Body */}
      <div className="bg-white p-7 space-y-6">
        <p className="text-gray-700 leading-relaxed text-[15px]">
          This particular website software is developed by{' '}
          <strong className="text-gray-900">ThreeAtoms</strong>. We specialize in building custom
          software, <strong className="text-gray-900">AI Agents</strong>, and{' '}
          <strong className="text-gray-900">AI Automations</strong>. Let&apos;s build something
          elite.
        </p>

        <div className="space-y-3">
          {/* Call Button */}
          <a
            href="tel:+917981596550"
            className="flex items-center justify-center gap-3 w-full py-3 px-5 bg-primary text-white font-semibold rounded-xl transition-all hover:bg-secondary text-sm sm:text-base"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call +91 79815 96550
          </a>

          {/* Website Button */}
          <a
            href="https://www.threeatoms.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-5 bg-transparent border border-primary/30 text-primary font-semibold rounded-xl transition-all hover:border-primary hover:bg-primary/5 text-sm sm:text-base"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Visit threeatoms.com
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917981596550?text=Hello%20ThreeAtoms!%20I%20have%20a%20website%20requirement.%20Please%20get%20in%20touch."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 px-5 bg-[#25D366]/10 border border-[#25D366]/40 text-[#128C7E] font-semibold rounded-xl transition-all hover:bg-[#25D366]/20 text-sm sm:text-base"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0 text-[#25D366]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
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
    <footer className="bg-primary-deep text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-20">
          {/* About */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/images/logo2.jpeg"
                  alt="Wiseway Overseas Logo"
                  width={65}
                  height={65}
                  className="rounded-full border-2 border-gold/30 p-0.5 group-hover:border-gold transition-colors duration-300"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight ml-4">
                Wiseway<span className="text-gold">Overseas</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-lg max-w-xs">
              Wiseway Overseas is a premier study abroad consultancy dedicated to bridging the gap between student ambitions and global excellence through trusted, end-to-end guidance.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'mail', href: 'mailto:teamwiseway@gmail.com', color: 'hover:bg-red-600', isSvg: true },
                { name: 'instagram', href: 'https://www.instagram.com/wiseway.overseas?utm_source=qr&igsh=aHNrb3N6NDhkenRv', color: 'hover:bg-pink-600' },
                { name: 'linkedin', href: '#', color: 'hover:bg-blue-700' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 border border-white/10`}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.isSvg ? (
                    <svg className="w-5 h-5 text-white opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  ) : (
                    <Image src={`/${social.name}.png`} alt={social.name} width={20} height={20} className="invert opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full"></span>
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-gold transition-colors duration-300 flex items-center group text-[15px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-2 group-hover:bg-gold transition-all"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-4">
            <h3 className="text-xl font-bold mb-8 text-white relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 mt-0.5 border border-white/10 group-hover:border-gold/30 transition-all">
                  <span className="text-gold text-lg">✉</span>
                </div>
                <a href="mailto:teamwiseway@gmail.com" className="block">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-white/80 group-hover:text-gold transition-colors break-all">teamwiseway@gmail.com</p>
                </a>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 mt-0.5 border border-white/10 group-hover:border-gold/30 transition-all">
                  <span className="text-gold text-lg">📞</span>
                </div>
                <a href="tel:+919666604038" className="block">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-white/80 group-hover:text-gold transition-colors">+91 96666 04038</p>
                </a>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 mt-0.5 border border-white/10 group-hover:border-gold/30 transition-all">
                  <span className="text-gold text-lg">📍</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/ZLjW6M8HFbAEnQVm7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Office Location</p>
                  <p className="text-white/80 leading-relaxed text-sm group-hover:text-gold transition-colors">
                    Gajams Complex, Beside Croma Electronics,<br />
                    Srinagar Colony, Pillar NO.1549, Dilsukhnagar,<br />
                    Hyderabad, Telangana, 500060
                  </p>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white relative inline-block">
              Stay Informed
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full"></span>
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">Subscribe to receive the latest insights on global education trends and visa updates.</p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-premium focus:outline-none focus:border-gold focus:bg-white/10 transition-all text-white"
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4 shadow-xl shadow-gold/10">Subscribe Now</button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="text-white/30 text-sm italic">
            &copy; {new Date().getFullYear()} Wiseway Overseas. All Rights Reserved.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-white/20 text-[10px] md:text-[11px] uppercase tracking-widest font-bold hover:text-white/60 transition-colors duration-300 cursor-pointer"
          >
            Developed by <span className="text-gold/40 hover:text-gold transition-colors">THREEATOMS</span>
          </button>
        </div>
      </div>

      {isOpen && <ThreeAtomsModal onClose={() => setIsOpen(false)} />}
    </footer>
  );
};

export default Footer;
