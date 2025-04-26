"use client"; // Needed because we're using useState

import React, { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement your actual newsletter signup logic here
    // e.g., send the email to your API route or mailing list service
    console.log("Subscribing with email:", email);
    // You might want to add success/error/loading states here
    // setEmail(''); // Optionally clear input after submission
  };

  return (
    // Using the custom dark blue from previous step, adjust hex if needed
    <section className="bg-[#1a202c] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Unlock Crypto Knowledge Weekly
        </h2>
        <p className="mt-4 text-lg text-indigo-200">
          Subscribe for course updates, market analysis, and crypto learning
          tips.
        </p>
        <form
          className="mt-10 sm:flex sm:justify-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md shadow-sm sm:max-w-xs text-gray-900" // Added text color
            placeholder="Your Email Address"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              // Using cyan color consistent with some crypto themes
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a202c] focus:ring-cyan-500 transition duration-150 ease-in-out"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
        {/* Optional: Add privacy notice */}
        <p className="mt-6 text-xs text-indigo-200/80">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

export default NewsletterSection;
