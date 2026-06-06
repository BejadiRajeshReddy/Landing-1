import { cn } from '../../utils/cn';

interface HeaderNavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function HeaderNavLink({ href, children, className }: HeaderNavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-sm font-medium text-text-muted transition-colors hover:text-text-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-sm",
        className
      )}
    >
      {children}
    </a>
  );
}
