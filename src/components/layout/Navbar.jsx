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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl border border-white/40 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/95 shadow-xl py-2 backdrop-blur-xl' : 'bg-white/70 backdrop-blur-lg py-3 shadow-sm'
      }`}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="px-4">
        <div className="relative flex justify-between items-center h-14">
          <div className="flex items-center flex-shrink-0">
            <img 
              src="https://placehold.co/40x40/1e40af/ffffff?text=LG" 
              alt="Lakshyabhed Gurukul Logo" 
              className="h-10 w-10 mr-3 rounded-full shadow-sm"
            />
            <Link to="/" className="text-xl font-bold text-slate-800 hover:text-indigo-700 transition-colors">
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
                    ? 'text-indigo-700 bg-indigo-50'
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
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
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#4A90E2] text-white hover:bg-[#357ABD] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-indigo-600 focus:outline-none p-2 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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
          <div className="md:hidden mt-2 py-4 border-t border-gray-100 animate-fadeIn">
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
                      ? 'text-indigo-700 bg-indigo-50'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                  } ${item.highlight ? 'bg-[#4A90E2] text-white hover:bg-[#357ABD] text-center mt-2 shadow-sm' : ''}`}
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