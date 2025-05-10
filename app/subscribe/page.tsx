// app/subscribe/page.tsx
"use client"; // Required for useState and form handling

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation'; // To read query parameters

// Define new package structures
interface PlanDetail {
  planId: string; // e.g., "3m", "12m"
  duration: string;
  price: string; // Total price for the duration
  pricePerMonth?: string; // e.g., "₹833/m" (for display)
  isBestValue?: boolean;
  savings?: string; // e.g., "Save 20%"
}

interface PortfolioSubscription {
  portfolioId: string; // e.g., "10x-alphas"
  portfolioName: string; // e.g., "10X Alphas"
  portfolioDescription: string; // General description of the portfolio
  plans: PlanDetail[];
  isComingSoon?: boolean;
  themeColor?: string; // Optional: for theming elements related to this portfolio
}

// Available portfolio offerings with multiple plans
const portfolioOfferingsData: PortfolioSubscription[] = [
  {
    portfolioId: '10x-alphas',
    portfolioName: '10X Alphas',
    portfolioDescription: 'High-growth potential, alpha returns strategy.',
    themeColor: 'yellow', // Matches existing theme
    plans: [
      { planId: '10x-3m', duration: '3 Months', price: '₹999', pricePerMonth: '₹333/month' },
      { planId: '10x-12m', duration: '12 Months', price: '₹2999', pricePerMonth: '₹250/month', isBestValue: true, savings: 'Save ~25%' },
    ]
  },
  {
    portfolioId: 'real-kings', // Example of another portfolio
    portfolioName: 'Real Kings',
    portfolioDescription: 'Focus on stable, blue-chip assets.',
    themeColor: 'blue', // Example different theme
    plans: [
      { planId: 'rk-3m', duration: '3 Months', price: '₹899', pricePerMonth: '₹300/month' },
      { planId: 'rk-12m', duration: '12 Months', price: '₹2699', pricePerMonth: '₹225/month', isBestValue: true, savings: 'Save ~25%' },
    ]
  },
  {
    portfolioId: 'gangwar', // Example for Gangwar
    portfolioName: 'GANGWAR',
    portfolioDescription: 'Aggressive momentum, high-risk/reward.',
    themeColor: 'red', // Example different theme
    plans: [
      { planId: 'gw-3m', duration: '3 Months', price: '₹1199', pricePerMonth: '₹400/month' },
      { planId: 'gw-12m', duration: '12 Months', price: '₹3599', pricePerMonth: '₹300/month', isBestValue: true, savings: 'Save ~25%' },
    ]
  },
  {
    portfolioId: 'coming-soon',
    portfolioName: 'More Portfolios',
    portfolioDescription: 'Additional specialized portfolios coming soon!',
    plans: [],
    isComingSoon: true,
  },
];


