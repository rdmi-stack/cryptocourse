// components/PortfolioSectionSkyBreakers.tsx
"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

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
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
        // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
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
            {/* Image Wrapper with styling */}
            <div className="relative rounded-xl shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-yellow-500/20">
               <div className="aspect-video md:aspect-[16/10]">
                 <Image
                   // --- UPDATE IMAGE SOURCE HERE ---
                   src="/images/image5.jpg" // Your NEW image path for Sky Breakers
                   // --- END UPDATE ---
                   alt="Sky Breakers Portfolio Visual"
                   layout="fill"
                   objectFit="cover"
                   quality={85}
                   className="rounded-xl"
                 />
               </div>
               {/* Image Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent rounded-xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionSkyBreakers;