import { cn } from '../../../utils/cn';
import { testimonials } from '../../../data/mockData';
import { TestimonialCard } from './TestimonialCard';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  return (
    <section className={cn("py-24 bg-surface border-y border-border", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow>Early Access Partners</SectionEyebrow>
          <SectionHeading>Trusted by rigorous research desks.</SectionHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
