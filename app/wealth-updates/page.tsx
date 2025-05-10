"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Blog posts with fixed Unsplash image URLs
const blogs = [
  {
    id: 1,
    title: "The Rise of Bitcoin ETFs: What It Means for Wealth Builders",
    excerpt:
      "Explore how the approval of Bitcoin ETFs is reshaping institutional access and individual investment strategies.",
    image: "/image15.png",
    slug: "bitcoin-etfs-wealth",
  },
  {
    id: 2,
    title: "How AI Is Revolutionizing Crypto Portfolio Management",
    excerpt:
      "From risk prediction to intelligent rebalancing — discover how AI is redefining wealth generation in crypto.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    slug: "ai-crypto-portfolio",
  },
  {
    id: 3,
    title: "Top 5 Long-Term Crypto Holdings for 2025",
    excerpt:
      "These crypto assets are poised for sustainable growth and compounding value in the coming bull cycle.",
    image: "/image16.png",
    slug: "top-5-crypto-2025",
  },
  
];

const WealthUpdatesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Crypto Wealth Updates
        </motion.h1>

        <motion.p
          className="text-center text-neutral-400 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Stay ahead with the latest insights, strategies, and updates designed to help you grow and protect your crypto wealth.
        </motion.p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-yellow-400 mb-2">{post.title}</h2>
                <p className="text-neutral-300 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href={`/wealth-updates/${post.slug}`}
                  className="text-yellow-500 font-medium hover:underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WealthUpdatesPage;
