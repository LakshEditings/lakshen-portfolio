import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Click Pop Effect
  useEffect(() => {
    const handleClick = (e) => {
      // Skip if clicking interactive elements (buttons, links, inputs)
      if (e.target.closest('button, a, input, select, textarea')) return;

      // Create pop div
      const pop = document.createElement('div');
      pop.className = 'click-pop';
      
      // Random size (80-120px) and duration (0.6-1s) for variety
      const randomSize = Math.random() * 40 + 80; // 80-120px
      const randomDuration = Math.random() * 0.4 + 0.6; // 0.6-1s
      pop.style.setProperty('--pop-size', `${randomSize}px`);
      pop.style.animationDuration = `${randomDuration}s`;
      
      // Position at mouse
      pop.style.left = `${e.clientX}px`;
      pop.style.top = `${e.clientY}px`;
      
      document.body.appendChild(pop);
      
      // Remove after animation
      setTimeout(() => {
        if (pop.parentNode) pop.parentNode.removeChild(pop);
      }, randomDuration * 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <Hero onSectionChange={handleSectionChange} />
          </section>
        );
      case 'about':
        return (
          <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <About />
            </div>
          </section>
        );
      case 'experience':
        return (
          <section id="experience" className="py-20 px-6 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <Experience />
            </div>
          </section>
        );
      case 'projects':
        return (
          <section id="projects" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <Projects />
            </div>
          </section>
        );
      case 'achievements':
        return (
          <section id="achievements" className="py-20 px-6 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <Achievements />
            </div>
          </section>
        );
      case 'contact':
        return (
          <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <Contact />
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar 
        activeSection={activeSection}
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onSectionChange={handleSectionChange}
      />
      <main className="main-content pt-16 transition-all duration-300 ease-in-out">
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;