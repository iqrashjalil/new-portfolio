
import React from 'react';
import Section from './Section';
import { FaCode, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const AboutSection: React.FC = () => {
  const highlights: Array<{
    icon: IconType;
    title: string;
    description: string;
  }> = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern patterns.'
    },
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'Rapid prototyping and iteration to bring ideas to life quickly.'
    },
    {
      icon: FaBrain,
      title: 'AI Integration',
      description: 'Leveraging cutting-edge AI tools to build intelligent applications.'
    },
    {
      icon: FaUsers,
      title: 'User-Centric',
      description: 'Designing delightful experiences that users love and understand.'
    }
  ];

  return (
    <Section id="about" title="About Me" noWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Bio */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
          <p className="text-slate-300 leading-relaxed">
            As a versatile Full Stack Developer, I have a passion for creating innovative and efficient solutions that solve real-world problems. My journey in tech has led me through a diverse landscape of technologies, from building robust backends with Node.js and Express to crafting dynamic user interfaces with React and Next.js.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I am particularly excited by the potential of Artificial Intelligence and have hands-on experience integrating AI services, leveraging tools like LangChain and Pinecone to build intelligent applications.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail-Oriented'].map((trait) => (
              <span key={trait} className="px-3 py-1 rounded-full glass-button text-xs font-medium text-slate-200">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-5 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-blue-400 mb-3">
                  <Icon size={40} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
