import { cn } from '../../utils/cn';

interface ProductMockupBadgeProps {
  label: string;
  className?: string;
}

export function ProductMockupBadge({ label, className }: ProductMockupBadgeProps) {
  return (
    <div className={cn("inline-flex items-center rounded bg-primary px-2 py-1 text-[10px] font-mono font-medium tracking-wider text-primary-text uppercase shadow-sm", className)}>
      {label}
    </div>
  );
}
