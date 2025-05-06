// components/PortfolioSection10XAlphasDetail.tsx
"use client"; // Required for Framer Motion and useState

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Define Variants for animations (can reuse or adjust)
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } // Added stagger
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Helper Component for Tabs (Copied from original page)
interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  const yellowBorderColor = 'border-yellow-500';
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
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${yellowBorderColor.replace('border-','bg-')}`} // Use bg color for line
          layoutId="underline-10xalphas" // Ensure unique layoutId if using multiple instances
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </button>
  );
};

// Reusable Heading Component (Copied from original page)
const DetailSectionHeading: React.FC<{ children: React.ReactNode, className?: string, id?: string }> = ({ children, className = '', id }) => (
  <h2 id={id} className={`font-serif text-3xl md:text-4xl font-bold text-yellow-400 mt-10 mb-5 ${className}`}
      style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}>
    {children}
  </h2>
);


// The new section component
const PortfolioSection10XAlphasDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');

  // Style variables
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    // Use a fragment or a simple div if no extra section wrapper is needed
    <>
      {/* 1. Stats & Pricing Section - Animated */}
      {/* Note: Adjust background/borders if needed when placed on the main page */}
      <motion.section
        className="relative py-12 md:py-16 bg-black/30 border-t border-b border-gray-800/50" // Adjusted background for context
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
        variants={sectionVariant}
      >
        {/* Optional: Add a section title if needed */}
         <div className="text-center mb-8 -mt-2 md:-mt-4">
            <h2 className={`font-serif text-3xl md:text-4xl font-bold ${yellowColor}`}
                style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}>
                Featured: 10X Alphas
            </h2>
         </div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

             {/* Stats Area */}
            <motion.div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4" variants={itemVariant}>
               {[
                 { label: 'Rebalance Freq.', value: 'Need Basis' },
                 { label: 'Volatility', value: 'Medium' },
                 { label: '2Y CAGR', value: '122%' }
               ].map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   className={`bg-gray-800/70 border border-gray-700/50 p-4 rounded-lg shadow-md text-center flex flex-col justify-center ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                   variants={itemVariant}
                 >
                   <span className="block text-xs uppercase text-neutral-400 tracking-wider mb-1">{stat.label}</span>
                   <span className="block text-xl font-semibold text-neutral-100">{stat.value}</span>
                 </motion.div>
               ))}
            </motion.div>

            {/* Pricing & CTA Area */}
            <motion.div
              className="lg:col-span-1 bg-gradient-to-br from-gray-900/90 to-gray-800/95 backdrop-blur-sm border border-yellow-600/40 rounded-xl shadow-xl p-6 text-center flex flex-col justify-center items-center" // Centering content
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

      {/* 2. Detailed Information Section with Tabs */}
      <motion.section
        className="relative py-16 md:py-20" // Adjusted padding
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

           {/* Tab Navigation */}
          <div className="flex border-b border-gray-700/50 mb-8 justify-center"> {/* Centered tabs */}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Change key to trigger animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div>
                  {/* Using the common heading component */}
                  <DetailSectionHeading className="mt-0 text-center">Overview</DetailSectionHeading>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>
                    A long-term, high-conviction crypto strategy engineered to unlock exponential alpha returns by harnessing the disruptive power of blockchain innovation and digital assets.
                  </motion.p>
                  <motion.p className="text-neutral-300 leading-relaxed mb-6" variants={itemVariant}>
                    This exclusive, high-risk/high-reward portfolio is laser-focused on a carefully curated set of 10 high-quality crypto assets with the potential for massive long-term growth. Designed for forward-thinking investors, the strategy leverages intelligent risk management and momentum-driven rebalancing to outperform across market cycles.
                  </motion.p>
                   {/* Highlights section - Consider simplifying for home page */}
                   <motion.h3 className="text-2xl font-semibold text-neutral-100 mt-8 mb-4" variants={itemVariant}>Key highlights:</motion.h3>
                   <motion.ul className="list-disc list-outside space-y-3 pl-5 text-neutral-300 leading-relaxed mb-8" variants={itemVariant}>
                      <li>A concentrated 10-crypto portfolio selected from leading L1/L2 protocols, DeFi, AI, and Web3 infrastructure projects.</li>
                      <li>Focus on tokens with strong network activity, adoption trends, and breakthrough narratives.</li>
                      <li>Targets early-stage and mid-cap cryptos with exponential upside.</li>
                      <li>Strategic weekly rebalancing (or as needed) to capture emerging trends.</li>
                      <li>Optimized for alpha generation in volatile and bullish crypto market phases.</li>
                   </motion.ul>

                  <motion.p className="text-neutral-300 leading-relaxed" variants={itemVariant}>
                    Elevate your crypto investing journey with a precision-built, high-alpha strategy.
                  </motion.p>
                </div>
              )}

              {activeTab === 'methodology' && (
                <div>
                   <DetailSectionHeading className="mt-0 text-center">Methodology</DetailSectionHeading>
                   <motion.div className="bg-gray-900/40 border border-gray-700 rounded-lg p-6 mb-8" variants={itemVariant}>
                     <p className="text-neutral-400 leading-relaxed italic">
                       Detailed information on the specific crypto assets currently held, their weightings, and the precise methodology used for selection and rebalancing will be made available to subscribers upon access. Our approach focuses on fundamental analysis, technical indicators, market sentiment, and AI-driven signals to identify high-potential assets.
                       <br/><br/>[Further details provided upon subscription.]
                     </p>
                   </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </motion.section>
    </>
  );
};

export default PortfolioSection10XAlphasDetail;