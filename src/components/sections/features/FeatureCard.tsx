import { cn } from '../../../utils/cn';
import type { Feature } from '../../../data/mockData';
import { FeatureIconBadge } from '../../ui/FeatureIconBadge';

interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export function FeatureCard({ feature, className }: FeatureCardProps) {
  return (
    <div className={cn("group rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg", className)}>
      <div className="mb-6 flex items-start justify-between">
        <FeatureIconBadge icon={feature.icon} />
        {feature.metric && (
          <div className="text-right">
            <span className="block text-xl font-bold text-accent-indigo">{feature.metric}</span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted">{feature.metricLabel}</span>
          </div>
        )}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-text-strong">{feature.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-text-body">{feature.description}</p>

      <div className="border-t border-border pt-4">
        <p className="text-sm font-medium text-text-strong">
          <span className="text-success mr-2">✓</span>
          {feature.outcome}
        </p>
      </div>
    </div>
  );
}
