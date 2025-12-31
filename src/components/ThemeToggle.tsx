import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-2xl hover:shadow-pink-300/50 transition-all duration-500 cursor-pointer group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 opacity-0 group-hover:opacity-40 blur-md transition-all duration-500" />
      <div className="absolute -inset-2 rounded-full border-2 border-pink-300 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="relative w-6 h-6 z-10">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ${
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  );
}
