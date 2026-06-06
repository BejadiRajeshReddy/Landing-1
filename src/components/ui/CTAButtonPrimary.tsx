import { cn } from '../../utils/cn';
import { ArrowRight } from 'lucide-react';

interface CTAButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showIcon?: boolean;
}

export function CTAButtonPrimary({ children, className, showIcon = true, ...props }: CTAButtonPrimaryProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-text shadow-subtle transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
