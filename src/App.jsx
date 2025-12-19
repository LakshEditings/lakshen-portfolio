// src/App.jsx - UPDATED to match your existing pattern
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section navigation
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App min-h-screen bg-black text-white">
      <Navbar 
        activeSection={activeSection}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onSectionChange={handleSectionChange}
      />
      
      <main>
        <Hero onSectionChange={handleSectionChange} />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;