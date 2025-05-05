// components/VisualHero.tsx
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Keep Link if used for the button

const VisualHero: React.FC = () => {
  // Added button colors here for the example button
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';

  return (
    // NOTE: Increased top padding slightly (pt-24) to account for sticky header space
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black pt-24 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background-city.jpg" // Path to your background city image
          alt="Dubai City Skyline Background"
          layout="fill"
          objectFit="cover"
          quality={85}
          priority // Load background early too
        />
        {/* Original Overlay - Adjust if needed */}
        <div className="absolute inset-0 bg-black opacity-70 mix-blend-multiply z-10"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          {/* Left Column: Text ONLY */}
          {/* Added mt-0 to reset margin potentially affected by logo removal */}
          <div className="flex flex-col justify-center h-full text-white mt-0">
             {/* --- LOGO DIV REMOVED --- */}

            {/* Text Content */}
            {/* Adjusted margin top potentially */}
            <div className='md:mt-0'> {/* No specific top margin needed now */}
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight uppercase text-yellow-400">
                UNLOCK THE FUTURE <br /> OF WEALTH
              </h1>

              {/* Sub-headline */}
              <p className="text-lg sm:text-xl lg:text-2xl mb-6 font-light text-neutral-100 italic">
                AI-Powered Crypto Insights & Profitable Strategies!
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg max-w-lg text-neutral-200 leading-relaxed">
                With Dubai Club, invest in the Crypto market through our professionally
                tailored portfolio of top-performing Cryptocurrencies.
                Just invest, sit back & watch your investments grow.
              </p>
               {/* Optional CTA Button */}
               <div className="mt-8">
                 {/* Using Link component for the button */}
                 <Link
                    href="/#portfolios" // Example link
                    className={`${yellowBgColor} ${yellowHoverBgColor} text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block`}
                  >
                    Get Started
                  </Link>
               </div>
            </div>
          </div>

          {/* Right Column: Man Image */}
          <div className="hidden md:flex relative w-full h-full items-end justify-center">
             <div className="absolute bottom-0 right-0 lg:right-[-5%] xl:right-[-10%] w-[80%] max-w-[600px] lg:w-[90%] lg:max-w-[700px] xl:max-w-[800px] h-auto">
                <Image
                   src="/hero-man.png" // Path to the image of the man
                   alt="Man looking towards the future"
                   width={700}
                   height={800}
                   objectFit="contain"
                   objectPosition="bottom right"
                   quality={90}
                 />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualHero;