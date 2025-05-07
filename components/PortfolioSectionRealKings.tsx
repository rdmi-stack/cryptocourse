// components/PortfolioSectionRealKings.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioSectionRealKings: React.FC = () => {
  const yellowColor = 'text-yellow-400'; // For general accent if needed elsewhere
  const blueColorText = 'text-blue-400'; // Specific for Real Kings title
  const blueBgColor = 'bg-blue-500';
  const blueHoverBgColor = 'hover:bg-blue-600';

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

  // Ripped Edge for Text Panel (as provided by user)
  const rippedEdgeClipPath =
    'polygon(0% 0%, 90% 0%, 94% 6%, 91% 12%, 95% 18%, 90% 24%, 97% 30%, 92% 36%, 96% 42%, 91% 48%, 95% 54%, 90% 60%, 96% 66%, 92% 72%, 97% 78%, 93% 84%, 95% 90%, 91% 96%, 94% 100%, 0% 100%)';

  // Torn paper effect for image (as provided by user)
  const tornPaperClipPathImage = 'polygon(0% 5%, 3% 0%, 20% 2%, 40% 0%, 60% 2%, 75% 0%, 95% 1%, 100% 5%, 98% 20%, 100% 60%, 99% 82%, 100% 100%, 95% 98%, 65% 100%, 40% 99%, 20% 100%, 5% 98%, 0 100%, 1% 80%, 0% 50%, 2% 30%)';

  // Define an SVG clip-path for cleaner management if preferred in the future,
  // but using the user's direct polygon for now.
  // Example:
  // const SVGClipPathComponent = () => (
  //   <svg width="0" height="0" className="absolute">
  //     <defs>
  //       <clipPath id="realKingsTornEffect" clipPathUnits="objectBoundingBox">
  //         <path d="M0.00,0.05 L0.03,0.00 L0.20,0.02 ... Z" /> // Convert polygon to path
  //       </clipPath>
  //     </defs>
  //   </svg>
  // );
  // Then use: style={{ clipPath: 'url(#realKingsTornEffect)' }}

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern (path needs to be valid) */}
      {/* <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
      ></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          <motion.div
            className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg"
              style={{ clipPath: rippedEdgeClipPath }}
            >
              <div className="pr-6 md:pr-10"> {/* Padding to avoid text touching ripped edge */}
                <h2
                  className={`text-4xl sm:text-5xl font-extrabold ${blueColorText} mb-4 leading-tight`}
                  style={{ textShadow: '0 0 15px rgba(59, 130, 246, 0.4)' }} // Blue shadow
                >
                  Real Kings
                </h2>
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                  The Real Kings Portfolio is crafted for disciplined investors seeking sustainable wealth creation through high-quality, battle-tested crypto assets.
                </p>
                <Link href="/portfolios/real-kings" legacyBehavior>
                  <a className={`inline-block ${blueBgColor} ${blueHoverBgColor} text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-blue-500/40`}>
                    Know More &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative group"> {/* Added group for potential hover effects on border */}
              {/* Outer border (e.g., blue for Real Kings theme) */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-sm group-hover:blur opacity-70 group-hover:opacity-100 transition-all duration-300" style={{
                zIndex: 0
              }}></div>
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg" style={{
                zIndex: 1, // Border above blur
              }}></div>
              
              <div 
                className="relative bg-black overflow-hidden rounded-md shadow-2xl" // Added rounded-md here too
                style={{
                  clipPath: tornPaperClipPathImage, // User's provided torn paper effect
                  zIndex: 2 // Image content above border elements
                }}
              >
                <div className="aspect-video md:aspect-[16/10] relative">
                  <Image
                    src="/images/real-kings-section-visual.jpg" // **Distinct image for this section**
                    alt="Real Kings Portfolio Section Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    className="transform group-hover:scale-105 transition-transform duration-500" // Subtle zoom on hover
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionRealKings;