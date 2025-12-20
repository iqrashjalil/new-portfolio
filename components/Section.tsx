
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  noWrapper?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, noWrapper = false }) => {
  return (
    <section id={id} className="py-20 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-8">
        {title}
      </h2>
      {noWrapper ? (
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto ui-glass ui-gloss-sheen p-6 sm:p-8">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
