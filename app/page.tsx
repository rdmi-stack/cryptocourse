// app/page.tsx

// Import the components (adjust paths if necessary)
import HeroSection from "@/components/herosection";
import PortfolioSectionRealKings from "@/components/PortfolioSectionRealKings";
import NewsletterSection from "@/components/NewsletterSection";
import PortfolioOverview from '@/components/PortfolioOverview'; // Import the new component
import PortfolioSectionBreChealga from '@/components/PortfolioSectionBreChealga'; // Import the new section
import PortfolioSectionSkyBreakers from '@/components/PortfolioSectionSkyBreakers'; // Import the new section
import HowItWorksSection from '@/components/HowItWorksSection'; // Import the new section
import AboutSection from '@/components/AboutSection'; // Import the new section
import CallToActionSection from '@/components/CallToActionSection'; // Import CTA

// Define types for the stats data if using TypeScript
// (These should ideally live in a separate types file)
interface StatRow {
  channel: string;
  pendingStart: number;
  received: number;
  resolved: number;
  pendingEnd: number;
  avgResolutionHours: number | string;
  satisfactionPercent: number | string | null; // Allow string for calculated average like '~91%'
}

interface SupportReport {
  month: string;
  year: number;
  statsData: StatRow[];
  totalStats: StatRow;
}

// Example data fetching function (replace with your actual data source)
// This function runs on the server because HomePage is a Server Component
async function getSupportData(): Promise<SupportReport> {
  // Simulate fetching data from an API or database
  await new Promise((resolve) => setTimeout(resolve, 50)); // Simulate short delay

  // Return structured data matching the component's expected props
  return {
    month: "April", // Example month
    year: 2025, // Example year
    statsData: [
      {
        channel: "Discord Support Channel",
        pendingStart: 8,
        received: 150,
        resolved: 145,
        pendingEnd: 13,
        avgResolutionHours: 4.2,
        satisfactionPercent: 90,
      },
      {
        channel: "Email Support",
        pendingStart: 3,
        received: 60,
        resolved: 58,
        pendingEnd: 5,
        avgResolutionHours: 8.0,
        satisfactionPercent: 95,
      },
      {
        channel: "Course Platform DMs",
        pendingStart: 1,
        received: 25,
        resolved: 25,
        pendingEnd: 1,
        avgResolutionHours: 12.5,
        satisfactionPercent: 85,
      },
    ],
    totalStats: {
      channel: "Grand Total",
      pendingStart: 12,
      received: 235,
      resolved: 228,
      pendingEnd: 18,
      avgResolutionHours: "~6.1",
      satisfactionPercent: "~91%",
    }, // Example calculated totals
  };
}

// The Page component itself is a Server Component by default
// Making it async allows awaiting data fetching before rendering
export default async function HomePage() {
  // Fetch data for the stats section
  const supportReport = await getSupportData();

  return (
    <main>
      {/* --- Hero Section --- */}
      <HeroSection />
      <PortfolioOverview /> {/* Add the portfolio section here */}

      {/* --- Course Cards Section --- */}
      <PortfolioSectionRealKings />
      <PortfolioSectionBreChealga /> {/* Add the third portfolio section */}
      <PortfolioSectionSkyBreakers /> {/* Add the fourth portfolio section */}
      <HowItWorksSection /> {/* Add the How It Works section */}
      <AboutSection /> {/* Add the About section */}
      <CallToActionSection /> {/* Add the CTA section before the end */}

    
      {/* --- Support Stats Section --- */}
      {/* Pass the fetched data as props */}
  

      {/* --- Newsletter Section --- */}
      {/* This is a Client Component due to useState */}
      <NewsletterSection />

      {/* The Footer component would typically be rendered via layout.tsx */}
    </main>
  );
}
