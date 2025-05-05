// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  const yellowAccentColor = 'text-yellow-400'; // Consistent yellow accent

  // Helper component for keyword highlighting
  const Highlight: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <span className="text-neutral-100 font-medium">{children}</span>
    // Alternative style:
    // <span className="text-yellow-400/80 font-medium">{children}</span>
  );


  return (
    // Section with Black Gradient Background (consistent with previous)
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/dark-pattern-variant.svg')] bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Content Area */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Section Title */}
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold ${yellowAccentColor} mb-5`}
            style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
          >
            Behind Dubai Club
          </h2>

          {/* Decorative Divider */}
          <hr className="w-24 h-0.5 mx-auto mb-8 bg-yellow-500/50 border-0 rounded" />

          {/* Description Text */}
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed md:leading-loose">
            Dubai Club is helmed by <Highlight>crypto veterans</Highlight> and <Highlight>blockchain experts</Highlight> with a collective experience of over a decade in financial markets.
            Built on a solid foundation of <Highlight>research</Highlight>, <Highlight>innovation</Highlight>, and <Highlight>trust</Highlight>.
            Dubai Club ensures that every decision made in managing your crypto
            portfolio is <Highlight>secure</Highlight>, <Highlight>data-driven</Highlight>, and <Highlight>strategically calculated</Highlight>.
          </p>

          {/* Placeholder for potential future additions like team photos or 'Learn More' button */}
          {/* <div className="mt-12"> */}
          {/* Optional Team Section or Button */}
          {/* </div> */}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;