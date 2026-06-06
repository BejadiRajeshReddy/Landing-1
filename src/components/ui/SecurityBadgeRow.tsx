import { cn } from '../../utils/cn';
import { securityItems } from '../../data/mockData';

interface SecurityBadgeRowProps {
  className?: string;
}

export function SecurityBadgeRow({ className }: SecurityBadgeRowProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      {securityItems.map((item) => (
        <div key={item.id} className="flex items-center gap-2 text-sm text-text-muted">
          <item.icon className="h-4 w-4 text-success" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
