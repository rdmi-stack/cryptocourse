// app/stocks/page.tsx
"use client"; // This makes the entire page a Client Component

import Link from 'next/link';
import React from 'react'; // Import React if not already present
import Image from 'next/image'; // Import Next.js Image component

// Optional: If you want to use a custom font, ensure it's configured in your project
// For example, in your globals.css or layout.tsx

// Main page component
export default function StocksComingSoonPageV2() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*
        It's generally better to put global styles affecting html/body
        in a global CSS file (e.g., app/globals.css) or in your layout.tsx.
        However, if this page is unique in its styling requirements, it can be here.
        For this example, we'll assume some base styling for full height might be in globals.css
      */}
      <style jsx global>{`
        body, html, #__next {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden; /* Prevent horizontal scroll */
        }
      `}</style>

      <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stocks.jpeg" // Path to your image in the public folder
            alt="Stock market indicators and professionals"
            layout="fill"
            objectFit="cover"
            quality={90} // Adjust quality as needed
            priority // Load image faster
          />
          <div className="absolute inset-0 bg-slate-900 opacity-75"></div> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-8 sm:space-y-12">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wide text-gray-100
                         [text-shadow:0_2px_4px_rgba(0,0,0,0.3),_0_0_20px_rgba(250,204,21,0.3)]">
            Stocks
          </h1>

          {/* Coming Soon Banner */}
          <div className="relative inline-block">
            {/* Optional: Subtle glow effect */}
            <div className="absolute -inset-2 sm:-inset-3 bg-yellow-400/10 rounded-full blur-2xl opacity-70 animate-pulse duration-[3500ms]"></div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none
                           [text-shadow:0_0_10px_rgba(255,255,255,0.3),_0_0_25px_rgba(250,204,21,0.4),_0_0_50px_rgba(250,204,21,0.2)]
                           text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
              Coming Soon
            </h2>
          </div>

          {/* Informative Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl
                         [text-shadow:0_1px_3px_rgba(0,0,0,0.2)]">
            Our expert team is meticulously crafting a state-of-the-art Stocks platform.
            Get ready for powerful analytics and seamless trading.
          </p>

          {/* Call to Action */}
          <div className="mt-10 sm:mt-12">
            <Link
              href="/" // Link to your homepage
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3.5 px-10 rounded-lg shadow-xl
                         transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-yellow-500/40
                         text-base sm:text-lg
                         focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60"
            >
              Return to Homepage
            </Link>
          </div>

          {/* Optional: Placeholder for "Get Notified" email input
          <div className="mt-8 w-full max-w-md">
            <p className="text-gray-300 mb-3">Be the first to know when we launch:</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-md bg-slate-700/50 border border-slate-600 focus:ring-2 focus:ring-yellow-500 outline-none placeholder-gray-400 text-white"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md shadow-md
                           transition-colors duration-200 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
              >
                Notify Me
              </button>
            </form>
          </div>
          */}
        </div>

        {/* Footer */}
        <footer className="absolute bottom-5 sm:bottom-6 text-gray-400 text-xs sm:text-sm z-10 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          &copy; {currentYear} Dubai Club. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}