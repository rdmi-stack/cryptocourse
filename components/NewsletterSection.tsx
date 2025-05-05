// components/NewsletterSection.tsx
"use client";

import React, { useState } from "react";
// CORRECTED IMPORT: Add AnimatePresence
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

// Animation Variants (same as before)
const sectionVariant = { /* ... */ };
const itemVariant = { /* ... */ };

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Theme colors (same as before)
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowFocusRing = 'focus:ring-yellow-500';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // --- Placeholder for actual newsletter signup logic ---
    console.log("Subscribing with email:", email);
    await new Promise(res => setTimeout(res, 1000)); // Simulate API
    if (email.includes('@') && email.includes('.')) {
      setMessage({ type: 'success', text: 'Subscription successful! Check your inbox.' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
    setLoading(false);
    // --- End Placeholder ---
  };

  return (
    // Apply consistent dark gradient background
    <motion.section
      className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Optional subtle pattern */}
       <div className="absolute inset-0 opacity-[0.02] bg-[url('/path/to/subtle-pattern.svg')] bg-repeat"></div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          // Apply serif font to headline
          className={`font-serif text-4xl sm:text-5xl font-bold ${yellowColor} mb-4`}
          style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
          variants={itemVariant}
        >
          Stay Ahead with Dubai Club Insights {/* Updated Copy */}
        </motion.h2>
        <motion.p className="mt-4 text-lg text-neutral-300 leading-relaxed" variants={itemVariant}>
           Subscribe for weekly market analysis, portfolio updates, and AI-driven crypto insights delivered to your inbox. {/* Updated Copy */}
        </motion.p>
        <motion.form
          className="mt-10 sm:flex sm:justify-center"
          onSubmit={handleSubmit}
          variants={itemVariant}
        >
          <label htmlFor="newsletter-email-address" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Consistent dark input styling
            className={`w-full sm:max-w-xs px-5 py-3 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200 shadow-sm`}
            placeholder="Your Email Address"
          />
          <motion.div
            className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
          >
            <button
              type="submit"
              disabled={loading}
              // Consistent yellow button styling
              className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-black ${yellowBgColor} transition duration-150 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${yellowFocusRing} ${
                loading ? 'opacity-60 cursor-not-allowed' : `${yellowHoverBgColor} hover:shadow-yellow-500/30`
              }`}
            >
              {loading ? 'Subscribing...' : 'Get Insights'} {/* Updated Copy */}
            </button>
          </motion.div>
        </motion.form>

         {/* Success/Error Message Display */}
        {/* AnimatePresence requires explicit import */}
        <AnimatePresence>
          {message.text && (
            <motion.p
              key="message"
              className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {message.text}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Updated privacy notice with link */}
        <motion.p className="mt-6 text-xs text-neutral-500" variants={itemVariant}>
          Your privacy matters. Read our{' '}
          <Link href="/privacy-policy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-300">Privacy Policy</a>
          </Link>
          . Unsubscribe anytime.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default NewsletterSection;