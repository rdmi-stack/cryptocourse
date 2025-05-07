// components/Header.tsx
"use client"; // Required for useState and useEffect

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Colors (can keep these if needed for buttons etc.)
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls down more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    // --- HEADER STYLING ---
    // Base classes: sticky, top, z-index, transition properties
    // Conditional classes: background, backdrop-blur, border based on isScrolled state
    <header
    className={`
      fixed top-0 left-0 w-full z-50
      transition-all duration-300 ease-in-out
      ${isScrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50 shadow-md'
        : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }
    `}
  >
  
      {/* --- END HEADER STYLING --- */}

      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center" aria-label="Dubai Club Home">
              <Image
                src="/dubaiclublogo.png" // Path relative to the 'public' folder
                alt="Dubai Club Logo"
                width={160} // Adjust width as needed
                height={40}  // Adjust height as needed
                quality={95}
                priority
              />
            </a>
          </Link>

          {/* Navigation / Actions Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Login Button */}
            <Link href="/login" legacyBehavior>
              {/* Adjust text color for visibility when transparent? */}
              <a className={`
                px-3 py-2 text-sm font-medium transition-colors duration-200
                ${isScrolled ? 'text-neutral-200 hover:text-yellow-400' : 'text-white hover:text-yellow-300'}
                ${!isScrolled ? 'drop-shadow-sm' : ''} // Optional shadow for text when transparent
              `}>
                Login
              </a>
            </Link>
            {/* Subscribe Button */}
            <Link href="/portfolios/10x-alphas" legacyBehavior>
              {/* Button styles are mostly independent of header background */}
              <a
  className="relative inline-block overflow-hidden rounded-md bg-yellow-400 px-4 sm:px-5 py-2 text-sm font-bold text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
>
  <span className="relative z-10">Subscribe</span>
  <span
    className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm animate-shimmer pointer-events-none"
  />
</a>

            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;