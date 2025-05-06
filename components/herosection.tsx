"use client"; // <--- ADD THIS DIRECTIVE AT THE VERY TOP

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const VisualHero: React.FC = () => {
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly down and transparent
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen right and transparent
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4, // Slight delay after text starts animating
      },
    },
  };

  return (
    // Added min-h-[650px] to ensure enough space, especially on mobile
    <section className="relative h-screen min-h-[650px] flex items-center overflow-hidden bg-black pt-24 md:pt-0">

      {/* Background Image & Overlay (Not animated for simplicity/performance) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.jpg" // Your background image
          alt="Dubai City Skyline Background"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority
        />
        {/* Main background overlay */}
        <div className="absolute inset-0 bg-black opacity-70 mix-blend-multiply z-10"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20 h-full">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 h-full items-center"> {/* Use gap-x-8 for horizontal gap only */}

          {/* Left Column: Text - WRAPPED IN MOTION.DIV */}
          <motion.div
            className="flex flex-col justify-center h-auto md:h-full text-white relative z-30 pt-8 md:pt-0" // Added padding-top for mobile spacing
            variants={containerVariants} // Apply container variants
            initial="hidden"             // Initial state
            animate="visible"            // Animate to this state
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight uppercase text-yellow-400"
              variants={itemVariants} // Apply item variants
            >
              UNLOCK THE FUTURE <br /> OF WEALTH
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl mb-6 font-light text-neutral-100 italic"
              variants={itemVariants} // Apply item variants
            >
              AI-Powered Crypto Insights & Profitable Strategies!
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg max-w-lg text-neutral-200 leading-relaxed"
              variants={itemVariants} // Apply item variants
            >
              With Dubai Club, invest in the Crypto market through our professionally
              tailored portfolio of top-performing Cryptocurrencies.
              Just invest, sit back & watch your investments grow.
            </motion.p>

            {/* CTA Button - WRAPPED IN MOTION.DIV */}
            <motion.div
              className="mt-8 mb-8 md:mb-0" // Added margin-bottom for mobile spacing
              variants={itemVariants} // Apply item variants
            >
              {/* Link remains standard */}
              <Link
                href="/#portfolios"
                className={`${yellowBgColor} ${yellowHoverBgColor} text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block`}
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Man Image - WRAPPED CONTAINER IN MOTION.DIV */}
          {/* items-stretch helps the absolute child take full height */}
          <div className="flex relative w-full h-full items-center justify-center md:items-stretch">

            {/* Image Container: Wrapped in motion.div for animation */}
            <motion.div
              className="
                relative                     {/* Base relative for overlay */}
                md:mt-0                      {/* Reset mobile margin */}

                {/* --- SIZING --- */}
                w-full max-w-[420px]       {/* Mobile: Slightly wider max-width */}
                h-[50vh]                   {/* Mobile: Slightly shorter fixed height */}
                md:w-[80%]                 {/* Desktop: Base width percentage */}
                lg:w-[90%]                 {/* Desktop: Wider on large screens */}
                xl:w-[100%]                {/* Desktop: Even wider on XL screens */}
                md:h-full                  {/* Desktop: Takes full height */}
                md:max-w-none              {/* Desktop: No max-width */}

                mx-auto md:mx-0            {/* Mobile centering */}

                {/* --- POSITIONING --- */}
                md:absolute md:bottom-0     {/* Desktop: Absolute position at bottom */}
                {/* Increased negative offsets significantly */}
                md:right-[-15%]             {/* Desktop: More bleed off right edge */}
                lg:right-[-25%]
                xl:right-[-35%]
              "
              variants={imageVariants} // Apply image variants
              initial="hidden"         // Initial state
              animate="visible"        // Animate to this state
            >
              {/* The Image itself */}
              <Image
                 src="/images/hero.png" // Your man image
                 alt="Man looking towards the future"
                 layout="fill"             // Fill the container div
                 objectFit="cover"          // Cover the container
                 objectPosition="top right" // Position image focusing on TOP right
                 quality={90}
                 className="relative z-10"   // Position below overlay
               />
               {/* Light Overlay specifically for the man image */}
               <div className="absolute inset-0 bg-black opacity-15 z-20 pointer-events-none"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisualHero;