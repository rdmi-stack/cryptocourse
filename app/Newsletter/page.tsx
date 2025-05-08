// pages/newsletter-signup.tsx (or any other appropriate filename)
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

// SVG Icon (Envelope)
const EnvelopeIcon = () => (
  <svg className="w-12 h-12 text-yellow-400 mb-6 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.25 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
}

function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Simulate API call
    await new Promise(res => setTimeout(res, 1500));
    if (email.includes('@') && email.includes('.')) {
      setMessage({ type: 'success', text: 'Subscription successful! Insights are on their way.' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      {/* Header/Signup Section */}
      <motion.section
        className="relative bg-black text-white pt-20 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center"
        variants={sectionVariant}
        initial="hidden"
        animate="visible" // Changed from whileInView to animate for initial load
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div variants={itemVariant}>
              <EnvelopeIcon />
            </motion.div>
            <motion.h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-5"
              style={{ textShadow: '0 0 15px rgba(250, 204, 21, 0.3)' }}
              variants={itemVariant}
            >
              Stay Ahead with Dubai Club & Get Insights the Secrets of the Ultra-Wealthy
            </motion.h1>
            <motion.p className="mt-4 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-xl mx-auto" variants={itemVariant}>
              Free to Subscribe for weekly market analysis, portfolio updates, AI-driven crypto insights & ultra wealth secrets delivered directly to your inbox.
            </motion.p>

            <motion.form
              className="mt-10 sm:flex sm:justify-center max-w-lg mx-auto"
              onSubmit={handleSubmit}
              variants={itemVariant}
            >
              <label htmlFor="newsletter-email-page" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email-page"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-6 py-4 rounded-md sm:rounded-l-md sm:rounded-r-none border-2 border-transparent text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset text-base"
                placeholder="your email"
              />
              <motion.div
                className="mt-3 sm:mt-0 sm:flex-shrink-0 w-full sm:w-auto"
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md sm:rounded-r-md sm:rounded-l-none text-black bg-yellow-500 transition duration-150 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600 hover:shadow-xl'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Get Insights'}
                </button>
              </motion.div>
            </motion.form>

            <AnimatePresence>
              {message.text && (
                <motion.p
                  key="message-page"
                  className={`mt-6 text-md font-medium ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.p className="mt-8 text-base text-white font-medium" variants={itemVariant}>
              🤝 Join 10,000+ Smart Crypto Investors
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Hero Image Section */}
      <motion.section
        className="bg-black w-full py-8 sm:py-12" // Adjusted padding
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replace with your actual image path */}
          <Image
            src="/images/newsletter2.png" // MAKE SURE THIS IMAGE EXISTS IN /public
            alt="Dubai Club illustration with luxury cars and building"
            width={1200} // Adjust width as needed
            height={600} // Adjust height as needed
            className="rounded-lg shadow-2xl mx-auto"
            priority // Good for LCP
          />
        </div>
      </motion.section>

      {/* "What you'll get" Section */}
      <motion.section
        className="bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto">
          <motion.h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-12 sm:mb-16 text-center"
            style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
            variants={itemVariant}
          >
            What you&apos;ll get
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div variants={itemVariant}>
              <ul className="space-y-6 text-lg sm:text-xl text-neutral-200">
                <ListItem>Where Smart Money Discovers Its Next Move</ListItem>
                <ListItem>Get Elite Market Research. Real Wealth. No Noise</ListItem>
                <ListItem>The Hidden Strategies Behind Generational Wealth</ListItem>
                <ListItem>The Investment Edge They Don&apos;t Want You To Have</ListItem>
              </ul>
            </motion.div>
            <motion.div variants={imageVariant}>
              {/* Replace with your actual image path */}
              <Image
                src="/images/newsletter.jpg" // MAKE SURE THIS IMAGE EXISTS IN /public
                alt="Illustrative image of successful investors"
                width={600}
                height={400}
                className="rounded-lg shadow-xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer/Privacy Section */}
      <motion.footer
        className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto text-center">
          <motion.p className="text-sm text-neutral-400" variants={itemVariant}>
            Your privacy matters. Unsubscribe anytime. Read our{' '}
            <Link href="/privacy-policy" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="underline text-yellow-400 hover:text-yellow-300 transition-colors duration-150">
                Privacy Policy
              </a>
            </Link>.
          </motion.p>
          <motion.p className="mt-4 text-xs text-neutral-500" variants={itemVariant}>
            &copy; {new Date().getFullYear()} Dubai Club. All Rights Reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

// Helper component for list items with a small leading icon (optional)
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <svg className="flex-shrink-0 h-6 w-6 text-yellow-400 mr-3 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>{children}</span>
  </li>
);

export default NewsletterPage;