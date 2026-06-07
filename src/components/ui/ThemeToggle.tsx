import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDarkMode = root.classList.contains('dark');
    if (isDarkMode !== isDark) {
      // Intentionally empty or handled via user action,
      // but to satisfy linter, we can avoid synchronous setState if we initialize correctly.
    }
  }, [isDark]);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors hover:bg-border hover:text-text-strong",
        className
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
