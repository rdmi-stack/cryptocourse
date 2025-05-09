// components/PortfolioSectionSkyBreakers.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the SVG clip path component for the torn paper effect
const TornPaperClipPathComponentSkyBreakers: React.FC = () => (
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

// Animation Variants
const sectionAppearVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

const itemAppearVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PortfolioSectionSkyBreakers: React.FC = () => {
  // Colors now match 10XAlphasUnique (Yellow Accents)
  const primaryColor = 'text-yellow-400';
  const primaryBgColor = 'bg-yellow-500';
  const primaryHoverBgColor = 'hover:bg-yellow-600';
  const primaryTextShadow = '0 0 15px rgba(250, 204, 21, 0.4)'; // Yellow shadow
  const primaryHoverShadow = 'yellow-500/30';

  return (
    <motion.section
      className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionAppearVariant}
      aria-labelledby="skybreakers-title-main"
    >
      <TornPaperClipPathComponentSkyBreakers />
      {/* <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
        aria-hidden="true"
      ></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image */}
          <motion.div
            className="md:col-span-7 order-1" // Image on the left
            variants={itemAppearVariant}
          >
            <div className="relative">
              {/* This div creates a slight black border/background behind the clipped image,
                  making the torn edges more defined against potentially similar background colors. */}
              <div className="absolute -inset-1 bg-black rounded-lg" style={{
                transform: 'scale(1.01)', // Ensures it's slightly larger than the image area
                zIndex: 1 // Behind the clipped image content
              }}></div>

              {/* Clipped image container */}
              <div
                className="relative z-10 shadow-2xl group transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ clipPath: 'url(#skyBreakersSectionTornEffect)' }}
              >
                {/* Aspect ratio container for the image */}
                <div className="aspect-video md:aspect-[16/10] relative bg-neutral-800"> {/* Added a fallback bg color for the aspect box */}
                <div className="relative w-full h-auto bg-neutral-800 rounded-lg overflow-hidden">
  <Image
    src="/images/sky-breakers-section-visual.jpg"
    alt="Sky Breakers Portfolio Visual"
    width={800}
    height={500}
    objectFit="contain"
    quality={85}
    priority
    className="w-full h-auto rounded-lg"
  />
</div>


                  {/* Optional overlay gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content Panel */}
          <motion.div
            className="md:col-span-5 order-2 flex flex-col justify-center" // Text on the right
            variants={itemAppearVariant}
          >
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
              <h2
                id="skybreakers-title-main"
                className={`text-4xl sm:text-5xl font-extrabold ${primaryColor} mb-3 leading-tight`}
                style={{ textShadow: primaryTextShadow }}
              >
                Sky Breakers
              </h2>
              <p className={`text-neutral-400 font-medium mb-6 text-sm sm:text-base`}> {/* Subtitle text color like 10XAlphasUnique */}
                High-Conviction | Asymmetric Crypto Opportunities | Exponential Growth
              </p>
              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 text-sm sm:text-base">
                <div className={`border border-gray-700 bg-gray-800/70 p-3 rounded text-center transition-colors hover:border-yellow-700/50`}> {/* Yellow hover border */}
                  <span className="font-semibold block text-neutral-100">Potential</span>
                  <span className={`text-neutral-300`}>High Asymmetric</span>
                </div>
                <div className={`border border-gray-700 bg-gray-800/70 p-3 rounded text-center transition-colors hover:border-yellow-700/50`}> {/* Yellow hover border */}
                  <span className="font-semibold block text-neutral-100">Focus</span>
                  <span className={`text-neutral-300`}>Disruptive Tech</span>
                </div>
              </div>
              <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                Focused on bold, high-conviction crypto bets with asymmetric upside, engineered for exponential growth and aiming for generational wealth.
              </p>
              <Link href="/portfolios/sky-breakers" legacyBehavior>
                <a className={`inline-flex items-center justify-center ${primaryBgColor} ${primaryHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-${primaryHoverShadow}`}>
                  Explore Sky Breakers &rarr;
                </a>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSectionSkyBreakers;