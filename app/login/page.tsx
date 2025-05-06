// app/login/page.tsx
"use client"; // Required for useState and form handling

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Optional: for animations

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To display login errors

  // Styles (consistent with theme)
  const yellowColor = 'text-white';
  const yellowBgColor = 'bg-yellow-500';
  const yellowHoverBgColor = 'hover:bg-yellow-600';
  const yellowFocusRing = 'focus:ring-yellow-500';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // --- Placeholder for actual login logic ---
    console.log('Login attempt with:', { email, password });
    // Replace with your actual API call to authenticate the user
    // Example:
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Handle successful login (e.g., redirect, save token)
    //     console.log('Login successful:', data);
    //     // router.push('/dashboard'); // Example redirect
    //   } else {
    //     setError(data.message || 'Login failed. Please check your credentials.');
    //   }
    // } catch (err) {
    //   setError('An error occurred. Please try again.');
    //   console.error('Login error:', err);
    // }
    // --- End of Placeholder ---

    // Simulate error for demonstration if needed
    if (email !== 'test@example.com' || password !== 'password') {
       setError('Invalid email or password.'); // Example error
     } else {
       alert('Simulated Login Success!'); // Example success
     }
  };

  // Animation variants (optional)
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 py-12">
      <motion.div
        className="w-full max-w-md bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl p-8 sm:p-10"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" legacyBehavior>
            <a aria-label="Dubai Club Home">
              <Image
                src="/dubaiclublogo.png" // Path to your logo
                alt="Dubai Club Logo"
                width={180}
                height={45}
                quality={95}
              />
            </a>
          </Link>
        </div>

        <h2 className={`text-center text-3xl font-bold ${yellowColor} mb-2`}>
          Welcome Back
        </h2>
        <p className="text-center text-neutral-400 mb-8 text-sm">
          Sign in to access your portfolio insights.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`}
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
             <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-300"
                >
                  Password
                </label>
                <Link href="/forgot-password" legacyBehavior>
                   <a className={`text-xs ${yellowColor} hover:underline`}>
                     Forgot password?
                   </a>
                 </Link>
              </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${yellowFocusRing} focus:border-transparent transition duration-200`}
              placeholder="••••••••"
            />
          </div>

          {/* Error Message Display */}
           {error && (
             <motion.p
               className="text-sm text-red-500 text-center bg-red-900/30 border border-red-700/50 rounded-md py-2 px-3"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
               {error}
             </motion.p>
           )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full ${yellowBgColor} ${yellowHoverBgColor} text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out shadow-md hover:shadow-yellow-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${yellowFocusRing}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </form>

        {/* Link to Subscribe/Sign Up */}
        <p className="mt-8 text-center text-sm text-neutral-400">
          Don't have an account?{' '}
          <Link href="/subscribe" legacyBehavior>
             {/* Adjust href to your signup/subscription page */}
             <a className={`font-medium ${yellowColor} hover:underline`}>
               Subscribe Now
             </a>
           </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;