// components/PortfolioSection10XAlphasUnique.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSection10XAlphasUnique: React.FC = () => {
  // Define yellow color for consistency
  const yellowColor = 'text-yellow-400'; // Or text-amber-400, etc.
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
        // Example using CSS gradient pattern if no SVG:
        // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image with unique styling */}
          <div className="md:col-span-7 order-1">
             {/* Adding a subtle glow effect wrapper */}
            <div className="relative rounded-xl shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]">
               {/* Optional border accent */}
               {/* <div className="absolute inset-0 border-2 border-yellow-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div> */}
               <div className="aspect-video md:aspect-[16/10]"> {/* Adjusted aspect ratio */}
                 <Image
                   // --- UPDATE IMAGE SOURCE HERE ---
                   src="/images/image2.jpg" // Your NEW image path
                   // --- END UPDATE ---
                   alt="10X Alphas Portfolio Visual" // Consider updating alt text if needed
                   layout="fill"
                   objectFit="cover"
                   quality={85}
                   className="rounded-xl" // Match parent rounding
                 />
               </div>
                {/* Image Overlay - subtle gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
             </div>
          </div>

          {/* Right Column: Text Content Panel */}
          <div className="md:col-span-5 order-2 flex flex-col justify-center">
             {/* Text Panel Styling */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
              {/* Headline - Yellow & Glowing */}
              <h2
                className={`text-4xl sm:text-5xl font-extrabold ${yellowColor} mb-4 leading-tight`}
                style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }} // Yellow glow
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