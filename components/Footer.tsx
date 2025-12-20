
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FaHeart, FaCode } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative glass-header border-t border-white/10 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                <FaCode size={20} />
              </div>
              <span className="text-xl font-bold text-white">Iqrash Jalil</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full Stack Developer crafting beautiful digital experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available for freelance work</span>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <HiSparkles size={16} />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-blue-400 transition-all duration-300 text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="glass-button p-3 rounded-xl text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 group relative"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
                  <social.Icon className="w-5 h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 flex items-center gap-2">
              <span>&copy; {currentYear} Iqrash Jalil.</span>
              <span className="hidden sm:inline">All rights reserved.</span>
            </p>
            
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
