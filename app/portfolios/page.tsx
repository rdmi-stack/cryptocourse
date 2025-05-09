// app/portfolios/page.tsx

// Import portfolio-related components
import PortfolioSectionRealKings from "@/components/PortfolioSectionRealKings";
import PortfolioSectionBreChealga from '@/components/PortfolioSectionBreChealga';
import PortfolioSectionSkyBreakers from '@/components/PortfolioSectionSkyBreakers';
import PortfolioSectionProjectAlpha from '@/components/PortfolioSectionProjectAlpha';
import PortfolioSectionProjectBeta from '@/components/PortfolioSectionProjectBeta';
import PortfolioSection10XAlphasDetail from '@/components/PortfolioSection10XAlphasDetail';

// Import the NewsletterSection component
import NewsletterSection from "@/components/NewsletterSection";

export default function PortfoliosPage() {
  return (
    <main className="bg-slate-900 text-white">
      {/* Main content area for portfolios */}
      {/* Increased top padding here: pt-24 sm:pt-28 lg:pt-32 */}
      <div className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-12 sm:mb-16
                         bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
            Our Portfolios
          </h1>

          <div className="space-y-16 sm:space-y-24">
            <PortfolioSectionRealKings />
            <PortfolioSectionBreChealga />
            <PortfolioSectionSkyBreakers />
            <PortfolioSectionProjectAlpha />
            <PortfolioSectionProjectBeta />
          </div>
        </div>
      </div>

      {/* --- Newsletter Section --- */}
      {/* Added padding above the newsletter section for separation */}
      <div className="py-16 sm:py-24">
        <NewsletterSection />
      </div>
    </main>
  );
}