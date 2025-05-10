"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EthereumScalingBlogPage: React.FC = () => {
  return (
    <div className="bg-black text-neutral-200 min-h-screen pb-20">
      {/* HERO */}
      <div className="relative w-full h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1639752284305-3601f379fe77"
          alt="Ethereum Scaling"
          fill
          priority
          className="object-cover object-center brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 text-center max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ethereum’s Road to Scaling: L2s, Proto-Danksharding & the Future of Crypto
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
          Ethereum’s success has created its biggest challenge: scalability. As more users and developers flood the network, gas fees and congestion make it less accessible. But Ethereum’s evolution is well underway — and it’s all about scaling.
        </motion.p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Role of Layer 2s
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          Optimistic rollups like Arbitrum and zk-rollups like zkSync reduce fees and offload computation from the main Ethereum chain. They're already being adopted by dApps and exchanges, bringing cheaper transactions to the masses.
        </p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          What Is Proto-Danksharding?
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          Proto-danksharding (EIP-4844) introduces blob transactions — a way to temporarily store L2 data more efficiently. It's a stepping stone to full danksharding and will drastically lower L2 costs.
        </p>

        <motion.h2
          className="text-2xl font-bold text-yellow-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Why This Matters for Investors
        </motion.h2>
        <p className="text-neutral-300 leading-relaxed">
          - Lower fees → higher adoption.
          <br />- Faster transactions → better user experience.
          <br />- Strong narrative → bullish for ETH and scaling tokens (e.g., ARB, OP, LRC).
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

export default EthereumScalingBlogPage;
