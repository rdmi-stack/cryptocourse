// app/subscribe/page.tsx
"use client"; // Required for useState and form handling

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation"; // To read query parameters

/* --------------------------------------------------------------------------
   DATA MODELS
---------------------------------------------------------------------------*/
interface PlanDetail {
  planId: string;          // e.g. "10x-3m"
  duration: string;        // e.g. "3 Months"
  price: string;           // e.g. "₹1 999"
  pricePerMonth?: string;  // e.g. "₹667 / month"
  isBestValue?: boolean;   // flag for “Best Value” badge
  savings?: string;        // e.g. "Save 25 %"
}

interface PortfolioSubscription {
  portfolioId: string;     // slug, e.g. "10x-alphas"
  portfolioName: string;   // display name
  portfolioDescription: string;
  plans: PlanDetail[];
  isComingSoon?: boolean;
  themeColor?: string;     // Tailwind colour name (e.g. "yellow", "blue")
}

/* --------------------------------------------------------------------------
   PORTFOLIO OFFERINGS  (UPDATED)
---------------------------------------------------------------------------*/
const portfolioOfferingsData: PortfolioSubscription[] = [
  {
    portfolioId: "10x-alphas",
    portfolioName: "10X Alphas",
    portfolioDescription: "High-growth potential, alpha-returns strategy.",
    themeColor: "yellow",
    plans: [
      {
        planId: "10x-3m",
        duration: "3 Months",
        price: "₹1 999",
        pricePerMonth: "≈ ₹667 / month",
      },
      {
        planId: "10x-6m",
        duration: "6 Months",
        price: "₹3 399",
        pricePerMonth: "≈ ₹567 / month",
        savings: "Save 15 %",
      },
      {
        planId: "10x-12m",
        duration: "12 Months",
        price: "₹5 999",
        pricePerMonth: "≈ ₹500 / month",
        isBestValue: true,
        savings: "Save 25 %",
      },
    ],
  },

  {
    portfolioId: "real-kings",
    portfolioName: "Real Kings",
    portfolioDescription: "Focus on stable, blue-chip assets.",
    themeColor: "blue",
    plans: [
      {
        planId: "rk-3m",
        duration: "3 Months",
        price: "₹ 999",
        pricePerMonth: "₹333 / month",
      },
      {
        planId: "rk-6m",
        duration: "6 Months",
        price: "₹1 699",
        pricePerMonth: "≈ ₹283 / month",
        savings: "Save 15 %",
      },
      {
        planId: "rk-12m",
        duration: "12 Months",
        price: "₹2 999",
        pricePerMonth: "≈ ₹250 / month",
        isBestValue: true,
        savings: "Save 25 %",
      },
    ],
  },

  {
    portfolioId: "gangwar",
    portfolioName: "GANGWAR",
    portfolioDescription: "Aggressive momentum, high-risk / high-reward.",
    themeColor: "red",
    plans: [
      {
        planId: "gw-3m",
        duration: "3 Months",
        price: "₹2 999",
        pricePerMonth: "₹1 000 / month",
      },
      {
        planId: "gw-6m",
        duration: "6 Months",
        price: "₹4 999",
        pricePerMonth: "≈ ₹833 / month",
        savings: "Save 15 %",
      },
      {
        planId: "gw-12m",
        duration: "12 Months",
        price: "₹8 999",
        pricePerMonth: "₹750 / month",
        isBestValue: true,
        savings: "Save 25 %",
      },
    ],
  },

  {
    portfolioId: "sky-breakers",
    portfolioName: "Sky Breakers",
    portfolioDescription: "Balanced growth with defensive hedges.",
    themeColor: "sky",
    plans: [
      {
        planId: "sb-3m",
        duration: "3 Months",
        price: "₹2 499",
        pricePerMonth: "₹833 / month",
      },
      {
        planId: "sb-6m",
        duration: "6 Months",
        price: "₹4 249",
        pricePerMonth: "≈ ₹708 / month",
        savings: "Save 15 %",
      },
      {
        planId: "sb-12m",
        duration: "12 Months",
        price: "₹7 499",
        pricePerMonth: "≈ ₹625 / month",
        isBestValue: true,
        savings: "Save 25 %",
      },
    ],
  },

  // Placeholder for future offerings
  {
    portfolioId: "coming-soon",
    portfolioName: "More Portfolios",
    portfolioDescription: "Additional specialised portfolios coming soon!",
    plans: [],
    isComingSoon: true,
  },
];

