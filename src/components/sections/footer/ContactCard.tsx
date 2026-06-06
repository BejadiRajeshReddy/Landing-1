import { cn } from '../../../utils/cn';
import { CTAButtonPrimary } from '../../ui/CTAButtonPrimary';
import { Mail } from 'lucide-react';

interface ContactCardProps {
  className?: string;
}

export function ContactCard({ className }: ContactCardProps) {
  return (
    <div className={cn("p-8 rounded-2xl border border-border bg-canvas shadow-sm", className)}>
      <div className="h-12 w-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-6">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-text-strong mb-2">Talk to Sales</h3>
      <p className="text-sm text-text-body mb-8">
        Need a custom deployment, specific compliance requirements, or team training? Let's talk.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-text-strong mb-1.5 uppercase tracking-wider">Work Email</label>
          <input
            type="email"
            id="email"
            placeholder="analyst@fund.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-surface text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/50 focus-visible:border-accent-blue transition-all"
          />
        </div>
        <CTAButtonPrimary className="w-full">Contact Team</CTAButtonPrimary>
      </form>
    </div>
  );
}
