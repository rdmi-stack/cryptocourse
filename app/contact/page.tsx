// contact/page.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // This import is not used in the provided code snippet
import Link from 'next/link';

// Animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// SVG for torn paper effect
const TornPaperClipPath: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <clipPath id="contactTornEffect" clipPathUnits="objectBoundingBox">
        <path d="
          M0.005,0.005 L0.03,0.000 L0.06,0.005 L0.09,0.000 L0.12,0.007
          L0.15,0.002 L0.18,0.008 L0.21,0.003 L0.24,0.009 L0.27,0.001
          L0.30,0.007 L0.33,0.003 L0.36,0.008 L0.39,0.002 L0.42,0.009
          L0.45,0.003 L0.48,0.007 L0.51,0.002 L0.54,0.008 L0.57,0.003
          L0.60,0.009 L0.63,0.001 L0.66,0.007 L0.69,0.003 L0.72,0.008
          L0.75,0.002 L0.78,0.007 L0.81,0.003 L0.84,0.009 L0.87,0.002
          L0.90,0.007 L0.93,0.003 L0.96,0.008 L0.995,0.003

          L0.998,0.25 L0.993,0.40 L0.998,0.60 L0.994,0.75

          L0.995,0.995 L0.96,0.992 L0.93,0.997 L0.90,0.993
          L0.87,0.998 L0.84,0.991 L0.81,0.997 L0.78,0.992 L0.75,0.998
          L0.72,0.993 L0.69,0.997 L0.66,0.992 L0.63,0.998 L0.60,0.991
          L0.57,0.997 L0.54,0.992 L0.51,0.998 L0.48,0.993 L0.45,0.997
          L0.42,0.992 L0.39,0.998 L0.36,0.991 L0.33,0.997 L0.30,0.992
          L0.27,0.998 L0.24,0.993 L0.21,0.997 L0.18,0.992 L0.15,0.998
          L0.12,0.991 L0.09,0.997 L0.06,0.992 L0.03,0.998 L0.005,0.992

          L0.002,0.75 L0.007,0.60 L0.002,0.40 L0.007,0.25
          Z
        " />
      </clipPath>
    </defs>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulating form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus('success');

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return ( // Corrected this line: removed the extra '>'
    <motion.main
      className="min-h-screen bg-black text-neutral-100"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <TornPaperClipPath />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-400" style={{ textShadow: '0 0 15px rgba(234, 179, 8, 0.4)' }}>
              GET IN TOUCH
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-300">
              Ready to dominate the market? Let's connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Column - Contact Form */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 shadow-xl"
                style={{ clipPath: 'url(#contactTornEffect)' }}
              >
                <h2 className="text-3xl font-bold mb-8 text-yellow-400">Send Us A Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-neutral-300 mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-neutral-300 mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label htmlFor="subject" className="block text-neutral-300 mb-2 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="portfolio">Portfolio Consultation</option>
                      <option value="DubaiClub">Crypto Investment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-neutral-300 mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us what you need..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shimmer relative inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-yellow-500/40 overflow-hidden w-full sm:w-auto"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                      <div className="button-shimmer"></div>
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <p className="mt-4 text-green-400">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-400">
                        There was an error sending your message. Please try again.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right Column - Contact Information */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 shadow-xl relative overflow-hidden h-full"
                style={{ clipPath: 'url(#contactTornEffect)' }}
              >
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-8 text-yellow-400">Contact Information</h2>

                  <div className="space-y-8">
                    {/* Email Contact */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500 p-3 rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-100">Email Us</h3>
                        <p className="text-neutral-300 mt-1">contact@dubaiclub.com</p>
                        <p className="text-neutral-400 text-sm mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    {/* Phone Contact */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-yellow-500 p-3 rounded-md text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-100">Call Us</h3>
                      <p className="text-neutral-300 mt-1">+91 95711 31337</p>
<p className="text-neutral-400 text-sm mt-1">Mon‑Sat, 9 AM‑7 PM IST</p>

                      </div>
                    </div>

                 
                    {/* Social Media */}
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-100 mb-3">Connect With Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                          <svg className="w-5 h-5 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                          <svg className="w-5 h-5 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                          <svg className="w-5 h-5 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-300">
                          <svg className="w-5 h-5 text-neutral-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >


            <h2 className="text-4xl font-bold mb-4 text-yellow-400">Frequently Asked Questions</h2>
            <p className="text-neutral-300">Find quick answers to common questions</p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {/* FAQ Item 1 */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">What is Dubai Club?</h3>
              <p className="text-neutral-300">
                Dubai Club is an exclusive crypto model portfolios and other financial secrets decoding platform for serious investors and traders. We offer premium insights, AI-driven crypto model portfolios, real-time alerts, and market research on like Bitcoin, Ethereum, altcoins, and other emerging assets. Our mission is to provide actionable intelligence and investment strategies that help our members achieve financial success.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">How do I join Dubai Club?</h3>
              <p className="text-neutral-300">
                Joining Dubai Club is simple! Click on the “Subscribe” button, sign up, and gain immediate access to our premium crypto model portfolios, portfolio strategies, and exclusive research.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">What makes Dubai Club different from other crypto signal services?</h3>
              <p className="text-neutral-300">
                Dubai Club is powered by AI-driven research, which uses advanced algorithms to analyse market data, predict trends, and suggest trades and portfolios. Unlike other services that rely purely on human analysis, our platform combines quantitative analysis with fundamental research, ensuring you get the most reliable analysis and insights.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Is Dubai Club available outside of India?</h3>
              <p className="text-neutral-300">
                Yes! While we tailor many of our insights to the Indian market, Dubai Club is accessible to anyone globally. Crypto is a borderless asset, and our research is beneficial to investors in any country. And our Dubai Club inspire from Dubai.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
          >
            <p className="text-neutral-400 mb-6">
              Still have questions? Our team is ready to help.
            </p>
            <Link href="#contact-form" legacyBehavior>
              <a className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300">
                <span>Contact our support team</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        /* Button shimmer effect */
        .btn-shimmer {
          position: relative;
          overflow: hidden;
        }

        .button-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
           rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          animation: button-shimmer 2s infinite;
          transform: skewX(-20deg);
        }

        @keyframes button-shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        /* Input focus animations */
        input:focus, textarea:focus, select:focus {
          animation: input-pulse 1s ease-out;
        }

        @keyframes input-pulse {
          0% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0.5); }
          70% { box-shadow: 0 0 0 10px rgba(234, 179, 8, 0); }
          100% { box-shadow: 0 0 0 0 rgba(234, 179, 8, 0); }
        }

        /* Background patterns and effects */
        @media (min-width: 768px) {
          section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
              radial-gradient(circle at 20% 30%, rgba(234, 179, 8, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(234, 179, 8, 0.05) 0%, transparent 50%);
            pointer-events: none;
          }
        }
      `}</style>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400" style={{ textShadow: '0 0 15px rgba(234, 179, 8, 0.4)' }}>
              Ready to Dominate the Market?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join the elite traders using our DubaiClub strategy to seize opportunities others miss.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/portfolios" legacyBehavior>
                <a className="btn-shimmer relative inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-yellow-500/40 overflow-hidden">
                  <span className="relative z-10">Explore Portfolio</span>
                  <div className="button-shimmer"></div>
                </a>
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('name')?.focus();
                }}
                className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-yellow-400 font-bold py-4 px-8 border border-yellow-400 hover:border-yellow-500 rounded-md transition duration-300 ease-in-out"
              >
                Contact Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Stay Updated
            </h2>
            <p className="text-neutral-300 mb-8">
              Subscribe to our newsletter for exclusive market insights and strategy updates
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="btn-shimmer relative inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-yellow-500/40 overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="button-shimmer"></div>
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}