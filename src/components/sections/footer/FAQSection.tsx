import { faqs } from '../../../data/mockData';
import { FAQItem } from './FAQItem';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';

export function FAQSection() {
  return (
    <section className="py-24 bg-canvas">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionEyebrow>Questions</SectionEyebrow>
          <SectionHeading className="mb-6">Common Questions</SectionHeading>
          <SectionSubcopy className="mx-auto">
            Everything you need to know about the product and billing.
          </SectionSubcopy>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
