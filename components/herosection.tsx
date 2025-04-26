import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    // Using 'isolate' creates a stacking context, simplifying z-index needs
    <div className="relative overflow-hidden isolate pt-14">
      {/* Background Image using next/image */}
      <Image
        // --- IMPORTANT ---
        // 1. Replace this src with the path to your image in the `public` folder
        //    e.g., src="/images/crypto-hero-bg.jpg"
        // 2. OR, if using a remote URL, ensure the hostname is configured
        //    in `next.config.mjs` (see notes below).
        src="https://images.unsplash.com/photo-1639754393290-9978899939b3?auto=format&fit=crop&q=80&w=2070" // Example placeholder URL
        alt="Abstract background representing blockchain technology and cryptocurrency networks"
        fill={true} // Makes the image fill the parent container
        style={{ objectFit: "cover" }} // Use style or className for objectFit
        className="-z-10" // Places the image behind content and overlay
        quality={75} // Adjust quality vs performance (default 75)
        priority={true} // Prioritize loading for LCP (Largest Contentful Paint)
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-black/70" // Slightly adjusted overlay
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      {/* No z-index needed here due to 'isolate' on parent */}
      <div className="relative max-w-4xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Master the World of Crypto & Blockchain
          </h1>

          {/* Description */}
          <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
            Go from beginner to expert with Krypto Gyan's comprehensive courses
            on cryptocurrency, DeFi, NFTs, and blockchain technology. Start your
            learning journey today!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Primary CTA Button - Internal Link */}
            <Link
              href="/courses" // Adjust to your actual courses page route
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white transition duration-150 ease-in-out"
            >
              Explore Courses
            </Link>
            {/* Secondary CTA Button - Can be internal or external */}
            <Link
              href="/#learn-more" // Adjust to a relevant internal section or page
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 bg-opacity-70 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
