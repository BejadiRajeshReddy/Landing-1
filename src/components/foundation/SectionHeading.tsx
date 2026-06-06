import { cn } from '../../utils/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold text-text-strong tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
