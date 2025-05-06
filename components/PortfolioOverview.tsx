// components/PortfolioSection10XAlphasUnique.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the SVG clip path component for the torn paper effect
const TornPaperClipPathComponent: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="portfolioTornEffect" clipPathUnits="objectBoundingBox">
        {/* Adjusted path to show more of the image while keeping torn edges */}
        <path d="
            M0.005,0.005 L0.03,0.000 L0.06,0.005 L0.09,0.000 L0.12,0.007
            L0.15,0.002 L0.18,0.008 L0.21,0.003 L0.24,0.009 L0.27,0.001
            L0.30,0.007 L0.33,0.003 L0.36,0.008 L0.39,0.002 L0.42,0.009
            L0.45,0.003 L0.48,0.007 L0.51,0.002 L0.54,0.008 L0.57,0.003
            L0.60,0.009 L0.63,0.001 L0.66,0.007 L0.69,0.003 L0.72,0.008
            L0.75,0.002 L0.78,0.007 L0.81,0.003 L0.84,0.009 L0.87,0.002
            L0.90,0.007 L0.93,0.003 L0.96,0.008 L0.995,0.003

            L0.998,0.25 L0.993,0.40 L0.998,0.60 L0.994,0.75

            L0.995,0.995 L0.96,0.992 L0.93,0.997 L0.90,0.993
            L0.87,0.998 L0.84,0.991 L0.81,0.997 L0.78,0.992 L0.75,0.998
            L0.72,0.993 L0.69,0.997 L0.66,0.992 L0.63,0.998 L0.60,0.991
            L0.57,0.997 L0.54,0.992 L0.51,0.998 L0.48,0.993 L0.45,0.997
            L0.42,0.992 L0.39,0.998 L0.36,0.991 L0.33,0.997 L0.30,0.992
            L0.27,0.998 L0.24,0.993 L0.21,0.997 L0.18,0.992 L0.15,0.998
            L0.12,0.991 L0.09,0.997 L0.06,0.992 L0.03,0.998 L0.005,0.992

            L0.002,0.75 L0.007,0.60 L0.002,0.40 L0.007,0.25
            Z
        " />
      </clipPath>
    </defs>
  </svg>
);

const PortfolioSection10XAlphasUnique: React.FC = () => {
  // Define yellow color for consistency
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Add the SVG definitions to the DOM */}
      <TornPaperClipPathComponent />

      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image with unique styling */}
          <div className="md:col-span-7 order-1">
            {/* Purple border wrapper */}
            <div className="relative">
              {/* Purple border element */}
              <div className="absolute -inset-1 bg-black rounded-lg" style={{                transform: 'scale(1.01)',
                zIndex: 1
              }}></div>
              
              {/* Torn paper effect with image */}
              <div 
                className="relative z-10 shadow-2xl group transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ clipPath: 'url(#portfolioTornEffect)' }}
              >
                <div className="aspect-video md:aspect-[16/10] relative">
                  <Image
                    src="/images/image2.jpg"
                    alt="10X Alphas Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                  />
                  {/* Image Overlay - subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content Panel */}
          <div className="md:col-span-5 order-2 flex flex-col justify-center">
            {/* Text Panel Styling */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
              {/* Headline - Yellow & Glowing */}
              <h2
                className={`text-4xl sm:text-5xl font-extrabold ${yellowColor} mb-4 leading-tight`}
                style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }}
              >
                10X Alphas
              </h2>
              {/* Tagline */}
              <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
                Fundamentals-Backed | High-Growth Crypto | Long-Term Alpha Generation
              </p>

              {/* Key Stats - Dark Theme */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 text-sm sm:text-base">
                <div className="border border-gray-700 bg-gray-800/70 p-3 rounded text-center transition-colors hover:border-yellow-700/50">
                  <span className="font-semibold block text-neutral-100">Volatility</span>
                  <span className="text-neutral-300">Medium</span>
                </div>
                <div className="border border-gray-700 bg-gray-800/70 p-3 rounded text-center transition-colors hover:border-yellow-700/50">
                  <span className="font-semibold block text-neutral-100">2Y CAGR</span>
                  <span className="text-neutral-300">122%</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                Focused on high-quality crypto assets engineered to generate alpha returns with exponential growth potential for long-term wealth building.
              </p>

              {/* CTA Button - Styled for Dark Theme */}
              <Link href="/portfolios/10x-alphas" legacyBehavior>
                <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                  Know More &rarr;
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection10XAlphasUnique;