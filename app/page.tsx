// app/page.tsx

// Import the components (adjust paths if necessary)
import HeroSection from "@/components/herosection";
import PortfolioSectionRealKings from "@/components/PortfolioSectionRealKings";
import NewsletterSection from "@/components/NewsletterSection";
import PortfolioOverview from '@/components/PortfolioOverview';
import PortfolioSectionBreChealga from '@/components/PortfolioSectionBreChealga';
import PortfolioSectionSkyBreakers from '@/components/PortfolioSectionSkyBreakers';
import HowItWorksSection from '@/components/HowItWorksSection'; // Use HowItWorksMockup if that's the correct name
import AboutSection from '@/components/AboutSection';
import CallToActionSection from '@/components/CallToActionSection';
import PortfolioSectionProjectAlpha from '@/components/PortfolioSectionProjectAlpha';
import PortfolioSectionProjectBeta from '@/components/PortfolioSectionProjectBeta';

// --- NEW IMPORT for 10X Alphas Detail Section ---
import PortfolioSection10XAlphasDetail from '@/components/PortfolioSection10XAlphasDetail';
// --- END NEW IMPORT ---


// Define types for the stats data if using TypeScript
// ... (interface StatRow, interface SupportReport - keep as is) ...

// Example data fetching function (keep as is)
// ... async function getSupportData() ...

// The Page component itself is a Server Component by default
export default async function HomePage() {
  // Fetch data (keep as is if still needed for other sections)
  // const supportReport = await getSupportData(); // Uncomment if stats section is used

  return (
    <main>
      {/* --- Hero Section --- */}
      <HeroSection />
      <PortfolioOverview />

      {/* --- Portfolio Sections --- */}
      <PortfolioSectionRealKings />
      <PortfolioSectionBreChealga />
      <PortfolioSectionSkyBreakers />
      <PortfolioSectionProjectAlpha />
      <PortfolioSectionProjectBeta />

      {/* --- How It Works Section --- */}
      <HowItWorksSection /> {/* Ensure component name matches file */}

      {/* --- About Section --- */}
      <AboutSection />

      {/* --- CTA Section --- */}
      <CallToActionSection />

      {/* --- NEW: 10X Alphas Detail Section --- */}
      <PortfolioSection10XAlphasDetail />
      {/* --- END: 10X Alphas Detail Section --- */}

      {/* --- Newsletter Section --- */}
      <NewsletterSection />

      {/* The Footer component would typically be rendered via layout.tsx */}
    </main>
  );
}