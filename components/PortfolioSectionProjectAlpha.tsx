// components/PortfolioSectionProjectAlpha.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { motion } from 'framer-motion';

const PortfolioSectionProjectAlpha: React.FC = () => {
  // --- Colors ---
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const neutralColor = 'text-neutral-400';
  const lightNeutralColor = 'text-neutral-300';

  // --- Framer Motion Variants ---
  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
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

  // --- Blobby Border Style ---
  const blobStyle = {
    borderRadius: '65% 35% 55% 45% / 40% 60% 40% 60%', // Keep or adjust style
  };

  // --- *** PLACEHOLDER CONTENT - REPLACE BELOW *** ---
  const portfolio = {
    name: "Project Alpha",
    tagline: "Innovative Strategy | Market Agnostic | Long-Term Value",
    description: "Leveraging unique market insights and a robust technical framework, Project Alpha seeks consistent returns regardless of market direction.",
    href: "/portfolios/project-alpha", // Update link destination
    imageSrc: "/images/image6.jpg", // Confirm or update image path
    imageAlt: "Project Alpha Portfolio Visual",
  };
  // --- *** END PLACEHOLDER CONTENT *** ---


  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image */}
          <motion.div
            className="md:col-span-7 order-1 md:order-1" // Image on the left
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div
              className="relative shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.03]"
              style={blobStyle} // Apply the blob border-radius here
            >
              <div className="aspect-video md:aspect-[16/10]">
                <Image
                  src={portfolio.imageSrc}
                  alt={portfolio.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                />
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
            <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/60 rounded-lg p-6 md:p-8 shadow-xl">
              {/* Headline */}
              <h2
                className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4 leading-tight`}
                style={{ textShadow: '0 0 12px rgba(250, 204, 21, 0.3)' }}
              >
                {portfolio.name}
              </h2>
              {/* Tagline */}
              <p className={`${neutralColor} font-medium mb-6 text-sm sm:text-base`}>
                 {portfolio.tagline}
              </p>
              {/* Description */}
              <p className={`${lightNeutralColor} mb-8 text-base md:text-lg leading-relaxed`}>
                {portfolio.description}
              </p>
              {/* CTA Button */}
              <Link href={portfolio.href} legacyBehavior>
                 <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                   Know More &rarr;
                 </a>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionProjectAlpha;