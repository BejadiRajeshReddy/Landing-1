import { cn } from '../../../utils/cn';

interface DifferentiatorCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

export function DifferentiatorCard({ title, description, icon: Icon, className }: DifferentiatorCardProps) {
  return (
    <div className={cn("p-6 rounded-2xl border border-border bg-canvas shadow-sm", className)}>
      <div className="h-10 w-10 rounded-lg bg-surface flex items-center justify-center mb-4 border border-border">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h4 className="text-lg font-bold text-text-strong mb-2">{title}</h4>
      <p className="text-sm text-text-body">{description}</p>
    </div>
  );
}
