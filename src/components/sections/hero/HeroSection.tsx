import { HeroHeadline } from '../../foundation/HeroHeadline';
import { HeroSubheadline } from '../../foundation/HeroSubheadline';
import { HeroCTAGroup } from '../../ui/HeroCTAGroup';
import { ComplianceNote } from '../../ui/ComplianceNote';
import { ScrollRevealWrapper } from '../../ui/ScrollRevealWrapper';
import { GradientAccentBlock } from '../../ui/GradientAccentBlock';
import { ProductPreviewPanel } from './ProductPreviewPanel';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <GradientAccentBlock position="top" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <ScrollRevealWrapper>
            <div className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-muted mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent-blue mr-2"></span>
              AI research for Indian equities, built for analysts.
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={100}>
            <HeroHeadline className="max-w-4xl mx-auto mb-6">
              Turn filings, concalls, and news into <span className="text-accent-indigo">investment signals</span> in minutes.
            </HeroHeadline>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={200}>
            <HeroSubheadline className="mb-10">
              Screen faster. Validate smarter. Build better equity theses. The first persistent workspace that combines 10+ years of NSE/BSE data with rigorous AI agents that always cite their sources.
            </HeroSubheadline>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={300}>
            <HeroCTAGroup className="mb-8" />
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={400}>
            <ComplianceNote />
          </ScrollRevealWrapper>
        </div>

        <ScrollRevealWrapper delay={600} className="mt-20">
          <ProductPreviewPanel />
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
