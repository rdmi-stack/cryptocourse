// app/stocks/page.tsx
"use client"; // This makes the entire page a Client Component

import Link from 'next/link';
import React from 'react'; // Import React if not already present

// Since this is a Client Component, 'metadata' cannot be exported directly from here.
// You would handle metadata in a parent Server Component (e.g., layout.tsx) or
// use document.title for very simple cases if this page had no server-side layout.
// For simplicity, we'll omit the static metadata export here.

// Component for the animated gradient background styles
// It's defined here because styled-jsx needs to be in a client environment.
const AnimatedGradientBackgroundStyles: React.FC = () => {
  return (
    <style jsx global>{`
      .gradient-animate-bg {
        background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #0f172a);
        background-size: 400% 400%;
        animation: gradientBG 25s ease infinite;
      }
      @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      /* Ensure html and body take full height for the gradient to cover.
         It's often better to put these in global.css if they affect all pages.
         If this is the only page with this full-height gradient, this is okay. */
      html, body {
        height: 100%;
        margin: 0;
        overflow-x: hidden; /* Prevent horizontal scroll from gradient animation */
      }
      body > div#__next { /* Target Next.js main wrapper */
        height: 100%;
      }
    `}</style>
  );
};

// Main page component
export default function StocksComingSoonPage() {
  // currentYear can be calculated client-side or passed if needed from server
  const currentYear = new Date().getFullYear();

  return (
    <>
      <AnimatedGradientBackgroundStyles />
      
      <div className="gradient-animate-bg text-white min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Optional: Particle effect. 
          If you add a <ParticlesComponent /> here, that component
          would also need "use client" at its top if it uses client-side hooks.
        */}
        {/* <ParticlesComponent /> */}

        <div className="relative z-10"> {/* Content should be above particles if used */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-200 uppercase tracking-wider [text-shadow:_0_0_8px_rgba(209,213,219,0.2)]">
              Stocks
            </h1>
          </div>

          <div className="relative inline-block mb-4">
            <div className="absolute -top-2 sm:-top-4 -left-4 -right-4 -bottom-2 sm:-bottom-4 bg-yellow-400/5 rounded-full blur-3xl opacity-60 animate-pulse duration-[4000ms]"></div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none [text-shadow:_0_0_10px_rgba(255,255,255,0.2),_0_0_20px_rgba(255,255,255,0.15),_0_0_40px_rgba(250,204,21,0.35)]">
              Coming Soon
            </h2>
          </div>

          <p className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl [text-shadow:_0_0_8px_rgba(209,213,219,0.15)]">
            We&apos;re currently fine-tuning our new Stocks section to bring you the best experience.
            Exciting features and insights are on the way!
          </p>

          <div className="mt-12">
            <Link
              href="/" // Link to your homepage
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3.5 px-8 rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
            >
              Go to Homepage
            </Link>
          </div>
        </div>

        <footer className="absolute bottom-6 sm:bottom-8 text-gray-500 text-sm z-10">
          &copy; {currentYear} Dubai Club. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}