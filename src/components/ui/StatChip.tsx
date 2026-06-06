import { cn } from '../../utils/cn';

interface StatChipProps {
  label: string;
  value: string;
  className?: string;
}

export function StatChip({ label, value, className }: StatChipProps) {
  return (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm shadow-sm", className)}>
      <span className="font-semibold text-text-strong mr-2">{value}</span>
      <span className="text-text-muted">{label}</span>
    </div>
  );
}
