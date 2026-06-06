import { PricingTeaserCard } from './PricingTeaserCard';

export function CTASection() {
  return (
    <section id="pricing" className="py-24 bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingTeaserCard className="max-w-4xl mx-auto -mt-36" />
      </div>
    </section>
  );
}
