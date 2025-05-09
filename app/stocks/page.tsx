// app/stocks/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Animated ticker component to simulate stock price movements
const StockTicker = () => {
  const [tickerItems, setTickerItems] = useState([
    { symbol: "AAPL", price: 182.63, change: +1.24 },
    { symbol: "MSFT", price: 412.27, change: -0.58 },
    { symbol: "GOOGL", price: 155.92, change: +2.31 },
    { symbol: "AMZN", price: 178.75, change: +0.92 },
    { symbol: "TSLA", price: 248.33, change: -1.46 },
    { symbol: "META", price: 472.12, change: +3.65 },
    { symbol: "NVDA", price: 934.56, change: +5.21 },
    { symbol: "BRK.A", price: 624.78, change: -0.34 },
  ]);

  // Simulate price movements
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems(prev => prev.map(item => ({
        ...item,
        price: +(item.price + (Math.random() * 2 - 1) * 0.5).toFixed(2),
        change: +(item.change + (Math.random() * 0.4 - 0.2)).toFixed(2)
      })));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black/30 backdrop-blur-sm py-3 border-t border-b border-gray-700/50 my-8">
      <div className="animate-marquee whitespace-nowrap flex">
        {tickerItems.concat(tickerItems).map((item, idx) => (
          <div key={idx} className="mx-6 inline-flex items-center">
            <span className="font-mono font-bold">{item.symbol}</span>
            <span className="ml-2 font-mono">${item.price.toFixed(2)}</span>
            <span className={`ml-2 text-sm ${item.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main page component - assumes layout already has header and footer
export default function StocksComingSoonPage() {
  const [countdown, setCountdown] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });

  // Simulate countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    // Main content container - leaves space for header and footer
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white min-h-[calc(100vh-theme(spacing.header)-theme(spacing.footer))] pt-20 pb-16">
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(86,106,127,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(86,106,127,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Glowing orbs for atmosphere */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Main content area */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Top section - Coming Soon and description */}
        <div className="mt-8 md:mt-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mb-4">
            COMING SOON
          </h1>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Dubai Club <span className="text-yellow-400">Stocks</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            We're building a premium stock market insights platform with real-time data, 
            expert analysis, and advanced trading tools to help you make smarter investment decisions.
          </p>
        </div>
        
        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-4 mb-10 w-full max-w-md">
          {[
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds }
          ].map((item) => (
            <div key={item.label} className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
              <div className="text-2xl md:text-4xl font-mono font-bold text-yellow-400">{item.value.toString().padStart(2, '0')}</div>
              <div className="text-xs md:text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
        
        {/* Stock image */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-2xl max-w-4xl border border-gray-700/50">
          <Image 
            src="/images/stocks.jpeg" 
            alt="Stock market trading with business professionals"
            width={1200}
            height={675}
            priority
            className="w-full object-cover"
          />
        </div>
        
        {/* Stock ticker */}
        <StockTicker />
        
        {/* Notification signup */}
        <div className="w-full max-w-md mb-8 mt-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email for updates" 
              className="flex-grow px-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 text-white"
            />
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg transition-all ease-in-out duration-200 hover:shadow-lg hover:shadow-yellow-500/20">
              Notify Me
            </button>
          </div>
        </div>
        
        <Link
          href="/"
          className="bg-slate-800/70 hover:bg-slate-700/80 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-200 ease-in-out hover:scale-105 text-base border border-slate-700/50 hover:border-slate-600/50 mb-8"
        >
          Return to Homepage
        </Link>
      </div>
      
      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}