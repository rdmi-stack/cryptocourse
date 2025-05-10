"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/* ─────────────────  TORN CLIP-PATH  ────────────────── */
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="portfolioTornEffectGangwar" clipPathUnits="objectBoundingBox">
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
          L0.002,0.75 L0.007,0.60 L0.002,0.40 L0.007,0.25 Z
        " />
      </clipPath>
    </defs>
  </svg>
);

/* ─────────────────  ANIMATIONS  ────────────────── */
const sectionAppearVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: .5, staggerChildren: .2 } }
};
const itemAppearVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: .5, ease: "easeOut" } }
};

/* ─────────────────  COMPONENT  ────────────────── */
const PortfolioSectionGangwar: React.FC = () => {
  const primaryColor = 'text-red-500';
  const primaryBgColor = 'bg-red-500';
  const primaryHoverBgColor = 'hover:bg-red-600';
  const primaryTextShadow = '0 0 15px rgba(239,68,68,.4)';
  const primaryHoverShadow = 'red-500/40';

  return (
    <motion.section
      className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .1 }}
      variants={sectionAppearVariant}
      aria-labelledby="gangwar-title-main"
    >
      <TornPaperClipPathComponent />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* IMAGE */}
        <motion.div className="md:col-span-7 order-1 relative" variants={itemAppearVariant}>
          {/* MOST POPULAR badge */}
          <div className="popular-badge absolute -top-4 -left-4 z-20 rotate-[-10deg]">
            <div className="badge-shimmer-container bg-yellow-600 text-black font-bold px-6 py-2 rounded-md shadow-lg">
              <span className="badge-text">MOST POPULAR</span>
              <div className="badge-shimmer" />
            </div>
          </div>

          <div className="absolute -inset-1 bg-black rounded-lg scale-[1.01] z-1" />
          <div
            className="relative z-10 shadow-2xl group transition-transform duration-500 hover:scale-[1.02]"
            style={{ clipPath: 'url(#portfolioTornEffectGangwar)' }}
          >
            <div className="aspect-video md:aspect-[16/10] relative bg-neutral-800">
              <Image
                src="/images/gangwar-section-visual.jpg"
                alt="GANGWAR Portfolio Visual"
                width={800}
                height={500}
                objectFit="contain"          /*  ← FIXED: no crop */
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
            <h2 id="gangwar-title-main"
                className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-3 uppercase leading-tight"
                style={{ textShadow: primaryTextShadow }}>
              GANGWAR
            </h2>
            <p className="text-sm text-yellow-400 font-semibold tracking-wider mb-6">
              High-Risk High Return | Technical Precision | Tactical Momentum Strategy
            </p>
            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 text-sm sm:text-base">
             <div className="border border-gray-700 bg-gray-800/70 p-3 rounded text-center hover:border-red-700/50 transition-colors">
  <span className="font-semibold block text-neutral-100">Strategy</span>
  <span className="text-neutral-300">Secret AI Driven</span>
</div>

              <div className="border border-gray-700 bg-gray-800/70 p-3 rounded text-center hover:border-red-700/50 transition-colors">
                <span className="font-semibold block text-neutral-100">Approach</span>
                <span className="text-neutral-300">Aggressive Tactical</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-8">
              A fearless, technically optimized crypto strategy for seasoned risk-takers aiming to dominate volatility and seize explosive upside.
            </p>
            <Link href="/portfolios/gangwar" legacyBehavior>
              <a className="btn-shimmer relative inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md shadow-lg transform transition hover:scale-105 hover:shadow-yellow-500/40 overflow-hidden">
                <span className="relative z-10">Explore GANGWAR →</span>
              </a>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Badge shimmer CSS */}
      <style jsx>{`
        .popular-badge { animation: pulse 2s infinite ease-in-out; transform-origin:center; }
        .badge-shimmer-container { position:relative; overflow:hidden; }
        .badge-text { position:relative; z-index:20; font-weight:800; letter-spacing:.5px; text-shadow:0 1px 1px rgba(0,0,0,.3); }
        .badge-shimmer {
          position:absolute; top:0; left:-100%; width:50%; height:100%;
          background:linear-gradient(to right, transparent 0%,rgba(255,255,255,.5) 50%,transparent 100%);
          animation: shimmer 2s infinite; transform:skewX(-20deg);
        }
        @keyframes shimmer { 0%{left:-100%} 100%{ left:200% } }
        @keyframes pulse { 0%,100%{transform:scale(1) rotate(-10deg)} 50%{transform:scale(1.05) rotate(-10deg)} }
      `}</style>
    </motion.section>
  );
};

export default PortfolioSectionGangwar;
