"use client"; // Keep if using client-side hooks like usePathname, otherwise remove.
// For this version (no hooks needed), we can potentially remove it.
// Let's remove it for now as this version is static.
// 'use client'; // No longer needed for this version

import Image from "next/image";
import Link from "next/link";
// Removed useEffect, useRef imports

function HeroSection() {
  // Removed canvas useRef and useEffect code

  return (
    // Use min-height to ensure section has substantial vertical space
    // Added flexbox to help center content vertically if needed, along with padding
    <div className="relative overflow-hidden isolate flex items-center justify-center min-h-[75vh] sm:min-h-[80vh] lg:min-h-screen pt-14">
      {/* Background Image using next/image */}
      <Image
        src="/image.png" // Using the local image from /public
        alt="Krypto Gyan - Abstract cryptocurrency or blockchain background" // Descriptive Alt Text
        fill={true}
        style={{ objectFit: "cover" }}
        className="-z-10" // Behind overlay and content
        quality={85} // Slightly higher quality for hero
        priority={true} // Load this image first
      />

      {/* Overlay - Similar to Footer Background */}
      {/* Using a slightly transparent gradient based on the crypto purple */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#6f42c1]/70 via-[#5a2db4]/80 to-black/85" // Adjusted crypto purple gradient with opacity
        aria-hidden="true"
      ></div>

      {/* Content Container - Increased max-width slightly, more padding */}
      <div className="relative max-w-5xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40 z-10">
        <div className="text-center">
          {/* Badge/Chip - Enhanced Styling */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-indigo-100 mb-8 border border-white/20 backdrop-blur-sm">
            <svg
              className="w-4 h-4 mr-2 text-cyan-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />{" "}
            </svg>
            New Courses Just Added!
          </span>

          {/* Headline - Refined Styles */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            <span className="block mb-2">Master the World of</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-purple-300 drop-shadow-[0_0_15px_rgba(165,180,252,0.4)]">
              Crypto & Blockchain
            </span>
          </h1>

          {/* Description - Refined Styles */}
          <p className="mt-6 text-lg text-indigo-100/90 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Go from beginner to expert with Krypto Gyan's comprehensive,
            hands-on courses covering everything from Bitcoin basics and DeFi
            protocols to advanced NFT strategies and secure development
            practices.
          </p>

          {/* Call-to-Action Buttons - Enhanced Styles */}
          <div className="mt-10 max-w-md mx-auto sm:max-w-none sm:flex sm:justify-center sm:space-x-6">
            {/* Primary CTA */}
            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-semibold rounded-lg text-purple-800 bg-white shadow-lg overflow-hidden transform transition duration-300 ease-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900 focus:ring-white"
            >
              {/* Subtle shimmer effect on hover */}
              <span className="absolute left-0 top-0 h-full w-0 bg-white/30 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center">
                Explore Courses Now
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
            {/* Secondary CTA (Optional) */}
            <Link
              href="/about" // Example different link
              className="mt-4 sm:mt-0 group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 text-base font-medium rounded-lg text-white bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:bg-white/20 hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900 focus:ring-white"
            >
              Discover Krypto Gyan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
