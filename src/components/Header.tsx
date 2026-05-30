import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Phone, Github } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About', id: 'hero' },
  { label: 'Impact', id: 'impact' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Career', id: 'experience' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Credentials', id: 'certifications' },
  { label: 'Contact', id: 'contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">Lumban</span> Sopian
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="mailto:lumban.sopian@msn.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lumbans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/lumbans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-nav" className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Contact Links */}
              <div className="flex space-x-4 pt-4 border-t border-gray-700">
                <a 
                  href="mailto:lumban.sopian@msn.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lumbans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/lumbans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="tel:+6282122428287"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
