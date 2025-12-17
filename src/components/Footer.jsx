import React from 'react';

/**
 * Generic Footer Component
 * @param {Object} props
 * @param {string} props.copyright - Copyright text
 * @param {Array} props.links - Array of link objects with 'label' and 'href'
 * @param {Array} props.socialLinks - Array of social link objects with 'icon' and 'href'
 * @param {string} props.className - Additional CSS classes
 */
const Footer = ({
  copyright = '© 2024 Portfolio. All rights reserved.',
  links = [],
  socialLinks = [],
  className = '',
  ...props
}) => {
  return (
    <footer className={`bg-gray-800 text-white py-8 ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">{copyright}</p>
          </div>
          
          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
