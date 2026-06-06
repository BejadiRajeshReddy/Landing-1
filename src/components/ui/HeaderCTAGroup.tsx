import { cn } from '../../utils/cn';
import { CTAButtonPrimary } from './CTAButtonPrimary';
import { CTAButtonSecondary } from './CTAButtonSecondary';

interface HeaderCTAGroupProps {
  className?: string;
}

export function HeaderCTAGroup({ className }: HeaderCTAGroupProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <CTAButtonSecondary className="hidden md:inline-flex px-4 py-2 border-transparent shadow-none hover:bg-transparent hover:text-accent-blue text-text-muted">
        Sign in
      </CTAButtonSecondary>
      <CTAButtonPrimary className="px-4 py-2 text-xs" showIcon={false}>
        Request Demo
      </CTAButtonPrimary>
    </div>
  );
}
