import { cn } from '../../utils/cn';
import { HeaderCTAGroup } from '../ui/HeaderCTAGroup';

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MobileNavItem({ href, children, onClick, className }: MobileNavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "block py-3 text-lg font-medium text-text-strong border-b border-border/50 transition-colors hover:text-accent-blue",
        className
      )}
    >
      {children}
    </a>
  );
}

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  links: { id: string; label: string; href: string }[];
}

export function MobileMenuDrawer({ isOpen, onClose, links }: MobileMenuDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-canvas border-b border-border shadow-2xl p-6 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300">
      {links.map((link) => (
        <MobileNavItem
          key={link.id}
          href={link.href}
          onClick={onClose}
        >
          {link.label}
        </MobileNavItem>
      ))}
      <div className="mt-6">
        <HeaderCTAGroup className="flex flex-col w-full [&>button]:w-full" />
      </div>
    </div>
  );
}
