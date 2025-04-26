import Link from "next/link"; // Import Link for internal navigation

function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year for copyright

  return (
    <footer className="bg-[#7c3aed] text-[#f5f3ff] py-16 px-4 sm:px-6 lg:px-8">
      {" "}
      {/* Using crypto purple */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1: Logo & Description */}
        <div className="md:col-span-3 lg:col-span-1">
          {/* Krypto Gyan Logo Placeholder */}
          <Link
            href="/"
            className="inline-block text-white text-2xl font-bold mb-4"
          >
            <span className="bg-white text-[#7c3aed] px-2 py-1 rounded mr-1">
              Krypto
            </span>
            {/* Keep comments/spacing if needed for inline-block style */}
            <span className="border border-white px-2 py-1 rounded">Gyan</span>
          </Link>
          <p className="text-sm text-[#ede9fe] leading-relaxed">
            {" "}
            {/* Lighter text */}
            Krypto Gyan provides expert-led courses to demystify cryptocurrency
            and blockchain technology.
          </p>
        </div>

        {/* Column 2: Courses */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Courses
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/courses/blockchain"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Blockchain Basics
              </Link>
            </li>
            <li>
              <Link
                href="/courses/defi"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                DeFi Courses
              </Link>
            </li>
            <li>
              <Link
                href="/courses/nfts"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                NFTs & Metaverse
              </Link>
            </li>
            <li>
              <Link
                href="/courses/trading"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Trading Strategies
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          {/* Empty heading placeholder for alignment - invisible on mobile */}
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 invisible md:visible">
            Company
          </h4>
          <ul className="space-y-3 md:mt-[36px]">
            {" "}
            {/* Adjust top margin to align with column 2 links */}
            <li>
              <Link
                href="/about"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Resources
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/blog"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/glossary"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Crypto Glossary
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-sm text-[#ede9fe] hover:text-white"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Contact Us */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Contact Us
          </h4>
          <div className="space-y-3 text-sm text-[#ede9fe]">
            <p>+91 987 654 3210</p> {/* Example Number */}
            <p>support@kryptogyan.com</p> {/* Example Email */}
          </div>
          {/* External Link - Keep as <a> tag */}
          <a
            href="https://play.google.com/store/apps" // Replace with your actual Play Store link
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="inline-flex items-center mt-4 px-4 py-2 bg-white text-purple-900 rounded-md text-sm font-medium hover:bg-gray-100 shadow transition-colors"
          >
            {/* Google Play SVG Icon */}
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M6.001 3.002a1.2 1.2 0 0 0-1.123 1.51l3.469 6.482-3.469 6.482a1.2 1.2 0 1 0 2.13.922l3.499-6.53 3.499 6.53a1.2 1.2 0 1 0 2.13-.922l-3.469-6.482 3.469-6.482a1.2 1.2 0 1 0-2.13-.922l-3.499 6.53-3.499-6.53A1.198 1.198 0 0 0 6 3.002Z"></path>
              <path d="m20.989 8.51-5.656-3.27a1.2 1.2 0 0 0-1.2.106L3.01 11.878a1.2 1.2 0 0 0 0 2.244l11.123 6.532a1.2 1.2 0 0 0 1.2.106l5.656-3.27a1.2 1.2 0 0 0 0-2.13Z"></path>
            </svg>
            {/* Using spans for better control over text layout */}
            <span className="text-left leading-tight">
              <span className="block text-xs">GET IT ON</span>
              <span className="block font-semibold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-12 border-t border-purple-800/50 pt-8 text-center">
        <p className="text-base text-[#ede9fe]">
          &copy; {currentYear} Krypto Gyan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
