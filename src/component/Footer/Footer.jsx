import { Facebook, Instagram, Mail, MapPin, Twitter } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'My Profile', path: '/profile' },
    { name: 'Winter Care Tips', path: '/blog' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Accessibility', path: '/accessibility' },
  ];
  return (
    <footer className="p-10 bg-[#264653] text-white mt-20 max-w-11/12 mx-auto">
      <div className="footer  grid grid-cols-2 md:grid-cols-4 gap-8">
        <aside className="col-span-2 md:col-span-1">
          <h4 className="text-3xl font-extrabold text-[#F4A261] mb-3">
            WarmPaws
          </h4>
          <p className="text-sm font-light leading-relaxed max-w-xs text-gray-300">
            Your cozy winter companion platform, dedicated to keeping your pets
            warm, safe, and healthy through the cold season.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-[#F4A261] uppercase tracking-wider mb-3 font-semibold">
            Quick Links
          </h6>
          {quickLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className="link link-hover text-sm font-light text-gray-300 hover:text-white transition duration-200 block py-1"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title text-[#F4A261] uppercase tracking-wider mb-3 font-semibold">
            Information
          </h6>
          {legalLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className="link link-hover text-sm font-light text-gray-300 hover:text-white transition duration-200 block py-1"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title text-[#F4A261] uppercase tracking-wider mb-3 font-semibold">
            Connect
          </h6>

          <div className="flex items-start mb-4 text-sm font-light text-gray-300">
            <MapPin
              size={18}
              className="text-[#F4A261] mr-2 mt-1 flex-shrink-0"
            />
            <p>
              12 Winterberry Lane, <br /> Snowdrift City, CA 90210
            </p>
          </div>
          <div className="flex items-center text-sm font-light text-gray-300">
            <Mail size={18} className="text-[#F4A261] mr-2 flex-shrink-0" />
            <p className="link link-hover">contact@warmpaws.com</p>
          </div>
          <div className="grid grid-flow-col gap-4 mt-6">
            <a
              href="#"
              className="text-white hover:text-[#F4A261] transition duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F4A261] transition duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-[#F4A261] transition duration-200"
            >
              <Instagram size={24} />
            </a>
          </div>
        </nav>
      </div>

      <div className="footer-center py-4 pt-8 border-t border-gray-700 mt-10 text-sm">
        <p className="text-gray-400">
          Copyright © {new Date().getFullYear()} - WarmPaws. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
