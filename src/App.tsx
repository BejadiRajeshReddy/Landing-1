import { StickyAnnouncementBar } from './components/navigation/StickyAnnouncementBar';
import { LandingHeader } from './components/navigation/LandingHeader';
import { HeroSection } from './components/sections/hero/HeroSection';
import { TrustBar } from './components/sections/proof/TrustBar';
import { FeatureGrid } from './components/sections/features/FeatureGrid';
import { WorkflowSection } from './components/sections/features/WorkflowSection';
import { UseCaseGrid } from './components/sections/features/UseCaseGrid';
import { ComparisonTable } from './components/sections/trust/ComparisonTable';
import { SecuritySection } from './components/sections/trust/SecuritySection';
import { TestimonialSection } from './components/sections/trust/TestimonialSection';
import { FAQSection } from './components/sections/footer/FAQSection';
import { CTASection } from './components/sections/footer/CTASection';
import { Footer } from './components/sections/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-canvas font-sans selection:bg-accent-blue/20 selection:text-accent-indigo">
      <StickyAnnouncementBar />
      <LandingHeader />

      <main>
        <HeroSection />
        <TrustBar />
        <FeatureGrid />
        <WorkflowSection />
        <UseCaseGrid />
        <ComparisonTable />
        <SecuritySection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
