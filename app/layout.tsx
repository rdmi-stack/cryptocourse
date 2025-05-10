// app/layout.tsx

import type { Metadata } from "next";
// Import required fonts
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; // Import the Header component
import StickyWhatsAppButton from '@/components/StickyWhatsAppButton'; // Adjust path if necessary

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter', // Use variable for flexibility
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Weights used in components
  variable: '--font-playfair', // Use variable
});

// Update metadata for Dubai Club
export const metadata: Metadata = {
  title: "Dubai Club - AI-Powered Crypto Insights & Portfolios", // Updated Title
  description: "Access expert-managed crypto portfolios, AI insights, and profitable strategies with Dubai Club.", // Updated Description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply font variables to html tag
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      {/* Apply dark background and flex layout to body */}
      <body className={`flex flex-col min-h-screen bg-black font-sans`}> {/* Use font-sans (Inter) as default */}
        <Header /> {/* Add Header component at the top */}
        {/* Changed wrapper div to main tag for semantics */}
         <StickyWhatsAppButton />

        <main className="flex-grow">{children}</main>
        <Footer /> {/* Footer remains at the bottom */}
      </body>
    </html>
  );
}