"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const VisualHero: React.FC = () => {
  /* ───────────────────────── Parallax + Scroll ────────────────────────── */
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const backgroundImageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  /* ───────────────────────── Mouse‑follow gradient ─────────────────────── */
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setGradientPosition({
        x: (clientX / innerWidth - 0.5) * 0.1 + 0.5,
        y: (clientY / innerHeight - 0.5) * 0.1 + 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ───────────────────────── Framer variants ───────────────────────────── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.6 } },
  };
  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: { opacity: [0.5, 0.8, 0.5], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
  };
  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 4px 14px rgba(250, 204, 21, 0.3)" },
    hover:   { scale: 1.05, boxShadow: "0 8px 30px rgba(250, 204, 21, 0.6)" },
    tap:     { scale: 0.98 },
  };

  const commonTextShadow = { textShadow: "0px 1px 4px rgba(0,0,0,0.7)" };

  const stats = [
    { value: "≤\u202F15\u202F%", label: "Volatility\u202F(30\u202Fd)" },
    { value: "34\u202F%\u202F+", label: "5\u2011Year\u202FCAGR" },
  ];

  /* ───────────────────────── JSX ───────────────────────────────────────── */
  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[780px] flex items-center overflow-hidden bg-black pt-16"
    >
      {/* ───────────── Background ───────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-purple-900/30"
          style={{
            backgroundPosition: `${gradientPosition.x * 100}% ${gradientPosition.y * 100}%`,
            transition: "background-position 0.1s ease-out",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ y, opacity: backgroundImageOpacity }}
        >
          <Image
            src="/images/herobg.jpg"
            alt="Crypto Trading Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="brightness-[1.1] contrast-[1.1] saturate-[1.05]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* ───────────── Glow orbs ───────────── */}
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

      {/* ───────────── Content ───────────── */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 h-full items-center">

          {/* Left Column */}
          <motion.div
            // Changed: Reduced vertical padding on mobile (pt-20 to pt-8, pb-10 to pb-8)
            className="flex flex-col justify-center md:col-span-7 text-white relative z-30 pt-8 pb-8 md:pt-0 md:pb-0 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
              style={commonTextShadow}
              variants={itemVariants}
            >
              <span className="inline-block text-yellow-400">UNLOCK THE FUTURE</span>
              <br />
              <span className="text-white">OF WEALTH</span>
            </motion.h1>

            <motion.p
              // Changed: Reduced bottom margin (mb-6 to mb-4)
              className="text-lg sm:text-xl lg:text-2xl mb-4 font-medium text-neutral-100"
              style={commonTextShadow}
              variants={itemVariants}
            >
              Smart Crypto Investing for India —<br className="sm:hidden" /> Backed by Data, Driven by Results.
            </motion.p>

            <motion.p
              // Changed: Reduced bottom margin (mb-8 to mb-6)
              className="text-sm sm:text-base lg:text-lg max-w-lg text-neutral-200 leading-relaxed font-light mx-auto md:mx-0 mb-6"
              style={commonTextShadow}
              variants={itemVariants}
            >
              Join <span className="font-medium text-yellow-400">Dubai Club</span> and invest in the crypto market through our AI‑analyzed,
              professionally tailored portfolios of premium cryptocurrencies.
              <span className="block mt-2 opacity-90">Simply invest, then watch your digital assets grow.</span>
            </motion.p>

            {/* Stat Cards */}
            <motion.div
              // Changed: Reduced bottom margin (mb-10 to mb-8)
              className="flex flex-wrap gap-6 sm:gap-8 mb-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative flex flex-col items-center justify-center w-40 sm:w-44 aspect-square rounded-xl p-[3px] bg-gradient-to-br from-yellow-400/70 via-purple-500/70 to-blue-500/70 hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex flex-col items-center justify-center w-full h-full rounded-[inherit] bg-black/60 backdrop-blur-lg">
                    <span className="text-yellow-300 text-2xl sm:text-3xl font-extrabold" style={commonTextShadow}>
                      {stat.value}
                    </span>
                    <span className="text-neutral-100 text-[11px] sm:text-xs mt-1 font-medium text-center px-1" style={commonTextShadow}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-300" />
                <Link
                  href="/#portfolios"
                  className="relative flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900 font-bold py-3.5 px-8 rounded-lg transition duration-300 ease-in-out w-full"
                >
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
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
                  className="inline-flex items-center justify-center text-white hover:text-yellow-400 font-medium py-3.5 px-6 border border-white/20 hover:border-yellow-400/40 rounded-lg transition duration-300 ease-in-out backdrop-blur-sm bg-white/10 w-full"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column (Image + price badges) */}
          <div className="md:col-span-5 flex relative w-full h-auto md:h-full items-end md:items-center justify-center mt-8 md:mt-0">
            <motion.div
              className="
                relative
                w-full
                max-w-[350px]
                sm:max-w-[600px]
                h-[50vh]
                sm:h-[60vh]
                md:w-[140%]
                lg:w-[160%]
                xl:w-[180%]
                md:h-[120%]
                md:max-w-none
                md:absolute
                md:bottom-0
                md:right-[-6%] 
                lg:right-[-10%]
                xl:right-[-16%]
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
                objectPosition="bottom center"
                quality={95}
                className="relative z-10"
              />

              {/* Radial glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] rounded-full bg-gradient-radial from-yellow-500/15 to-transparent blur-3xl" />

              {/* Floating price callouts (re‑positioned) */}
              {[
                { side: "left", pair: "BTC/USDT", pct: "+12.4%", color: "green", top: "top-[42%]", offset: "-left-16 sm:-left-20" },
                { side: "right", pair: "ETH/USDT", pct: "+8.7%", color: "blue",  top: "top-[55%]", offset: "right-10 sm:right-8" },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`
                    absolute
                    ${f.offset} 
                    ${f.top}
                    bg-black/40 backdrop-blur-lg px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10 shadow-lg
                  `}
                  style={commonTextShadow}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-${f.color}-400 to-${f.color}-600 flex items-center justify-center mr-2 sm:mr-3`}>
                      <span className="text-white text-[10px] sm:text-xs">↗</span>
                    </div>
                    <div>
                      <div className="text-white text-[10px] sm:text-sm font-medium">{f.pair}</div>
                      <div className={`text-${f.color}-400 text-[10px] sm:text-xs`}>{f.pct}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ticker (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md border-t border-white/10 py-2.5 overflow-x-hidden z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(3)
            .fill([
              "BTC $66,420 +2.4%",
              "ETH $3,240 +3.1%",
              "SOL $180 +5.2%",
              "BNB $580 +1.7%",
              "ADA $0.65 +4.3%",
              "XRP $0.55 +2.8%",
            ])
            .flat()
            .map((item, idx) => {
              const [symbol, price, change] = item.split(" ");
              const isPlus = change.startsWith("+");
              return (
                <div key={idx} className="flex items-center mx-4 sm:mx-6" style={commonTextShadow}>
                  <span className="text-white text-xs sm:text-sm mr-1 sm:mr-2">{symbol}</span>
                  <span className="text-neutral-300 text-xs sm:text-sm">{price}</span>
                  <span className={`${isPlus ? "text-green-400" : "text-red-400"} text-xs sm:text-sm ml-1`}>
                    {change}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default VisualHero;