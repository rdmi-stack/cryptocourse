// components/HowItWorksMockup.tsx
import React from 'react';
import Image from 'next/image';

// Define the structure for each step (same as before)
interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

// Data for the steps (same as before)
const steps: HowItWorksStep[] = [
  {
    id: 1,
    title: 'Invest in a tailor made portfolio',
    description: 'Dubai Club professionals will create a portfolio based on your risk appetite.',
    imageSrc: '/how-it-works-step1.jpg',
  },
  {
    id: 2,
    title: 'Execute regular rebalance',
    description: 'Get rebalance updates on Dubai Club web, mail and approve and execute the actions.',
    imageSrc: '/how-it-works-step2.jpg',
  },
  {
    id: 3,
    title: 'Invest regularly with SIP or Lumpsum',
    description: "Keep Investing and watch your wealth grow, It's that easy!",
    imageSrc: '/how-it-works-step3.jpg',
  },
];

const HowItWorksMockup: React.FC = () => {
  const yellowAccentColor = 'text-yellow-400';

  return (
    // Section with Black Gradient Background
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-hidden">
      {/* Optional: Subtle background pattern */}
      {/* <div className="absolute inset-0 opacity-[0.02] bg-[url('/path/to/dark-pattern.svg')] bg-repeat"></div> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`font-serif text-4xl md:text-5xl font-bold ${yellowAccentColor} mb-4`}
              style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }} >
            How Dubai Club Works?
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto px-2">
            Three easy steps to grow your wealth - the key to wealth generation now on the Dubai Club Web.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group" // Group for hover effects
            >
              {/* Tablet Mockup */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-gray-800 rounded-[20px] sm:rounded-[24px] p-2 sm:p-3 shadow-lg border border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-yellow-500/15 group-hover:scale-[1.03]">
                 {/* Inner screen area */}
                <div className="relative w-full h-full bg-black rounded-[12px] sm:rounded-[14px] overflow-hidden">
                  <Image
                    src={step.imageSrc}
                    alt={`Step ${step.id} visual in tablet mockup`}
                    layout="fill"
                    objectFit="cover"
                    quality={75}
                    className="transition-opacity duration-300 group-hover:opacity-90"
                  />
                  {/* Optional: Tiny camera dot */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Text Content Below Mockup */}
              <div className="mt-5 sm:mt-6 px-2">
                {/* Step Title */}
                <h3 className={`text-xl md:text-2xl font-semibold ${yellowAccentColor} mb-2 capitalize`}>
                  {step.title}
                </h3>
                {/* Step Description */}
                <p className="text-neutral-300 text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksMockup;