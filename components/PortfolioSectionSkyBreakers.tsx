"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Torn paper SVG path definition
const SectionTornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="skyBreakersSectionTornEffect" clipPathUnits="objectBoundingBox">
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
  const accentColor = 'text-teal-400';
  const accentBgColor = 'bg-teal-500';
  const accentHoverBgColor = 'hover:bg-teal-600';

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    },
  };

  const rightRippedEdgeClipPath =
    'polygon(0% 0%, 90% 0%, 94% 6%, 91% 12%, 95% 18%, 90% 24%, 97% 30%, 92% 36%, 96% 42%, 91% 48%, 95% 54%, 90% 60%, 96% 66%, 92% 72%, 97% 78%, 93% 84%, 95% 90%, 91% 96%, 94% 100%, 0% 100%)';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      <SectionTornPaperClipPathComponent />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Text */}
          <motion.div
            className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div
              className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/60 rounded-lg p-6 md:p-8 shadow-xl relative"
              style={{ clipPath: rightRippedEdgeClipPath }}
            >
              <div className="pr-6 md:pr-10">
                <h2 className={`font-serif text-4xl sm:text-5xl font-bold ${accentColor} mb-3 leading-tight`} style={{ textShadow: `0 0 15px rgba(20, 184, 166, 0.4)` }}>
                  Sky Breakers
                </h2>
                <p className={`text-sm ${accentColor} font-semibold tracking-wider mb-5`}>
                  High-Conviction | Asymmetric Crypto Opportunities | Exponential Growth
                </p>
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                  Focused on bold, high-conviction crypto bets with asymmetric upside, engineered for exponential growth and aiming for generational wealth.
                </p>
                <Link href="/portfolios/sky-breakers" className={`inline-flex items-center justify-center ${accentBgColor} ${accentHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-teal-500/40`}>
                  Discover Sky Breakers &rarr;
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image with Torn Effect */}
          <motion.div
            className="md:col-span-7 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative group">
              {/* Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/50 via-cyan-500/50 to-black rounded-xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-300 z-0" />
              {/* Solid Outline */}
              <div className="absolute inset-0 border-2 border-teal-600/70 rounded-lg z-1" />

              {/* Torn Paper Image */}
              <div
                className="relative z-10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ clipPath: 'url(#skyBreakersSectionTornEffect)' }}
              >
                <div className="w-full h-auto relative">
                  <Image
                    src="/images/sky-breakers-section-visual.jpg"
                    alt="Sky Breakers Portfolio Section Visual"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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
