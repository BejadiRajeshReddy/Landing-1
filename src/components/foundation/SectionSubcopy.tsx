import { cn } from '../../utils/cn';

interface SectionSubcopyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionSubcopy({ children, className, ...props }: SectionSubcopyProps) {
  return (
    <p
      className={cn(
        "text-base md:text-lg text-text-body leading-relaxed max-w-2xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
