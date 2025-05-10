// components/PortfolioSectionProjectBeta.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ─────────────────  TORN CLIP-PATH  ───────────────── */
const ProjectBetaClipPath: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="projectBetaTornClip" clipPathUnits="objectBoundingBox">
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
          L0.002,0.75 L0.007,0.60 L0.002,0.40 L0.007,0.25 Z" />
      </clipPath>
    </defs>
  </svg>
);

/* ─────────────────  ANIMATIONS  ───────────────── */
const sectionAppearVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: .5, staggerChildren: .2 } }
};
const itemAppearVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } }
};

/* ─────────────────  COMPONENT  ───────────────── */
const PortfolioSectionProjectBeta: React.FC = () => {
  const primaryColor = 'text-yellow-400';
  const primaryBgColor = 'bg-yellow-500';
  const primaryHoverBgColor = 'hover:bg-yellow-600';
  const primaryTextShadow = '0 0 15px rgba(250,204,21,.4)';
  const primaryHoverShadow = 'yellow-500/30';

  const portfolio = {
    name: "Project Beta",
    tagline: "Volatility Harvesting | Quant Driven | Risk Managed",
    description:
      "Employing quantitative models to capitalize on market volatility, Project Beta aims for superior risk-adjusted returns through algorithmic precision.",
    href: "/portfolios/project-beta",
    imageSrc: "/images/image7.jpg",
    imageAlt: "Project Beta Portfolio Visual",
    stats: [
      { label: "Strategy Type", value: "Quantitative" },
      { label: "Risk Focus", value: "Managed Volatility" }
    ]
  };

  return (
    <motion.section
      className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .1 }}
      variants={sectionAppearVariant}
      aria-labelledby="projectbeta-title-main"
    >
      <ProjectBetaClipPath />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* IMAGE */}
        <motion.div className="md:col-span-7 order-1" variants={itemAppearVariant}>
          <div className="absolute -inset-1 bg-black rounded-lg scale-[1.01] z-1" />
          <div
            className="relative z-10 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'url(#projectBetaTornClip)' }}
          >
            <div className="aspect-video md:aspect-[16/10] relative bg-neutral-800">
              <Image
                src={portfolio.imageSrc}
                alt={portfolio.imageAlt}
                width={800}
                height={500}
                objectFit="contain"       /*  ← no crop */
                priority
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div className="md:col-span-5 order-2" variants={itemAppearVariant}>
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <h2 id="projectbeta-title-main"
                className={`text-4xl sm:text-5xl font-extrabold ${primaryColor} mb-3`}
                style={{ textShadow: primaryTextShadow }}>
              {portfolio.name}
            </h2>
            <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
              {portfolio.tagline}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 text-sm sm:text-base">
              {portfolio.stats.map(stat => (
                <div key={stat.label}
                     className="border border-gray-700 bg-gray-800/70 p-3 rounded text-center hover:border-yellow-700/50 transition-colors">
                  <span className="font-semibold block text-neutral-100">{stat.label}</span>
                  <span className="text-neutral-300">{stat.value}</span>
                </div>
              ))}
            </div>

            <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
              {portfolio.description}
            </p>

            <Link href={portfolio.href} legacyBehavior>
              <a className={`inline-flex items-center justify-center ${primaryBgColor} ${primaryHoverBgColor} text-black font-bold py-3 px-8 rounded-md shadow-lg transform transition hover:scale-105 hover:shadow-${primaryHoverShadow}`}>
                Explore Project Beta →
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSectionProjectBeta;
