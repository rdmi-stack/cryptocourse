// components/HeroSection.tsx
"use client"; // Add this for Framer Motion

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

// --- Framer Motion Variants ---

// Variant for the main container (optional, can be simple fade-in)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Variant for the text content container (stagger children)
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Start animating children after a small delay
      staggerChildren: 0.15, // Stagger animation of each child
    },
  },
};

// Variant for individual text elements (fade in + slight slide up)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Use a smooth easing function
    },
  },
};

// Variant for the image (fade in + slight slide from right/scale)
const imageVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.98 }, // Start from right, slightly scaled down
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.4, // Delay image animation slightly after text starts
    },
  },
};

// Helper component for Gradient Text Span
const GradientSpan = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
    {children}
  </span>
);

function HeroSection() {
  return (
    // Apply motion to the section for overall control if needed
    <motion.section
      className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 pt-24 lg:pt-32 pb-20 lg:pb-28 overflow-hidden dark:from-gray-950 dark:via-gray-900 dark:to-purple-900/20" // Adjusted dark bg, added pb
      //   variants={sectionVariants} // Optional: if you want the whole section to fade in first
      //   initial="hidden"
      //   animate="visible"
    >
      {/* Background decorative elements can also be animated */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-50 dark:opacity-30"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      >
        <div className="w-80 h-80 bg-purple-200 rounded-full blur-3xl dark:bg-purple-800/40"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-60 dark:opacity-40"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
      >
        <div className="w-96 h-96 bg-cyan-100 rounded-full blur-3xl dark:bg-cyan-700/30"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {" "}
          {/* Increased gap */}
          {/* LEFT: Content - Apply stagger container variants */}
          <motion.div
            className="text-center lg:text-left"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible" // Trigger animation when component mounts
            // or use whileInView for scroll trigger:
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
          >
            {/* Badge - Apply item variants */}
            <motion.div variants={itemVariants} className="inline-block">
              {" "}
              {/* Wrap inline for animation */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 mb-6 shadow-sm ring-1 ring-inset ring-purple-200 dark:ring-purple-800/60">
                <svg
                  className="w-4 h-4 mr-2 text-purple-500 dark:text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.653 16.915l.005-.001h.004l.005.001a1.002 1.002 0 001.678-1.005l-.375-1.497a1 1 0 01.33-.845l1.17-1.171a1 1 0 10-1.415-1.414l-1.17 1.17a1 1 0 01-.846.33l-1.497-.375a1 1 0 10-1.005 1.678l1.497.375a1 1 0 01.845.845l.375 1.497a1 1 0 001.33.177zM6.3 10.3a4 4 0 118 0 4 4 0 01-8 0zM3.05 5.29a1 1 0 010-1.414l1.172-1.171a1 1 0 011.414 0L7 4.025a1 1 0 01.33.846l.375 1.497a1 1 0 01-1.678 1.005L4.53 7.003a1 1 0 01-.845-.33L2.515 5.499a1 1 0 01.536-1.33zM10 18a8 8 0 100-16 8 8 0 000 16z"
                    clipRule="evenodd"
                  />
                </svg>
                Master the Future of Finance
              </div>
            </motion.div>

            {/* Headline - Apply item variants */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight" // Adjusted size slightly
            >
              Learn <GradientSpan>Crypto</GradientSpan> &{" "}
              <GradientSpan>Blockchain</GradientSpan>
              <span className="mt-1 block">
                from <GradientSpan>Zero</GradientSpan> to{" "}
                <GradientSpan>Pro</GradientSpan>
              </span>
            </motion.h1>

            {/* Description - Apply item variants */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Unlock the world of cryptocurrency with hands-on lessons, expert
              strategies, and tools built for clarity. No fluff—just real
              knowledge.
            </motion.p>

            {/* CTA Buttons - Apply item variants */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4"
            >
              {/* Added motion.div wrappers for hover effects on buttons */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-900 transition-all duration-200 ease-in-out" // Added gradient bg, improved shadow
                >
                  🚀 Get Started Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#courses" // Link to courses section on the same page
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-lg text-purple-700 bg-purple-100 shadow-md hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-900 transition-all duration-200 ease-in-out"
                >
                  Explore Courses 👇
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* RIGHT: Image - Apply image variants */}
          <motion.div
            className="relative w-full h-80 sm:h-96 lg:h-[450px] xl:h-[500px] flex items-center justify-center mt-10 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            // or use whileInView for scroll trigger:
            // whileInView="visible"
            // viewport={{ once: true, amount: 0.2 }}
          >
            {/* Added a subtle glow effect behind the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-cyan-300/30 to-purple-400/30 dark:from-cyan-600/20 dark:to-purple-700/20 rounded-full blur-3xl opacity-70"></div>
            </div>
            <div className="relative w-[90%] h-[90%] drop-shadow-2xl">
              {" "}
              {/* Added drop shadow */}
              <Image
                src="/image.png" // Ensure this image exists in your /public directory
                alt="Learn Crypto & Blockchain with Krypto Gyan"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1024px) 90vw, 45vw" // Adjusted sizes
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optional: Subtle divider if needed */}
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div> */}
    </motion.section>
  );
}

export default HeroSection;
