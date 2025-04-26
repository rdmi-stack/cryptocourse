import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 pt-24 lg:pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 mb-6">
              <svg
                className="w-4 h-4 mr-2 text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Learn Crypto & Blockchain
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                from Zero to Pro
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Unlock the world of cryptocurrency with hands-on lessons, expert
              strategies, and tools built for clarity. No fluff—just real
              knowledge.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-200"
              >
                🚀 Explore Courses
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 hover:scale-105 transition-all duration-200"
              >
                🤔 Why Krypto Gyan?
              </Link>
            </div>
          </div>

          {/* RIGHT: Image (No Border / No Shadow) */}
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[360px] xl:h-[380px] flex items-center justify-center">
            <Image
              src="/image.png"
              alt="Krypto Gyan App Interface"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
