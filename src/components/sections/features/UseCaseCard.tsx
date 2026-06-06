import { cn } from '../../../utils/cn';
import type { UseCase } from '../../../data/mockData';
import { ArrowRight, Check } from 'lucide-react';

interface UseCaseCardProps {
  useCase: UseCase;
  className?: string;
}

export function UseCaseCard({ useCase, className }: UseCaseCardProps) {
  return (
    <div className={cn("flex flex-col rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg", className)}>
      <div className="mb-4 inline-flex items-center rounded bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
        {useCase.persona}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-text-strong">{useCase.title}</h3>
      <p className="mb-8 text-sm text-text-body leading-relaxed flex-1">{useCase.description}</p>

      <ul className="mb-8 space-y-3 flex-1">
        {useCase.benefits.map((benefit, i) => (
          <li key={i} className="flex items-start text-sm text-text-strong">
            <Check className="mr-3 h-5 w-5 text-accent-indigo shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-border">
        <a href="#demo" className="inline-flex items-center text-sm font-semibold text-accent-blue hover:text-accent-indigo transition-colors">
          {useCase.primaryAction} <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