/* --------------------------------------------------------------------------
   COMPONENT
---------------------------------------------------------------------------*/
const SubscribePage: React.FC = () => {
  const searchParams = useSearchParams();

  /* -------------------- Form State -------------------- */
  const [name, setName]                   = useState("");
  const [email, setEmail]                 = useState("");
  const [password, setPassword]           = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* -------------------- Plan Selection -------------------- */
  const initialPortfolioId      = searchParams.get("portfolio");
  const validInitialPortfolio   = portfolioOfferingsData.find(
    (p) => p.portfolioId === initialPortfolioId && !p.isComingSoon
  );
  const defaultPortfolioId      =
    validInitialPortfolio?.portfolioId ||
    portfolioOfferingsData.find((p) => !p.isComingSoon)?.portfolioId ||
    null;

  const [selectedPortfolioId, setSelectedPortfolioId] = useState<string | null>(
    defaultPortfolioId
  );
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError]                 = useState("");
  const [loading, setLoading]             = useState(false);

  /* Auto-select first plan whenever portfolio changes */
  useEffect(() => {
    if (selectedPortfolioId) {
      const portfolio = portfolioOfferingsData.find(
        (p) => p.portfolioId === selectedPortfolioId
      );
      setSelectedPlanId(portfolio?.plans[0]?.planId ?? null);
    } else {
      setSelectedPlanId(null);
    }
  }, [selectedPortfolioId]);

  /* -------------------- Theme Helpers -------------------- */
  const currentTheme             =
    portfolioOfferingsData.find((p) => p.portfolioId === selectedPortfolioId)
      ?.themeColor || "yellow";
  const accentColor        = `text-${currentTheme}-400`;
  const accentBgColor      = `bg-${currentTheme}-500`;
  const accentHoverBgColor = `hover:bg-${currentTheme}-600`;
  const accentFocusRing    = `focus:ring-${currentTheme}-500`;
  const accentBorderColor  = `border-${currentTheme}-500`;

  /* -------------------- Submit Handler -------------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
    if (
      !selectedPortfolioId ||
      !selectedPlanId ||
      selectedPortfolioId === "coming-soon"
    ) {
      setError("Please select a valid portfolio and subscription plan.");
      setLoading(false);
      return;
    }
    if (!agreedToTerms) {
      setError("You must agree to the Terms & Conditions and Privacy Policy.");
      setLoading(false);
      return;
    }

    console.log("Registration attempt:", {
      name,
      email,
      password,
      portfolio: selectedPortfolioId,
      plan: selectedPlanId,
    });

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    const selPortfolio = portfolioOfferingsData.find(
      (p) => p.portfolioId === selectedPortfolioId
    );
    const selPlan      = selPortfolio?.plans.find(
      (pl) => pl.planId === selectedPlanId
    );
    alert(
      `Account created for ${name} • ${selPortfolio?.portfolioName} • ${selPlan?.duration}`
    );
    setLoading(false);
  };

  /* -------------------- Animation Variants -------------------- */
  const formVariants = {
    hidden:  { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  /* ----------------------------------------------------------------
     RENDER
  -----------------------------------------------------------------*/
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black px-4 py-12">
      <motion.div
        className="w-full max-w-xl bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl p-8 sm:p-10"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo ---------------------------------------------------- */}
        <div className="flex justify-center mb-6">
          <Link href="/" legacyBehavior>
            <a aria-label="Dubai Club Home">
              <Image
                src="/dubaiclublogo.png"
                alt="Dubai Club Logo"
                width={180}
                height={45}
                quality={95}
              />
            </a>
          </Link>
        </div>

        {/* Heading ------------------------------------------------- */}
        <h2 className={`text-center text-3xl font-bold ${accentColor} mb-2`}>
          Create Your Account
        </h2>
        <p className="text-center text-neutral-400 mb-8 text-sm">
          Join Dubai Club and select your starting portfolio.
        </p>

        {/* ---------------------------------------------------------
           REGISTRATION FORM
        ----------------------------------------------------------*/}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing}`}
            />
          </div>

          {/* Email */}
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
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing}`}
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing}`}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-neutral-300 mb-1.5"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 rounded-md bg-gray-800/70 border border-gray-700 text-neutral-100 placeholder-gray-500 focus:outline-none focus:ring-2 ${accentFocusRing}`}
            />
          </div>

          {/* -------------------------------------------------------
             PORTFOLIO & PLAN SELECTION
          --------------------------------------------------------*/}
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-neutral-100 mb-3">
              Choose Your Subscription
            </h3>

            <div className="space-y-4">
              {portfolioOfferingsData.map((portfolio) => {
                /* ---------- Coming Soon ---------- */
                if (portfolio.isComingSoon) {
                  return (
                    <div
                      key={portfolio.portfolioId}
                      className="flex items-center p-4 rounded-lg border border-gray-700 bg-gray-800/50 opacity-60 cursor-not-allowed"
                    >
                      <input
                        type="radio"
                        disabled
                        className="h-4 w-4 text-gray-500 border-gray-600 mr-3"
                      />
                      <div>
                        <span className="font-medium text-neutral-100">
                          {portfolio.portfolioName}
                        </span>
                        <span className="block text-sm text-neutral-400">
                          {portfolio.portfolioDescription}
                        </span>
                      </div>
                    </div>
                  );
                }

                /* ---------- Active Portfolio ---------- */
                const isCurrent = selectedPortfolioId === portfolio.portfolioId;

                return (
                  <div
                    key={portfolio.portfolioId}
                    className={`rounded-lg border transition-all duration-200 ${
                      isCurrent
                        ? `${accentBorderColor} bg-gray-800/30 shadow-md`
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    }`}
                  >
                    {/* Portfolio Header (radio + text) */}
                    <label
                      htmlFor={`portfolio-${portfolio.portfolioId}`}
                      className="flex justify-between items-center p-4 cursor-pointer"
                    >
                      <div>
                        <h4
                          className={`text-md font-semibold ${
                            isCurrent ? accentColor : "text-neutral-100"
                          }`}
                        >
                          {portfolio.portfolioName}
                        </h4>
                        <p className="text-sm text-neutral-400 mt-0.5">
                          {portfolio.portfolioDescription}
                        </p>
                      </div>

                      <input
                        type="radio"
                        id={`portfolio-${portfolio.portfolioId}`}
                        name="portfolioSelection"
                        value={portfolio.portfolioId}
                        checked={isCurrent}
                        onChange={() => setSelectedPortfolioId(portfolio.portfolioId)}
                        className="sr-only"
                      />

                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isCurrent ? accentBorderColor : "border-gray-600"
                        }`}
                      >
                        {isCurrent && (
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${accentBgColor}`}
                          ></span>
                        )}
                      </span>
                    </label>

                    {/* Plans (only when portfolio expanded) */}
                    {isCurrent && (
                      <motion.div
                        className="space-y-2 px-4 pb-4 pt-2 border-t border-gray-700/50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {portfolio.plans.map((plan) => (
                          <label
                            key={plan.planId}
                            htmlFor={plan.planId}
                            className={`flex justify-between items-center p-3 rounded-md border-2 cursor-pointer transition-all duration-200 relative ${
                              selectedPlanId === plan.planId
                                ? `${accentBorderColor} bg-${portfolio.themeColor}-900/30 ring-1 ring-${portfolio.themeColor}-500/40`
                                : `border-gray-600 hover:border-${portfolio.themeColor}-500/70 bg-gray-700/40 hover:bg-gray-700/70`
                            }`}
                          >
                            {/* Best Value badge */}
                            {plan.isBestValue && (
                              <span className="absolute -top-2.5 -right-2.5 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full shadow-lg">
                                Best Value
                              </span>
                            )}

                            {/* Radio + plan info */}
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={plan.planId}
                                name={`planFor-${portfolio.portfolioId}`}
                                value={plan.planId}
                                checked={selectedPlanId === plan.planId}
                                onChange={() => setSelectedPlanId(plan.planId)}
                                className={`h-4 w-4 text-${portfolio.themeColor}-500 border-gray-500 mr-3 focus:ring-${portfolio.themeColor}-400`}
                              />
                              <div>
                                <span
                                  className={`font-medium ${
                                    selectedPlanId === plan.planId
                                      ? accentColor
                                      : "text-neutral-200"
                                  }`}
                                >
                                  {plan.duration}
                                </span>
                                {plan.pricePerMonth && (
                                  <span className="block text-xs text-neutral-400">
                                    {plan.pricePerMonth}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Price + savings */}
                            <div className="text-right">
                              <span
                                className={`font-semibold ${
                                  selectedPlanId === plan.planId
                                    ? accentColor
                                    : "text-neutral-100"
                                }`}
                              >
                                {plan.price}
                              </span>
                              {plan.savings && selectedPlanId === plan.planId && (
                                <span
                                  className={`block text-xs text-${portfolio.themeColor}-400 mt-0.5`}
                                >
                                  {plan.savings}
                                </span>
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

          {/* Terms & conditions checkbox */}
          <div className="flex items-start pt-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className={`h-4 w-4 rounded border-gray-600 text-${currentTheme}-500 ${accentFocusRing} mt-0.5`}
            />
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-neutral-400">
                I agree to the{" "}
                <Link href="/terms-conditions" legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:underline text-${currentTheme}-500`}
                  >
                    Terms & Conditions
                  </a>
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium hover:underline text-${currentTheme}-500`}
                  >
                    Privacy Policy
                  </a>
                </Link>
                .
              </label>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <motion.p
              className="text-sm text-red-400 text-center bg-red-900/40 border border-red-700/60 rounded-md py-2 px-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={loading || !agreedToTerms || !selectedPlanId}
            className={`w-full ${accentBgColor} text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${accentFocusRing} ${
              loading || !agreedToTerms || !selectedPlanId
                ? "opacity-60 cursor-not-allowed"
                : `${accentHoverBgColor} hover:shadow-${currentTheme}-500/30`
            }`}
            whileHover={{
              scale: loading || !agreedToTerms || !selectedPlanId ? 1 : 1.03,
            }}
            whileTap={{
              scale: loading || !agreedToTerms || !selectedPlanId ? 1 : 0.98,
            }}
          >
            {loading ? "Processing…" : "Create Account & Subscribe"}
          </motion.button>
        </form>

        {/* Footer link to login */}
        <p className="mt-8 text-center text-sm text-neutral-400">
          Already have an account?{" "}
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
