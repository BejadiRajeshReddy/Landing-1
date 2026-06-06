import { cn } from '../../../utils/cn';

interface MetricHighlightProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricHighlight({ value, label, className }: MetricHighlightProps) {
  return (
    <div className={cn("text-center px-4", className)}>
      <div className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
        {value}
      </div>
      <div className="text-sm font-medium text-white/60">
        {label}
      </div>
    </div>
  );
}
