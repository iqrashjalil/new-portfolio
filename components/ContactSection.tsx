
import React, { useState } from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheckCircle, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import { MdWorkspaces } from 'react-icons/md';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const infoCards = [
    { icon: FaClock, label: 'Response Time', value: '<24h', color: 'from-blue-500 to-cyan-500' },
    { icon: MdWorkspaces, label: 'Projects Done', value: '50+', color: 'from-purple-500 to-pink-500' },
    { icon: HiLightningBolt, label: 'Satisfaction', value: '100%', color: 'from-amber-500 to-orange-500' }
  ];

  return (
    <Section id="contact" title="Let's Connect" noWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Info */}
        <div className="space-y-6">
          {/* Main Info Card */}
          <div className="glass-card p-8 relative overflow-hidden group">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse">
                  <HiSparkles className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. Let's build something amazing together!
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 group/item hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-lg glass-button group-hover/item:scale-110 transition-transform">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 group/item hover:text-blue-400 transition-colors">
                  <div className="p-2 rounded-lg glass-button group-hover/item:scale-110 transition-transform">
                    <FaEnvelope size={16} />
                  </div>
                  <span className="text-sm">developer@example.com</span>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${card.color} text-white`}>
                      <card.icon size={20} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{card.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wide">{card.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Card */}
          <div className="glass-card p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <p className="text-sm text-slate-400 mb-4 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </p>
            
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="glass-button p-4 rounded-xl text-slate-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/25 group relative overflow-hidden"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  {/* Ripple Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl" />
                  <social.Icon className="w-6 h-6 relative z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="glass-card p-8 relative overflow-hidden flex flex-col">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
          
          {/* Success Message Overlay */}
          {submitted && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30 backdrop-blur-sm z-20 flex items-center justify-center animate-in fade-in zoom-in duration-500 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-green-500/20 animate-bounce">
                    <FaCheckCircle className="text-green-400" size={64} />
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white">Message Sent! 🎉</h4>
                <p className="text-slate-300 text-lg">I'll get back to you within 24 hours.</p>
                <div className="flex justify-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}} />
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}} />
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex-grow flex flex-col relative z-10">
            <div className="space-y-6 flex-grow">
              {/* Name Input */}
              <div className="relative group/input">
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  Your Name
                  {formData.name && <span className="text-green-400 text-xs">✓</span>}
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${focused === 'name' ? 'text-blue-400 scale-110' : 'text-slate-500'}`}>
                    <FaUser size={16} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-button text-white placeholder-slate-500 outline-none transition-all duration-300 relative focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative group/input">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  Email Address
                  {formData.email && <span className="text-green-400 text-xs">✓</span>}
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${focused === 'email' ? 'text-blue-400 scale-110' : 'text-slate-500'}`}>
                    <FaEnvelope size={16} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-button text-white placeholder-slate-500 outline-none transition-all duration-300 relative focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group/input flex-grow flex flex-col min-h-[240px]">
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  Your Message
                  {formData.message && <span className="text-green-400 text-xs">✓</span>}
                </label>
                <div className="relative flex-grow flex">
                  <div className={`absolute left-4 top-4 transition-all duration-300 z-10 ${focused === 'message' ? 'text-blue-400 scale-110' : 'text-slate-500'}`}>
                    <FaComment size={16} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl glass-button text-white placeholder-slate-500 outline-none transition-all duration-300 resize-none relative flex-grow focus:ring-2 focus:ring-blue-400/50 focus:border-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-semibold py-5 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/50 group relative overflow-hidden mt-6"
            >
              {/* Animated Shine Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700 ${isHovering ? 'translate-x-full' : '-translate-x-full'}`} />
              
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-lg">Send Message</span>
                <span className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 group-hover:rotate-12">
                  <FaPaperPlane size={18} />
                </span>
              </span>
            </button>
          </form>

          {/* Decorative Gradients */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{animationDelay: '1s'}} />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
