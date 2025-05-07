// components/NewsletterSectionFinal.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image

// SVG Icon (Envelope)
const EnvelopeIcon = () => (
  <svg className="w-12 h-12 text-yellow-400 mb-6 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Content from PDF/Screenshots
const newsletterContent = {
  icon: <EnvelopeIcon />,
  headline: "Stay Ahead with Dubai Club & Get Insights the Secrets of the Ultra-Wealthy",
  description: "Free to Subscribe for weekly market analysis, portfolio updates, Al-driven crypto insights & ultra wealth secrets delivered directly to your inbox.",
  socialProof: "🤝 Join 10,000+ Smart Crypto Investors", // Emoji included
  whatYouGetTitle: "What you'll get",
  whatYouGet: [
    "Where Smart Money Discovers Its Next Move",
    "Get Elite Market Research. Real Wealth. No Noise",
    "The Hidden Strategies Behind Generational Wealth",
    "The Investment Edge They Don't Want You to Have"
  ],
  whatYouGetImage: "/images/newsletter.jpg", // Path to the image user will add
  privacyNote: "Your privacy matters. Unsubscribe anytime."
};

function NewsletterSectionFinal() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Theme colors
  const primaryTextColor = 'text-white';
  const secondaryTextColor = 'text-neutral-300'; // Slightly softer white for description
  const tertiaryTextColor = 'text-neutral-500'; // For privacy note
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const inputTextColor = 'text-black'; // Text inside input
  const inputPlaceholderColor = 'placeholder-gray-500';
  const buttonTextColor = 'text-black';
  const errorColor = 'text-red-400';
  const successColor = 'text-green-400';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    console.log("Subscribing with email:", email);
    await new Promise(res => setTimeout(res, 1000));
    if (email.includes('@') && email.includes('.')) {
      setMessage({ type: 'success', text: 'Subscription successful! Insights are on their way.' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
    setLoading(false);
  };

  return (
    <motion.section
      className="relative bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger a bit earlier
    >
      <div className="container mx-auto relative z-10">
        {/* Top Part: CTA */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <motion.div variants={itemVariant}>
            {newsletterContent.icon}
          </motion.div>
          <motion.h2
            className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold ${yellowColor} mb-4`}
            style={{ textShadow: '0 0 10px rgba(250, 204, 21, 0.2)' }}
            variants={itemVariant}
          >
            {newsletterContent.headline}
          </motion.h2>
          <motion.p className={`mt-3 text-base sm:text-lg ${secondaryTextColor} leading-relaxed`} variants={itemVariant}>
            {newsletterContent.description}
          </motion.p>

          <motion.form
            className="mt-8 sm:flex sm:justify-center max-w-md mx-auto"
            onSubmit={handleSubmit}
            variants={itemVariant}
          >
            <label htmlFor="newsletter-email-final" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-final"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full sm:flex-1 px-5 py-3 rounded-l-md border-0 ${inputTextColor} ${inputPlaceholderColor} bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset`}
              placeholder="your email" // Placeholder from screenshot
            />
            <motion.div
              className="mt-3 sm:mt-0 sm:flex-shrink-0"
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-r-md ${buttonTextColor} ${yellowBgColor} transition duration-150 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 ${
                  loading ? 'opacity-70 cursor-not-allowed' : `${yellowHoverBgColor} hover:shadow-md`
                }`}
              >
                {loading ? 'Processing...' : 'Get Insights'} {/* Button text from screenshot */}
              </button>
            </motion.div>
          </motion.form>

          <AnimatePresence>
            {message.text && (
              <motion.p
                key="message-final"
                className={`mt-4 text-sm font-medium ${message.type === 'success' ? successColor : errorColor}`}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {message.text}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.p className={`mt-6 text-sm ${primaryTextColor} font-medium`} variants={itemVariant}>
            {newsletterContent.socialProof}
          </motion.p>
        </div>

        {/* Bottom Part: "What you'll get" */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={sectionVariant} // This container can also animate as a whole
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div variants={itemVariant}>
              <h3 className={`text-2xl sm:text-3xl font-bold ${yellowColor} mb-6`}>
                {newsletterContent.whatYouGetTitle}
              </h3>
              <ul className="space-y-3">
                {newsletterContent.whatYouGet.map((item, index) => (
                  <motion.li key={index} className={`text-base sm:text-lg ${secondaryTextColor}`} variants={itemVariant}>
                    {/* Using a simple dash or custom styled bullet if needed */}
                    <span className={`${yellowColor} mr-2`}>&ndash;</span> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div className="relative aspect-video md:aspect-auto md:h-full w-full max-w-md mx-auto md:max-w-none" variants={itemVariant}>
              <Image
                src={newsletterContent.whatYouGetImage}
                alt="Dubai Club Insights Graphic"
                layout="fill"
                objectFit="contain" // Changed to contain to ensure full image visibility
                quality={85}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.p className={`mt-16 text-center text-xs ${tertiaryTextColor}`} variants={itemVariant}>
          {newsletterContent.privacyNote} Read our{' '}
          <Link href="/privacy-policy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={`underline ${yellowColor} hover:text-yellow-300 transition-colors duration-150`}>Privacy Policy</a>
          </Link>.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default NewsletterSectionFinal;