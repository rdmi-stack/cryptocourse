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

const Portfolio10XAlphasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology'>('overview');

  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowBorderColor = 'border-yellow-500';

  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-x-hidden"> {/* Prevent horizontal scroll */}

      {/* 1. Enhanced Hero Section */}
      <motion.section
        className="relative h-[70vh] min-h-[500px] md:h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {/* Background Image with Parallax potential (basic implementation) */}
        <motion.div
           className="absolute inset-0 z-0"
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] }}
           >
          <Image
            src="/portfolio-10x-alphas.jpg"
            alt="10X Alphas Hero Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority // Load image early
          />
          <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}
        </motion.div>

        {/* Content Overlay */}
        <motion.div className="relative z-10 px-4" variants={sectionVariant}>
          <motion.h1
            className={`font-serif text-5xl sm:text-6xl md:text-8xl font-bold ${yellowColor} mb-4`}
            style={{ textShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
            variants={itemVariant}
          >
            10X Alphas
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-neutral-200 mb-5 max-w-2xl mx-auto"
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