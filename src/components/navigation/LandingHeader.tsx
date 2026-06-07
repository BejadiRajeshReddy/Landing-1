import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { BarChart2, Menu, X } from 'lucide-react';
import { HeaderCTAGroup } from '../ui/HeaderCTAGroup';
import { navigationLinks } from '../../data/mockData';
import { HeaderNavLink } from './HeaderNavLink';
import { MobileMenuDrawer } from './MobileMenuDrawer';
import { ThemeToggle } from '../ui/ThemeToggle';

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200 border-b",
        isScrolled
          ? "bg-canvas/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-canvas border-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-canvas">
              <BarChart2 className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-primary">InvestIQ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <HeaderNavLink key={link.id} href={link.href}>
                {link.label}
              </HeaderNavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <HeaderCTAGroup />
          </div>

          <button
            className="md:hidden text-text-strong"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navigationLinks}
      />
    </header>
  );
}
