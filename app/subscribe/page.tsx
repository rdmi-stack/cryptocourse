// app/subscribe/page.tsx
"use client"; // Required for useState and form handling

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Optional: for animations

// Define package structure
interface SubscriptionPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
}

// Available packages (add more as needed)
const availablePackages: SubscriptionPackage[] = [
  {
    id: '10x-alphas',
    name: '10X Alphas',
    price: '₹999',
    duration: '3 Months',
    description: 'High-growth potential, alpha returns strategy.'
  },
  // Example placeholder for another package
  // {
  //   id: 'real-kings',
  //   name: 'Real Kings',
  //   price: '₹899', // Example price
  //   duration: '3 Months',
  //   description: 'Low-risk, blue-chip stable income focus.'
  // },
   {
     id: 'coming-soon',
     name: 'More Portfolios',
     price: 'TBA',
     duration: '',
     description: 'Additional specialized portfolios coming soon!'
   },
];


const SubscribePage: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null); // Store selected package ID
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For submit button state

  // Styles
  const yellowColor = 'text-yellow-400';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowFocusRing = 'focus:ring-yellow-500';
  const yellowBorderColor = 'border-yellow-500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic Validations
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    if (!selectedPackage || selectedPackage === 'coming-soon') {
      setError('Please select a valid subscription package.');
      setLoading(false);
      return;
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms & Conditions and Privacy Policy.');
      setLoading(false);
      return;
    }

    // --- Placeholder for actual account creation & subscription logic ---
    console.log('Registration attempt with:', { name, email, password, selectedPackage });
    // Replace with your actual API call to register user and initiate subscription
    // This would likely involve:
    // 1. Calling your backend API to create the user account.
    // 2. If account creation is successful, potentially redirecting to a payment gateway
    //    (like Stripe Checkout, Razorpay, etc.) passing the selected plan details.
    // Example:
    // try {
    //   const response = await fetch('/api/register', { /* ... user details ... */ });
    //   if (response.ok) {
    //     // Redirect to payment or next step
    //     // window.location.href = `/checkout?package=${selectedPackage}`;
    //     alert('Account creation initiated (simulation)! Redirecting to payment...');
    //   } else {
    //     const data = await response.json();
    //     setError(data.message || 'Registration failed.');
    //   }
    // } catch (err) {
    //   setError('An error occurred during registration.');
    // } finally {
    //   setLoading(false);
    // }
    // --- End of Placeholder ---

    // Simulate delay and success/error for demonstration
    await new Promise(res => setTimeout(res, 1000));
    alert(`Account creation simulated for ${name} with package ${selectedPackage}!`);
    setLoading(false);
    // Potentially redirect here on actual success
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 py-12">
      <motion.div
        className="w-full max-w-lg bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl p-8 sm:p-10"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
           <Link href="/" legacyBehavior><a aria-label="Dubai Club Home"><Image src="/dubai-club-logo.png" alt="Dubai Club Logo" width={180} height={45} quality={95}/></a></Link>
        </div>

        <h2 className={`text-center text-3xl font-bold ${yellowColor} mb-2`}>
          Create Your Account
        </h2>
        <p className="text-center text-neutral-400 mb-8 text-sm">
          Join Dubai Club and select your starting portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Form Fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">Full Name</label>
            <input id="name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`} placeholder="Your Name"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">Email Address</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`} placeholder="you@example.com"/>
          </div>
          <div>
             <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
             <input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`} placeholder="••••••••"/>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-1.5">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`} placeholder="••••••••"/>
          </div>

          {/* Package Selection */}
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">Choose Your Subscription</h3>
            <div className="space-y-3">
              {availablePackages.map((pkg) => (
                <label
                  key={pkg.id}
                  htmlFor={pkg.id}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedPackage === pkg.id
                      ? `${yellowBorderColor} bg-yellow-900/20 ring-2 ring-yellow-500/50`
                      : 'border-gray-700 hover:border-gray-600 bg-gray-800/50'
                  } ${pkg.id === 'coming-soon' ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  <input
                    type="radio"
                    id={pkg.id}
                    name="subscriptionPackage"
                    value={pkg.id}
                    checked={selectedPackage === pkg.id}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-600 mr-3 disabled:opacity-50"
                    disabled={pkg.id === 'coming-soon'}
                  />
                  <div className="flex-grow">
                    <span className={`font-medium ${selectedPackage === pkg.id ? yellowColor : 'text-neutral-100'}`}>{pkg.name}</span>
                    <span className="block text-sm text-neutral-400">
                      {pkg.description} {pkg.duration && `(${pkg.price} / ${pkg.duration})`}
                    </span>
                  </div>
                  {pkg.price !== 'TBA' && (
                    <span className={`text-lg font-semibold ml-4 ${selectedPackage === pkg.id ? yellowColor : 'text-neutral-100'}`}>{pkg.price}</span>
                  )}
                </label>
              ))}
            </div>
          </div>

           {/* Terms Agreement */}
           <div className="flex items-start pt-2">
             <input
               id="terms"
               name="terms"
               type="checkbox"
               checked={agreedToTerms}
               onChange={(e) => setAgreedToTerms(e.target.checked)}
               className={`h-4 w-4 rounded border-gray-600 text-yellow-500 focus:ring-offset-gray-900 ${yellowFocusRing} mt-0.5`}
             />
             <div className="ml-3 text-sm">
               <label htmlFor="terms" className="text-neutral-400">
                 I agree to the{' '}
                 <Link href="/terms-conditions" legacyBehavior><a target="_blank" rel="noopener noreferrer" className="font-medium hover:underline text-yellow-500">Terms & Conditions</a></Link>
                 {' '}and{' '}
                 <Link href="/privacy-policy" legacyBehavior><a target="_blank" rel="noopener noreferrer" className="font-medium hover:underline text-yellow-500">Privacy Policy</a></Link>.
               </label>
             </div>
           </div>

           {/* Error Message Display */}
           {error && (
             <motion.p
               className="text-sm text-red-400 text-center bg-red-900/40 border border-red-700/60 rounded-md py-2 px-3"
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
             >
               {error}
             </motion.p>
           )}

           {/* Submit Button */}
           <motion.button
             type="submit"
             disabled={loading || !agreedToTerms} // Disable if loading or terms not agreed
             className={`w-full ${yellowBgColor} text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${yellowFocusRing} ${
               loading ? 'opacity-60 cursor-not-allowed' : `${yellowHoverBgColor} hover:shadow-yellow-500/30`
             }`}
             whileHover={{ scale: loading || !agreedToTerms ? 1 : 1.03 }}
             whileTap={{ scale: loading || !agreedToTerms ? 1 : 0.98 }}
           >
             {loading ? 'Processing...' : 'Create Account & Subscribe'}
           </motion.button>
        </form>

        {/* Link to Login */}
        <p className="mt-8 text-center text-sm text-neutral-400">
          Already have an account?{' '}
          <Link href="/login" legacyBehavior>
             <a className={`font-medium ${yellowColor} hover:underline`}>
               Login Here
             </a>
           </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SubscribePage;