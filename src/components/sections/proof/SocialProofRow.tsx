import { cn } from '../../../utils/cn';
import { MetricHighlight } from './MetricHighlight';

interface SocialProofRowProps {
  className?: string;
}

export function SocialProofRow({ className }: SocialProofRowProps) {
  const metrics = [
    { value: "60+", label: "Quarters Analyzed" },
    { value: "2,500+", label: "Companies Tracked" },
    { value: "11", label: "Specialized AI Agents" },
    { value: "100%", label: "Source Citation" }
  ];

  return (
    <section className={cn("py-20 bg-primary", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {metrics.map((m, i) => (
            <MetricHighlight
              key={i}
              value={m.value}
              label={m.label}
              className={i === 0 ? "border-l-0" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
