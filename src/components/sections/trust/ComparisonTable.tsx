import { cn } from '../../../utils/cn';
import { comparisonData } from '../../../data/mockData';
import { Check, X } from 'lucide-react';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';

interface ComparisonTableProps {
  className?: string;
}

export function ComparisonTable({ className }: ComparisonTableProps) {
  return (
    <section className={cn("py-24 bg-surface border-y border-border", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Why InvestIQ</SectionEyebrow>
          <SectionHeading className="mb-6">Not another chat wrapper.</SectionHeading>
          <SectionSubcopy className="mx-auto">
            Generic AI tools hallucinate. Legacy finance tools are rigid. InvestIQ provides the rigorous structure of a terminal with the conversational speed of modern AI.
          </SectionSubcopy>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-2xl border border-border bg-canvas overflow-hidden shadow-sm">
            <div className="grid grid-cols-4 bg-surface border-b border-border text-sm font-semibold text-text-strong">
              <div className="p-4 md:p-6 text-text-muted">Capability</div>
              <div className="p-4 md:p-6 bg-primary/5 text-primary border-x border-border flex items-center justify-center">
                InvestIQ
              </div>
              <div className="p-4 md:p-6 text-center text-text-muted">Generic AI</div>
              <div className="p-4 md:p-6 text-center text-text-muted">Manual Excel</div>
            </div>

            {comparisonData.map((row, index) => (
              <div
                key={row.id}
                className={cn(
                  "grid grid-cols-4 text-sm transition-colors hover:bg-surface/50",
                  index !== comparisonData.length - 1 && "border-b border-border"
                )}
              >
                <div className="p-4 md:p-6 font-medium text-text-strong flex items-center">
                  {row.capability}
                </div>
                <div className="p-4 md:p-6 bg-primary/5 border-x border-border flex items-center justify-center text-center font-medium text-primary">
                  <div className="flex flex-col items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>{row.investiq}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center text-center text-text-muted">
                  <div className="flex flex-col items-center gap-2">
                    <X className="h-5 w-5 text-danger/50" />
                    <span>{row.genericFinanceTool}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-center text-center text-text-muted">
                  <div className="flex flex-col items-center gap-2">
                    <X className="h-5 w-5 text-danger/50" />
                    <span>{row.manualWorkflow}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
