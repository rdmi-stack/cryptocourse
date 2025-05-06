// components/PortfolioSectionBreChealga.tsx
"use client"; // Required for Framer Motion

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

const PortfolioSectionBreChealga: React.FC = () => {
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  // --- Framer Motion Variants (Adjusted for Image-Left, Text-Right layout) ---
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Image comes from left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 }, // Text comes from right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 }, // Slight delay
    },
  };


  // --- LEFT Ripped Edge Clip Path ---
  // Polygon points defined to create a rip on the LEFT edge (0% to ~10%)
  const leftRippedEdgeClipPath =
    'polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 6% 94%, 9% 88%, 5% 82%, 10% 76%, 3% 70%, 8% 64%, 4% 58%, 9% 52%, 5% 46%, 10% 40%, 4% 34%, 8% 28%, 3% 22%, 9% 16%, 5% 10%, 10% 4%)';


  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern-variant.svg')] bg-repeat"
        // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image (Animated) */}
          <motion.div
            className="md:col-span-7 order-1 md:order-1" // Image on the left
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            {/* Image Wrapper styling */}
            <div className="relative rounded-lg shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-yellow-500/20">
              <div className="aspect-video md:aspect-[16/10]">
                <Image
                  src="/images/image4.jpg" // Image path updated previously
                  alt="Bre Chealga Portfolio Visual"
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  className="rounded-lg"
                />
              </div>
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg"></div>
            </div>
          </motion.div>

          {/* Right Column: Text Content Panel (Animated + Clipped on Left) */}
          <motion.div
            className="md:col-span-5 order-2 md:order-2 flex flex-col justify-center" // Text on the right
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
             {/* Text Panel Styling with LEFT Clip Path */}
            <div
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl relative"
              style={{ clipPath: leftRippedEdgeClipPath }} // Apply left rip
            >
              {/* Add some LEFT padding to prevent text hitting the ripped edge */}
              <div className="pl-6 md:pl-10">
                {/* Headline */}
                <h2
                  className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4 leading-tight`}
                  style={{ textShadow: '0 0 12px rgba(250, 204, 21, 0.3)' }}
                >
                Gangwar
                </h2>
                {/* Tagline */}
              

                {/* Description */}
                <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                High-risk, High-return crypto investments A technically optimized portfolio                </p>

                {/* --- CORRECTED CTA Button Link --- */}
                {/* Ensure NO comments or other nodes are direct children here */}
                <Link href="/portfolios/10x-alphas" legacyBehavior>
                  <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                    Know More &rarr;
                  </a>
                </Link>
                 {/* --- END CORRECTION --- */}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionBreChealga;