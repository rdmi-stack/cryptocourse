// app/enquiry/page.tsx
// Or adjust the path based on where you want the enquiry page (e.g., app/contact/page.tsx)

"use client"; // Mark this as a Client Component

import React, { useState } from "react";

// Define the structure for form data
interface EnquiryFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define possible submission statuses
type SubmissionStatus = "idle" | "submitting" | "success" | "error";

// Simple SVG Icons for feedback (can be replaced with an icon library like react-icons)
const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const ExclamationCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2 inline-block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    />
  </svg>
);

export default function EnquiryPage() {
  // State for form fields
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for submission status and feedback message
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser submission
    setStatus("submitting");
    setFeedbackMessage(""); // Clear previous messages

    console.log("Submitting enquiry:", formData);
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // --- Replace with actual API call ---
      // await fetch('/api/enquiry', { ... });

      // Simulate success
      setStatus("success");
      setFeedbackMessage("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setFeedbackMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    // Add some padding to the overall page container if needed, or rely on layout
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 px-4 py-12">
      {/* Form Container */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base">
            We'd love to hear from you. Fill out the form below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out"
              placeholder="Your full name"
              disabled={status === "submitting"}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out"
              placeholder="you@example.com"
              disabled={status === "submitting"}
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out"
              placeholder="What is this about?"
              disabled={status === "submitting"}
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5} // Adjusted rows
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition duration-150 ease-in-out"
              placeholder="Write your message here..."
              disabled={status === "submitting"}
            ></textarea>
          </div>

          {/* Feedback Area */}
          {feedbackMessage && (
            <div
              className={`p-4 rounded-lg text-sm flex items-center ${
                status === "success"
                  ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700"
                  : ""
              } ${
                status === "error"
                  ? "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700"
                  : ""
              }`}
              role="alert"
            >
              {status === "success" && <CheckCircleIcon />}
              {status === "error" && <ExclamationCircleIcon />}
              {feedbackMessage}
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white 
                ${
                  status === "submitting"
                    ? "bg-gray-400 dark:bg-gray-500 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-gray-800"
                } 
                transition duration-150 ease-in-out`}
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
