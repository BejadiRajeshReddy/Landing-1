import { cn } from '../../utils/cn';

interface HeroHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function HeroHeadline({ children, className, ...props }: HeroHeadlineProps) {
  return (
    <h1
      className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-[1.1]",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
