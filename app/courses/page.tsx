// app/courses/page.tsx

"use client"; // Required for Framer Motion, useState, etc.

import React, { useState } from "react"; // Import useState for FAQ toggle
import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

// --- Interface Definition (Keep within this file) ---
interface Course {
  slug: string;
  title: string;
  level: string;
  price: string;
  description: string;
  lessons: number;
  duration: number;
  rating: number;
  gradient: string;
  badge: string | null;
  badgeColor: string;
  icon: JSX.Element;
  category?: string; // Added category for potential future filtering hint
}

// --- Framer Motion Variants (Keep within this file) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Simple variant for sections/text blocks
const sectionItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- Main Page Component ---
export default function CoursesPage() {
  // State for FAQ toggles
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- Course Data (Expanded - Keep within this file) ---
  const courses: Course[] = [
    {
      slug: "blockchain-basics",
      title: "Introduction to Blockchain & Crypto",
      level: "Beginner",
      price: "₹1,499",
      description:
        "Understand blockchain technology, how cryptocurrencies work, wallets, and basic security practices.",
      lessons: 12,
      duration: 4,
      rating: 4.8,
      gradient: "from-cyan-400 to-blue-500",
      badge: "Foundational",
      badgeColor: "bg-yellow-400 text-gray-900",
      category: "Blockchain",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "defi-masterclass",
      title: "DeFi Masterclass: Yield Farming & Lending",
      level: "Intermediate",
      price: "₹5,999",
      description:
        "Dive deep into Decentralized Finance. Explore DEXs, lending protocols, yield farming, staking, and risk management.",
      lessons: 25,
      duration: 10,
      rating: 4.9,
      gradient: "from-purple-500 to-indigo-600",
      badge: "Popular",
      badgeColor: "bg-pink-500 text-white",
      category: "DeFi",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "nft-fundamentals",
      title: "NFT Fundamentals & Minting Strategy",
      level: "Beginner",
      price: "₹2,499",
      description:
        "Learn what NFTs are, how they work, major marketplaces, how to mint, buy, sell, and evaluate NFT projects.",
      lessons: 15,
      duration: 6,
      rating: 4.7,
      gradient: "from-rose-400 to-red-500",
      badge: null,
      badgeColor: "",
      category: "NFTs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.5L12 12.75M2.25 15.75l12-12"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "crypto-trading-pro",
      title: "Crypto Trading Strategies & TA",
      level: "Advanced",
      price: "₹7,999",
      description:
        "Master technical & fundamental analysis. Learn chart patterns, indicators, risk management, and develop trading plans.",
      lessons: 30,
      duration: 18,
      rating: 4.8,
      gradient: "from-emerald-500 to-green-600",
      badge: "Pro Level",
      badgeColor: "bg-orange-500 text-white",
      category: "Trading",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "smart-contract-solidity",
      title: "Smart Contract Development (Solidity)",
      level: "Intermediate",
      price: "₹6,499",
      description:
        "Learn Solidity programming to build and deploy smart contracts on Ethereum-compatible blockchains. Covers ERC20/721.",
      lessons: 28,
      duration: 15,
      rating: 4.9,
      gradient: "from-amber-400 to-orange-500",
      badge: "Developer Track",
      badgeColor: "bg-blue-600 text-white",
      category: "Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "web3-security",
      title: "Web3 Security Essentials & Auditing",
      level: "Advanced",
      price: "₹8,999",
      description:
        "Understand common vulnerabilities (reentrancy, etc.) in smart contracts and dApps. Learn secure development & basic auditing.",
      lessons: 22,
      duration: 12,
      rating: 4.7,
      gradient: "from-red-500 to-pink-600",
      badge: "Critical Skills",
      badgeColor: "bg-gray-700 text-white",
      category: "Security",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />{" "}
        </svg>
      ),
    },
    {
      slug: "crypto-taxation-india",
      title: "Crypto Taxation in India (FY 24-25)",
      level: "Beginner",
      price: "₹999",
      description:
        "Navigate the complexities of Indian crypto tax laws. Understand TDS, income calculation, and ITR filing.",
      lessons: 8,
      duration: 3,
      rating: 4.6,
      gradient: "from-lime-400 to-green-500",
      badge: "New Rules!",
      badgeColor: "bg-red-600 text-white",
      category: "Compliance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.75A.75.75 0 0 1 3 4.5h.75m1.5.75v-.75A.75.75 0 0 0 4.5 4.5h-.75m1.5.75v.75a.75.75 0 0 1-.75.75h-.75m4.625-1.5h.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-.75-.75h-.75a.75.75 0 0 0-.75.75v.75c0 .414.336.75.75.75Zm-6 6.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm3.75 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Zm3 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z"
          />
        </svg>
      ),
    },
    {
      slug: "metaverse-intro",
      title: "Exploring the Metaverse: Concepts & Platforms",
      level: "Beginner",
      price: "₹1,999",
      description:
        "Understand what the Metaverse is, key concepts like avatars and virtual land, and explore leading platforms.",
      lessons: 10,
      duration: 5,
      rating: 4.5,
      gradient: "from-fuchsia-500 to-purple-600",
      badge: null,
      badgeColor: "",
      category: "Metaverse",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white/90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />{" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5h7.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 18V6a1.5 1.5 0 0 1 1.5-1.5h3.75"
          />{" "}
        </svg>
      ),
    },
  ];

  // --- FAQ Data (Keep within this file) ---
  const faqs = [
    {
      question: "Who are these courses for?",
      answer:
        "Our courses cater to everyone, from absolute beginners with no prior crypto knowledge to experienced traders and developers looking to deepen their expertise in specific areas like DeFi, NFTs, or Smart Contract Security.",
    },
    {
      question: "What are the prerequisites?",
      answer:
        "Most beginner courses require no prior knowledge. Intermediate and Advanced courses may assume familiarity with basic crypto concepts or specific technologies (mentioned in course descriptions). A willingness to learn and basic computer literacy are essential for all courses.",
    },
    {
      question: "How long do I have access to the course materials?",
      answer:
        "Upon enrollment, you receive lifetime access to the course videos, reading materials, code snippets, and any future updates for that specific course. Learn at your own pace!",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including major credit/debit cards, UPI, Net Banking, and popular wallets. Secure payment processing is handled via our trusted payment gateway partner.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 7-day money-back guarantee if you are not satisfied with the course content, provided you haven't completed more than 20% of the course material. Please refer to our detailed refund policy for specifics.",
    },
  ];

  // --- Page JSX ---
  return (
    <main className="bg-gray-50 dark:bg-gray-950">
      {/* === Hero Section === */}
      <motion.section
        className="relative bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800/70 dark:to-cyan-900/30 pt-24 pb-16 md:pt-32 md:pb-24 text-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionItemVariants}
      >
        {/* Optional: Subtle background elements */}
        <div className="absolute top-0 left-0 -translate-x-1/4 opacity-30 dark:opacity-20">
          <div className="w-96 h-96 bg-purple-200 dark:bg-purple-700/50 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 opacity-40 dark:opacity-25">
          <div className="w-[30rem] h-[30rem] bg-cyan-100 dark:bg-cyan-600/40 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Explore Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
              Courses
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From foundational concepts to advanced strategies, find the perfect
            course to accelerate your journey in the world of Crypto,
            Blockchain, and Web3.
          </p>
          {/* Optional: Add a search bar or category filters here later */}
        </div>
      </motion.section>

      {/* === Course Grid Section === */}
      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible" // Animate when section scrolls into view
        viewport={{ once: true, amount: 0.1 }} // Trigger animation once 10% is visible
        variants={containerVariants} // Use container variants for stagger orchestratio
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={sectionItemVariants} // Simple fade/slide for title
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              All Courses
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              Select a course to begin your learning adventure.
            </p>
          </motion.div>

          {/* Grid Container */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" // Using 3 columns for the main page
            // Variants applied here for staggering children - inheriting from section
          >
            {courses.map((course) => (
              // --- Course Card Structure (Copied & Adapted) ---
              <motion.div
                key={course.slug}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-black/40 dark:hover:shadow-black/60 bg-gradient-to-br text-white flex flex-col h-full min-h-[460px] sm:min-h-[490px]" // Consistent min-height
                variants={cardVariants} // Apply card entrance animation variants
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                layout
              >
                {/* Badge */}
                {course.badge && (
                  <div
                    className={`absolute top-5 right-5 ${course.badgeColor} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md`}
                  >
                    {course.badge}
                  </div>
                )}

                {/* Card Content Wrapper */}
                <div
                  className={`p-6 lg:p-8 flex flex-col flex-grow bg-gradient-to-br ${course.gradient}`}
                >
                  {/* Icon */}
                  <div className="mb-6 w-16 h-16 rounded-xl bg-white/10 dark:bg-black/20 flex items-center justify-center shadow-inner">
                    {course.icon}
                  </div>

                  {/* Title and Meta */}
                  <h3 className="font-bold text-xl lg:text-2xl leading-tight mb-2">
                    {course.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white/80 mb-5">
                    {course.level} | {course.price}
                  </p>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-white/95 font-light leading-relaxed mt-1 mb-6 flex-grow">
                    {course.description}
                  </p>

                  {/* Stats Row */}
                  <div className="mt-auto pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-xs lg:text-sm font-medium text-white/80 gap-y-3 gap-x-4">
                    <div
                      className="flex items-center space-x-1.5"
                      title={`${course.lessons} Lessons`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 opacity-80"
                      >
                        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.89a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
                      </svg>
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div
                      className="flex items-center space-x-1.5"
                      title={`${course.duration} Hours`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 opacity-80"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{course.duration}h</span>
                    </div>
                    <div
                      className="flex items-center space-x-1"
                      title={`${course.rating} Stars`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.431 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Link Overlay */}
                <Link
                  href={`/courses/${course.slug}`} // Assumes dynamic route exists
                  className="absolute inset-0 z-0"
                  aria-label={`View course: ${course.title}`}
                >
                  <span className="sr-only">View course: {course.title}</span>
                </Link>
              </motion.div>
              // --- End Course Card Structure ---
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* === Why Choose Us Section === */}
      <motion.section
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Learn with Crypto Gyan?
            </h2>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We focus on practical knowledge and clear explanations to help you
              succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            {/* Feature 1 */}
            <motion.div variants={sectionItemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-800 dark:to-indigo-800 text-purple-700 dark:text-purple-200 shadow-lg">
                {/* Icon: Academic Cap */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Expert Instructors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from industry professionals with real-world experience in
                blockchain and crypto markets.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div variants={sectionItemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 text-cyan-700 dark:text-cyan-200 shadow-lg">
                {/* Icon: Light Bulb */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a15.05 15.05 0 0 1-6 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 4.5a.75.75 0 0 0 .75.75h.01a.75.75 0 0 0 .75-.75v-.707a.75.75 0 0 0-.09-.343L12.4 15.04a.75.75 0 0 0-1.38 0l-.81.907a.75.75 0 0 0-.09.343V16.5a.75.75 0 0 0 .75.75Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Practical & Actionable
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focus on hands-on skills and strategies you can apply
                immediately, not just theory.
              </p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div variants={sectionItemVariants}>
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-800 dark:to-green-800 text-emerald-700 dark:text-emerald-200 shadow-lg">
                {/* Icon: Users */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.038M14.25 14.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 14.25v5.25M4.5 18.72a9.094 9.094 0 0 1 3.741-.479 3 3 0 0 1-3.741-5.038M12 14.25a3 3 0 0 0-3-3H7.5a3 3 0 0 0-3 3v.038"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Lifetime Access & Community
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get lifetime access to course materials and connect with fellow
                learners in our community forums.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* === Testimonials Section === */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-800 dark:to-blue-900/40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionItemVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What Our Students Say
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants} // Stagger children
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Testimonial Card 1 */}
            <motion.div
              variants={cardVariants}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "The DeFi Masterclass completely demystified yield farming for
                me. The explanations were clear, and the practical examples were
                invaluable. Highly recommended!"
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                - Aman S., Bangalore
              </p>
            </motion.div>
            {/* Testimonial Card 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "As a complete beginner, the Blockchain Basics course was
                perfect. I finally understand how crypto works without feeling
                overwhelmed. Great starting point!"
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                - Priya K., Mumbai
              </p>
            </motion.div>
            {/* Testimonial Card 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "The Trading Strategies course took my skills to the next level.
                The technical analysis section was detailed and easy to follow.
                Seeing results already."
              </p>
              <p className="font-semibold text-gray-800 dark:text-white">
                - Rohan V., Delhi
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* === FAQ Section === */}
      <motion.section
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionItemVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/60 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
                variants={sectionItemVariants} // Animate each FAQ item
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/50 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {/* Chevron Icon */}
                  <motion.svg
                    animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </motion.svg>
                </button>
                {/* Animated Answer Panel */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openFaqIndex === index ? "auto" : 0,
                    opacity: openFaqIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === Bottom CTA Section === */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-center">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionItemVariants}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Learning?
          </h2>
          <p className="mt-4 text-lg text-purple-100 max-w-2xl mx-auto">
            Enroll in a course today and take the first step towards mastering
            the world of crypto and blockchain.
          </p>
          <div className="mt-8 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/enquiry" // Or link to the most popular course, or #courses grid
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-purple-700 bg-white hover:bg-purple-50 shadow-lg hover:shadow-xl transform transition duration-200 ease-in-out"
              >
                🚀 Make an Enquiry
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
