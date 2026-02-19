import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          YourBrand
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
        </ul>
          
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          YourBrand
        </h1>


        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-6 py-6 font-medium text-gray-700">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition">
              Contact
            </li>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

