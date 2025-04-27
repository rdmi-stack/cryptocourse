// components/Header.tsx
"use client";

import { useState, useEffect } from "react"; // Keep useEffect for scroll detection
import Link from "next/link";
import { usePathname } from "next/navigation";

// BrandLogo component remains the same...
const BrandLogo = () => (
  <span className="text-xl font-bold leading-none">
    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded mr-1 shadow-sm">
      Crypto
    </span>
    <span className="border border-purple-600 text-purple-600 px-2 py-1 rounded shadow-sm">
      Gyan
    </span>
  </span>
);

// navLinks array remains the same...
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

// EnquiryButton component remains the same...
const EnquiryButton = ({ mobile = false }: { mobile?: boolean }) => (
  <Link
    href="/enquiry"
    className={`inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
        ${
          mobile
            ? "px-3 py-1.5 text-xs bg-purple-600 text-white shadow-md hover:bg-purple-700"
            : "px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-purple-700 hover:to-indigo-700"
        }`}
  >
    🚀 Enquiry
  </Link>
);

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Keep state for scroll detection
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Detect scroll to add subtle shadow increase
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Detect scroll past 10px
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Adjusted shadow: shadow-sm (default) -> shadow-md (on scroll)
    <nav
      className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? "shadow-md" : "shadow-sm"}`}
    >
      {" "}
      {/* CHANGED HERE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Krypto Gyan Home">
              <BrandLogo />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors duration-150 group ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-600 hover:text-purple-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-[-4px] left-0 h-0.5 bg-purple-600 transition-all duration-300 ease-out group-hover:w-full ${isActive ? "w-full" : "w-0"}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <EnquiryButton />
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Right Side Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <EnquiryButton mobile={true} />
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />{" "}
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />{" "}
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 border-t border-gray-200"
            : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMobileMenu}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-purple-50 text-purple-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/login"
            onClick={toggleMobileMenu}
            className="block w-full text-left px-3 py-2 mt-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
