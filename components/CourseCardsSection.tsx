// components/CourseCardsSection.tsx

"use client"; // Required for Framer Motion and interactive effects

import Link from "next/link";
import { motion } from "framer-motion"; // Import motion

// Interface remains the same
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
}

// --- Framer Motion Variants ---

// Variants for the container to orchestrate stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly faster stagger for 2 columns
      delayChildren: 0.2,
    },
  },
};

// Variants for individual cards
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

function CourseCardsSection() {
  // Array of course data - Adjusted to have exactly 6 courses for the 2x3 grid
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      ),
    },
    {
      slug: "defi-masterclass",
      title: "DeFi Masterclass",
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
          />
        </svg>
      ),
    },
    {
      slug: "nft-fundamentals",
      title: "NFT Fundamentals & Strategy",
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.5L12 12.75M2.25 15.75l12-12"
          />
        </svg>
      ),
    },
    {
      slug: "crypto-trading-strategies",
      title: "Crypto Trading Strategies",
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      ),
    },
    // --- Added Courses for 2x3 Grid ---
    {
      slug: "smart-contract-dev",
      title: "Smart Contract Development (Solidity)",
      level: "Intermediate",
      price: "₹6,499",
      description:
        "Learn Solidity programming to build and deploy smart contracts on Ethereum-compatible blockchains.",
      lessons: 28,
      duration: 15,
      rating: 4.9,
      gradient: "from-amber-400 to-orange-500",
      badge: "Developer Track",
      badgeColor: "bg-blue-500 text-white",
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      slug: "web3-security-essentials",
      title: "Web3 Security Essentials",
      level: "Advanced",
      price: "₹8,999",
      description:
        "Understand common vulnerabilities in smart contracts and dApps, and learn best practices for secure development.",
      lessons: 22,
      duration: 12,
      rating: 4.7,
      gradient: "from-red-500 to-pink-600",
      badge: "Critical Skills",
      badgeColor: "bg-gray-700 text-white",
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
          {/* Slightly larger icon */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
  ];

  // Ensure we only render the first 6 courses if more are accidentally added
  const displayedCourses = courses.slice(0, 6);

  return (
    <motion.section
      className="py-20 sm:py-28 bg-white dark:bg-gray-950"
      id="courses"
      initial="hidden"
      animate="visible" // Can replace with whileInView
      variants={containerVariants} // Apply container variants here IF animating section itself
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Unlock Your Potential
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {" "}
            {/* Slightly wider max-width for title description */}
            High-quality courses designed to take you from beginner to expert in
            the Web3 space.
          </p>
        </div>
        {/* Grid Container - Adjusted for 2 columns on medium screens and up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" // Use md:grid-cols-2, larger gap on larger screens
          variants={containerVariants}
          initial="hidden"
          animate="visible" // Or use whileInView for scroll trigger
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.1 }}
        >
          {displayedCourses.map((course) => (
            // Course Card - Applying motion variants and hover effects
            <motion.div
              key={course.slug}
              // Increased min-height and adjusted padding for better look with 2 columns
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-black/40 dark:hover:shadow-black/60 bg-gradient-to-br text-white flex flex-col h-full min-h-[450px] sm:min-h-[480px]" // Added min-height
              variants={cardVariants}
              whileHover={{
                scale: 1.03, // Slightly less scale increase
                y: -8, // Lift up slightly more
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              layout
            >
              {/* Badge */}
              {course.badge && (
                <div
                  className={`absolute top-5 right-5 ${course.badgeColor} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-md`} // Adjusted position slightly
                >
                  {course.badge}
                </div>
              )}
              {/* Card Content Wrapper */}
              <div
                className={`p-6 lg:p-8 flex flex-col flex-grow bg-gradient-to-br ${course.gradient}`}
              >
                {" "}
                {/* Gradient on wrapper */}
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-xl bg-white/10 dark:bg-black/20 flex items-center justify-center shadow-inner">
                  {" "}
                  {/* Larger icon container */}
                  {course.icon}
                </div>
                {/* Title and Meta */}
                <h3 className="font-bold text-2xl leading-tight mb-2">
                  {" "}
                  {/* Larger title */}
                  {course.title}
                </h3>
                <p className="text-base text-white/80 mb-5">
                  {" "}
                  {/* Slightly larger meta text */}
                  {course.level} | {course.price}
                </p>
                {/* Description */}
                <p className="text-base text-white/95 font-light leading-relaxed mt-1 mb-6 flex-grow">
                  {" "}
                  {/* Slightly larger description */}
                  {course.description}
                </p>
                {/* Stats Row */}
                <div className="mt-auto pt-6 border-t border-white/20 flex flex-wrap items-center justify-between text-sm font-medium text-white/80 gap-y-3 gap-x-4">
                  {" "}
                  {/* Adjusted stats row styles */}
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
              </div>{" "}
              {/* End Card Content Wrapper */}
              {/* Link Overlay */}
              <Link
                href={`/courses/${course.slug}`}
                className="absolute inset-0 z-0"
                aria-label={`View course: ${course.title}`}
              >
                <span className="sr-only">View course: {course.title}</span>
              </Link>
            </motion.div> // End Course Card
          ))}
        </motion.div>{" "}
        {/* End Grid */}
      </div>{" "}
      {/* End Container */}
    </motion.section>
  );
}

export default CourseCardsSection;
