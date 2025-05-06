// components/PortfolioSectionRealKings.tsx
"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const PortfolioSectionRealKings: React.FC = () => {
  // Define yellow color for consistency
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  // --- Framer Motion Variants ---
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
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 }, // Slight delay
    },
  };

  // --- Ripped Edge Clip Path ---
  // Adjust these polygon points to fine-tune the ripped look
  const rippedEdgeClipPath =
    'polygon(0% 0%, 90% 0%, 94% 6%, 91% 12%, 95% 18%, 90% 24%, 97% 30%, 92% 36%, 96% 42%, 91% 48%, 95% 54%, 90% 60%, 96% 66%, 92% 72%, 97% 78%, 93% 84%, 95% 90%, 91% 96%, 94% 100%, 0% 100%)';

  // Torn paper effect for image
  const tornPaperClipPath = 'polygon(0% 5%, 3% 0%, 20% 2%, 40% 0%, 60% 2%, 75% 0%, 95% 1%, 100% 5%, 98% 20%, 100% 60%, 99% 82%, 100% 100%, 95% 98%, 65% 100%, 40% 99%, 20% 100%, 5% 98%, 0 100%, 1% 80%, 0% 50%, 2% 30%)';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Text Content Panel (Animated + Clipped) */}
          <motion.div
            className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% visible, only once
            variants={textVariants}
          >
            {/* Text Panel Styling with Clip Path */}
            <div
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg relative" // Added relative for potential future absolute elements inside
              style={{ clipPath: rippedEdgeClipPath }}
            >
              {/* Add some right padding to prevent text hitting the ripped edge */}
              <div className="pr-6 md:pr-10">
                {/* Headline */}
                <h2
                  className={`text-4xl sm:text-5xl font-extrabold ${yellowColor} mb-4 leading-tight`}
                  style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }}
                >
                  Real Kings
                </h2>

                {/* Description */}
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                  A long-term, Low-risk, blue-chip stable crypto investment portfolio offering the best passive income.
                </p>

                {/* CTA Button */}
                <Link href="/portfolios/real-kings" legacyBehavior>
                  <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                    Know More &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image (Animated) */}
          <motion.div
            className="md:col-span-7 order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            {/* Image Wrapper with torn paper effect and purple border */}
            <div className="relative">
              {/* Purple outer border */}
              <div className="absolute inset-0 bg-purple-700 rounded-lg" style={{ 
                padding: '4px',
                transform: 'scale(1.02)',
                zIndex: 0
              }}></div>
              
              {/* Torn paper effect container */}
              <div className="relative bg-black overflow-hidden" style={{
                clipPath: tornPaperClipPath
              }}>
                {/* Image content */}
                <div className="aspect-video md:aspect-[16/10] relative">
                  <Image
                    src="/images/image3.jpg"
                    alt="Real Kings Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
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