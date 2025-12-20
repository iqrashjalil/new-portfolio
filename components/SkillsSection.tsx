
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="My Tech Stack" noWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center p-6 glass-card glass-interactive"
          >
            <skill.Icon
              className="h-16 w-16 mb-4 transition-all duration-300 group-hover:drop-shadow-lg"
              style={{ color: skill.color }}
            />
            <h3 className="text-md font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
