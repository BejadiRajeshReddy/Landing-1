import { cn } from '../../utils/cn';

interface HeroSubheadlineProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function HeroSubheadline({ children, className, ...props }: HeroSubheadlineProps) {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-text-body max-w-2xl leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
