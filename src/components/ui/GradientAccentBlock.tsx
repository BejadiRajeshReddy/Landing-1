import { cn } from '../../utils/cn';

interface GradientAccentBlockProps {
  className?: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function GradientAccentBlock({ className, position = 'top' }: GradientAccentBlockProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none opacity-50",
        position === 'top' && "top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-accent-indigo/10 to-transparent blur-3xl",
        className
      )}
      aria-hidden="true"
    />
  );
}
