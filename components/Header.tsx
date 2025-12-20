
import React, { useState, useEffect } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { RiTerminalBoxFill } from 'react-icons/ri';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-header backdrop-blur-2xl shadow-xl shadow-black/10 py-3' 
        : 'bg-transparent py-4'
    }`}>
      {/* Animated gradient border at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Enhanced */}
          <a href="#hero" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              {/* Outer rotating ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-75 blur-sm group-hover:animate-spin-slow transition-opacity duration-500" />
              
              {/* Icon container */}
              <div className="relative p-2.5 rounded-lg glass-button group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <RiTerminalBoxFill className="text-blue-400 group-hover:text-blue-300 group-hover:rotate-12 transition-all duration-300 relative z-10" size={28} />
              </div>
            </div>
            
            <div className="flex flex-col relative">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500">
                Iqrash Jalil
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5 group-hover:text-slate-300 transition-colors duration-300">
                <HiSparkles size={11} className="text-amber-400 animate-pulse" />
                <span className="font-medium">Full Stack Developer</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Modern Pills */}
          <ul className="hidden md:flex items-center gap-1 glass-button px-2 py-2 rounded-full">
            {navLinks.map((link, index) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 group ${
                    activeSection === link.id
                      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {/* Active indicator dot */}
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  )}
                  
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Hover background for inactive items */}
                  {activeSection !== link.id && (
                    <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300" />
                  )}
                  
                  {/* Ripple effect on click */}
                  <span className="absolute inset-0 rounded-full bg-blue-400/30 scale-0 animate-ping opacity-0 group-active:opacity-100 group-active:scale-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Enhanced */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/40"
            >
              {/* Animated shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Rotating gradient border */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500" />
              
              <span className="relative z-10 flex items-center gap-2">
                <span>Let's Talk</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">✨</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 rounded-xl glass-button text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            {/* Background pulse on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
            
            <span className="relative z-10 block">
              {mobileMenuOpen ? (
                <FaTimes size={22} className="animate-in spin-in duration-300" />
              ) : (
                <FaBars size={22} className="animate-in fade-in duration-300" />
              )}
            </span>
          </button>
        </div>

        {/* Mobile Menu - Modern Design */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 glass-card rounded-2xl p-6 animate-in slide-in-from-top duration-300 shadow-2xl shadow-black/20 border border-white/10">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
            
            <ul className="space-y-1 relative z-10">
              {navLinks.map((link, index) => (
                <li 
                  key={link.href} 
                  className="animate-in fade-in slide-in-from-left duration-300"
                  style={{animationDelay: `${index * 75}ms`}}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-5 py-3.5 rounded-xl transition-all duration-300 font-medium flex items-center gap-3 group relative overflow-hidden ${
                      activeSection === link.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Hover shine effect */}
                    {activeSection !== link.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    )}
                    
                    {activeSection === link.id && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-lg shadow-white/50" />
                    )}
                    
                    <span className="relative z-10 flex-grow">{link.label}</span>
                    
                    <span className="text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all duration-300">→</span>
                  </a>
                </li>
              ))}
              
              {/* Mobile CTA */}
              <li className="pt-3 animate-in fade-in slide-in-from-left duration-300" style={{animationDelay: '300ms'}}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative block px-5 py-4 text-center rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 overflow-hidden group shadow-xl shadow-blue-500/30"
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Let's Talk</span>
                    <HiSparkles className="animate-pulse" />
                  </span>
                </a>
              </li>
            </ul>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-xl" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
