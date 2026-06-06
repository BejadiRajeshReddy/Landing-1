import { cn } from '../../utils/cn';

interface ProductScreenshotFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function ProductScreenshotFrame({ children, className }: ProductScreenshotFrameProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-border bg-canvas shadow-2xl ring-1 ring-primary/5",
      className
    )}>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-danger/80" />
          <div className="h-3 w-3 rounded-full bg-warning/80" />
          <div className="h-3 w-3 rounded-full bg-success/80" />
        </div>
        <div className="mx-auto font-mono text-[10px] text-text-muted">investiq.in/workspace</div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
