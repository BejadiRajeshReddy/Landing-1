import { cn } from '../../utils/cn';

interface FeatureIconBadgeProps {
  icon: React.ElementType;
  className?: string;
}

export function FeatureIconBadge({ icon: Icon, className }: FeatureIconBadgeProps) {
  return (
    <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-border shadow-sm", className)}>
      <Icon className="h-6 w-6 text-primary" />
    </div>
  );
}
