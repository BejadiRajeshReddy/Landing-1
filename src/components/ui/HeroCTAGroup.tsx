import { cn } from '../../utils/cn';
import { CTAButtonPrimary } from './CTAButtonPrimary';
import { CTAButtonSecondary } from './CTAButtonSecondary';

interface HeroCTAGroupProps {
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function HeroCTAGroup({
  className,
  primaryLabel = "Request Demo",
  secondaryLabel = "Join Waitlist"
}: HeroCTAGroupProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4", className)}>
      <CTAButtonPrimary className="w-full sm:w-auto">
        {primaryLabel}
      </CTAButtonPrimary>
      <CTAButtonSecondary className="w-full sm:w-auto">
        {secondaryLabel}
      </CTAButtonSecondary>
    </div>
  );
}
