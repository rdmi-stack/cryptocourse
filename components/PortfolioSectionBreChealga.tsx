// components/PortfolioSectionBreChealga.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioSectionBreChealga: React.FC = () => {
  const yellowColor = 'text-yellow-400'; // Or text-amber-400, etc.
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    <section className="relative py-20 md:py-28 bg-black text-neutral-100 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('/path/to/subtle-pattern-variant.svg')] bg-repeat"
        // style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

          {/* Left Column: Image (Layout reverted) */}
          <div className="md:col-span-7 order-1 md:order-1">
            {/* Image Wrapper with enhanced styling */}
            <div className="relative rounded-lg shadow-2xl overflow-hidden group transform transition-transform duration-500 hover:scale-[1.03] hover:shadow-yellow-500/20">
              {/* Adding perspective on hover */}
              {/* <div className="transition-transform duration-500 group-hover:[transform:rotateY(5deg)_rotateX(2deg)]"> */}
                <div className="aspect-video md:aspect-[16/10]">
                  <Image
                    src="/portfolio-bre-chealga.jpg" // Your image path
                    alt="Bre Chealga Portfolio Visual"
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    className="rounded-lg"
                  />
                </div>
              {/* </div> */}
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-lg"></div>
            </div>
          </div>

          {/* Right Column: Text Content Panel (Layout reverted) */}
          <div className="md:col-span-5 order-2 md:order-2 flex flex-col justify-center">
             {/* Text Panel Styling - slight variation */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 md:p-8 shadow-xl">
              {/* Headline - Serif Font, Yellow, Glowing */}
              <h2
                // Apply the custom font class from Tailwind config
                className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4 leading-tight`}
                style={{ textShadow: '0 0 12px rgba(250, 204, 21, 0.3)' }} // Adjusted glow
              >
                Bre Chealga
              </h2>
              {/* Tagline (Optional) */}
              <p className="text-neutral-400 font-medium mb-6 text-sm sm:text-base">
                High-Risk / High-Return | Technically Optimized
              </p>

              {/* Description */}
              <p className="text-neutral-300 mb-8 text-base md:text-lg leading-relaxed">
                High-risk, High-return crypto investments. A technically optimized portfolio designed for aggressive growth strategies.
                 {/* Slightly elaborated description */}
              </p>

              {/* CTA Button */}
              <Link href="/portfolios/bre-chealga" legacyBehavior>
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

export default PortfolioSectionBreChealga;