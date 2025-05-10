"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const tools = [
  {
    title: "Real-Time Crypto Prices",
    description: "Live price tracking using CoinGecko's free API. Integrate and display updated prices with zero cost.",
    link: "https://www.coingecko.com/en/api",
    category: "API",
  },
  {
    title: "TradingView Price Charts",
    description: "Embed advanced charting widgets from TradingView — ideal for portfolio pages or asset deep dives.",
    link: "https://www.tradingview.com/widget/advanced-chart/",
    category: "Widget",
  },
  {
    title: "Crypto Screener",
    description: "Use CoinMarketCap's screener to analyze coins by market cap, volume, and gainers — great for discovery.",
    link: "https://coinmarketcap.com/view/trending-cryptocurrencies/",
    category: "Screener",
  },
  {
    title: "Portfolio Tracker (Zapper)",
    description: "Connect wallets and track DeFi/NFT holdings with Zapper's free tools and dashboards.",
    link: "https://zapper.xyz",
    category: "Tool",
  },
  {
    title: "Wallet Scanner (DeBank)",
    description: "DeBank lets you analyze wallet holdings, DeFi exposure, and risk scores. Free to use with approval.",
    link: "https://debank.com",
    category: "Tool",
  },
  {
    title: "OpenAI Prompt Assistant",
    description: "Use ChatGPT or PromptBetter AI to generate market summaries, trading prompts, and news breakdowns.",
    link: "https://chat.openai.com",
    category: "AI",
  },
];

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Free Crypto Tools & Widgets
        </motion.h1>

        <motion.p
          className="text-center text-neutral-400 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Discover powerful free tools to track prices, analyze portfolios, and improve your crypto investing decisions.
        </motion.p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-sm text-yellow-400 font-semibold uppercase tracking-wide mb-2 block">
                {tool.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-neutral-300 mb-4 text-sm">{tool.description}</p>
              <Link
                href={tool.link}
                target="_blank"
                className="text-yellow-500 hover:underline text-sm font-medium"
              >
                Visit Tool →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
