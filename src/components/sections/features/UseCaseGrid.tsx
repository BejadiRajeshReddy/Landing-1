import { useCases } from '../../../data/mockData';
import { UseCaseCard } from './UseCaseCard';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';

export function UseCaseGrid() {
  return (
    <section id="use-cases" className="py-24 bg-canvas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Built For</SectionEyebrow>
          <SectionHeading className="mb-6">Who uses InvestIQ?</SectionHeading>
          <SectionSubcopy className="mx-auto">
            From solo analysts preparing for earnings season to institutional teams standardizing their research process.
          </SectionSubcopy>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
