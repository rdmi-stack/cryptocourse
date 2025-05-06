// app/portfolios/10x-alphas/page.tsx
"use client"; // Required for Framer Motion and useState

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animation Variants ---

// For main sections to animate in and stagger their direct children
const sectionEntryVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
  }
};

// For individual items within a staggered sequence
const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Specific variant for the hero's content overlay block (text + image columns)
const heroContentOverlayVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 } // Staggers text & image columns
  }
};

// Specific variant for the text column in hero to stagger its internal H1, P elements
const heroTextColumnVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.15, delayChildren: 0.1 } // Staggers H1, P, etc.
  }
};

// --- Clip Path Definitions ---

// SVG Clip Path Component (used for image in "Detailed Information Section")
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="portfolioTornEffect" clipPathUnits="objectBoundingBox">
        {/* Ensure this path is correctly formatted. An invalid path might cause clipping to fail, but usually not a blank page. */}
        <path d="
            M0.00,0.010 L0.03,0.000 L0.06,0.020 L0.09,0.005 L0.12,0.030
            L0.15,0.015 L0.18,0.040 L0.21,0.025 L0.24,0.050 L0.27,0.010
            L0.30,0.040 L0.33,0.020 L0.36,0.050 L0.39,0.030 L0.42,0.060
            L0.45,0.040 L0.48,0.070 L0.51,0.020 L0.54,0.050 L0.57,0.030
            L0.60,0.060 L0.63,0.005 L0.66,0.030 L0.69,0.020 L0.72,0.050
            L0.75,0.010 L0.78,0.040 L0.81,0.020 L0.84,0.050 L0.87,0.030
            L0.90,0.060 L0.93,0.025 L0.96,0.040 L0.99,0.020
            L1.00,0.20 L1.00,0.40 L1.00,0.60 L1.00,0.80
            L0.99,0.980 L0.96,0.950 L0.93,0.990 L0.90,0.960
            L0.87,0.985 L0.84,0.945 L0.81,0.980 L0.78,0.950 L0.75,0.990
            L0.72,0.960 L0.69,0.985 L0.66,0.955 L0.63,0.975 L0.60,0.935
            L0.57,0.970 L0.54,0.930 L0.51,0.980 L0.48,0.940 L0.45,0.975
            L0.42,0.950 L0.39,0.990 L0.36,0.955 L0.33,0.975 L0.30,0.930
            L0.27,0.990 L0.24,0.960 L0.21,0.985 L0.18,0.950 L0.15,0.970
            L0.12,0.930 L0.09,0.975 L0.06,0.935 L0.03,0.960 L0.00,0.990
            L0.00,0.80 L0.00,0.60 L0.00,0.40 L0.00,0.20
            Z
        " />
      </clipPath>
    </defs>
  </svg>
);

// CSS Polygon Clip Path for Hero Image (ensure this polygon string is perfectly valid)
// An invalid polygon will likely result in no clipping, not a blank page.
const tornPaperClipPathHero = 'polygon(0% 5%, 3% 0%, 20% 2%, 40% 0%, 60% 2%, 75% 0%, 95% 1%, 100% 5%, 98% 20%, 100% 60%, 99% 82%, 100% 100%, 95% 98%, 65% 100%, 40% 99%, 20% 100%, 5% 98%, 0 100%, 1% 80%, 0% 50%, 2% 30%)';

