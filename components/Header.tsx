"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDownIcon,
  Bars3Icon, // Hamburger menu
  XMarkIcon, // Close icon
  // AcademicCapIcon, // Removed as Membership is removed
  CogIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  RocketLaunchIcon,
  AdjustmentsHorizontalIcon,
  VariableIcon,
  RectangleStackIcon // Generic icon for other items
} from '@heroicons/react/24/outline';

// Define types for navigation items and dropdown items
interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
  icon?: React.ElementType; // For mobile menu
}

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // For desktop hover dropdowns
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  // For mobile click dropdowns
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  // Keep track of timeout for hover effect to prevent premature closing
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  // Updated navItems: "Membership" is removed.
  const navItems: NavItem[] = [
    {
      label: "Crypto Portfolios",
      href: "/portfolios", // This link can be a general overview page
      icon: ChartBarIcon,
      dropdown: [
        { label: "10X Alphas", href: "/portfolios/10x-alphas", icon: ChartBarIcon },
        { label: "Real Kings", href: "/portfolios/real-kings", icon: ShieldCheckIcon },
        { label: "GANGWAR", href: "/portfolios/gangwar", icon: BoltIcon },
        { label: "Sky Breakers", href: "/portfolios/sky-breakers", icon: RocketLaunchIcon },
        { label: "Project Alpha", href: "/portfolios/project-alpha", icon: AdjustmentsHorizontalIcon },
        { label: "Project Beta", href: "/portfolios/project-beta", icon: VariableIcon },
      ],
    },
    { label: "Stocks", href: "/stocks", icon: RectangleStackIcon },
    { label: "Newsletter", href: "/Newsletter", icon: RectangleStackIcon },
    { label: "Tools", href: "/tools", icon: RectangleStackIcon }, // Assuming Tools might have an icon
    { label: "Wealth Update", href: "/wealth-updates", icon: SparklesIcon }, // Assuming Wealth Secret might have an icon
    { label: "Prime Community", href: "/prime-community", icon: PuzzlePieceIcon }, // Assuming Prime Community might have an icon
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
          !(event.target as HTMLElement).closest('#mobile-menu-button')) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null); // Also close any open mobile dropdowns
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  const handleMouseEnter = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 100); // Small delay to allow moving mouse between trigger and dropdown
  };


  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) { // If was open, now closing
        setOpenMobileDropdown(null);
    }
  };

  const closeMobileMenuAndNavigate = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }

  const navLinkBaseStyle = `px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md`;
  const navLinkTextStyle = isScrolled ? 'text-neutral-200 hover:text-yellow-400' : 'text-white hover:text-yellow-300';
  const navLinkShadowStyle = !isScrolled ? 'drop-shadow-sm' : '';
  const navLinkHoverBgStyle = `hover:bg-white/10`; // Subtle hover background for links

  const dropdownItemStyle = (isDesktop: boolean = true) => `
    block w-full text-left px-4 py-3 text-sm
    ${isDesktop
      ? (isScrolled ? 'text-neutral-100 hover:bg-neutral-700 hover:text-yellow-400' : 'text-white hover:bg-neutral-800/70 hover:text-yellow-300')
      : 'text-neutral-200 hover:text-yellow-400 hover:bg-neutral-800/70 rounded-md'
    }
    transition-colors duration-150 flex items-center
  `;

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300 ease-in-out
          ${isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
            : 'bg-transparent backdrop-blur-none border-b border-transparent'
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center" aria-label="Dubai Club Home" onClick={closeMobileMenuAndNavigate}>
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={item.dropdown ? () => handleMouseEnter(item.label) : undefined}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  <Link href={item.href} legacyBehavior passHref>
                    <a
                      className={`${navLinkBaseStyle} ${navLinkTextStyle} ${navLinkShadowStyle} ${navLinkHoverBgStyle} ${item.dropdown ? 'flex items-center' : ''}`}
                      aria-haspopup={!!item.dropdown}
                      aria-expanded={hoveredDropdown === item.label}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDownIcon
                          className={`ml-1.5 h-4 w-4 transition-transform duration-200 ${hoveredDropdown === item.label ? 'transform rotate-180' : ''}`}
                        />
                      )}
                    </a>
                  </Link>
                  {/* Desktop Dropdown Menu (opens on hover) */}
                  {item.dropdown && hoveredDropdown === item.label && (
                    <div
                      className={`
                        absolute left-0 mt-1 w-60 origin-top-left rounded-md shadow-xl
                        bg-black border border-neutral-700/80
                        ring-1 ring-black ring-opacity-5 focus:outline-none py-1 backdrop-blur-lg
                        animate-fadeIn {/* Optional: for a subtle fade-in */}
                      `}
                      onMouseEnter={() => handleMouseEnter(item.label)} // Keep open when mouse moves to dropdown
                      onMouseLeave={handleMouseLeave} // Close when mouse leaves dropdown
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link href={dropdownItem.href} key={dropdownItem.label} legacyBehavior>
                          <a className={dropdownItemStyle(true)} onClick={() => setHoveredDropdown(null)}> {/* Close on click */}
                            {dropdownItem.icon && <dropdownItem.icon className="h-5 w-5 mr-3 text-neutral-400" />}
                            {dropdownItem.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-2 sm:space-x-3">
              <Link href="/login" legacyBehavior>
                <a className={`${navLinkBaseStyle} ${navLinkTextStyle} ${navLinkShadowStyle} ${navLinkHoverBgStyle}`}>
                  Login
                </a>
              </Link>
              <Link
  href="/portfolios"
  className="btn-shimmer relative inline-block rounded-md px-4 sm:px-5 py-2 text-sm font-bold text-black shadow-lg bg-yellow-400 transition-transform duration-300 ease-in-out hover:scale-105"
>
  <span className="relative z-10">Subscribe</span>
</Link>


            </div>

            <div className="md:hidden">
              <button
                id="mobile-menu-button"
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-colors duration-200 ${isScrolled ? 'text-neutral-200 hover:text-yellow-400 hover:bg-neutral-700/50' : 'text-white hover:text-yellow-300 hover:bg-white/10'}`}
                aria-label="Open main menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Click-based Dropdowns) */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-40 pt-[70px] transform transition-transform duration-300 ease-in-out bg-black/95 backdrop-blur-lg ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col h-full">
          <nav className="flex-grow divide-y divide-neutral-700/50">
            {navItems.map((item) => (
              <div key={`mobile-${item.label}`} className="py-1">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="w-full flex justify-between items-center py-3 px-3 text-lg font-medium text-neutral-100 hover:bg-neutral-800 rounded-md transition-colors"
                      aria-expanded={openMobileDropdown === item.label}
                    >
                      <span className="flex items-center">
                        {item.icon && <item.icon className="h-6 w-6 mr-3 text-neutral-400" />}
                        {item.label}
                      </span>
                      <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${openMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="pl-6 mt-1 mb-2 border-l-2 border-neutral-700 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link href={dropdownItem.href} key={dropdownItem.label} legacyBehavior>
                            <a
                              className={dropdownItemStyle(false)} // Use mobile styling for dropdown items
                              onClick={closeMobileMenuAndNavigate}
                            >
                              {dropdownItem.icon && <dropdownItem.icon className="h-5 w-5 mr-2.5 text-neutral-500" />}
                              {dropdownItem.label}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} legacyBehavior>
                    <a
                      className="w-full flex items-center py-3 px-3 text-lg font-medium text-neutral-100 hover:bg-neutral-800 rounded-md transition-colors"
                      onClick={closeMobileMenuAndNavigate}
                    >
                      {item.icon && <item.icon className="h-6 w-6 mr-3 text-neutral-400" />}
                      {item.label}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="py-6 mt-auto border-t border-neutral-700/60">
            <Link href="/login" legacyBehavior>
              <a className="flex items-center justify-center w-full mb-4 py-3 px-4 text-lg font-medium text-neutral-100 hover:bg-neutral-800 rounded-md transition-colors" onClick={closeMobileMenuAndNavigate}>
                Login
              </a>
            </Link>
            <Link
  href="/portfolios"
  className="btn-shimmer relative inline-block rounded-md px-4 sm:px-5 py-2 text-sm font-bold text-black shadow-lg bg-yellow-400 transition-transform duration-300 ease-in-out hover:scale-105"
>
  <span className="relative z-10">Subscribe</span>
</Link>


          </div>
        </div>
      </div>
      {/* Optional: Add a global style for fadeIn if not already in your tailwind.config.js */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </>
  );
};

export default Header;