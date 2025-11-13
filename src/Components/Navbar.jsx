import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrolled, isMenuOpen, setIsMenuOpen, onSectionChange }) => {
  const menuItems = ['Home', 'About', 'Experience', 'Projects', 'Achievements', 'Contact'];

  const handleMenuClick = (item) => {
    onSectionChange(item.toLowerCase()); // Use new prop
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            handleMenuClick('home');
          }} 
          className="ripple text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" // Added ripple
        >
          VL
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 w-auto">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)} // Updated
              className={`ripple transition-colors px-3 py-2 rounded-md ${
                activeSection === item.toLowerCase() 
                  ? 'text-cyan-400 border-b-2 border-cyan-400' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`} // Added ripple
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="ripple md:hidden p-2" // Added ripple
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-4 space-y-4 border-t border-white/10">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item)} // Updated
              className={`ripple block w-full text-left py-2 px-3 rounded-md text-gray-300 hover:text-cyan-400 transition-colors ${
                activeSection === item.toLowerCase() ? 'bg-cyan-500/20' : ''
              }`} // Added ripple
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;