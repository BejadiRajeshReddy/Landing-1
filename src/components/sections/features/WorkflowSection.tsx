import { workflowSteps } from '../../../data/mockData';
import { WorkflowStep } from './WorkflowStep';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-surface border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow>Analyst Journey</SectionEyebrow>
            <SectionHeading className="mb-6">From blank page to <br/>investment thesis.</SectionHeading>
            <SectionSubcopy className="mb-12">
              InvestIQ is designed to map perfectly to your existing research workflow, just 10x faster and with zero context loss.
            </SectionSubcopy>

            <div className="space-y-12">
              {workflowSteps.map((step, index) => (
                <WorkflowStep
                  key={step.id}
                  step={step}
                  isLast={index === workflowSteps.length - 1}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative h-[600px] rounded-2xl border border-border bg-canvas shadow-xl overflow-hidden">
            {/* Visual representation of the workflow. For this implementation, a stylized mock. */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-canvas p-8">
               <div className="w-full h-full border border-border/50 rounded-xl bg-canvas p-6 flex flex-col gap-4 shadow-sm">
                 <div className="h-10 w-full rounded bg-surface border border-border flex items-center px-4">
                   <div className="h-4 w-4 rounded-full bg-primary/20 mr-3" />
                   <div className="h-3 w-1/3 bg-border rounded" />
                 </div>
                 <div className="flex-1 grid grid-cols-3 gap-4 mt-4">
                   <div className="col-span-1 border-r border-border pr-4 space-y-3">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className="h-8 w-full rounded bg-surface border border-border/50" />
                     ))}
                   </div>
                   <div className="col-span-2 space-y-4 pl-2">
                     <div className="h-32 w-full rounded-lg bg-accent-indigo/5 border border-accent-indigo/10 p-4" />
                     <div className="h-32 w-full rounded-lg border border-border bg-surface p-4" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
