import { cn } from '../../../utils/cn';
import type { Feature } from '../../../data/mockData';

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn("group rounded-xl border border-border bg-surface p-6 sm:p-8 transition-all hover:border-accent-indigo/30", className)}>
      <div className="mb-6 flex items-start justify-between">
        {feature.icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-canvas/50 text-text-strong">
            <feature.icon className="h-5 w-5" />
          </div>
        ) : <div />}
      </div>
      <h3 className="mb-3 text-lg sm:text-xl font-semibold text-text-strong">{feature.title}</h3>
      <p className="mb-8 text-sm leading-relaxed text-text-body">{feature.description}</p>

      <div className="border-t border-border/60 pt-5">
        <p className="text-sm font-semibold text-text-strong flex items-start gap-2">
          <span className="text-success mt-0.5">✓</span>
          {feature.outcome}
        </p>
      </div>
    </div>
  );
}
