import { useState } from 'react';
import { cn } from '../../../utils/cn';
import type { FAQItemData } from '../../../data/mockData';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  faq: FAQItemData;
  className?: string;
}

export function FAQItem({ faq, className }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("border border-border rounded-xl bg-surface overflow-hidden transition-all", className)}>
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left focus-visible:outline-none focus-visible:bg-surface/80"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-text-strong pr-4">{faq.question}</span>
        <ChevronDown className={cn("h-5 w-5 text-text-muted transition-transform duration-200 shrink-0", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "px-6 text-sm text-text-body overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-2 border-t border-border/50">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
