"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BitcoinHalvingBlogPage: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pb-20">
      {/* HERO */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1622630269833-29b150f1c07e"
          alt="Bitcoin Halving"
          fill
          priority
          className="object-cover object-center brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 text-center max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bitcoin Halving Explained — Why It Matters for Your Wealth
          </motion.h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 mt-16 space-y-8">
        <motion.p
          className="text-lg text-neutral-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Bitcoin halving is one of the most anticipated events in the cryptocurrency world. Every four years, the reward given to Bitcoin miners is cut in half, reducing the number of new bitcoins entering circulation.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Why Does Halving Happen?
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          Halving is built into Bitcoin’s code to ensure a finite supply of only 21 million bitcoins. As supply decreases and demand remains or grows, halving events have historically triggered price surges.
        </p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Historical Impact on Price
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          In 2012 and 2016, halving events were followed by massive bull runs. The 2020 halving saw Bitcoin rise from under $10,000 to over $60,000 in the following year. Investors expect similar outcomes post-2024 halving.
        </p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          How to Prepare as an Investor
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          - Position early: Buy before the hype.{" "}
          <br />- Diversify: Use halving as a catalyst but hold a balanced portfolio.{" "}
          <br />- Stay informed: Watch miner activity and on-chain data post-halving.
        </p>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/wealth-updates"
            className="inline-block text-yellow-400 hover:underline text-sm uppercase tracking-wide"
          >
            ← Back to Crypto Updates
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BitcoinHalvingBlogPage;
