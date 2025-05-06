"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const VisualHero = () => {
  // Refs for parallax effects
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Gradient animation states
  const [gradientPosition, setGradientPosition] = React.useState({ x: 0, y: 0 });
  
  // Track mouse movement for dynamic gradient
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setGradientPosition({
      x: clientX / innerWidth,
      y: clientY / innerHeight
    });
  };
  
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], 
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.23, 1, 0.32, 1], 
        delay: 0.6,
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: { 
      opacity: [0.5, 0.8, 0.5], 
      transition: { 
        duration: 5, 
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  const buttonVariants = {
    initial: { 
      scale: 1, 
      boxShadow: "0 4px 14px rgba(255, 214, 0, 0.3)"
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 8px 30px rgba(255, 214, 0, 0.6)"
    },
    tap: { 
      scale: 0.98
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen min-h-[780px] flex items-center overflow-hidden bg-black"
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/30"
          style={{
            backgroundPosition: `${gradientPosition.x * 100}% ${gradientPosition.y * 100}%`,
            transition: 'background-position 0.3s ease-out'
          }}
        />
        
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0" 
          style={{ y, opacity }} 
        >
          <Image
            src="/images/herobg.jpg"
            alt="Crypto Trading Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="opacity-60" 
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black opacity-65 mix-blend-overlay z-5"></div>
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-5 mix-blend-overlay z-5"></div>
      </div>

      {/* Animated glow effects */}
      <motion.div 
        className="absolute top-[30%] left-[5%] sm:left-[15%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-blue-500/10 blur-[60px] sm:blur-[80px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-[20%] right-[5%] sm:right-[25%] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full bg-yellow-500/10 blur-[70px] sm:blur-[100px]"
        variants={glowVariants}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "-2.5s" }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 h-full items-center"> 

          {/* Left Column: Text */}
          <motion.div
            ref={textRef}
            className="flex flex-col justify-center md:col-span-7 h-auto md:h-full text-white relative z-30 pt-20 pb-10 md:pt-0 md:pb-0 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-6 mx-auto md:mx-0"
              variants={itemVariants}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 text-xs font-semibold text-black backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
                LIVE TRADING SIGNALS
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-5 leading-tight"
              variants={itemVariants}
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                UNLOCK THE FUTURE
              </span>
              <br />
              <span className="text-white">OF WEALTH</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl lg:text-3xl mb-6 font-light text-neutral-100"
              variants={itemVariants}
            >
              <span className="italic font-medium">AI-Powered</span> Crypto Insights & 
              <span className="relative">
                <span className="relative z-10"> Profitable Strategies</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-500/30 -z-0"></span>
              </span>
            </motion.p>

            <motion.p
              className="text-sm sm:text-base lg:text-lg max-w-lg text-neutral-200 leading-relaxed font-light mx-auto md:mx-0"
              variants={itemVariants}
            >
              Join <span className="font-medium">Dubai Club</span> and invest in the crypto market through our AI-analyzed, 
              professionally tailored portfolio of premium cryptocurrencies. 
              <span className="block mt-2 opacity-90">Simply invest, then watch your digital assets grow.</span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-5 mt-8 mb-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center md:items-start">
                <span className="text-yellow-400 text-xl sm:text-2xl font-bold">93%</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Success Rate</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-yellow-400 text-xl sm:text-2xl font-bold">24/7</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Market Analysis</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-yellow-400 text-xl sm:text-2xl font-bold">$1.2M+</span>
                <span className="text-neutral-400 text-xs sm:text-sm">Daily Volume</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 mt-2 mb-10 md:mb-0 items-center md:items-start justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Link
                  href="/#portfolios"
                  className="relative flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 font-bold py-3.5 px-8 rounded-lg transition duration-300 ease-in-out w-full"
                >
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full sm:w-auto"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center text-white hover:text-yellow-400 font-medium py-3.5 px-6 border border-white/20 hover:border-yellow-400/40 rounded-lg transition duration-300 ease-in-out backdrop-blur-sm bg-white/5 w-full"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Crypto Trader Image */}
          {/* MODIFICATION: Changed items-center to items-end for mobile, and h-1/2 to h-auto for mobile */}
          <div className="md:col-span-5 flex relative w-full h-auto md:h-full items-end justify-center md:items-stretch mt-8 md:mt-0">
            <motion.div
              className="
                relative
                w-full max-w-[300px] sm:max-w-[450px]
                h-[40vh] sm:h-[45vh]
                md:w-[120%] 
                lg:w-[130%] 
                xl:w-[140%] 
                md:h-[110%] 
                md:max-w-none
                /* mx-auto is fine for horizontal centering when parent has justify-center */
                /* md:absolute md:bottom-0 handles desktop bottom alignment */
                md:absolute md:bottom-0 
                md:right-[-10%] 
                lg:right-[-15%] 
                xl:right-[-20%]
              "
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/images/hero.png"
                alt="Crypto Trading Expert"
                layout="fill"
                objectFit="contain"
                objectPosition="bottom center md:bottom md:right" 
                quality={95}
                className="relative z-10"
              />
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 w-full h-[80%] rounded-full bg-gradient-radial from-yellow-500/20 to-transparent blur-3xl"></div>
              
              <div className="absolute left-1 sm:left-2 md:-left-10 top-1/4 bg-black/30 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10 shadow-lg">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-2 sm:mr-3">
                    <span className="text-white text-[10px] sm:text-xs">↗</span>
                  </div>
                  <div>
                    <div className="text-white text-[10px] sm:text-sm font-medium">BTC/USDT</div>
                    <div className="text-green-400 text-[10px] sm:text-xs">+12.4%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-1 sm:right-2 md:right-10 top-1/3 bg-black/30 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10 shadow-lg block">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-2 sm:mr-3">
                    <span className="text-white text-[10px] sm:text-xs">↗</span>
                  </div>
                  <div>
                    <div className="text-white text-[10px] sm:text-sm font-medium">ETH/USDT</div>
                    <div className="text-blue-400 text-[10px] sm:text-xs">+8.7%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scrolling crypto price ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10 py-2 overflow-x-hidden block">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(2).fill(['BTC $86,420 +2.4%', 'ETH $5,240 +3.1%', 'SOL $320 +5.2%', 'BNB $580 +1.7%', 'ADA $2.10 +4.3%', 'XRP $1.35 +2.8%']).flat().map((item, index) => (
            <div key={index} className="flex items-center mx-4 sm:mx-6">
              <span className="text-white text-xs sm:text-sm mr-1 sm:mr-2">{item.split(' ')[0]}</span>
              <span className="text-neutral-300 text-xs sm:text-sm">{item.split(' ')[1]}</span>
              <span className={`${item.includes('+') ? 'text-green-400' : 'text-red-400'} text-xs sm:text-sm ml-1`}>{item.split(' ')[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualHero;