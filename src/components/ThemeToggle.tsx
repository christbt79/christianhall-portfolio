import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="glass relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[color:var(--text)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:border-white/20 active:scale-95"
      style={{ visibility: mounted ? 'visible' : 'hidden' }}
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
        aria-hidden
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
        aria-hidden
      />
    </button>
  );
}
