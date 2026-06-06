import { cn } from '../../utils/cn';

interface SectionEyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SectionEyebrow({ children, className, ...props }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-xs font-semibold tracking-wider text-accent-blue uppercase mb-3",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