// --- Helper Components ---
interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-4 sm:px-6 text-sm sm:text-base font-medium transition-colors duration-300 ${
        isActive ? 'text-yellow-400' : 'text-neutral-400 hover:text-neutral-100'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
          layoutId="underline" // Shared layout ID for smooth animation
          initial={false} // Typically okay for layout animations that depend on state.
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

interface DetailSectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const DetailSectionHeading: React.FC<DetailSectionHeadingProps> = ({ children, className = '', id }) => (
  <h2
    id={id}
    className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mt-10 mb-5 ${className}`}
    style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
  >
    {children}
  </h2>
);

// --- Main Page Component ---
const Portfolio10XAlphasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');

  const yellowColor = 'text-yellow-400'; // Ensure this color and others are defined in your Tailwind config or are standard.
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden">
      <TornPaperClipPathComponent /> {/* SVG definitions for use later. Must be in DOM for url(#...) to work. */}

      {/* 1. Enhanced Hero Section */}
      <motion.section
        className="relative h-[80vh] min-h-[600px] md:h-[85vh] flex flex-col justify-center items-center overflow-hidden py-12 md:py-0"
        initial="hidden"
        animate="visible"
        variants={sectionEntryVariant}
      >
        {/* Background Image */}
        <motion.div
            className="absolute inset-0 z-0"
            variants={{
              hidden: { opacity: 0, scale: 1.1 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] } }
            }}
        >
          {/* IMPORTANT: Verify this image path is correct in your `public` folder. Missing images can cause `next/image` errors. */}
          <Image
            src="/portfolio-10x-alphas.jpg" // Example: public/portfolio-10x-alphas.jpg
            alt="10X Alphas Hero Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority // Good for LCP.
          />
          <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        </motion.div>

        {/* Content Overlay Block */}
        <motion.div
          className="relative z-10 container mx-auto px-4 w-full md:flex md:items-center md:gap-10 lg:gap-16"
          variants={heroContentOverlayVariant}
        >
          {/* Text Column */}
          <motion.div
            className="w-full md:w-1/2 lg:flex-grow text-center md:text-left mb-10 md:mb-0"
            variants={heroTextColumnVariant}
          >
            <motion.h1
              className={`font-serif text-5xl sm:text-6xl md:text-7xl font-bold ${yellowColor} mb-4`}
              style={{ textShadow: '0 0 25px rgba(250, 204, 21, 0.6)' }}
              variants={itemVariant}
            >
              10X Alphas
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-200 mb-6 max-w-xl mx-auto md:mx-0"
              variants={itemVariant}
            >
              Focused on high quality crypto generate alpha returns with exponential growth potential for long term wealth building.
            </motion.p>
            <motion.p
              className="text-sm font-medium text-yellow-600 tracking-wider" // Ensure text-yellow-600 is defined or standard
              variants={itemVariant}
            >
              Fundamentals-Backed | High-Growth Crypto | Long-Term Alpha Generation
            </motion.p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto md:mx-0 group"
            variants={itemVariant}
          >
            <div
              className="relative shadow-2xl"
              style={{ clipPath: tornPaperClipPathHero }} // Applied CSS clip-path
            >
              <div className="aspect-[4/3] sm:aspect-video md:aspect-[16/10] bg-gray-800/50">
                {/* IMPORTANT: Verify this image path is correct. Example: public/images/image2.jpg */}
                <Image
                  src="/images/image2.jpg"
                  alt="10X Alphas Thematic Visual - Torn Paper"
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  className="transform group-hover:scale-105 transition-transform duration-300 ease-out"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 2. Stats & Pricing Section */}
      <motion.section
        className="py-12 md:py-16 bg-black/40 backdrop-blur-md border-t border-b border-gray-800/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionEntryVariant}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Stats Cards Block */}
            <motion.div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4" variants={itemVariant}>
              {[
                { label: 'Rebalance Freq.', value: 'Need Basis' },
                { label: 'Volatility', value: 'Medium' },
                { label: '2Y CAGR', value: '122%' }
              ].map((stat, index) => (
                <motion.div // These are motion children. Their parent has `itemVariant` which does not `staggerChildren`.
                            // So this block animates as one. Individual cards will appear with it.
                  key={stat.label}
                  className={`bg-gray-800/60 border border-gray-700/50 p-4 rounded-lg shadow-md text-center flex flex-col justify-center ${
                    index === 2 ? 'col-span-2 sm:col-span-1' : '' // Logic for spanning the last item seems fine
                  }`}
                >
                  <span className="block text-xs uppercase text-neutral-400 tracking-wider mb-1">{stat.label}</span>
                  <span className="block text-xl font-semibold text-neutral-100">{stat.value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing Block */}
            <motion.div
              className="lg:col-span-1 bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-sm border border-yellow-600/40 rounded-xl shadow-xl p-6 text-center flex flex-col justify-center items-center"
              variants={itemVariant}
            >
              <p className="text-lg text-neutral-200 mb-2">Get access starting from</p>
              <p className="text-4xl font-bold text-yellow-400 mb-5">
                ₹999 <span className="text-lg font-normal text-neutral-400">/ 3 Months</span>
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/subscribe?portfolio=10x-alphas" legacyBehavior>
                  <a className={`inline-block w-full max-w-xs ${yellowBgColor} ${yellowHoverBgColor} text-black text-lg font-bold py-3 px-8 rounded-md transition duration-200 ease-in-out shadow-lg hover:shadow-yellow-500/40`}>
                    Subscribe Now
                  </a>
                </Link>
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
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionEntryVariant}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Image with SVG Clip Path */}
          <motion.div
            className="mb-12 group"
            variants={itemVariant}
          >
            <div
              className="relative shadow-xl"
              style={{ clipPath: 'url(#portfolioTornEffect)' }} // Uses the SVG clipPath defined above.
            >
              <div className="aspect-[16/9] bg-gray-800/30">
                {/* Consider a different image than hero for variety, and verify path. */}
                <Image
                  src="/images/image2.jpg" // Example: public/images/image2.jpg (same as hero currently)
                  alt="Thematic Visual for 10X Alphas Portfolio - Detailed View"
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  className="transform group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div className="flex border-b border-gray-700/50 mb-8" variants={itemVariant}>
            <TabButton
              label="Overview"
              isActive={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
            <TabButton
              label="Crypto & Weights Methodology"
              isActive={activeTab === 'methodology'}
              onClick={() => setActiveTab('methodology')}
            />
          </motion.div>

          {/* Tab Content */}
          <motion.div variants={itemVariant}>
            <AnimatePresence mode="wait"> {/* Smooth transition between tabs */}
              <motion.div
                key={activeTab} // Crucial for AnimatePresence to detect changes
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'overview' && (
                  <div>
                    <DetailSectionHeading className="mt-0">10X ALPHAS Portfolio Overview</DetailSectionHeading>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the disruptive power of blockchain innovation and digital assets.
                    </p>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      This exclusive, high-risk/high-reward portfolio is laser-focused on a carefully curated set of 10 high-quality crypto assets with the potential for massive long-term growth. Designed for forward-thinking investors, the strategy leverages intelligent risk management and momentum-driven rebalancing to outperform across market cycles.
                    </p>
                    <h3 className="text-2xl font-semibold text-neutral-100 mt-8 mb-4">Key highlights include:</h3>
                    <ul className="list-disc list-outside space-y-3 pl-5 text-neutral-300 leading-relaxed mb-8">
                      <li>A concentrated 10-crypto portfolio selected from leading L1/L2 protocols, DeFi, AI, and Web3 infrastructure projects.</li>
                      <li>Focus on tokens with strong network activity, adoption trends, and breakthrough narratives.</li>
                      <li>Targets early-stage and mid-cap cryptos with exponential upside, backed by strong fundamentals and community traction.</li>
                      <li>Strategic weekly rebalancing (or as needed) to capture emerging trends and avoid stagnation.</li>
                      <li>Optimized for alpha generation in volatile and bullish crypto market phases, with adaptive risk controls.</li>
                    </ul>
                    <p className="text-neutral-300 leading-relaxed mb-6">
                      Elevate your crypto investing journey with a precision-built, high-alpha strategy that blends long-term conviction with active momentum capture.
                    </p>
                  </div>
                )}

                {activeTab === 'methodology' && (
                  <div>
                    <DetailSectionHeading className="mt-0">Crypto & Weights Methodology</DetailSectionHeading>
                    <div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8">
                      <p className="text-neutral-400 leading-relaxed italic">
                        Detailed information on the specific crypto assets currently held, their weightings, and the precise methodology used for selection and rebalancing will be made available to subscribers upon access. Our approach focuses on [mention key aspects briefly - e.g., fundamental analysis, technical indicators, market sentiment, AI-driven signals] to identify high-potential assets within the defined strategy parameters.
                        <br/><br/>[More detailed placeholder content about methodology, risk management, selection criteria, and rebalancing rules would go here for subscribers.]
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p className="text-center text-neutral-400 mt-12 text-sm italic" variants={itemVariant}>
            Would you like versions tailored for different risk profiles (e.g., conservative, balanced, aggressive) or for short-term swing portfolios? Let us know!
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio10XAlphasPage;