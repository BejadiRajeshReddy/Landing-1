import { cn } from '../../utils/cn';

interface CTAButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CTAButtonSecondary({ children, className, ...props }: CTAButtonSecondaryProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg border border-border bg-canvas px-6 py-3 text-sm font-medium text-text-strong shadow-sm transition-all hover:bg-surface hover:text-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
