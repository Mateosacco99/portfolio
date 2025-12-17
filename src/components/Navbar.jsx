import React, { useState } from 'react';

/**
 * Generic Navbar Component
 * @param {Object} props
 * @param {string} props.logo - Logo text or path
 * @param {Array} props.links - Array of link objects with 'label' and 'href'
 * @param {React.ReactNode} props.actions - Additional actions (e.g., buttons)
 * @param {string} props.className - Additional CSS classes
 */
const Navbar = ({
  logo = 'Portfolio',
  links = [],
  actions,
  className = '',
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className={`bg-white shadow-md sticky top-0 z-40 ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-600">
              {logo}
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            {actions && <div className="ml-4">{actions}</div>}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {actions && <div className="mt-4">{actions}</div>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
