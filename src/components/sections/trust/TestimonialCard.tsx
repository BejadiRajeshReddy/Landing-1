import { cn } from '../../../utils/cn';
import type { Testimonial } from '../../../data/mockData';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col p-8 rounded-xl border border-border bg-canvas shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative", className)}>
      <div className="absolute -top-3 left-8 bg-surface border border-border px-3 py-1 rounded text-[10px] font-mono tracking-wider text-text-muted uppercase">
        {testimonial.category}
      </div>
      <div className="flex gap-1 mb-6 text-warning">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="text-[17px] font-medium text-text-strong leading-[1.6] mb-8 flex-1 tracking-tight">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
        <div className="h-10 w-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-text-strong shrink-0 shadow-sm">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <div className="text-[14px] font-bold text-text-strong">{testimonial.authorName}</div>
          <div className="text-[13px] text-text-muted mt-0.5">{testimonial.authorTitle}, {testimonial.company}</div>
        </div>
      </div>
    </div>
  );
}
