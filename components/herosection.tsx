// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 pt-24 lg:pt-32 overflow-hidden dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/30">
      {/* Optional: Add subtle background pattern or elements here if desired */}
      {/* Example: Absolutely positioned decorative shapes */}
      {/* <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
        <div className="w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl dark:bg-purple-800/30"></div>
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
         <div className="w-96 h-96 bg-cyan-100 rounded-full opacity-40 blur-3xl dark:bg-cyan-700/20"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {" "}
        {/* Ensure content is above potential background elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 mb-6 shadow-sm">
              <svg
                className="w-4 h-4 mr-2 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true" // Good for accessibility
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Just Launched — Learn Crypto Now
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Learn Crypto & Blockchain
              <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                from Zero to Pro
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Unlock the world of cryptocurrency with hands-on lessons, expert
              strategies, and tools built for clarity. No fluff—just real
              knowledge.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                href="/enquiry" // Ensure this path matches your enquiry page route
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-lg text-white bg-purple-600 shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-900 transform hover:scale-[1.03] transition-all duration-200 ease-in-out"
              >
                🚀 Enquiry Now
              </Link>
              <Link
                href="/about" // Ensure this path exists or change it
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-lg text-purple-700 bg-purple-100 shadow-md hover:bg-purple-200 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-900 transform hover:scale-[1.03] transition-all duration-200 ease-in-out"
              >
                🤔 Why Krypto Gyan?
              </Link>
            </div>
          </div>

          {/* RIGHT: Image */}
          {/* Adjusted container for better centering and responsiveness */}
          <div className="relative w-full h-80 sm:h-96 lg:h-[450px] xl:h-[500px] flex items-center justify-center mt-10 lg:mt-0">
            {/* Container to constrain image slightly if needed, prevents touching edges on some views */}
            <div className="relative w-[90%] h-[90%]">
              <Image
                src="/image.png" // Make sure this image exists in your /public directory
                alt="Krypto Gyan App Interface or relevant graphic"
                fill // Use fill and object-contain/cover
                className="object-contain" // Use object-contain to show the whole image without cropping
                priority // Prioritize loading for LCP (Largest Contentful Paint)
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw" // Helps optimize image loading
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add a subtle wave/divider at the bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div> */}
    </section>
  );
}

export default HeroSection;
