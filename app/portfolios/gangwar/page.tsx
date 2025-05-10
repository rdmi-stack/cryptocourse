// app/portfolios/gangwar/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// SVG clip path component for the torn paper effect
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="portfolioTornEffectHero" clipPathUnits="objectBoundingBox">
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

// MODIFIED Stats Data for GANGWAR based on client feedback
const portfolioStatsGangwar = [
  { label: 'Risk Profile', value: 'High', subValue: 'High-risk, high-reward' },
  { label: 'Primary Strategy', value: 'Aggressive Momentum' }, // No subValue indicated for this one in feedback
  { label: 'Rebalance Frequency', value: 'Dynamic', subValue: '(Weekly/Monthly)' }
];

const PortfolioGangwarPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');
  const [email, setEmail] = useState('');

  const redColor = 'text-red-500'; // Accent color for GANGWAR
  const redHighlightColor = 'text-red-600';

  // Content for GANGWAR
  const heroTitle = "GANGWAR";
  const shortDescription = "A fearless, technically optimized crypto strategy built for seasoned risk-takers aiming to dominate volatility and seize explosive upside opportunities in the digital asset battlefield.";
  const tagline = "High-Risk High Return | Technical Precision | Tactical Momentum Strategy";

  const overviewParagraph1 = "A fearless, technically optimized crypto strategy built for seasoned risk-takers aiming to dominate volatility and seize explosive upside opportunities in the digital asset battlefield.";
  const overviewParagraph2 = "The GANGWAR Portfolio is a high-octane, aggressive crypto portfolio crafted to exploit rapid market rotations, microcap breakouts, and technically primed altcoin setups. It thrives in chaos — using real-time data, trend analysis, and advanced technical indicators to enter and exit with precision.";
  const keyHighlights = [
    "High-risk, high-reward portfolio targeting short- to mid-term alpha across volatile and under-the-radar altcoins.",
    "Backed by technical analysis on secret strategies of Dubai Club.",
    "Rotates across low-cap and mid-cap altcoins with asymmetric upside potential and liquidity for tactical trades.",
    "Dynamic rebalancing based on momentum, chart setups, and changing market conditions — updated 2-3 times per week.",
    "Built for active crypto warriors who thrive on volatility and aren't afraid to ride fast, hard trends — or pivot quickly."
  ];
  const overviewConclusion = "Unleash your inner alpha hunter with GANGWAR — a battle-tested crypto strategy forged in volatility, built for dominance.";

  const methodologyDefiningUniverse = "The GANGWAR strategy focuses on a dynamic and aggressive selection of 10-15 actively traded altcoins drawn from across major centralized exchanges (CEXs) and decentralized ecosystems.";
  const methodologyResearch = "The research framework is driven by price-action dominance, built upon a blend of technical indicators, real-time chart patterns, and AI-driven trade setups.";
  const methodologyScreening = "From the initial universe, a tight selection of 10-15 high-momentum tokens are actively managed in the GANGWAR portfolio.";
  const methodologyWeighting = "GANGWAR follows a dynamic, volatility-based weighting model.";
  const methodologyRebalance = "The GANGWAR Portfolio undergoes need basis rebalances per week or month, driven by profit booking, real-time trend shifts and technicals confirmations.";

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Newsletter email submitted:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden">
      <TornPaperClipPathComponent />

      {/* 1. Hero Section */}
      <motion.section
        className="relative py-20 md:py-28 lg:py-36"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div
              className="md:col-span-5 lg:col-span-5 order-1"
              variants={itemVariant}
            >
              <div
                className="relative z-10 shadow-2xl group transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ clipPath: 'url(#portfolioTornEffectHero)' }}
              >
                <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] relative">
                  <Image
                    src="/images/gangwar-section-visual.jpg"
                    alt="GANGWAR Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority
                    className="rounded-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-7 lg:col-span-7 order-2 flex flex-col justify-center text-center md:text-left"
              variants={sectionVariant}
            >
              <motion.h1
                className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${redColor} mb-4 uppercase`}
                style={{ textShadow: `0 0 25px rgba(239, 68, 68, 0.5), 0 0 10px rgba(220, 38, 38, 0.3)` }}
                variants={itemVariant}
              >
                {heroTitle}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-neutral-300 mb-6 max-w-xl mx-auto md:mx-0"
                variants={itemVariant}
              >
                {shortDescription}
              </motion.p>
              <motion.p
                className={`text-sm font-semibold ${redHighlightColor} tracking-wider`}
                variants={itemVariant}
              >
                {tagline}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Stats & Pricing Section */}
      <motion.section
        className="py-12 md:py-16 bg-black/60 backdrop-blur-md border-t border-b border-gray-800/70"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6" variants={itemVariant}>
              {portfolioStatsGangwar.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-gray-800/80 border border-gray-700/80 p-5 rounded-xl shadow-lg text-center flex flex-col items-center justify-center hover:border-red-500/80 transition-all duration-300 transform hover:scale-105 min-h-[150px] sm:min-h-[160px]" // Added min-height for consistency
                  variants={itemVariant}
                >
                  <span className="block text-sm uppercase text-neutral-400 tracking-wider mb-1.5">{stat.label}</span>
                  <span className={`block text-3xl font-bold ${stat.label === 'Risk Profile' ? redColor : 'text-neutral-100'}`}>
                    {stat.value}
                  </span>
                  {/* MODIFIED: Render subValue if it exists */}
                  {stat.subValue && (
                    <span className="block text-base text-neutral-300 mt-0.5">
                      {stat.subValue}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={`lg:col-span-1 bg-gradient-to-br from-red-600/20 via-red-700/15 to-black/40 backdrop-blur-md border border-red-600/60 rounded-xl shadow-xl p-6 text-center flex flex-col justify-center items-center`}
              variants={itemVariant}
            >
              <p className="text-lg text-neutral-200 mb-2">Get access starting from</p>
              <p className={`text-4xl font-bold ${redColor} mb-5`}>
                ₹999 <span className="text-lg font-normal text-neutral-400">/ 3 Months</span>
              </p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Link href="/subscribe?portfolio=gangwar" legacyBehavior>
                  <a className={`relative inline-block w-full max-w-xs overflow-hidden rounded-lg ${redColor.replace('text-','bg-')} px-8 py-3.5 text-lg font-bold text-white shadow-lg hover:bg-red-600 transition-colors duration-300`}>
                    <span className="relative z-10">Subscribe Now</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50 blur-[3px] animate-shimmer" />
                  </a>
                </Link>  {/* Social Sharing */}
<div className="mt-4 flex justify-center gap-4">
  {/* Twitter */}
  <a
    href="https://twitter.com/intent/tweet?text=Check%20out%20the%20Real%20Kings%20Crypto%20Portfolio%20on%20Dubai%20Club&url=https://dubaiclub.in/portfolios/real-kings"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-500 transition"
    aria-label="Share on Twitter"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.27 9.27 0 01-2.9 1.1A4.52 4.52 0 0016.1 0c-2.66 0-4.8 2.24-4.8 5 0 .39.04.76.13 1.12C7.69 5.92 4.07 3.94 1.64.93a4.93 4.93 0 00-.65 2.5c0 1.7.87 3.2 2.2 4.08A4.48 4.48 0 01.96 7v.06c0 2.37 1.64 4.35 3.8 4.8a4.52 4.52 0 01-2.17.09c.62 2 2.44 3.44 4.6 3.48A9.06 9.06 0 010 19.5 12.8 12.8 0 006.29 21c7.55 0 11.68-6.42 11.68-11.98 0-.18 0-.36-.01-.53A8.58 8.58 0 0023 3z"/>
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/sharing/share-offsite/?url=https://dubaiclub.in/portfolios/real-kings"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-700 transition"
    aria-label="Share on LinkedIn"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5a2.49 2.49 0 11-4.97 0 2.49 2.49 0 014.97 0zM.13 8.5h4.88V24H.13V8.5zM9.63 8.5h-4.8V24h4.8V15.5c0-4.4 5.67-4.75 5.67 0V24h4.8V14c0-7.9-8.47-7.6-10.47-3.7V8.5z"/>
    </svg>
  </a>

  {/* WhatsApp */}
  <a
    href="https://api.whatsapp.com/send?text=Check%20out%20Real%20Kings%20Crypto%20Portfolio%20on%20Dubai%20Club%3A%20https%3A%2F%2Fdubaiclub.in%2Fportfolios%2Freal-kings"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:text-green-500 transition"
    aria-label="Share on WhatsApp"
  >
   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
  <path d="M16.01 0C7.167 0 0 7.162 0 15.994c0 2.82.742 5.537 2.148 7.948L0 32l8.283-2.146a15.947 15.947 0 007.727 1.975h.002C24.855 31.829 32 24.681 32 15.994 32 7.162 24.853 0 16.01 0zm0 29.434a13.317 13.317 0 01-6.822-1.845l-.49-.287-4.912 1.273 1.307-4.787-.319-.49a13.332 13.332 0 01-2.085-7.113c0-7.37 6.006-13.36 13.37-13.36 7.36 0 13.366 5.99 13.366 13.36 0 7.372-6.006 13.36-13.37 13.36zm7.278-9.918c-.395-.198-2.34-1.156-2.702-1.287-.362-.132-.625-.198-.888.198s-1.016 1.287-1.247 1.553c-.228.264-.458.297-.853.099-.39-.198-1.648-.607-3.14-1.937-1.16-1.034-1.944-2.31-2.174-2.7-.228-.396-.024-.608.174-.805.18-.178.398-.462.597-.693.198-.228.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.198-.888-2.14-1.218-2.928-.321-.771-.648-.666-.888-.675l-.757-.015c-.264 0-.693.099-1.056.495s-1.388 1.357-1.388 3.303 1.422 3.826 1.62 4.092c.198.264 2.796 4.269 6.773 5.993.947.408 1.686.651 2.264.834.951.303 1.818.261 2.502.159.763-.114 2.34-.955 2.67-1.875.33-.924.33-1.715.231-1.875-.099-.165-.363-.264-.758-.462z" />
</svg>

  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/sharer/sharer.php?u=https://dubaiclub.in/portfolios/real-kings"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-600 transition"
    aria-label="Share on Facebook"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.591l-.467 3.696h-3.124V24h6.126C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
    </svg>
  </a>

  {/* Instagram (link to brand profile, as Instagram doesn't allow direct sharing) */}
  <a
    href="https://www.instagram.com/dubaiclub" // Replace with your actual IG handle
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-600 transition"
    aria-label="Instagram"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm8.25 1.75a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
    </svg>
  </a>
</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Detailed Information Section with Tabs */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex border-b border-gray-700/60 mb-10 justify-center">
            <TabButton
              label="Overview"
              isActive={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
              activeColor="red"
            />
            <TabButton
              label="Methodology"
              isActive={activeTab === 'methodology'}
              onClick={() => setActiveTab('methodology')}
              activeColor="red"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {activeTab === 'overview' && (
                <motion.div variants={sectionVariant} initial="hidden" animate="visible">
                  <DetailSectionHeading className="mt-0 text-center md:text-left" accentColor="red">{heroTitle} Portfolio Overview</DetailSectionHeading>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>{overviewParagraph1}</motion.p>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>{overviewParagraph2}</motion.p>
                  <motion.h3 className="text-2xl font-semibold text-neutral-100 mt-8 mb-4" variants={itemVariant}>Key highlights include:</motion.h3>
                  <motion.ul className="list-none space-y-3 text-neutral-300 leading-relaxed mb-8" variants={itemVariant}>
                    {keyHighlights.map((highlight, i) => (
                      <motion.li key={i} className="flex items-start" variants={itemVariant}>
                        <span className={`mr-3 mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${redColor.replace('text-','bg-')}`}></span>
                        {highlight}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.p className="text-neutral-300 leading-relaxed font-semibold" variants={itemVariant}>{overviewConclusion}</motion.p>
                </motion.div>
              )}

              {activeTab === 'methodology' && (
                <motion.div variants={sectionVariant} initial="hidden" animate="visible">
                   <DetailSectionHeading className="mt-0 text-center md:text-left" accentColor="red">{heroTitle} Methodology</DetailSectionHeading>
                   <MethodologySubSection title="Defining the Universe" content={methodologyDefiningUniverse} accentColor="red"/>
                   <MethodologySubSection title="Research" content={methodologyResearch} accentColor="red"/>
                   <MethodologySubSection title="Constituent Screening" content={methodologyScreening} accentColor="red"/>
                   <MethodologySubSection title="Weighting" content={methodologyWeighting} accentColor="red"/>
                   <MethodologySubSection title="Rebalance" content={methodologyRebalance} accentColor="red"/>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.p className="text-center text-neutral-400 mt-16 text-sm italic" variants={itemVariant}>
            GANGWAR is for the bold. High risk, high reward. Invest responsibly.
          </motion.p>
        </div>
      </motion.section>

      {/* 4. Newsletter Section (reused, using yellow for brand consistency) */}
      <motion.section
          className="py-16 md:py-24 bg-gray-900/50 border-t border-gray-800/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <motion.h2
              className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mb-3`}
              variants={itemVariant}
              style={{ textShadow: `0 0 15px rgba(250, 204, 21, 0.4)`}}
            >
              NEWSLETTER
            </motion.h2>
            <motion.p className="text-xl md:text-2xl text-neutral-100 font-semibold mb-4" variants={itemVariant}>
              Stay Ahead with Dubai Club & Get Insights the Secrets of the Ultra-Wealthy
            </motion.p>
            <motion.p className="text-neutral-300 mb-8 max-w-2xl mx-auto" variants={itemVariant}>
              Free to Subscribe for weekly market analysis, portfolio updates, AI-driven crypto insights & ultra wealth secrets delivered directly to your inbox.
            </motion.p>
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6"
              variants={itemVariant}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-5 py-3 rounded-md bg-gray-800/60 border border-gray-700 text-neutral-200 placeholder-neutral-500 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(250,204,21,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-md bg-yellow-400 text-black font-semibold transition-all duration-300 shadow-md hover:bg-yellow-500`}
              >
                Subscribe
              </motion.button>
            </motion.form>
            <motion.p className="text-neutral-400 flex items-center justify-center gap-2" variants={itemVariant}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              Join 10,000+ Smart Crypto Investors
            </motion.p>
        </div>
      </motion.section>

      {/* Footer Tagline */}
      <motion.footer
            className="py-8 text-center border-t border-gray-800/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariant}
      >
        <p className="text-neutral-400 text-sm">
            "Built for India. Inspired by Dubai. Powered by Wealth." ❤️
        </p>
      </motion.footer>
    </div>
  );
};

// Helper Components (modified to accept accent color)
interface TabButtonProps { label: string; isActive: boolean; onClick: () => void; activeColor?: 'yellow' | 'blue' | 'red'; }
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick, activeColor = 'yellow' }) => {
  const colorClass = `text-${activeColor}-500`;
  const bgColorClass = `bg-${activeColor}-500`;
  const hoverColorClass = `hover:text-${activeColor}-400`; // Adjusted hover to be slightly lighter variant

  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-5 sm:px-8 text-sm sm:text-base font-semibold transition-colors duration-300
                  ${isActive ? colorClass : `text-neutral-400 ${hoverColorClass}`}`}
    >
      {label}
      {isActive && (
        <motion.div
          className={`absolute bottom-[-1px] left-0 right-0 h-1 ${bgColorClass}`}
          layoutId="underline-gangwar" // Unique layoutId per page/tab group
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
};

const DetailSectionHeading: React.FC<{ children: React.ReactNode, className?: string, id?: string, accentColor?: 'yellow' | 'blue' | 'red' }> = ({ children, className = '', id, accentColor = 'yellow' }) => {
  const colorClass = `text-${accentColor}-500`;
  const shadowRgb = accentColor === 'red' ? '239, 68, 68' : accentColor === 'blue' ? '59, 130, 246' : '250, 204, 21';
  return (
    <h2
      id={id}
      className={`font-serif text-3xl md:text-4xl font-bold ${colorClass} mt-10 mb-6 ${className}`}
      style={{ textShadow: `0 0 15px rgba(${shadowRgb}, 0.4)` }}
    >
      {children}
    </h2>
  );
};

const MethodologySubSection: React.FC<{ title: string, content: string, accentColor?: 'yellow' | 'blue' | 'red' }> = ({ title, content, accentColor = 'yellow' }) => {
  const colorClass = `text-${accentColor}-500`; // Using the primary accent color for consistency
  return (
    <motion.div className="mb-8" variants={itemVariant}>
      <h4 className={`text-xl font-semibold ${colorClass} mb-2.5`}>{title}</h4>
      <p className="text-neutral-300 leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default PortfolioGangwarPage;