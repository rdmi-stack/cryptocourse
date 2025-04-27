// components/InstructorProfileSection.tsx

"use client"; // Required for Framer Motion

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Import motion and Variants type

// Instructor data (ensure imageUrl points to a valid image in /public or is a configured remote URL)
const instructor = {
  name: "Ms. Anya Sharma", // Fictional name
  title: "Lead Instructor & Founder, Crypto Gyan", // Slightly adjusted title
  description: `Anya Sharma launched Crypto Gyan to demystify blockchain and cryptocurrency for everyone. With advanced degrees in Computer Science & Finance and over a decade in fintech and crypto markets, she offers deep insights into crypto trends, DeFi, and NFTs.`, // More concise
  imageUrl: "/image2.png", // IMPORTANT: Replace with your actual image path in /public
  // Example remote URL (requires configuration in next.config.mjs):
  // imageUrl: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?&fit=crop&q=80&w=600',
  altText: "Ms. Anya Sharma, Lead Instructor and Founder of Crypto Gyan",
  readMoreLink: "/about#instructor", // Link to relevant section on about page
};

// --- Framer Motion Variants ---
const sectionVariants: Variants = {
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

function InstructorProfileSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motion wrapper for the entire card */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
          variants={sectionVariants}
        >
          {/* Grid layout: Stacks on mobile, 2 columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* === Text Content Area (Purple) === */}
            <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-700 dark:to-indigo-800 p-8 sm:p-12 flex flex-col justify-center order-last lg:order-first">
              {/* Optional: Subtle background shapes */}
              <div className="absolute inset-0 opacity-10 dark:opacity-20">
                <div className="absolute -right-1/4 top-1/4 w-48 h-48 bg-purple-400 rounded-full filter blur-3xl"></div>
                <div className="absolute left-[-10%] bottom-[-5%] w-60 h-60 bg-indigo-300 rounded-full filter blur-3xl"></div>
              </div>

              {/* Text content relative to ensure it's above shapes */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
                  {instructor.name}
                </h2>
                <p className="mt-1 text-md font-medium text-purple-200 dark:text-purple-300">
                  {instructor.title}
                </p>
                <p className="mt-6 text-base text-purple-100 dark:text-purple-200 leading-relaxed">
                  {instructor.description}
                </p>
                <Link
                  href={instructor.readMoreLink}
                  className="mt-8 inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md text-purple-700 bg-white hover:bg-gray-100 dark:bg-gray-100 dark:text-purple-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white transition-all duration-200"
                >
                  Learn More About Anya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* === Image Area === */}
            {/* Order first on mobile, second on large screens */}
            <div className="relative order-first lg:order-last min-h-[300px] sm:min-h-[400px] lg:min-h-0">
              {/* Image Container with slight overlap on large screens */}
              {/* Added lg:-ml-8 and z-10 for overlap */}
              <div className="absolute inset-0 lg:-ml-8">
                <Image
                  src={instructor.imageUrl}
                  alt={instructor.altText}
                  fill // Use fill to cover the container
                  className="object-cover object-center" // Ensure image covers and is centered
                  sizes="(max-width: 1023px) 100vw, 50vw" // Optimize image loading based on viewport
                  quality={85} // Adjust quality as needed
                  priority // Consider adding if this is above the fold (LCP)
                />
                {/* Optional: Subtle gradient overlay on image bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent lg:from-transparent"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default InstructorProfileSection;
