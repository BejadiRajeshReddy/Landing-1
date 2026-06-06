import { cn } from '../../../utils/cn';
import { CTAButtonSecondary } from '../../ui/CTAButtonSecondary';

interface NewsletterSignupProps {
  className?: string;
}

export function NewsletterSignup({ className }: NewsletterSignupProps) {
  return (
    <div className={cn("p-6 rounded-xl border border-border bg-surface", className)}>
      <h4 className="text-sm font-bold text-text-strong mb-2">Platform Updates</h4>
      <p className="text-xs text-text-body mb-4">
        Get notified about new agents, data sources, and feature releases.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Email address"
          className="w-full px-3 py-2 rounded-md border border-border bg-canvas text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-blue transition-all"
        />
        <CTAButtonSecondary className="px-4 py-2 shrink-0">Subscribe</CTAButtonSecondary>
      </form>
    </div>
  );
}
