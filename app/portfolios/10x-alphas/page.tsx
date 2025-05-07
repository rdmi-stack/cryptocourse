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

// Stats Data
const portfolioStats = [
  { label: 'Rebalance Freq.', value: 'Need Basis' },
  { label: 'Volatility', value: 'Medium' },
  { label: '2Y CAGR', value: '122%' } // Note: This is a historical figure
];

const Portfolio10XAlphasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');
  const [email, setEmail] = useState('');

  const yellowColor = 'text-yellow-400'; // Main accent yellow
  const yellowHighlightColor = 'text-yellow-500'; // Slightly deeper yellow for highlights

  // Updated Content for 10X ALPHAS from screenshots
  const shortDescription = "A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the disruptive power of blockchain innovation and digital assets.";
  const tagline = "Fundamentals-Backed | High-Growth Crypto | Long-Term Alpha Generation";
  const overviewParagraph1 = "A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the disruptive power of blockchain innovation and digital assets.";
  const overviewParagraph2 = "This exclusive, high-risk/high-reward portfolio is laser-focused on a carefully curated set of 10 high-quality crypto assets with the potential for massive long-term growth. Designed for forward-thinking investors, the strategy leverages intelligent risk management and momentum-driven rebalancing to outperform across market cycles.";
  const keyHighlights = [
    "A concentrated 10-crypto portfolio selected from leading L1/L2 protocols, DeFi, AI, and Web3 infrastructure projects.",
    "Focus on tokens with strong network activity, adoption trends, and breakthrough narratives.",
    "Targets early-stage and mid-cap cryptos with exponential upside, backed by strong fundamentals and community traction.",
    "Strategic weekly rebalancing to capture emerging trends and avoid stagnation.", // Updated as per "Overview of ALL" screenshot
    "Optimized for alpha generation in volatile and bullish crypto market phases, with adaptive risk controls."
  ];
  const overviewConclusion = "Elevate your crypto investing journey with a precision-built, high-alpha strategy that blends long-term conviction with active momentum capture.";

  // Methodology content (matches screenshots, no changes from original user code)
  const methodologyDefiningUniverse = "The 10X ALPHAS strategy draws from a curated universe of high-quality crypto assets across the infrastructure, DeFi, real-world assets (RWA), modular blockchains, and AI-powered ecosystems.";
  const methodologyResearch = "The research methodology blends deep fundamental analysis, macro narrative alignment, and quantitative scoring models to surface the most promising growth assets.";
  const methodologyScreening = "From the initial universe, the portfolio selects 10-12 high-conviction tokens using a multi-factor filtering approach.";
  const methodologyWeighting = "10X ALPHAS employs a growth-conviction-based weighting framework.";
  const methodologyRebalance = "The portfolio undergoes a monthly or need basis rebalance cycle, with quarterly deep reviews to validate long-term theses.";

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter email submitted:', email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <>
      {/* Add this to your globals.css or tailwind.config.js keyframes/animation utility for the shimmer effect */}
      {/*
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>

      <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden">
        <TornPaperClipPathComponent />

        {/* 1. Hero Section */}
        <motion.section
          className="relative py-20 md:py-28 lg:py-36" // Increased padding
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
                      src="/images/image3.jpg" // Placeholder image, update as needed
                      alt="10X Alphas Portfolio Visual"
                      layout="fill"
                      objectFit="cover"
                      quality={90}
                      priority
                      className="rounded-md" // Soften edges if tear effect doesn't cover
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="md:col-span-7 lg:col-span-7 order-2 flex flex-col justify-center text-center md:text-left"
                variants={sectionVariant} // Use sectionVariant for parent animation
              >
                <motion.h1
                  className={`font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${yellowColor} mb-4`}
                  style={{ textShadow: `0 0 25px rgba(250, 204, 21, 0.5), 0 0 10px rgba(250, 204, 21, 0.3)` }} // Enhanced text shadow
                  variants={itemVariant}
                >
                  10X Alphas
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-neutral-300 mb-6 max-w-xl mx-auto md:mx-0" // Slightly lighter text
                  variants={itemVariant}
                >
                  {shortDescription}
                </motion.p>
                <motion.p
                  className={`text-sm font-medium ${yellowHighlightColor} tracking-wider`} // Using deeper yellow
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
          className="py-12 md:py-16 bg-black/50 backdrop-blur-md border-t border-b border-gray-800/60" // Enhanced glassmorphism
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6" variants={itemVariant}>
                {portfolioStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="bg-gradient-to-br from-gray-800/70 via-gray-900/80 to-gray-800/70 border border-gray-700/70 p-5 rounded-xl shadow-lg text-center flex flex-col items-center justify-center hover:border-yellow-500/70 transition-all duration-300 transform hover:scale-105"
                    variants={itemVariant}
                  >
                    <span className="block text-sm uppercase text-neutral-400 tracking-wider mb-1.5">{stat.label}</span>
                    <span className={`block text-3xl font-bold ${stat.value.includes('%') ? yellowColor : 'text-neutral-100'}`}>{stat.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="lg:col-span-1 bg-gradient-to-br from-yellow-500/15 via-yellow-600/10 to-black/30 backdrop-blur-md border border-yellow-600/50 rounded-xl shadow-xl p-6 text-center flex flex-col justify-center items-center"
                variants={itemVariant}
              >
                <p className="text-lg text-neutral-200 mb-2">Get access starting from</p>
                <p className={`text-4xl font-bold ${yellowColor} mb-5`}>
                  ₹999 <span className="text-lg font-normal text-neutral-400">/ 3 Months</span>
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Link href="/subscribe?portfolio=10x-alphas" legacyBehavior>
                    <a className="relative inline-block w-full max-w-xs overflow-hidden rounded-lg bg-yellow-400 px-8 py-3.5 text-lg font-bold text-black shadow-lg hover:bg-yellow-500 transition-colors duration-300">
                      <span className="relative z-10">Subscribe Now</span>
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60 blur-[3px] animate-shimmer" />
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
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="flex border-b border-gray-700/60 mb-10 justify-center">
              <TabButton
                label="Overview"
                isActive={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
              />
              <TabButton
                label="Methodology"
                isActive={activeTab === 'methodology'}
                onClick={() => setActiveTab('methodology')}
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
                    <DetailSectionHeading className="mt-0 text-center md:text-left">10X ALPHAS Portfolio Overview</DetailSectionHeading>
                    <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>{overviewParagraph1}</motion.p>
                    <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>{overviewParagraph2}</motion.p>
                    <motion.h3 className="text-2xl font-semibold text-neutral-100 mt-8 mb-4" variants={itemVariant}>Key highlights include:</motion.h3>
                    <motion.ul className="list-none space-y-3 text-neutral-300 leading-relaxed mb-8" variants={itemVariant}>
                      {keyHighlights.map((highlight, i) => (
                        <motion.li key={i} className="flex items-start" variants={itemVariant}>
                          <span className={`mr-3 mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${yellowColor.replace('text-','bg-')}`}></span>
                          {highlight}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.p className="text-neutral-300 leading-relaxed" variants={itemVariant}>{overviewConclusion}</motion.p>
                  </motion.div>
                )}

                {activeTab === 'methodology' && (
                  <motion.div variants={sectionVariant} initial="hidden" animate="visible">
                     <DetailSectionHeading className="mt-0 text-center md:text-left">10X ALPHAS Methodology</DetailSectionHeading>
                     <MethodologySubSection title="Defining the Universe" content={methodologyDefiningUniverse} />
                     <MethodologySubSection title="Research" content={methodologyResearch} />
                     <MethodologySubSection title="Constituent Screening" content={methodologyScreening} />
                     <MethodologySubSection title="Weighting" content={methodologyWeighting} />
                     <MethodologySubSection title="Rebalance" content={methodologyRebalance} />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.p className="text-center text-neutral-400 mt-16 text-sm italic" variants={itemVariant}>
              Would you like versions tailored for different risk profiles (e.g., conservative, balanced, aggressive) or for short-term swing portfolios? Let us know!
            </motion.p>
          </div>
        </motion.section>

        {/* 4. Newsletter Section */}
        <motion.section
          className="py-16 md:py-24 bg-gray-900/50 border-t border-gray-800/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
            <motion.h2
              className={`font-serif text-3xl md:text-4xl font-bold ${yellowColor} mb-3`}
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
                className={`px-6 py-3 rounded-md ${yellowColor.replace('text-','bg-')} text-black font-semibold transition-all duration-300 shadow-md hover:bg-yellow-500`}
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
            {/* "What you'll get" part is cut off in screenshot, so not adding detailed list here */}
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
    </>
  );
};

// Helper Component for Tabs
interface TabButtonProps { label: string; isActive: boolean; onClick: () => void; }
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  const yellowBgForLine = 'bg-yellow-500'; // Consistent with yellow accent
  return (
    <button
      onClick={onClick}
      className={`relative py-3 px-5 sm:px-8 text-sm sm:text-base font-semibold transition-colors duration-300
                  ${isActive ? 'text-yellow-400' : 'text-neutral-400 hover:text-yellow-500/80'}`}
    >
      {label}
      {isActive && (
        <motion.div
          className={`absolute bottom-[-1px] left-0 right-0 h-1 ${yellowBgForLine}`} // Increased thickness slightly
          layoutId="underline"
          initial={false}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </button>
  );
};

// Reusable Heading Component for Detail Sections
const DetailSectionHeading: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = '', id }) => (
  <h2
    id={id}
    className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mt-10 mb-6 ${className}`}
    style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.3)' }} // Softer shadow
  >
    {children}
  </h2>
);

// Helper Component for Methodology Sub-Sections
const MethodologySubSection: React.FC<{ title: string, content: string }> = ({ title, content }) => (
  <motion.div className="mb-8" variants={itemVariant}> {/* Increased bottom margin */}
    <h4 className="text-xl font-semibold text-yellow-500/90 mb-2.5">{title}</h4> {/* Slightly adjusted margin and color */}
    <p className="text-neutral-300 leading-relaxed">{content}</p>
  </motion.div>
);

export default Portfolio10XAlphasPage;