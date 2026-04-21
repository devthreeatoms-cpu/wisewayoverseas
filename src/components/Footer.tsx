import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
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
                  src="/images/logo.jpeg"
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
              Your trusted partner for a hassle-free study abroad journey with personalized, end-to-end support.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'facebook', href: '#', color: 'hover:bg-blue-600' },
                { name: 'instagram', href: 'https://www.instagram.com/wiseway.overseas?utm_source=qr&igsh=aHNrb3N6NDhkenRv', color: 'hover:bg-pink-600' },
                { name: 'linkedin', href: '#', color: 'hover:bg-blue-700' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 border border-white/10`}
                >
                  <span className="sr-only">{social.name}</span>
                  <Image src={`/${social.name}.png`} alt={social.name} width={20} height={20} className="invert opacity-70 group-hover:opacity-100" />
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
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
                  <p className="text-white/80 group-hover:text-gold transition-colors break-all">teamwiseway@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 mt-0.5 border border-white/10 group-hover:border-gold/30 transition-all">
                  <span className="text-gold text-lg">📞</span>
                </div>
                <div>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-white/80 group-hover:text-gold transition-colors">+91 96666 04038</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mr-4 mt-0.5 border border-white/10 group-hover:border-gold/30 transition-all">
                  <span className="text-gold text-lg">📍</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Gajams+Complex+Beside+Croma+Electronics+Srinagar+Colony+Pillar+NO.1549+Dilsukhnagar+Hyderabad+Telangana+India+Pincode-500060"
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
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full"></span>
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">Subscribe for the latest global education updates and visa news.</p>
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
          <div className="text-white/20 text-[11px] uppercase tracking-widest font-bold">
            Designed & Developed by
            <a href="https://www.threeatoms.com" target="_blank" rel="dofollow" className="text-gold/40 hover:text-gold ml-2 transition-colors">ThreeAtoms</a>
            <span className="mx-3 opacity-30">•</span>
            <a href="https://wa.me/918179247099" target="_blank" className="text-white/20 hover:text-white transition-colors">+91 81792 47099</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;