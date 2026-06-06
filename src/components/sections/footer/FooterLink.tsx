import { cn } from '../../../utils/cn';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <a
      href={href}
      className={cn("text-sm text-text-muted hover:text-accent-blue transition-colors", className)}
    >
      {children}
    </a>
  );
}
