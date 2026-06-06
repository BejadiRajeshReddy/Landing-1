import type { WorkflowStepData } from '../../../data/mockData';

interface WorkflowStepProps {
  step: WorkflowStepData;
  isLast?: boolean;
}

export function WorkflowStep({ step, isLast }: WorkflowStepProps) {
  return (
    <div className="relative pl-10">
      {!isLast && (
        <div className="absolute left-[15px] top-10 bottom-[-3rem] w-px bg-border" />
      )}

      <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-canvas text-sm font-bold text-primary">
        {step.stepNumber}
      </div>

      <div>
        <h4 className="text-xl font-semibold text-text-strong mb-2">{step.title}</h4>
        <p className="text-sm text-text-body leading-relaxed mb-4">{step.description}</p>

        <div className="inline-flex items-center gap-2 rounded bg-surface px-2.5 py-1 text-xs font-mono text-text-muted border border-border">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
          {step.visualLabel}
        </div>

        {step.supportingMetric && (
          <div className="mt-3 text-sm font-medium text-success">
            {step.supportingMetric}
          </div>
        )}
      </div>
    </div>
  );
}
