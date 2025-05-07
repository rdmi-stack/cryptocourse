"use client";

import React from 'react';
import Image from 'next/image';

interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const steps: HowItWorksStep[] = [
  {
    id: 1,
    title: 'Invest in a tailor made portfolio',
    description: 'Dubai Club professionals will create a portfolio based on your risk appetite.',
    imageSrc: '/images/image9.jpg',
  },
  {
    id: 2,
    title: 'Execute regular rebalance',
    description: 'Get rebalance updates on Dubai Club web, mail and approve and execute the actions.',
    imageSrc: '/images/image10.jpg',
  },
  {
    id: 3,
    title: 'Invest regularly with SIP or Lumpsum',
    description: "Keep Investing and watch your wealth grow, It's that easy!",
    imageSrc: '/images/image11.jpg',
  },
];

const HowItWorksMockup: React.FC = () => {
  const yellowAccentColor = 'text-yellow-400';

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-gray-950 to-black text-neutral-200 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold ${yellowAccentColor} mb-4`}
            style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
          >
            How Dubai Club Works?
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto px-2">
            Three easy steps to grow your wealth — the key to wealth generation now on the Dubai Club Web.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Tablet Mockup */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-gray-800 rounded-[24px] p-3 shadow-xl border border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:shadow-yellow-500/20 group-hover:scale-[1.035]">
                {/* Inner screen */}
                <div className="relative w-full h-full bg-black rounded-[14px] overflow-hidden">
                  <Image
                    src={step.imageSrc}
                    alt={`Step ${step.id} visual in tablet mockup`}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Glass highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-black/10 pointer-events-none" />
                  {/* Camera dot */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 px-3">
                <h3 className={`text-xl md:text-2xl font-semibold ${yellowAccentColor} mb-2`}>
                  {step.title}
                </h3>
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
