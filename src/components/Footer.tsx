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
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/vRlogo.png" 
                alt="VR Aspire Abroad Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <h3 className="text-xl font-bold">VR Aspire Abroad</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for a hassle-free study abroad journey with personalized, end-to-end support.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1E798HM5rN/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300">
                <span className="sr-only">Facebook</span>
                <Image 
                  src="/facebook.png" 
                  alt="Facebook" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6 invert"
                />
              </a>
              <a href="https://www.instagram.com/vraspire_abroad?igsh=MXE4ZWg2Y3A1ZzViMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
                <span className="sr-only">Instagram</span>
                <Image 
                  src="/instagram.png" 
                  alt="Instagram" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6 invert"
                />
              </a>
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <Image 
                  src="/linkedin.png" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6 invert"
                />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: vraspireabroad@gmail.com</li>
              <li>UK Phone/WhatsApp: +447721163423</li>
              <li>India Phone/WhatsApp: +918367528807</li>
              <li>
                Location:{' '}
                <a 
                  href="https://www.google.com/maps/place/17%C2%B009'53.2%22N+79%C2%B025'35.7%22E/@17.1647835,79.4239998,775m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.1647835!4d79.4265747?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and study abroad opportunities.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 VR Aspire Abroad. All Rights Reserved.</p>
          
          {/* Added footer content */}
          <div className="mt-4 text-sm">
            <footer style={{textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '14px'}}>
              Designed & Developed by 
              <a href="https://www.threeatoms.com" target="_blank" rel="dofollow" style={{color: '#5c64f4', textDecoration: 'none', marginLeft: '4px', marginRight: '4px'}}>
                ThreeAtoms
              </a>
              – 
              <a href="https://wa.me/918179247099?text=Hello%20ThreeAtoms%2C%20I%20have%20seen%20one%20of%20your%20developed%20websites%20and%20I%20am%20contacting%20you%20because%20I%20am%20looking%20for%20a%20website%20for%20my%20business." 
                 target="_blank" 
                 style={{color: '#25D366', textDecoration: 'none', marginLeft: '4px'}}>
                +91 8179247099
              </a>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;