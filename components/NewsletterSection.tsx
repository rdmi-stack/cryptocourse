// components/NewsletterSectionLight.tsx
"use client"; // Needed for useState and Framer Motion

import React, { useState } from "react";
// CORRECTED: Added import for motion and AnimatePresence
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

// Animation Variants (same as before)
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


function NewsletterSectionLight() { // Renamed component for clarity
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Theme colors adjusted for light theme
  const primaryTextColor = 'text-gray-900'; // Dark text for headlines
  const secondaryTextColor = 'text-gray-600'; // Lighter dark text for paragraphs
  const tertiaryTextColor = 'text-gray-500'; // Even lighter for less emphasis
  const yellowBgColor = 'bg-yellow-500'; // Keep yellow button
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowFocusRing = 'focus:ring-yellow-500';
  const errorColor = 'text-red-600';
  const successColor = 'text-green-600';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // --- Placeholder signup logic (same as before) ---
    console.log("Subscribing with email:", email);
    await new Promise(res => setTimeout(res, 1000));
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
    // Apply light background (e.g., light gray)
    <motion.section
      className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" // Light gradient
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Optional: Subtle light background pattern */}
      {/* <div className="absolute inset-0 opacity-30 bg-[url('/path/to/light-pattern.svg')] bg-repeat"></div> */}

      <div className="max-w-xl mx-auto text-center relative z-10">
        <motion.h2
          // Apply serif font and dark color to headline
          className={`font-serif text-4xl sm:text-5xl font-bold ${primaryTextColor} mb-4`}
          variants={itemVariant}
        >
          Stay Ahead with Dubai Club Insights
        </motion.h2>
        <motion.p className={`mt-4 text-lg ${secondaryTextColor} leading-relaxed`} variants={itemVariant}>
           Subscribe for weekly market analysis, portfolio updates, and AI-driven crypto insights delivered to your inbox.
        </motion.p>

        {/* Form wrapped in a subtle card for structure */}
        <motion.div className="mt-10" variants={itemVariant}>
           <form
            className="relative sm:flex sm:justify-center"
            onSubmit={handleSubmit}
           >
             <label htmlFor="newsletter-email-address-light" className="sr-only">
               Email address
             </label>
             <input
               id="newsletter-email-address-light" // Unique ID if using multiple forms
               name="email"
               type="email"
               autoComplete="email"
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               // Light input styling
               className={`w-full sm:max-w-xs px-5 py-3.5 rounded-md bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200 shadow-sm`}
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
                 // Yellow button styling
                 className={`w-full flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-md text-black ${yellowBgColor} transition duration-150 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 ${yellowFocusRing} ${
                   loading ? 'opacity-70 cursor-not-allowed' : `${yellowHoverBgColor} hover:shadow-lg`
                 }`}
               >
                 {loading ? 'Subscribing...' : 'Get Insights'}
               </button>
             </motion.div>
           </form>
        </motion.div>


         {/* Success/Error Message Display - Adjusted for light theme */}
        <AnimatePresence>
          {message.text && (
            <motion.p
              key="message-light"
              className={`mt-4 text-sm font-medium ${message.type === 'success' ? successColor : errorColor}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {message.text}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Updated privacy notice with link - Adjusted text color */}
        <motion.p className={`mt-6 text-xs ${tertiaryTextColor}`} variants={itemVariant}>
          Your privacy matters. Read our{' '}
          <Link href="/privacy-policy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-800">Privacy Policy</a>
          </Link>
          . Unsubscribe anytime.
        </motion.p>
      </div>
    </motion.section>
  );
}

// Ensure component name matches export if you renamed it earlier
export default NewsletterSectionLight;