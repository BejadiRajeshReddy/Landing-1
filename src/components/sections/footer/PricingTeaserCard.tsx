import { cn } from '../../../utils/cn';
import { CTAButtonPrimary } from '../../ui/CTAButtonPrimary';
import { Check } from 'lucide-react';

interface PricingTeaserCardProps {
  className?: string;
}

export function PricingTeaserCard({ className }: PricingTeaserCardProps) {
  return (
    <div className={cn("relative p-8 rounded-2xl border border-border bg-canvas shadow-xl flex flex-col md:flex-row items-center gap-8 justify-between", className)}>
      <div className="absolute -top-3 left-8 bg-accent-blue px-3 py-1 rounded text-[10px] font-mono tracking-wider text-white uppercase">
        Early Access Pricing
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-text-strong mb-2">Institutional-grade tools, scaled for you.</h3>
        <p className="text-sm text-text-body mb-6">
          Whether you're a solo PM or a full research desk, get unmetered access to all features during our beta.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            'All NSE/BSE Equities', 'Unlimited Concall Parsing',
            'Save Custom Valuation Models', 'Export to PDF/Excel'
          ].map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-text-strong">
              <Check className="h-4 w-4 text-success mr-2 shrink-0" /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center p-6 bg-surface border border-border rounded-xl w-full md:w-auto shrink-0">
        <div className="text-sm text-text-muted mb-1 font-medium">Starting at</div>
        <div className="text-4xl font-bold text-primary mb-1">₹4,999<span className="text-lg text-text-muted font-normal">/mo</span></div>
        <div className="text-xs text-text-muted mb-6">Billed annually</div>
        <CTAButtonPrimary className="w-full">Start 14-Day Trial</CTAButtonPrimary>
      </div>
    </div>
  );
}
