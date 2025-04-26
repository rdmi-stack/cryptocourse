// app/layout.tsx (or .jsx)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Import the Header
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krypto Gyan",
  description: "Learn Crypto and Blockchain Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header /> {/* Add the Header component here */}
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
