import { cn } from '../../utils/cn';

interface ScrollRevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollRevealWrapper({ children, className, delay = 0 }: ScrollRevealWrapperProps) {
  // A real implementation would use IntersectionObserver and Framer Motion or similar.
  // For this pure React/Tailwind implementation without extra animation libraries,
  // we'll rely on a basic wrapper structure.
  return (
    <div
      className={cn("animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
