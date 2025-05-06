// components/PortfolioSectionSkyBreakers.tsx
"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

// Define the SVG clip path component for the torn paper effect
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="skyBreakersTornEffect" clipPathUnits="objectBoundingBox">
        {/* Adjusted path to show more of the image while keeping torn edges */}
        <path d="
            M0.005,0.005 L0.03,0.000 L0.06,0.005 L0.09,0.000 L0.12,0.007
            L0.15,0.002 L0.18,0.008 L0.21,0.003 L0.24,0.009 L0.27,0.001
            L0.30,0.007 L0.33,0.003 L0.36,0.008 L0.39,0.002 L0.42,0.009
            L0.45,0.003 L0.48,0.007 L0.51,0.002 L0.54,0.008 L0.57,0.003
            L0.60,0.009 L0.63,0.001 L0.66,0.007 L0.69,0.003 L0.72,0.008
            L0.75,0.002 L0.78,0.007 L0.81,0.003 L0.84,0.009 L0.87,0.002
            L0.90,0.007 L0.93,0.003 L0.96,0.008 L0.995,0.003

            L0.998,0.25 L0.993,0.40 L0.998,0.60 L0.994,0.75

            L0.995,0.995 L0.96,0.992 L0.93,0.997 L0.90,0.993
            L0.87,0.998 L0.84,0.991 L0.81,0.997 L0.78,0.992 L0.75,0.998
            L0.72,0.993 L0.69,0.997 L0.66,0.992 L0.63,0.998 L0.60,0.991
            L0.57,0.997 L0.54,0.992 L0.51,0.998 L0.48,0.993 L0.45,0.997
            L0.42,0.992 L0.39,0.998 L0.36,0.991 L0.33,0.997 L0.30,0.992
            L0.27,0.998 L0.24,0.993 L0.21,0.997 L0.18,0.992 L0.15,0.998
            L0.12,0.991 L0.09,0.997 L0.06,0.992 L0.03,0.998 L0.005,0.992

            L0.002,0.75 L0.007,0.60 L0.002,0.40 L0.007,0.25
            Z
        " />
      </clipPath>
    </defs>
  </svg>
);

const PortfolioSectionSkyBreakers: React.FC = () => {
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  // --- Framer Motion Variants ---
  // Text is on the left (order-1), Image on the right (order-2)
  const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Text comes from left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 }, // Image comes from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    },
  };

  // --- RIGHT Ripped Edge Clip Path ---
  // For text panel on the left, rip its right edge
  const rightRippedEdgeClipPath =
    'polygon(0% 0%, 90% 0%, 94% 6%, 91% 12%, 95% 18%, 90% 24%, 97% 30%, 92% 36%, 96% 42%, 91% 48%, 95% 54%, 90% 60%, 96% 66%, 92% 72%, 97% 78%, 93% 84%, 95% 90%, 91% 96%, 94% 100%, 0% 100%)';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Add the SVG definitions to the DOM */}
      <TornPaperClipPathComponent />
      
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Text Content Panel (Animated + Clipped on Right) */}
          <motion.div
            className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center" // Text on the left
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            {/* Text Panel Styling with RIGHT Clip Path */}
            <div
              className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/60 rounded-lg p-6 md:p-8 shadow-xl relative"
              style={{ clipPath: rightRippedEdgeClipPath }} // Apply right rip
            >
              {/* Add some RIGHT padding to prevent text hitting the ripped edge */}
              <div className="pr-6 md:pr-10">
                {/* Headline */}
                <h2
                  className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4 leading-tight`}
                  style={{ textShadow: '0 0 12px rgba(250, 204, 21, 0.3)' }}
                >
                  Sky Breakers
                </h2>
                {/* Tagline */}
                <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
                   High-Conviction Bets | Asymmetric Upside | Generational Wealth Focus
                </p>

                {/* Description */}
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                  Focused on bold, high-conviction crypto bets with asymmetric upside, engineered for exponential growth and aiming for generational wealth.
                </p>

                {/* CTA Button */}
                <Link href="/portfolios/10x-alphas" legacyBehavior>
                  <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                    Know More &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image (Animated) */}
          <motion.div
            className="md:col-span-7 order-1 md:order-2" // Image on the right
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            {/* Image Wrapper with torn paper effect and black border */}
            <div className="relative">
              {/* Black border element */}
              <div className="absolute -inset-1 bg-black rounded-lg" style={{
                transform: 'scale(1.01)',
                zIndex: 1
              }}></div>
              
              {/* Torn paper effect with image */}
              <div 
                className="relative z-10 shadow-2xl group transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-yellow-500/20"
                style={{ clipPath: 'url(#skyBreakersTornEffect)' }}
              >
                <div className="aspect-video md:aspect-[16/10] relative">
                  <Image
                    src="/images/image5.jpg"
                    alt="Sky Breakers Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionSkyBreakers;