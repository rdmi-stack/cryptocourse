// components/CallToActionSection.tsx
import React from 'react';
import Link from 'next/link';

const CallToActionSection: React.FC = () => {
  const yellowAccentColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    // Section with Black Gradient Background (consistent with previous)
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-950 to-black text-neutral-100 overflow-hidden">
       {/* Optional: Subtle background pattern or elements */}
       <div className="absolute inset-0 opacity-[0.04] bg-[url('/path/to/abstract-pattern.svg')] bg-center bg-no-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Centered Content Area */}
        <div className="max-w-3xl mx-auto text-center">

          {/* Section Title (Action-Oriented) */}
          <h2
            // Using serif font for consistency with other section titles
            className={`font-serif text-4xl md:text-5xl font-bold ${yellowAccentColor} mb-5`}
            style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
          >
            Ready to Elevate Your Crypto Strategy?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-10">
            Gain access to expert-managed crypto portfolios, AI-powered insights, and start building your future wealth with Dubai Club today.
          </p>

          {/* Call to Action Button - CORRECTED Link */}
          <Link
            href="/#portfolios" // Link destination
            // Apply className directly to Link, removed legacyBehavior and <a> tag
            className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black text-lg font-bold py-4 px-10 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}
          >
            Explore Portfolios Now {/* Content directly inside Link */}
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;