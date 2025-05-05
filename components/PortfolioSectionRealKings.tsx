// components/PortfolioSectionRealKings.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSectionRealKings: React.FC = () => {
  // Define yellow color for consistency
  const yellowColor = 'text-yellow-400'; // Consistent with previous section
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern (ensure consistency or variation) */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"
        // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Text Content Panel (Order reversed) */}
          <div className="md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
            {/* Text Panel Styling */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
              {/* Headline - Yellow & Glowing */}
              <h2
                className={`text-4xl sm:text-5xl font-extrabold ${yellowColor} mb-4 leading-tight`}
                style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.4)' }} // Yellow glow
              >
                Real Kings
              </h2>
              {/* Tagline (Optional - Add if applicable, otherwise remove) */}
              {/* <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
                 Low-Risk | Blue-Chip Stablecoins | Passive Income Focus
               </p> */}

              {/* Stats section omitted as data wasn't available in provided docs */}

              {/* Description [cite: 2] */}
              <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                A long-term, Low-risk, blue-chip stable crypto investment portfolio offering the best passive income. [cite: 2]
              </p>

              {/* CTA Button - Styled for Dark Theme */}
              <Link href="/portfolios/real-kings" legacyBehavior>
                <a className={`inline-block ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 self-start shadow-lg hover:shadow-yellow-500/30`}>
                  Know More &rarr;
                </a>
              </Link>
            </div>
          </div>

          {/* Right Column: Image (Order reversed) */}
          <div className="md:col-span-7 order-1 md:order-2">
            {/* Image Wrapper with styling */}
            <div className="relative rounded-xl shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="aspect-video md:aspect-[16/10]"> {/* Maintain consistent aspect ratio */}
                <Image
                  src="/portfolio-real-kings.jpg" // Your image path for Real Kings
                  alt="Real Kings Portfolio Visual"
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

        </div>
      </div>
    </section>
  );
};

export default PortfolioSectionRealKings;