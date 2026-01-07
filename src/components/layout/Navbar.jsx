import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Appointment', path: '/book-appointment', highlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl border border-gray-100 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md py-1' : 'bg-white/80 backdrop-blur-md py-2'
      }`}
    >
      <div className="px-4">
        <div className="relative flex justify-between items-center h-14">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="https://placehold.co/40x40/1e40af/ffffff?text=LG" 
              alt="Lakshyabhed Gurukul Logo" 
              className="h-10 w-10 mr-3 rounded-full"
            />
            <Link to="/" className="text-xl font-bold text-blue-800">
              Lakshyabhed Gurukul
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navigationItems.filter(item => !item.highlight).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  if (item.path.startsWith('#')) {
                    scrollToSection(item.path.substring(1));
                  }
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-blue-700 bg-blue-100'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Book Appointment Button (Desktop) */}
            <div className="hidden md:block">
              {navigationItems.filter(item => item.highlight).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    if (item.path.startsWith('#')) {
                      scrollToSection(item.path.substring(1));
                    }
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-700 bg-blue-100'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  } ${item.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;