import { cn } from '../../utils/cn';
import { ArrowRight } from 'lucide-react';

interface StickyAnnouncementBarProps {
  className?: string;
}

export function StickyAnnouncementBar({ className }: StickyAnnouncementBarProps) {
  return (
    <div className={cn("bg-primary px-4 py-2 text-center text-xs font-medium text-primary-text", className)}>
      <span className="inline-flex items-center gap-2">
        <span className="rounded-full bg-accent-blue/20 px-2 py-0.5 text-[10px] text-accent-blue">NEW</span>
        Now ingesting latest Q4 FY25 concalls natively.
        <a href="#demo" className="inline-flex items-center underline hover:text-accent-blue transition-colors">
          Read the release notes <ArrowRight className="ml-1 h-3 w-3" />
        </a>
      </span>
    </div>
  );
}
