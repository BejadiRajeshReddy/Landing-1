import { cn } from '../../../utils/cn';
import { features } from '../../../data/mockData';
import { FeatureCard } from './FeatureCard';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';

export function FeatureGrid() {
  return (
    <section id="product" className="py-24 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Core Capabilities</SectionEyebrow>
          <SectionHeading className="mb-6">Everything an analyst needs, <br className="hidden md:block"/>nothing they don't.</SectionHeading>
          <SectionSubcopy className="mx-auto">
            InvestIQ groups filings, transcripts, and financial models into a single, cohesive workflow powered by cited AI agents.
          </SectionSubcopy>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              className={cn(
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
