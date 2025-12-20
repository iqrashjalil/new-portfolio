
import React from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiPostgresql } from 'react-icons/si';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6">
      {/* removed dark backdrop so hero is not shaded */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hello — I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-200 to-white">Iqrash Jalil</span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200/90 sm:mt-6">
            Full Stack Developer focused on building scalable web apps and delightful UX. I combine modern tooling, AI integrations, and strong engineering practices to ship reliable products.
          </p>

          <p className="mt-4 max-w-2xl mx-auto md:mx-0 text-base leading-7 text-slate-400">
            Node.js, React, TypeScript, Next.js, Cloud &amp; Vector Databases — I prototype fast and iterate with measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition transform hover:scale-[1.03]"
            >
              Work With Me
            </a>
            <a href="#projects" className="inline-flex items-center text-sm font-semibold text-slate-200/90 hover:text-blue-300">
              See Projects <span aria-hidden>→</span>
            </a>
          </div>

          {/* skill chips */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            {['TypeScript', 'React', 'Node.js', 'Next.js', 'AI/ML'].map((t) => (
              <span key={t} className="inline-flex items-center rounded-full glass-button px-4 py-2 text-xs font-medium text-slate-200/90">{t}</span>
            ))}
          </div>

          {/* subtle scroll cue */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a href="#about" className="flex flex-col items-center text-sm text-slate-300/80 hover:text-slate-100">
              <span className="mb-2">Scroll</span>
              <svg className="h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right visual column - new glass profile card with animated tech badges */}
        <div className="md:col-span-5 flex items-center justify-center md:justify-end">
          <div className="relative w-[340px] h-[420px]">
            {/* glass card */}
            <div className="absolute inset-0 glass-card ui-gloss-sheen flex flex-col items-center justify-center p-6">
              <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-sky-400 to-indigo-400 shadow-lg">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/4 flex items-center justify-center">
                  {/* stylized avatar (SVG) */}
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36" cy="23" r="14" fill="rgba(255,255,255,0.12)" />
                    <rect x="8" y="42" width="56" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
                  </svg>
                </div>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">Product-focused Engineer</h3>
              <p className="mt-2 text-sm text-slate-300/80 text-center max-w-xs">Designing delightful experiences and shipping reliable systems. I bridge product and engineering to deliver impact.</p>

              <div className="mt-4 flex items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-all transform hover:scale-105">Connect</a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/15 transition-all">Projects</a>
              </div>
            </div>

            {/* decorative blobs */}
            <div className="absolute -left-8 -top-8 w-28 h-28 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-400/20 blur-2xl animate-pulse" />
            <div className="absolute -right-10 -bottom-6 w-36 h-36 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-300/15 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

            {/* floating tech badges - horizontally placed under the card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform-gpu animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}>
                <SiReact size={28} className="text-sky-400" />
              </div>
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform-gpu animate-pulse shadow-lg" style={{animationDelay: '0.4s'}}>
                <SiNextdotjs size={28} className="text-white" />
              </div>
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform-gpu animate-bounce shadow-lg" style={{animationDelay: '0.6s'}}>
                <SiTypescript size={28} className="text-blue-500" />
              </div>
              <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center transform-gpu animate-pulse shadow-lg" style={{animationDelay: '0.8s'}}>
                <SiPostgresql size={28} className="text-blue-300" />
              </div>
            </div>

            {/* center decorative icon (large, subtle) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <SiReact size={140} className="text-sky-300/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