const SubscribePage: React.FC = () => {
  const searchParams = useSearchParams();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Initialize selectedPortfolioId from query param or default to first available
  const initialPortfolioId = searchParams.get('portfolio');
  const validInitialPortfolio = portfolioOfferingsData.find(p => p.portfolioId === initialPortfolioId && !p.isComingSoon);
  const defaultPortfolioId = validInitialPortfolio ? validInitialPortfolio.portfolioId : portfolioOfferingsData.find(p => !p.isComingSoon)?.portfolioId || null;

  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(defaultPortfolioId);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-select the first plan of the default/selected portfolio
  useEffect(() => {
    if (selectedPortfolioId) {
      const portfolio = portfolioOfferingsData.find(p => p.portfolioId === selectedPortfolioId);
      if (portfolio && portfolio.plans.length > 0) {
        setSelectedPlanId(portfolio.plans[0].planId); // Default to the first plan of the selected portfolio
      } else {
        setSelectedPlanId(null);
      }
    } else {
      setSelectedPlanId(null);
    }
  }, [selectedPortfolioId]);


  // Dynamic styles based on the selected portfolio's theme (defaulting to yellow)
  const currentPortfolioTheme = portfolioOfferingsData.find(p => p.portfolioId === selectedPortfolioId)?.themeColor || 'yellow';
  const accentColor = `text-${currentPortfolioTheme}-400`;
  const accentBgColor = `bg-${currentPortfolioTheme}-500`;
  const accentHoverBgColor = `hover:bg-${currentPortfolioTheme}-600`;
  const accentFocusRing = `focus:ring-${currentPortfolioTheme}-500`;
  const accentBorderColor = `border-${currentPortfolioTheme}-500`;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }
    if (!selectedPortfolioId || !selectedPlanId || selectedPortfolioId === 'coming-soon') {
      setError('Please select a valid portfolio and subscription plan.');
      setLoading(false);
      return;
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms & Conditions and Privacy Policy.');
      setLoading(false);
      return;
    }

    console.log('Registration attempt with:', { name, email, password, portfolio: selectedPortfolioId, plan: selectedPlanId });
    
    await new Promise(res => setTimeout(res, 1000)); // Simulate API call
    const selectedPortfolio = portfolioOfferingsData.find(p => p.portfolioId === selectedPortfolioId);
    const selectedPlanDetails = selectedPortfolio?.plans.find(p => p.planId === selectedPlanId);
    alert(`Account creation simulated for ${name} with package ${selectedPortfolio?.portfolioName} (${selectedPlanDetails?.duration})!`);
    setLoading(false);
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 py-12">
      <motion.div
        className="w-full max-w-xl bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl p-8 sm:p-10"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-6">
           <Link href="/" legacyBehavior><a aria-label="Dubai Club Home"><Image src="/dubaiclublogo.png" alt="Dubai Club Logo" width={180} height={45} quality={95}/></a></Link>
        </div>

        <h2 className={`text-center text-3xl font-bold ${accentColor} mb-2`}>
          Create Your Account
        </h2>
        <p className="text-center text-neutral-400 mb-8 text-sm">
          Join Dubai Club and select your starting portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">Full Name</label>
            <input id="name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing} focus:border-transparent transition duration-200`} placeholder="Your Name"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">Email Address</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing} focus:border-transparent transition duration-200`} placeholder="you@example.com"/>
          </div>
          <div>
             <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
             <input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing} focus:border-transparent transition duration-200`} placeholder="••••••••"/>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-1.5">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing} focus:border-transparent transition duration-200`} placeholder="••••••••"/>
          </div>

          <div className="pt-2">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">Choose Your Subscription</h3>
            <div className="space-y-4">
              {portfolioOfferingsData.map((portfolio) => {
                if (portfolio.isComingSoon) {
                  return (
                    <div key={portfolio.portfolioId} className="flex items-center p-4 rounded-lg border border-gray-700 bg-gray-800/50 opacity-60 cursor-not-allowed">
                      <input type="radio" id={`portfolio-${portfolio.portfolioId}`} name="portfolioSelection" value={portfolio.portfolioId} disabled className="h-4 w-4 text-gray-500 border-gray-600 mr-3" />
                      <div>
                        <span className="font-medium text-neutral-100">{portfolio.portfolioName}</span>
                        <span className="block text-sm text-neutral-400">{portfolio.portfolioDescription}</span>
                      </div>
                    </div>
                  );
                }

                const isCurrentPortfolioSelected = selectedPortfolioId === portfolio.portfolioId;

                return (
                  <div key={portfolio.portfolioId} className={`rounded-lg border transition-all duration-200 ${isCurrentPortfolioSelected ? `${accentBorderColor} bg-gray-800/30 shadow-md` : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'}`}>
                    <label // Make the whole portfolio header clickable to select the portfolio
                      htmlFor={`portfolio-select-${portfolio.portfolioId}`} // Unique ID for hidden radio
                      className="flex justify-between items-center p-4 cursor-pointer"
                    >
                      <div>
                        <h4 className={`text-md font-semibold ${isCurrentPortfolioSelected ? accentColor : 'text-neutral-100'}`}>
                          {portfolio.portfolioName}
                        </h4>
                        <p className="text-sm text-neutral-400 mt-0.5">{portfolio.portfolioDescription}</p>
                      </div>
                       <input // Hidden radio to control portfolio selection block
                        type="radio"
                        id={`portfolio-select-${portfolio.portfolioId}`}
                        name="portfolioSelection" // Common name for portfolio selection group
                        value={portfolio.portfolioId}
                        checked={isCurrentPortfolioSelected}
                        onChange={() => {
                            setSelectedPortfolioId(portfolio.portfolioId);
                            // Auto-select first plan of newly selected portfolio if not already set
                            if (portfolio.plans.length > 0) {
                                setSelectedPlanId(portfolio.plans[0].planId);
                            } else {
                                setSelectedPlanId(null);
                            }
                        }}
                        className="sr-only" // Hidden, selection handled by label click
                      />
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isCurrentPortfolioSelected ? accentBorderColor : 'border-gray-600'}`}>
                        {isCurrentPortfolioSelected && <span className={`w-2.5 h-2.5 rounded-full ${accentBgColor}`}></span>}
                      </span>
                    </label>

                    {isCurrentPortfolioSelected && (
                      <motion.div
                        className="space-y-2 px-4 pb-4 pt-2 border-t border-gray-700/50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {portfolio.plans.map((plan) => (
                          <label
                            key={plan.planId}
                            htmlFor={`${portfolio.portfolioId}-${plan.planId}`}
                            className={`flex justify-between items-center p-3 rounded-md border-2 cursor-pointer transition-all duration-200 relative
                              ${selectedPlanId === plan.planId ? `${accentBorderColor} bg-${portfolio.themeColor || 'yellow'}-900/30 ring-1 ring-${portfolio.themeColor || 'yellow'}-500/40` : `border-gray-600 hover:border-${portfolio.themeColor || 'yellow'}-500/70 bg-gray-700/40 hover:bg-gray-700/70`}`}
                          >
                            {plan.isBestValue && (
                                <span className="absolute -top-2.5 -right-2.5 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full leading-none transform shadow-lg">Best Value</span>
                            )}
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`${portfolio.portfolioId}-${plan.planId}`}
                                name={`planFor-${portfolio.portfolioId}`}
                                value={plan.planId}
                                checked={selectedPlanId === plan.planId}
                                onChange={() => setSelectedPlanId(plan.planId)}
                                className={`h-4 w-4 text-${portfolio.themeColor || 'yellow'}-500 focus:ring-${portfolio.themeColor || 'yellow'}-400 border-gray-500 mr-3`}
                              />
                              <div>
                                <span className={`font-medium ${selectedPlanId === plan.planId ? accentColor : 'text-neutral-200'}`}>
                                  {plan.duration}
                                </span>
                                {plan.pricePerMonth && (
                                  <span className="block text-xs text-neutral-400">{plan.pricePerMonth}</span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`font-semibold ${selectedPlanId === plan.planId ? accentColor : 'text-neutral-100'}`}>
                                {plan.price}
                              </span>
                              {plan.savings && selectedPlanId === plan.planId && (
                                <span className={`block text-xs text-${portfolio.themeColor || 'yellow'}-400 mt-0.5`}>{plan.savings}</span>
                              )}
                            </div>
                          </label>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

           <div className="flex items-start pt-2">
             <input id="terms" name="terms" type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className={`h-4 w-4 rounded border-gray-600 text-${currentPortfolioTheme}-500 focus:ring-offset-gray-900 ${accentFocusRing} mt-0.5`} />
             <div className="ml-3 text-sm">
               <label htmlFor="terms" className="text-neutral-400">
                 I agree to the{' '}
                 <Link href="/terms-conditions" legacyBehavior><a target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline text-${currentPortfolioTheme}-500`}>Terms & Conditions</a></Link>
                 {' '}and{' '}
                 <Link href="/privacy-policy" legacyBehavior><a target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline text-${currentPortfolioTheme}-500`}>Privacy Policy</a></Link>.
               </label>
             </div>
           </div>

           {error && (
             <motion.p className="text-sm text-red-400 text-center bg-red-900/40 border border-red-700/60 rounded-md py-2 px-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
               {error}
             </motion.p>
           )}

           <motion.button
             type="submit"
             disabled={loading || !agreedToTerms || !selectedPlanId}
             className={`w-full ${accentBgColor} text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${accentFocusRing} ${
               (loading || !agreedToTerms || !selectedPlanId) ? 'opacity-60 cursor-not-allowed' : `${accentHoverBgColor} hover:shadow-${currentPortfolioTheme}-500/30`
             }`}
             whileHover={{ scale: (loading || !agreedToTerms || !selectedPlanId) ? 1 : 1.03 }}
             whileTap={{ scale: (loading || !agreedToTerms || !selectedPlanId) ? 1 : 0.98 }}
           >
             {loading ? 'Processing...' : 'Create Account & Subscribe'}
           </motion.button>
        </form>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Already have an account?{' '}
          <Link href="/login" legacyBehavior>
             <a className={`font-medium ${accentColor} hover:underline`}>
               Login Here
             </a>
           </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SubscribePage;