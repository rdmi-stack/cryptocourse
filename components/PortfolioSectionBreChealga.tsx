// components/PortfolioSectionGangwar.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioSectionGangwar: React.FC = () => {
  const accentColor = 'text-red-500'; // GANGWAR's distinct color for this section
  const accentBgColor = 'bg-red-500';
  const accentHoverBgColor = 'hover:bg-red-600';

  // Framer Motion Variants (Image-Left, Text-Right layout)
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    },
  };

  // LEFT Ripped Edge Clip Path for the text panel
  const leftRippedEdgeClipPath =
    'polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 6% 94%, 9% 88%, 5% 82%, 10% 76%, 3% 70%, 8% 64%, 4% 58%, 9% 52%, 5% 46%, 10% 40%, 4% 34%, 8% 28%, 3% 22%, 9% 16%, 5% 10%, 10% 4%)';


  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern - ensure path is correct if used */}
      {/* <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern-variant.svg')] bg-repeat"
      ></div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image */}
          <motion.div
  className="md:col-span-7 order-1 md:order-1"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={imageVariants}
>
<div className="relative group transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-red-500/30">
  <div className="relative w-full rounded-lg overflow-hidden bg-black max-h-[500px]">
    <Image
      src="/images/gangwar-section-visual.jpg"
      alt="GANGWAR Portfolio Section Visual"
      width={1200}
      height={800}
      className="w-full h-auto object-cover rounded-lg torn-edge"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/70 opacity-80 group-hover:opacity-60 transition-opacity rounded-lg pointer-events-none" />
  </div>
</div>

</motion.div>


          {/* Right Column: Text Content Panel */}
          <motion.div
            className="md:col-span-5 order-2 md:order-2 flex flex-col justify-center" // Text on the right
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div
              className="bg-gradient-to-br from-gray-900/80 via-gray-950 to-gray-900/80 backdrop-blur-md border border-gray-700/60 rounded-xl p-6 md:p-8 shadow-xl relative"
              style={{ clipPath: leftRippedEdgeClipPath }}
            >
              <div className="pl-8 md:pl-12"> {/* Increased padding for ripped edge */}
                <h2
                  className={`font-serif text-4xl sm:text-5xl font-bold ${accentColor} mb-3 uppercase`} // Uppercase and accent color
                  style={{ textShadow: `0 0 15px rgba(239, 68, 68, 0.4)` }} // Red shadow
                >
                  GANGWAR
                </h2>
                <p className={`text-sm ${accentColor} font-semibold tracking-wider mb-4`}>
                  High-Risk High Return | Technical Precision | Tactical Momentum Strategy
                </p>
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                  A fearless, technically optimized crypto strategy for seasoned risk-takers aiming to dominate volatility and seize explosive upside.
                </p>
                <Link href="/portfolios/gangwar" legacyBehavior>
                  <a className={`inline-flex items-center justify-center ${accentBgColor} ${accentHoverBgColor} text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-red-500/40`}>
                    Explore GANGWAR &rarr;
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionGangwar;