"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center" aria-label="Dubai Club Home">
              <Image
                src="/dubaiclublogo.png"
                alt="Dubai Club Logo"
                width={160}
                height={40}
                quality={95}
                priority
              />
            </a>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            {/* Login */}
            <Link href="/login" legacyBehavior>
              <a className={`
                px-3 py-2 text-sm font-medium transition-colors duration-200
                ${isScrolled ? 'text-neutral-200 hover:text-yellow-400' : 'text-white hover:text-yellow-300'}
                ${!isScrolled ? 'drop-shadow-sm' : ''}
              `}>
                Login
              </a>
            </Link>

            {/* Subscribe Button with Shimmer */}
            <Link href="/portfolios/10x-alphas" legacyBehavior>
              <a className="relative inline-block rounded-md px-4 sm:px-5 py-2 text-sm font-bold text-black shadow-lg bg-yellow-400 transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden">
                <span className="relative z-10">Subscribe</span>
                <span className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                  <span className="absolute -left-full top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm animate-shimmer" />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
