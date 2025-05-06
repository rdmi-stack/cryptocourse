// app/portfolios/10x-alphas/page.tsx
"use client"; // Required for Framer Motion and useState

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Define Variants for animations
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Define the SVG clip path component for the torn paper effect
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="portfolioTornEffectHero" clipPathUnits="objectBoundingBox">
        {/* Adjusted path to show more of the image while keeping torn edges */}
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


const Portfolio10XAlphasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');

  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  // const yellowBorderColor = 'border-yellow-500'; // Defined in TabButton, but good to have here if needed elsewhere

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden"> {/* Prevent horizontal scroll */}
      <TornPaperClipPathComponent /> {/* Add SVG definitions */}

      {/* 1. Enhanced Hero Section - Modified for Torn Paper Effect */}
      <motion.section
        className="relative py-16 md:py-24 lg:py-32" // Adjusted padding
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

            {/* Left Column: Image with Torn Paper Effect */}
            <motion.div
              className="md:col-span-5 lg:col-span-5 order-1" // Adjust column span as needed
              variants={itemVariant}
            >
              <div
                className="relative z-10 shadow-2xl group transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ clipPath: 'url(#portfolioTornEffectHero)' }}
              >
<div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] relative"> {/* Or aspect-video, aspect-square etc. */}
<Image
                    src="/images/image3.jpg" // Original image, ensure it exists
                    alt="10X Alphas Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority
                  />
                  {/* Optional: Subtle overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              className="md:col-span-7 lg:col-span-7 order-2 flex flex-col justify-center text-center md:text-left"
              variants={sectionVariant} // Use sectionVariant for the container, or itemVariant for individual text elements
            >
              <motion.h1
                className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${yellowColor} mb-4`}
                style={{ textShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
                variants={itemVariant}
              >
                10X Alphas
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-neutral-200 mb-5 max-w-xl mx-auto md:mx-0" // Adjusted max-width for md:mx-0
                variants={itemVariant}
              >
                Focused on high quality crypto generate alpha returns with exponential growth potential for long term wealth building.
              </motion.p>
              <motion.p
                className="text-sm font-medium text-yellow-600 tracking-wider"
                variants={itemVariant}
              >
                Fundamentals-Backed | High-Growth Crypto | Long-Term Alpha Generation
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. Stats & Pricing Section - Animated */}
      <motion.section
        className="py-12 md:py-16 bg-black/40 backdrop-blur-md border-t border-b border-gray-800/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"> {/* Use items-stretch */}

             {/* Stats Area */}
            <motion.div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4" variants={itemVariant}>
               {/* Use motion.div for individual stat animations */}
               {[
                 { label: 'Rebalance Freq.', value: 'Need Basis' },
                 { label: 'Volatility', value: 'Medium' },
                 { label: '2Y CAGR', value: '122%' }
               ].map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   className={`bg-gray-800/60 border border-gray-700/50 p-4 rounded-lg shadow-md text-center flex flex-col justify-center ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                   variants={itemVariant}
                 >
                   <span className="block text-xs uppercase text-neutral-400 tracking-wider mb-1">{stat.label}</span>
                   <span className="block text-xl font-semibold text-neutral-100">{stat.value}</span>
                 </motion.div>
               ))}
            </motion.div>

            {/* Pricing & CTA Area */}
            <motion.div
              className="lg:col-span-1 bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-sm border border-yellow-600/40 rounded-xl shadow-xl p-6 text-center flex flex-col justify-center items-center" // Centering content
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
        viewport={{ once: true, amount: 0.2 }} // Trigger animation earlier for longer section
        variants={sectionVariant}
        >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

           {/* Tab Navigation */}
          <div className="flex border-b border-gray-700/50 mb-8">
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
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait"> {/* Smooth transition between tabs */}
            <motion.div
              key={activeTab} // Change key to trigger animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div>
                  <DetailSectionHeading className="mt-0">10X ALPHAS Portfolio Overview</DetailSectionHeading>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>
                    A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the disruptive power of blockchain innovation and digital assets.
                  </motion.p>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>
                    This exclusive, high-risk/high-reward portfolio is laser-focused on a carefully curated set of 10 high-quality crypto assets with the potential for massive long-term growth. Designed for forward-thinking investors, the strategy leverages intelligent risk management and momentum-driven rebalancing to outperform across market cycles.
                  </motion.p>

                  <motion.h3 className="text-2xl font-semibold text-neutral-100 mt-8 mb-4" variants={itemVariant}>Key highlights include:</motion.h3>
                  <motion.ul className="list-disc list-outside space-y-3 pl-5 text-neutral-300 leading-relaxed mb-8" variants={itemVariant}>
                    {/* Wrap each li with motion.li if needed for stagger animation */}
                    <li>A concentrated 10-crypto portfolio selected from leading L1/L2 protocols, DeFi, AI, and Web3 infrastructure projects.</li>
                    <li>Focus on tokens with strong network activity, adoption trends, and breakthrough narratives.</li>
                    <li>Targets early-stage and mid-cap cryptos with exponential upside, backed by strong fundamentals and community traction.</li>
                    <li>Strategic weekly rebalancing (or as needed) to capture emerging trends and avoid stagnation.</li>
                    <li>Optimized for alpha generation in volatile and bullish crypto market phases, with adaptive risk controls.</li>
                  </motion.ul>

                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>
                    Elevate your crypto investing journey with a precision-built, high-alpha strategy that blends long-term conviction with active momentum capture.
                  </motion.p>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div>
                   <DetailSectionHeading className="mt-0">Crypto & Weights Methodology</DetailSectionHeading>
                   <motion.div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8" variants={itemVariant}>
                     <p className="text-neutral-400 leading-relaxed italic">
                       Detailed information on the specific crypto assets currently held, their weightings, and the precise methodology used for selection and rebalancing will be made available to subscribers upon access. Our approach focuses on [mention key aspects briefly - e.g., fundamental analysis, technical indicators, market sentiment, AI-driven signals] to identify high-potential assets within the defined strategy parameters.
                       <br/><br/>[More detailed placeholder content about methodology, risk management, selection criteria, and rebalancing rules would go here for subscribers.]
                     </p>
                     {/* Add actual methodology content when available */}
                   </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>


          {/* Final Question from PDF */}
          <motion.p className="text-center text-neutral-400 mt-12 text-sm italic" variants={itemVariant}>
            Would you like versions tailored for different risk profiles (e.g., conservative, balanced, aggressive) or for short-term swing portfolios? Let us know!
          </motion.p>

        </div>
      </motion.section>

    </div>
  );
};


// Helper Component for Tabs
interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  const yellowBorderColor = 'border-yellow-500'; // Original yellow border
  const yellowBgForLine = 'bg-yellow-500'; // Yellow background for the underline
  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-4 sm:px-6 text-sm sm:text-base font-medium transition-colors duration-300 ${
        isActive ? 'text-yellow-400' : 'text-neutral-400 hover:text-neutral-100'
      }`}
    >
      {label}
      {/* Animated underline for active tab */}
      {isActive && (
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${yellowBgForLine}`} // Use bg color for line
          layoutId="underline" // Shared layout animation ID
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

// Reusable Heading Component (defined earlier)
const DetailSectionHeading: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = '', id }) => (
  <h2 id={id} className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mt-10 mb-5 ${className}`}
      style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}>
    {children}
  </h2>
);


export default Portfolio10XAlphasPage;