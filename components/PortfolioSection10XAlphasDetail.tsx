// components/PortfolioSection10XAlphasDetail.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// === Variants ===
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// New variant for the tab panels themselves
const tabPanelVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.07 } // Stagger children of the tab panel
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } } // Exit state
};

// === Tab Button ===
interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`relative py-3 px-5 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-yellow-400' : 'text-neutral-400 hover:text-neutral-100'
    }`}
  >
    {label}
    {isActive && (
      <motion.span
        layoutId="underline-10xalphas"
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-yellow-500"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    )}
  </button>
);

// === Section Heading ===
const DetailSectionHeading: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = '', children }) => (
  <h2
    className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mb-6 ${className}`}
    style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
  >
    {children}
  </h2>
);

// === Main Component ===
const PortfolioSection10XAlphasDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');
  const yellowBg = 'bg-yellow-500';
  const yellowHover = 'hover:bg-yellow-600';

  return (
    <>
      {/* 1) Stats & Pricing */}
      <motion.section
        className="py-12 md:py-16 bg-black/30 border-t border-b border-gray-800/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="text-center mb-8 -mt-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-yellow-400">
            Featured: 10X Alphas
          </h2>
        </div>

        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <motion.div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4" variants={itemVariant}>
            {[
              { label: 'Rebalance Freq.', value: 'Need Basis' },
              { label: 'Volatility', value: 'Medium' },
              { label: '2Y CAGR', value: '122%' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`bg-gray-800/70 border border-gray-700/50 p-4 rounded-lg text-center flex flex-col justify-center ${
                  i === 2 ? 'col-span-2 sm:col-span-1' : ''
                }`}
                variants={itemVariant} // This will be animated by the parent sectionVariant's staggerChildren
              >
                <span className="text-xs uppercase text-neutral-400 mb-1">{stat.label}</span>
                <span className="text-xl font-semibold text-neutral-100">{stat.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div
            className="lg:col-span-1 bg-gradient-to-br from-gray-900/90 to-gray-800/95 backdrop-blur-sm border border-yellow-600/40 rounded-xl shadow-xl p-6 text-center flex flex-col items-center"
            variants={itemVariant} // This will be animated by the parent sectionVariant's staggerChildren
          >
            <p className="text-lg text-neutral-200 mb-2">Get access starting from</p>
            <p className="text-4xl font-bold text-yellow-400 mb-5">
              ₹999 <span className="text-lg font-normal text-neutral-400">/ 3 Months</span>
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/subscribe?portfolio=10x-alphas" legacyBehavior>
                <a className={`${yellowBg} ${yellowHover} text-black font-bold py-3 px-8 rounded-md inline-block shadow-lg transition`}>
                  Subscribe Now
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2) Detailed Info & Tabs */}
      <motion.section
        className="py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Tab Nav */}
          <div className="flex justify-center border-b border-gray-700/50 mb-8">
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

          {/* Tab Panels */}
          <AnimatePresence initial={false} mode="wait"> {/* Changed exitBeforeEnter to mode="wait" */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                variants={tabPanelVariant} // Use new tabPanelVariant
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={itemVariant}> {/* Wrap heading for animation */}
                  <DetailSectionHeading className="text-center">Overview</DetailSectionHeading>
                </motion.div>
                <motion.p className="text-neutral-300 mb-6" variants={itemVariant}>
                  A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the
                  disruptive power of blockchain innovation and digital assets.
                </motion.p>
                <motion.p className="text-neutral-300 mb-6" variants={itemVariant}>
                  This exclusive, high-risk/high-reward portfolio is laser-focused on a carefully curated set of 10 high-quality crypto
                  assets with the potential for massive long-term growth. Designed for forward-thinking investors, the strategy leverages
                  intelligent risk management and momentum-driven rebalancing to outperform across market cycles.
                </motion.p>
                <motion.h3 className="text-2xl font-semibold text-neutral-100 mb-4" variants={itemVariant}>
                  Key highlights:
                </motion.h3>
                <motion.ul className="list-disc pl-5 space-y-3 text-neutral-300 mb-8" variants={itemVariant}>
                  {/* Each li could also be motion.li with itemVariant if finer control is needed,
                      but animating the ul as one block with itemVariant is often sufficient.
                      If you want individual li animations, ensure ul has staggerChildren in its variant
                      and li elements are motion.li with their own variant.
                      For simplicity, current approach animates ul as one item.
                  */}
                  <li>A concentrated 10-crypto portfolio selected from leading L1/L2 protocols, DeFi, AI, and Web3 infrastructure projects.</li>
                  <li>Focus on tokens with strong network activity, adoption trends, and breakthrough narratives.</li>
                  <li>Targets early-stage and mid-cap cryptos with exponential upside.</li>
                  <li>Strategic weekly rebalancing (or as needed) to capture emerging trends.</li>
                  <li>Optimized for alpha generation in volatile and bullish crypto market phases.</li>
                </motion.ul>
                <motion.p className="text-neutral-300" variants={itemVariant}>
                  Elevate your crypto investing journey with a precision-built, high-alpha strategy.
                </motion.p>
              </motion.div>
            )}

            {activeTab === 'methodology' && (
              <motion.div
                key="methodology"
                variants={tabPanelVariant} // Use new tabPanelVariant
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div variants={itemVariant}> {/* Wrap heading for animation */}
                  <DetailSectionHeading className="text-center">Methodology</DetailSectionHeading>
                </motion.div>
                <motion.div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6" variants={itemVariant}>
                  <p className="text-neutral-400 italic leading-relaxed">
                    • Fundamental analysis of project teams, tokenomics & on-chain metrics.
                    <br />
                    • AI-driven sentiment & momentum signals to capture early breakout moves.
                    <br />
                    • Risk-parity weightings to balance high-beta upside against drawdown control.
                    <br />
                    • Tactical weekly rebalances (or on signal) to lock in gains and re-allocate into the next emerging theme.
                    <br /><br />
                    Full live weight breakdowns and our proprietary algorithm are unlocked once you subscribe.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
};

export default PortfolioSection10XAlphasDetail;