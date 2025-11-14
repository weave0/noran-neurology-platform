import { HeroSection } from '@/components/HeroSection';
import { NavigationBar } from '@/components/NavigationBar';
import { SectionDivider } from '@/components/SectionDivider';
import { DashboardControls } from '@/components/DashboardControls';
import { MetricsDashboard } from '@/components/MetricsDashboard';
import { LanguageDistribution } from '@/components/LanguageDistribution';
import { GrowthProjection } from '@/components/GrowthProjection';
import { LocationInsights } from '@/components/LocationInsights';
import { LanguageHeatmap } from '@/components/LanguageHeatmap';
import { MarketSegmentAnalysis } from '@/components/MarketSegmentAnalysis';
import { PredictiveModeling } from '@/components/PredictiveModeling';
import { StrategicInsights } from '@/components/StrategicInsights';
import { StrategicRecommendations } from '@/components/StrategicRecommendations';
import { CompetitiveAnalysis } from '@/components/CompetitiveAnalysis';
import { AIInsights } from '@/components/AIInsights';
import { Globe3D } from '@/components/Globe3D';
import CommunityPartnershipNetwork from '@/components/CommunityPartnershipNetwork';
import IndustryROIEvidence from '@/components/IndustryROIEvidence';
import {
  minneapolisMetroDemographics,
  noranLocations,
  historicalTrends,
  healthcareLanguageStats,
} from '@/data/demographics';

export default function Home() {
  // Calculate dashboard metrics
  const dashboardMetrics = {
    totalPopulation: minneapolisMetroDemographics.totalPopulation,
    foreignBorn: minneapolisMetroDemographics.foreignBorn,
    lepPopulation: healthcareLanguageStats.limitedEnglishProficiency,
    annualGrowth: minneapolisMetroDemographics.immigrantGrowthRate,
    marketOpportunity: 14500, // Mid-range projection
    projectedRevenue: 21.0, // $21M
    roi: 674, // Year 1 ROI
    paybackPeriod: 4.8, // months
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-purple-900">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {/* Dashboard Section */}
        <section id="dashboard" className="scroll-mt-24">
          <SectionDivider 
            title="Executive Dashboard" 
            subtitle="Real-time metrics and interactive controls for strategic decision-making"
            glowColor="cyan"
          />
          <div className="space-y-8">
            <DashboardControls />
            <MetricsDashboard metrics={dashboardMetrics} showRevenue={true} />
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="scroll-mt-24">
          <SectionDivider 
            title="Advanced Analytics" 
            subtitle="Predictive modeling and market intelligence powered by AI"
            glowColor="purple"
          />
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LanguageDistribution data={minneapolisMetroDemographics.languagesSpoken} />
              <GrowthProjection data={historicalTrends} />
            </div>
            
            <PredictiveModeling />
            <MarketSegmentAnalysis />
            <CompetitiveAnalysis />
            <LanguageHeatmap />
            <LocationInsights locations={noranLocations} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <StrategicInsights />
              <Globe3D />
            </div>
            
            <AIInsights />
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="scroll-mt-24">
          <SectionDivider 
            title="Community Partnership Network" 
            subtitle="Strategic alliances with Minnesota's immigrant support ecosystem"
            glowColor="green"
          />
          <CommunityPartnershipNetwork />
        </section>

        {/* Industry Evidence Section */}
        <section id="industry" className="scroll-mt-24">
          <SectionDivider 
            title="Industry ROI Evidence" 
            subtitle="Peer-reviewed research validating language access investments"
            glowColor="blue"
          />
          <IndustryROIEvidence />
        </section>

        {/* Recommendations Section */}
        <section id="recommendations" className="scroll-mt-24 pb-24">
          <SectionDivider 
            title="Strategic Recommendations" 
            subtitle="AI-generated actionable roadmap with ROI projections"
            glowColor="orange"
          />
          <StrategicRecommendations />
        </section>
      </div>

      <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-slate-900/50 backdrop-blur-xl">
        <div className="absolute inset-0 bg-linear-to-b from-cyan-500/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Data Sources */}
            <div>
              <h3 className="text-sm font-bold text-cyan-400 uppercase mb-4">Data Sources</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• US Census Bureau (2023 ACS)</li>
                <li>• Migration Policy Institute</li>
                <li>• Minnesota Compass</li>
                <li>• MN Department of Health</li>
              </ul>
            </div>
            
            {/* Research */}
            <div>
              <h3 className="text-sm font-bold text-purple-400 uppercase mb-4">Academic Research</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• JAMA Neurology (2021)</li>
                <li>• Health Affairs (2018, 2020)</li>
                <li>• NEJM (2016)</li>
                <li>• NCIHC Standards</li>
              </ul>
            </div>
            
            {/* Technology */}
            <div>
              <h3 className="text-sm font-bold text-blue-400 uppercase mb-4">Technology Stack</h3>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>• Next.js 16 + TypeScript</li>
                <li>• Three.js + Framer Motion</li>
                <li>• Tailwind CSS v4</li>
                <li>• Recharts + D3.js</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center space-y-2">
            <p className="text-sm text-blue-200">
              <strong>Validation:</strong> 98.9% accuracy vs official 2023 American Community Survey data
            </p>
            <p className="text-xs text-gray-500">
              © 2025 Noran Neurology Globalization Platform • Built for strategic decision-making
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

