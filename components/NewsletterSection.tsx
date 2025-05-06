// components/NewsletterSectionDarkBlue.tsx
"use client"; // Needed for useState and Framer Motion

import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

// Animation Variants (retained from original)
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
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

// Renamed component to reflect the new dark blue theme
function NewsletterSectionDarkBlue() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Theme colors adjusted for dark blue gradient theme
  const primaryTextColor = 'text-white'; // Light text for headlines on dark bg
  const secondaryTextColor = 'text-blue-200'; // Softer light blue for paragraphs
  const tertiaryTextColor = 'text-gray-400'; // Subtle gray for less emphasis

  const yellowBgColor = 'bg-yellow-500'; // Kept yellow button for strong CTA
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowFocusRing = 'focus:ring-yellow-500'; // Kept yellow focus ring

  const inputBgColor = 'bg-slate-800/80'; // Semi-transparent dark bg for input
  const inputBorderColor = 'border-slate-700';
  const inputText = 'text-gray-100';
  const inputPlaceholder = 'placeholder-gray-500';
  const inputFocusBorderColor = 'focus:border-yellow-600'; // Match focus ring theme

  const buttonTextColor = 'text-black'; // Contrast for yellow button
  const buttonFocusRingOffset = 'focus:ring-offset-slate-900'; // Offset matches dark bg

  const errorColor = 'text-red-400'; // Lighter red for dark bg
  const successColor = 'text-green-400'; // Lighter green for dark bg

  const linkColor = 'text-yellow-400'; // Link color to match CTA
  const linkHoverColor = 'hover:text-yellow-300';


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // --- Placeholder signup logic (same as before) ---
    console.log("Subscribing with email:", email);
    await new Promise(res => setTimeout(res, 1000)); // Simulate API call
    if (email.includes('@') && email.includes('.')) { // Basic validation
      setMessage({ type: 'success', text: 'Subscription successful! Check your inbox.' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
    setLoading(false);
    // --- End Placeholder ---
  };

  return (
    <motion.section
      // Dark blue gradient background
      className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // amount: 0.2 makes it trigger a bit earlier
    >
      {/* Optional: Subtle dark background pattern or elements */}
      {/* Example: <div className="absolute inset-0 opacity-5 bg-[url('/path/to/dark-geometric-pattern.svg')] bg-repeat"></div> */}
      {/* Example: Moving cosmic dust effect (more complex, would require additional libraries) */}

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.h2
          className={`font-serif text-4xl sm:text-5xl font-bold ${primaryTextColor} mb-4`}
          style={{ textShadow: '0 2px 15px rgba(250, 204, 21, 0.1)' }} // Subtle yellow glow for headline
          variants={itemVariant}
        >
          Stay Ahead with Dubai Club Insights
        </motion.h2>
        <motion.p className={`mt-4 text-lg ${secondaryTextColor} leading-relaxed`} variants={itemVariant}>
           Subscribe for weekly market analysis, portfolio updates, and AI-driven crypto insights delivered to your inbox.
        </motion.p>

        <motion.div className="mt-10" variants={itemVariant}>
           <form
            className="relative sm:flex sm:justify-center"
            onSubmit={handleSubmit}
           >
             <label htmlFor="newsletter-email-address-dark" className="sr-only">
               Email address
             </label>
             <input
               id="newsletter-email-address-dark" // Unique ID for this form
               name="email"
               type="email"
               autoComplete="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className={`w-full sm:max-w-xs px-5 py-3.5 rounded-md ${inputBgColor} ${inputBorderColor} ${inputText} ${inputPlaceholder} focus:outline-none focus:ring-2 ${yellowFocusRing} ${inputFocusBorderColor} transition duration-200 shadow-md hover:border-slate-600`}
               placeholder="Your Email Address"
             />
             <motion.div
               className="mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:flex-shrink-0"
               whileHover={{ scale: loading ? 1 : 1.05 }}
               whileTap={{ scale: loading ? 1 : 0.98 }}
             >
               <button
                 type="submit"
                 disabled={loading}
                 className={`w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-md ${buttonTextColor} ${yellowBgColor} transition duration-150 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonFocusRingOffset} ${yellowFocusRing} ${
                   loading ? 'opacity-70 cursor-not-allowed' : `${yellowHoverBgColor} hover:shadow-yellow-500/40`
                 }`}
               >
                 {loading ? 'Subscribing...' : 'Get Insights'}
               </button>
             </motion.div>
           </form>
        </motion.div>

        <AnimatePresence>
          {message.text && (
            <motion.p
              key="message-dark" // Unique key for dark theme message
              className={`mt-4 text-sm font-medium ${message.type === 'success' ? successColor : errorColor}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {message.text}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.p className={`mt-6 text-xs ${tertiaryTextColor}`} variants={itemVariant}>
          Your privacy matters. Read our{' '}
          <Link href="/privacy-policy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={`underline ${linkColor} ${linkHoverColor} transition-colors duration-150`}>Privacy Policy</a>
          </Link>
          . Unsubscribe anytime.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default NewsletterSectionDarkBlue; // Export with the new name