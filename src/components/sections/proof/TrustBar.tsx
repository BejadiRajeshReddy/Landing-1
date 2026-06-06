import { cn } from '../../../utils/cn';
import { LogoCloud } from './LogoCloud';

interface TrustBarProps {
  className?: string;
}

export function TrustBar({ className }: TrustBarProps) {
  return (
    <section className={cn("py-12 border-y border-border bg-surface", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-text-muted mb-8">
          Powering research workflows for leading funds and analyst desks
        </p>
        <LogoCloud />
      </div>
    </section>
  );
}
