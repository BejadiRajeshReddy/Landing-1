import { cn } from '../../../utils/cn';
import type { Testimonial } from '../../../data/mockData';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col p-8 rounded-2xl border border-border bg-canvas shadow-sm relative", className)}>
      <div className="absolute -top-3 left-8 bg-surface border border-border px-3 py-1 rounded text-[10px] font-mono tracking-wider text-text-muted uppercase">
        {testimonial.category}
      </div>
      <div className="flex gap-1 mb-6 text-warning">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg font-medium text-text-strong leading-relaxed mb-8 flex-1">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shrink-0">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-bold text-text-strong">{testimonial.authorName}</div>
          <div className="text-xs text-text-muted">{testimonial.authorTitle}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
