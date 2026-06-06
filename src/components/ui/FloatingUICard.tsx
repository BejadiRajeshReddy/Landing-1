import { cn } from '../../utils/cn';

interface FloatingUICardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingUICard({ children, className, delay = 0 }: FloatingUICardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-canvas/90 p-4 shadow-xl backdrop-blur-sm",
        "animate-in fade-in zoom-in-95 duration-700 ease-out fill-mode-both",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
