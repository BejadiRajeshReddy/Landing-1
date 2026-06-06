import { cn } from '../../utils/cn';
import { ShieldCheck } from 'lucide-react';

interface ComplianceNoteProps {
  className?: string;
}

export function ComplianceNote({ className }: ComplianceNoteProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs text-text-muted", className)}>
      <ShieldCheck className="h-4 w-4 text-success" />
      <span>InvestIQ is a research data workspace, not a SEBI-registered advisor.</span>
    </div>
  );
}
