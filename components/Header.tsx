// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    // Sticky header styling with blurred background
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center" aria-label="Dubai Club Home">
              {/* --- LOGO IMAGE ADDED HERE --- */}
              <Image
                src="/dubaiclublogo.png" // Path relative to the 'public' folder
                alt="Dubai Club Logo"
                width={160} // Adjust width as needed for your logo
                height={40}  // Adjust height to maintain aspect ratio
                quality={95} // Optional: Set image quality (1-100)
                priority     // Optional: Prioritize loading for LCP
              />
              {/* --- END LOGO IMAGE --- */}
            </a>
          </Link>

          {/* Navigation / Actions Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Login Button */}
            <Link href="/login" legacyBehavior>
              <a className="text-neutral-200 hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-sm font-medium">
                Login
              </a>
            </Link>
            {/* Subscribe Button */}
            <Link href="/portfolios/10x-alphas" legacyBehavior>
              <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black text-sm font-bold py-2 px-4 sm:px-5 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-md`}>
                Subscribe
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;