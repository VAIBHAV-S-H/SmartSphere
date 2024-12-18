import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  description,
}) => {
  return (
    <section className={`py-24 ${className}`}>
      <Container>
        {(title || description) && (
          <div className="text-center mb-16">
            {title && <h2 className="text-3xl font-bold text-gray-900">{title}</h2>}
            {description && <p className="mt-4 text-xl text-gray-600">{description}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;