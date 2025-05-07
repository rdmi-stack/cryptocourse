"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Torn edge effect using clipPath
const ProjectAlphaClipPath: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="projectAlphaTornClip" clipPathUnits="objectBoundingBox">
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

const PortfolioSectionProjectAlpha: React.FC = () => {
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

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

  const portfolio = {
    name: "Project Alpha",
    tagline: "Innovative Strategy | Market Agnostic | Long-Term Value",
    description:
      "Leveraging unique market insights and a robust technical framework, Project Alpha seeks consistent returns regardless of market direction.",
    href: "/portfolios/project-alpha",
    imageSrc: "/images/image6.jpg",
    imageAlt: "Project Alpha Portfolio Visual",
  };

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      <ProjectAlphaClipPath />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            className="md:col-span-7 order-1 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500/30 via-yellow-400/30 to-black rounded-xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-300 z-0" />
              <div className="absolute inset-0 border-2 border-yellow-500/60 rounded-lg z-1" />
              <div
                className="relative z-10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ clipPath: 'url(#projectAlphaTornClip)' }}
              >
                <div className="w-full h-auto relative">
                  <Image
                    src={portfolio.imageSrc}
                    alt={portfolio.imageAlt}
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

          {/* Right: Text */}
          <motion.div
            className="md:col-span-5 order-2 md:order-2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/60 rounded-lg p-6 md:p-8 shadow-xl">
              <h2 className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4 leading-tight`} style={{ textShadow: '0 0 12px rgba(250, 204, 21, 0.3)' }}>
                {portfolio.name}
              </h2>
              <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
                {portfolio.tagline}
              </p>
              <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                {portfolio.description}
              </p>
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
