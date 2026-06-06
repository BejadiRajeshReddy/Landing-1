import { cn } from '../../utils/cn';

interface InlineDataPillProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: 'green' | 'amber' | 'blue' | 'red';
}

export function InlineDataPill({ children, className, dotColor }: InlineDataPillProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-mono text-text-muted",
      className
    )}>
      {dotColor && (
        <span className={cn(
          "h-1.5 w-1.5 rounded-full",
          dotColor === 'green' && "bg-success",
          dotColor === 'amber' && "bg-warning",
          dotColor === 'blue' && "bg-accent-blue",
          dotColor === 'red' && "bg-danger"
        )} />
      )}
      {children}
    </span>
  );
}
